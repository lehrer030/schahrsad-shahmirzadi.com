import os
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

DIST_DIR = os.path.join(os.path.dirname(__file__), 'dist')
INDEX_HTML = os.path.join(DIST_DIR, 'index.html')
ASSETS_DIR = os.path.join(DIST_DIR, 'assets')

def upload_to_server(srv):
    print(f"\n--- Uploading to {srv['name']} ({srv['user']}@{srv['host']}) ---")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(srv['host'], port=22, username=srv['user'], password=srv['pass'], timeout=20)
    sftp = ssh.open_sftp()

    # Ensure remote assets dir exists
    try:
        sftp.mkdir('wordpress/assets')
    except Exception:
        pass

    # Upload index.html
    print("Uploading index.html...")
    sftp.put(INDEX_HTML, 'wordpress/index.html')

    # Upload all assets
    for filename in os.listdir(ASSETS_DIR):
        local_file = os.path.join(ASSETS_DIR, filename)
        if os.path.isfile(local_file):
            remote_file = f"wordpress/assets/{filename}"
            print(f"Uploading assets/{filename}...")
            sftp.put(local_file, remote_file)

    sftp.close()
    ssh.close()
    print(f"Successfully deployed to {srv['name']}!")

def main():
    if not os.path.exists(INDEX_HTML):
        raise FileNotFoundError("dist/index.html not found! Run npm run build first.")
    for srv in SERVERS:
        upload_to_server(srv)
    print("\nAll deployments complete!")

if __name__ == '__main__':
    main()
