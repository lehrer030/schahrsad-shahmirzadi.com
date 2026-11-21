import os
import subprocess
import paramiko

SERVERS = [
    {
        'name': 'schirzan.com',
        'host': 'access-5018981887.webspace-host.com',
        'user': 'a811557',
        'pass': 'SchirZan|Schahrsad1985!'
    },
    {
        'name': 'schahrsad-shahmirzadi.com',
        'host': 'access-5018008304.webspace-host.com',
        'user': 'a1457351',
        'pass': 'SchirZan|Schahrsad1985!'
    }
]

def ensure_remote_dir(sftp, remote_path):
    parts = remote_path.strip('/').split('/')
    cur = ''
    for p in parts:
        cur += '/' + p if cur else p
        try:
            sftp.mkdir(cur)
        except Exception:
            pass

def main():
    # Get all git modified image files
    res = subprocess.run(["git", "diff", "--name-only", "public/images"], capture_output=True, text=True, check=True)
    all_files = [line.strip() for line in res.stdout.strip().splitlines() if line.strip()]
    
    # We already synced series_solitaire, wetransfer, running, badges_custom, docx_badges, email_badges
    already_synced_prefixes = tuple(f"public/images/{d}" for d in ['series_solitaire', 'wetransfer', 'running', 'badges_custom', 'docx_badges', 'email_badges'])
    remaining_files = [f for f in all_files if not f.startswith(already_synced_prefixes)]
    
    print(f"Remaining files to sync to both servers: {len(remaining_files)}")
    
    for srv in SERVERS:
        print(f"Syncing {len(remaining_files)} remaining images to {srv['name']}...")
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(srv['host'], port=22, username=srv['user'], password=srv['pass'], timeout=20)
        sftp = ssh.open_sftp()
        
        count = 0
        for rel_path in remaining_files:
            l_file = rel_path.replace('/', os.sep)
            if not os.path.exists(l_file):
                continue
            # Remote path relative to public/images
            sub_path = os.path.relpath(l_file, "public/images").replace('\\', '/')
            remote_file = 'wordpress/images/' + sub_path
            remote_dir = os.path.dirname(remote_file)
            ensure_remote_dir(sftp, remote_dir)
            sftp.put(l_file, remote_file)
            count += 1
        
        print(f"Successfully uploaded {count} remaining images to {srv['name']}!")
        sftp.close()
        ssh.close()
        
    print("All remaining images synced successfully!")

if __name__ == '__main__':
    main()
