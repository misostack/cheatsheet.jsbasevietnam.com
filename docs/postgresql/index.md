# PostgreSQL Cheatsheet

## Docker

## Administration

### Manage users

## Backup and restore postgresql database

```sh
ssh dbadmin@ip-address
sudo -i -u postgres
# dump database
pg_dump -d dbname > $HOME/db-backup-filename.sql
# compress sql file
tar -czvf db-backup-filename.tar.gz db-backup-filename.sql
# exit postgres user
exit
sudo cp /var/lib/postgresql/db-backup-filename.tar.gz $HOME
# exit from server
exit
# ssh ftp to download backup file to local
sftp dbadmin@ip-address:/home/dbadmin/db-backup-filename.tar.gz $HOME
cd $HOME
# extract
tar -xvf db-backup-filename.tar.gz -C

```

**Usually, when we export database from production, the db owner is another user. We have several common ways to by pass this**

1. The 1st way : Create new local user which is same as db owner
2. The 2nd way : change the db owner in sql script

Here is 2 steps
