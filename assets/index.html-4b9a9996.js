import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="postgresql-cheatsheet" tabindex="-1"><a class="header-anchor" href="#postgresql-cheatsheet" aria-hidden="true">#</a> PostgreSQL Cheatsheet</h1><h2 id="i-docker" tabindex="-1"><a class="header-anchor" href="#i-docker" aria-hidden="true">#</a> I. Docker</h2><h3 id="_1-1-configuration" tabindex="-1"><a class="header-anchor" href="#_1-1-configuration" aria-hidden="true">#</a> 1.1. Configuration</h3><blockquote><p>docker-compose.yml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># redis:</span>
  <span class="token comment">#   image: redis</span>
  <span class="token key atrule">postgres</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> postgres_container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>14.8<span class="token punctuation">-</span>alpine
    <span class="token key atrule">shm_size</span><span class="token punctuation">:</span> 1g
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5432:5432&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> pybase_dev
      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> YOUR_PASSWORD
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./.docker/postgres_init.sql<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d/postgres_init.sql
      <span class="token punctuation">-</span> ./backups<span class="token punctuation">:</span>/home/backups
      <span class="token punctuation">-</span> ./restores<span class="token punctuation">:</span>/home/restores
      <span class="token punctuation">-</span> pybase_dev_data<span class="token punctuation">:</span>/var/lib/postgresql/data
  <span class="token key atrule">pgadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> pgadmin_container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dpage/pgadmin4<span class="token punctuation">:</span><span class="token number">8.0</span>
    <span class="token key atrule">shm_size</span><span class="token punctuation">:</span> 1g
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> postgres
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5050:80&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">PGADMIN_DEFAULT_EMAIL</span><span class="token punctuation">:</span> techlead@sonnm.com
      <span class="token key atrule">PGADMIN_DEFAULT_PASSWORD</span><span class="token punctuation">:</span> YOUR_PASSWORD
      <span class="token key atrule">PGADMIN_CONFIG_SERVER_MODE</span><span class="token punctuation">:</span> <span class="token string">&quot;False&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pgadmin_data<span class="token punctuation">:</span>/var/lib/pgadmin
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">pybase_dev_data</span><span class="token punctuation">:</span>
  <span class="token key atrule">pgadmin_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>.docker/postgres_init.sql</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DO</span>
$<span class="token keyword">do</span>$
<span class="token keyword">DECLARE</span> user_admin CONSTANT <span class="token keyword">varchar</span> :<span class="token operator">=</span> <span class="token string">&#39;pybase_dev&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">DECLARE</span> user_admin_pw CONSTANT <span class="token keyword">varchar</span> :<span class="token operator">=</span> <span class="token string">&#39;YOUR_PASSWORD&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">BEGIN</span>

      <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
          <span class="token keyword">SELECT</span> <span class="token keyword">FROM</span> pg_catalog<span class="token punctuation">.</span>pg_user p
          <span class="token keyword">WHERE</span> usename <span class="token operator">=</span> user_admin<span class="token punctuation">)</span> <span class="token keyword">THEN</span>
           <span class="token keyword">EXECUTE</span> <span class="token string">&#39;CREATE USER &#39;</span><span class="token operator">||</span> user_admin <span class="token operator">||</span><span class="token string">&#39; WITH SUPERUSER PASSWORD &#39;</span><span class="token operator">||</span> quote_literal<span class="token punctuation">(</span>user_admin_pw<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> $<span class="token keyword">do</span>$<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> pybase_dev<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token keyword">DATABASE</span> pybase_dev <span class="token keyword">TO</span> pybase_dev<span class="token punctuation">;</span>

\\<span class="token keyword">connect</span> pybase_dev
<span class="token keyword">CREATE</span> <span class="token keyword">SCHEMA</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> dbo <span class="token keyword">AUTHORIZATION</span>  pybase_dev<span class="token punctuation">;</span>
\\q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-up-and-down" tabindex="-1"><a class="header-anchor" href="#_1-2-up-and-down" aria-hidden="true">#</a> 1.2. Up and down</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Up and down</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.dev.yml up <span class="token parameter variable">-d</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.dev.yml down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-backup" tabindex="-1"><a class="header-anchor" href="#_1-3-backup" aria-hidden="true">#</a> 1.3. Backup</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> postgres_container <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;pg_dump -v --clean --username=pybase_dev --dbname=pybase_dev &gt; /home/backups/pybase_dev_14052023.sql&#39;</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> postgres_container <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;pg_dump --format=tar --clean --username=pybase_dev --dbname=pybase_dev &gt; /home/backups/pybase_dev_14052023.tar&#39;</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> postgres_container <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;pg_dump -vc --username=pybase_dev --dbname=pybase_dev | gzip &gt; /home/backups/pybase_dev_14052023.sql.gz&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-restore" tabindex="-1"><a class="header-anchor" href="#_1-4-restore" aria-hidden="true">#</a> 1.4. Restore</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># restore with dump format</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> postgres_container <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;pg_restore -vc --username=pybase_dev --dbname=pybase_dev &lt; /home/backups/pybase_dev_14052023.tar&#39;</span>
<span class="token comment"># restore with sql format</span>
<span class="token comment"># postgres://pybase_dev:pybase1337@127.0.0.1:5432/pybase_dev</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> postgres_container <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;psql -vcC postgres://pybase_dev:pybase1337@127.0.0.1:5432/pybase_dev &lt; /home/backups/pybase_dev_14052023.sql -v ON_ERROR_STOP=1&#39;</span>
<span class="token comment"># restore with gzip format</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> postgres_container <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;zcat /home/backups/pybase_dev_14052023.sql.gz | psql -vc --username=pybase_dev --dbname=pybase_dev -v ON_ERROR_STOP=1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-download-and-upload" tabindex="-1"><a class="header-anchor" href="#_1-5-download-and-upload" aria-hidden="true">#</a> 1.5. Download and Upload</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sftp</span> <span class="token parameter variable">-r</span> username@hostname:/home/backups/* /backups/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sftp</span> <span class="token parameter variable">-r</span> /backups/* username@hostname:/home/backups/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="administration" tabindex="-1"><a class="header-anchor" href="#administration" aria-hidden="true">#</a> Administration</h2><h3 id="manage-users" tabindex="-1"><a class="header-anchor" href="#manage-users" aria-hidden="true">#</a> Manage users</h3><h2 id="backup-and-restore-postgresql-database" tabindex="-1"><a class="header-anchor" href="#backup-and-restore-postgresql-database" aria-hidden="true">#</a> Backup and restore postgresql database</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> dbadmin@ip-address
<span class="token function">sudo</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-u</span> postgres
<span class="token comment"># dump database</span>
pg_dump <span class="token parameter variable">-d</span> dbname <span class="token operator">&gt;</span> <span class="token environment constant">$HOME</span>/db-backup-filename.sql
<span class="token comment"># compress sql file</span>
<span class="token function">tar</span> <span class="token parameter variable">-czvf</span> db-backup-filename.tar.gz db-backup-filename.sql
<span class="token comment"># exit postgres user</span>
<span class="token builtin class-name">exit</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /var/lib/postgresql/db-backup-filename.tar.gz <span class="token environment constant">$HOME</span>
<span class="token comment"># exit from server</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># ssh ftp to download backup file to local</span>
<span class="token function">sftp</span> dbadmin@ip-address:/home/dbadmin/db-backup-filename.tar.gz <span class="token environment constant">$HOME</span>
<span class="token builtin class-name">cd</span> <span class="token environment constant">$HOME</span>
<span class="token comment"># extract</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> db-backup-filename.tar.gz <span class="token parameter variable">-C</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Usually, when we export database from production, the db owner is another user. We have several common ways to by pass this</strong></p><ol><li>The 1st way : Create new local user which is same as db owner</li><li>The 2nd way : change the db owner in sql script</li></ol><p>Here is 2 steps</p><h2 id="design-database" tabindex="-1"><a class="header-anchor" href="#design-database" aria-hidden="true">#</a> Design Database</h2><h3 id="naming-rules" tabindex="-1"><a class="header-anchor" href="#naming-rules" aria-hidden="true">#</a> Naming rules</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Primary Key <span class="token operator">-</span> <span class="token function">PK_TableName_ColumnName</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
ForeignKey <span class="token operator">-</span> FK_TableName_ColumnName_ReferenceTable_ReferenceColumn
Unique <span class="token operator">-</span> UNQ_TableName_ColumnName
Check <span class="token operator">-</span> CHK_Table_Name_Condition
Clustered Index <span class="token operator">-</span> IDX_Clust_TableName_Columns
NonClustered Index <span class="token operator">-</span> IDX_NC_TableName_Columns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),i=[p];function l(o,c){return n(),a("div",null,i)}const d=s(t,[["render",l],["__file","index.html.vue"]]);export{d as default};
