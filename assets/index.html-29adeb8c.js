import{_ as c,M as o,p as i,q as l,R as n,t as s,N as a,V as u,a1 as p}from"./framework-96b046e1.js";const r={},k=p('<h1 id="loopback-4" tabindex="-1"><a class="header-anchor" href="#loopback-4" aria-hidden="true">#</a> Loopback 4</h1><ul><li>[x] Database Connectors</li><li>[x] Model</li><li>[x] Relations</li><li>[x] Filter</li><li>[x] Indexes</li><li>[x] Tests</li><li>[x] Authorization</li></ul><h2 id="database-connectors" tabindex="-1"><a class="header-anchor" href="#database-connectors" aria-hidden="true">#</a> Database Connectors</h2>',3),d={href:"https://loopback.io/doc/en/lb4/Database-connectors.html",target:"_blank",rel:"noopener noreferrer"},v=p(`<h3 id="postgresql-connector" tabindex="-1"><a class="header-anchor" href="#postgresql-connector" aria-hidden="true">#</a> PostgreSQL Connector</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> loopback-connector-postgresql <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Create datasource</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lb4 datasource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ./src/datasources/english.datasource.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject<span class="token punctuation">,</span> lifeCycleObserver<span class="token punctuation">,</span> LifeCycleObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> juggler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;english&quot;</span><span class="token punctuation">,</span>
  connector<span class="token operator">:</span> <span class="token string">&quot;postgresql&quot;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&quot;postgres://postgres_dev:123456@localhost:5432/english_api&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Observe application&#39;s life cycle to disconnect the datasource when</span>
<span class="token comment">// application is stopped. This allows the application to be shut down</span>
<span class="token comment">// gracefully. The \`stop()\` method is inherited from \`juggler.DataSource\`.</span>
<span class="token comment">// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">lifeCycleObserver</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasource&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EnglishDataSource</span>
  <span class="token keyword">extends</span> <span class="token class-name">juggler</span><span class="token punctuation">.</span>DataSource
  <span class="token keyword">implements</span> <span class="token class-name">LifeCycleObserver</span>
<span class="token punctuation">{</span>
  <span class="token keyword">static</span> dataSourceName <span class="token operator">=</span> <span class="token string">&quot;english&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">readonly</span> defaultConfig <span class="token operator">=</span> config<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasources.config.english&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> optional<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    dsConfig<span class="token operator">:</span> object <span class="token operator">=</span> config
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>dsConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debug-database-query" tabindex="-1"><a class="header-anchor" href="#debug-database-query" aria-hidden="true">#</a> Debug Database Query</h3><p><strong>Linux</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>loopback:connector* <span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Window</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>loopback:connector* <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h2>`,11),m={href:"https://loopback.io/doc/en/lb4/Model.html",target:"_blank",rel:"noopener noreferrer"},b=p(`<h3 id="definition" tabindex="-1"><a class="header-anchor" href="#definition" aria-hidden="true">#</a> Definition</h3><blockquote><p>A <strong>Model</strong> describes business domain objects, for example: Task, TaskStatus and Project. It usually defines a list of properties with name, type, and other constraints(format, min, max, ...).</p></blockquote><blockquote><p>Model can be used for data exchanged between client-server or different systems.</p></blockquote><blockquote><p>Model definitions can be mapped to many forms: relational database schemas, JSON schemas, OpenAPI Schemas, gRPC message definitions,...</p></blockquote><blockquote><p>A JSON Object conforming to the Task model definition can be passed in REST/HTTP payload to create a new Task or stored in a document database such as Mongo</p></blockquote><p>There are 2 subtly different types of models for domain objects:</p><ul><li>Entity : A domain object that has an identity (ID). Its equality is based on the identity.</li><li>Model: A domain object that does not have an identity (ID). Its equality is based on the structural value</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Task</span> <span class="token keyword">extends</span> <span class="token class-name">Entity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    id<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    defaultFn<span class="token operator">:</span> <span class="token string">&quot;uuid&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SocialLink</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  linkType<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-how-to-create-auto-increment-for-id-property" tabindex="-1"><a class="header-anchor" href="#id-how-to-create-auto-increment-for-id-property" aria-hidden="true">#</a> ID - How to create auto increment for ID property?</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;Number&#39;</span><span class="token punctuation">,</span>
  required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  generated<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// enables auto-generation</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-use-uuid" tabindex="-1"><a class="header-anchor" href="#how-to-use-uuid" aria-hidden="true">#</a> How to use UUID?</h3><blockquote><p>use uuid that is generated by your LB application by setting defaultFn: uuid</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
    defaultFn<span class="token operator">:</span> <span class="token string">&#39;uuid&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// generated: true,  -&gt; not needed</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>use PostgreSQL built-in (extension and) uuid functions</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
  required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// settings below are needed</span>
  generated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  useDefaultIdType<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
    dataType<span class="token operator">:</span> <span class="token string">&#39;uuid&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The setting uses uuid-ossp extension and uuid_generate_v4() function as default.</p><blockquote><p>If you’d like to use other extensions and functions, you can do:</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
  required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// settings below are needed</span>
  generated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  useDefaultIdType<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
    dataType<span class="token operator">:</span> <span class="token string">&#39;uuid&#39;</span><span class="token punctuation">,</span>
    extension<span class="token operator">:</span> <span class="token string">&#39;myExtension&#39;</span><span class="token punctuation">,</span>
    defaultFn<span class="token operator">:</span> <span class="token string">&#39;myuuid&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="common-data-types-mapping" tabindex="-1"><a class="header-anchor" href="#common-data-types-mapping" aria-hidden="true">#</a> Common data types mapping</h3>`,19),y={href:"https://loopback.io/doc/en/lb4/PostgreSQL-connector.html",target:"_blank",rel:"noopener noreferrer"},g=p(`<p><img src="https://user-images.githubusercontent.com/31009750/216272587-1ebd5218-96cd-4af0-8831-96d3e6eb93ee.png" alt="image"></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  settings<span class="token operator">:</span> <span class="token punctuation">{</span>
    idInjection<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span> schema<span class="token operator">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span> table<span class="token operator">:</span> <span class="token string">&quot;sample&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Sample</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;short_string_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;character varying&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      dataPrecision<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataScale<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  shortStringProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;long_string_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;character varying&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      dataPrecision<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataScale<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  longStringProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;text_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  textProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;char_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;character&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      dataPrecision<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataScale<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  charProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;bool_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  boolProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;buffer_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;bytea&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  bufferProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
    scale<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;int_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataPrecision<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataScale<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  intProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
    scale<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;bigint_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataPrecision<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataScale<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  bigintProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
    precision<span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;double_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;float&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      dataPrecision<span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
      dataScale<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  doubleProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;date_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  dateProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;timestamptz_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;timestamp with time zone&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  timestamptzProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;time_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  timeProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;point_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;point&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  pointProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;json_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  jsonProp<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
    itemType<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>

    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      columnName<span class="token operator">:</span> <span class="token string">&quot;array_string_prop&quot;</span><span class="token punctuation">,</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;varchar[]&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  arrayStringProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// Define well-known properties here</span>

  <span class="token comment">// Indexer property to allow additional data</span>
  <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Sample<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  lat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  lng<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SampleRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SampleWithRelations</span> <span class="token operator">=</span> Sample <span class="token operator">&amp;</span> SampleRelations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Data validation</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IsISO8601<span class="token punctuation">,</span> IsNotEmpty<span class="token punctuation">,</span> Max<span class="token punctuation">,</span> MaxLength<span class="token punctuation">,</span> Min <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;class-validator&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IsValidTime <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./validator&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CreateSampleDto</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">MaxLength</span></span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
  shortStringProp<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">MaxLength</span></span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span>
  longStringProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  textProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  charProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  boolProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  bufferProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Min</span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Max</span></span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span>
  intProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Min</span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Max</span></span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span>
  bigintProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Max</span></span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span>
  doubleProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsISO8601</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dateProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsISO8601</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  timestamptzProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsValidTime</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  timeProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  pointProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  jsonProp<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
    itemType<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  arrayStringProp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="auto-updated-model-properties-createdat-and-updatedat" tabindex="-1"><a class="header-anchor" href="#auto-updated-model-properties-createdat-and-updatedat" aria-hidden="true">#</a> Auto updated model properties createdAt and updatedAt</h3><ul><li>https://github.com/loopbackio/loopback-next/issues/1857</li></ul><blockquote><p>BaseEntity</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ./src/models/base.entity.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseEntity</span> <span class="token keyword">extends</span> <span class="token class-name">Entity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    id<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    defaultFn<span class="token operator">:</span> <span class="token string">&quot;uuid&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;created_at&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  createdAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;updated_at&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  updatedAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>BaseEntity<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ./src/models/todo.model.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  isComplete<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Todo<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TodoRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">TodoWithRelations</span> <span class="token operator">=</span> Todo <span class="token operator">&amp;</span> TodoRelations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>TimestampRepositoryMixin</p></blockquote>`,9),h={href:"https://loopback.io/doc/en/lb4/Mixin.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.typescriptlang.org/docs/handbook/mixins.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://javascript.info/mixins",target:"_blank",rel:"noopener noreferrer"},w=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ./src/mixins/time-stamp.mixin.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Count<span class="token punctuation">,</span>
  DataObject<span class="token punctuation">,</span>
  Entity<span class="token punctuation">,</span>
  EntityCrudRepository<span class="token punctuation">,</span>
  Options<span class="token punctuation">,</span>
  Where<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">TimeStampRepositoryMixin</span><span class="token generic class-name"><span class="token operator">&lt;</span>
  <span class="token constant">E</span> <span class="token keyword">extends</span> Entity <span class="token operator">&amp;</span> <span class="token punctuation">{</span> createdAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span> updatedAt<span class="token operator">?</span><span class="token operator">:</span> Date <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">ID</span><span class="token punctuation">,</span>
  <span class="token constant">R</span> <span class="token keyword">extends</span> Constructor<span class="token operator">&lt;</span>EntityCrudRepository<span class="token operator">&lt;</span><span class="token constant">E</span><span class="token punctuation">,</span> <span class="token constant">ID</span><span class="token operator">&gt;&gt;</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>repository<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">MixedRepository</span> <span class="token keyword">extends</span> <span class="token class-name">repository</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span>entity<span class="token operator">:</span> DataObject<span class="token operator">&lt;</span><span class="token constant">E</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> Options<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">E</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      entity<span class="token punctuation">.</span>createdAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      entity<span class="token punctuation">.</span>updatedAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>entity<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">async</span> <span class="token function">updateAll</span><span class="token punctuation">(</span>
      data<span class="token operator">:</span> DataObject<span class="token operator">&lt;</span><span class="token constant">E</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
      where<span class="token operator">?</span><span class="token operator">:</span> Where<span class="token operator">&lt;</span><span class="token constant">E</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
      options<span class="token operator">?</span><span class="token operator">:</span> Options
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Count<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>updatedAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateAll</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> where<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">async</span> <span class="token function">replaceById</span><span class="token punctuation">(</span>
      id<span class="token operator">:</span> <span class="token constant">ID</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> DataObject<span class="token operator">&lt;</span><span class="token constant">E</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
      options<span class="token operator">?</span><span class="token operator">:</span> Options
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>updatedAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">replaceById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">async</span> <span class="token function">updateById</span><span class="token punctuation">(</span>
      id<span class="token operator">:</span> <span class="token constant">ID</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> DataObject<span class="token operator">&lt;</span><span class="token constant">E</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
      options<span class="token operator">?</span><span class="token operator">:</span> Options
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>updatedAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> MixedRepository<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ./src/repositories/todo.repository.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> TimeStampRepositoryMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/mixins/time-stamp.mixin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DefaultCrudRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Todo<span class="token punctuation">,</span> TodoRelations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TodoRepository</span> <span class="token keyword">extends</span> <span class="token class-name">TimeStampRepositoryMixin<span class="token operator">&lt;</span>
  Todo<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> Todo<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  Constructor<span class="token operator">&lt;</span>
    DefaultCrudRepository<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token keyword">typeof</span> Todo<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span> TodoRelations<span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>DefaultCrudRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasources.english&quot;</span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>Todo<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="migrate-data-to-create-update-schema" tabindex="-1"><a class="header-anchor" href="#migrate-data-to-create-update-schema" aria-hidden="true">#</a> Migrate data to create/update schema</h3><p><img src="https://user-images.githubusercontent.com/31009750/216074402-895555e4-c0f7-475b-b00a-abe89cc66008.png" alt="image"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;migrate:setup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;npm run rebuild\\&quot; &amp;&amp; node ./dist/migrate --rebuild&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;migrate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;npm run rebuild\\&quot; &amp;&amp; node ./dist/migrate node ./dist/migrate&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ./migrate.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./application&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Task<span class="token punctuation">,</span> Todo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Sample <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./models/sample.model&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">migrate</span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> existingSchema <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;--rebuild&quot;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;drop&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;alter&quot;</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Migrating schemas (%s existing schema)&quot;</span><span class="token punctuation">,</span> existingSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EnglishApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">migrateSchema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    existingSchema<span class="token punctuation">,</span>
    <span class="token comment">// The order of table creation is important.</span>
    <span class="token comment">// A referenced table must exist before creating a</span>
    <span class="token comment">// foreign key constraint.</span>
    <span class="token comment">// For PostgreSQL connector, it does not create tables in the</span>
    <span class="token comment">// right order.  Therefore, this change is needed.</span>
    models<span class="token operator">:</span> <span class="token punctuation">[</span>Todo<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Task<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Sample<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Connectors usually keep a pool of opened connections,</span>
  <span class="token comment">// this keeps the process running even after all work is done.</span>
  <span class="token comment">// We need to exit explicitly.</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">migrate</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot migrate database schema&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="relations" tabindex="-1"><a class="header-anchor" href="#relations" aria-hidden="true">#</a> Relations</h2>`,6),R={href:"https://loopback.io/doc/en/lb4/Relations.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/loopbackio/loopback-next/issues/2341",target:"_blank",rel:"noopener noreferrer"},A=p(`<h3 id="one-to-one-relationship" tabindex="-1"><a class="header-anchor" href="#one-to-one-relationship" aria-hidden="true">#</a> One To One Relationship</h3><p><img src="https://user-images.githubusercontent.com/31009750/216505076-cd331072-94ad-4606-8136-620c9e95e3d1.png" alt="image"></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// employee.model.ts</span>
<span class="token comment">/* eslint-disable @typescript-eslint/naming-convention */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hasOne <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository/dist/relations&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vehicle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./vehicle.model&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  settings<span class="token operator">:</span> <span class="token punctuation">{</span>
    scope<span class="token operator">:</span> <span class="token punctuation">{</span>
      limit<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    indexes<span class="token operator">:</span> <span class="token punctuation">{</span>
      name_idx<span class="token operator">:</span> <span class="token punctuation">{</span>
        keys<span class="token operator">:</span> <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span>
          unique<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  position<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">hasOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Vehicle<span class="token punctuation">,</span> <span class="token punctuation">{</span> keyTo<span class="token operator">:</span> <span class="token string">&quot;employee_id&quot;</span><span class="token punctuation">,</span> keyFrom<span class="token operator">:</span> <span class="token string">&quot;id&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  vehicle<span class="token operator">:</span> Vehicle<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Employee<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">EmployeeRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">EmployeeWithRelations</span> <span class="token operator">=</span> Employee <span class="token operator">&amp;</span> EmployeeRelations<span class="token punctuation">;</span>

<span class="token comment">// vehicle.model.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Employee <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./employee.model&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/* eslint-disable @typescript-eslint/naming-convention */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> belongsTo<span class="token punctuation">,</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> VehicleType <span class="token punctuation">{</span>
  <span class="token constant">BIKE</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">MOTOR_BIKE</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token constant">CAR</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  settings<span class="token operator">:</span> <span class="token punctuation">{</span>
    foreignKeys<span class="token operator">:</span> <span class="token punctuation">{</span>
      fk_vehicle_employeeId<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;fk_vehicle_employeeId&quot;</span><span class="token punctuation">,</span>
        entity<span class="token operator">:</span> <span class="token string">&quot;Employee&quot;</span><span class="token punctuation">,</span>
        entityKey<span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
        foreignKey<span class="token operator">:</span> <span class="token string">&quot;employee_id&quot;</span><span class="token punctuation">,</span>
        onDelete<span class="token operator">:</span> <span class="token string">&quot;CASCADE&quot;</span><span class="token punctuation">,</span>
        onUpdate<span class="token operator">:</span> <span class="token string">&quot;RESTRICT&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Vehicle</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;vehicle_type&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  vehicleType<span class="token operator">?</span><span class="token operator">:</span> VehicleType<span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">belongsTo</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Employee<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  employee_id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Vehicle<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">VehicleRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">VehicleWithRelations</span> <span class="token operator">=</span> Vehicle <span class="token operator">&amp;</span> VehicleRelations<span class="token punctuation">;</span>

<span class="token comment">// employee.repository.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TimeStampRepositoryMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/mixins/time-stamp.mixin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor<span class="token punctuation">,</span> Getter<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DefaultCrudRepository<span class="token punctuation">,</span>
  HasOneRepositoryFactory<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Employee<span class="token punctuation">,</span> EmployeeRelations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vehicle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models/vehicle.model&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VehicleRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./vehicle.repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EmployeeRepository</span> <span class="token keyword">extends</span> <span class="token class-name">TimeStampRepositoryMixin<span class="token operator">&lt;</span>
  Employee<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  Constructor<span class="token operator">&lt;</span>
    DefaultCrudRepository<span class="token operator">&lt;</span>
      Employee<span class="token punctuation">,</span>
      <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      EmployeeRelations
    <span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>DefaultCrudRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> vehicle<span class="token operator">:</span> HasOneRepositoryFactory<span class="token operator">&lt;</span>
    Vehicle<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasources.english&quot;</span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;VehicleRepository&quot;</span><span class="token punctuation">)</span>
    getVehicleRepository<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>VehicleRepository<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>Employee<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vehicle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createHasOneRepositoryFactoryFor</span><span class="token punctuation">(</span>
      <span class="token string">&quot;vehicle&quot;</span><span class="token punctuation">,</span>
      getVehicleRepository
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// add this line to register inclusion resolver</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerInclusionResolver</span><span class="token punctuation">(</span><span class="token string">&quot;vehicle&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>inclusionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// employee.controller.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Count<span class="token punctuation">,</span>
  CountSchema<span class="token punctuation">,</span>
  Filter<span class="token punctuation">,</span>
  FilterExcludingWhere<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
  Where<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  del<span class="token punctuation">,</span>
  get<span class="token punctuation">,</span>
  getModelSchemaRef<span class="token punctuation">,</span>
  param<span class="token punctuation">,</span>
  patch<span class="token punctuation">,</span>
  post<span class="token punctuation">,</span>
  put<span class="token punctuation">,</span>
  requestBody<span class="token punctuation">,</span>
  response<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/rest&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Employee <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EmployeeRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../repositories&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vehicle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./../models/vehicle.model&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EmployeeController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">post</span></span><span class="token punctuation">(</span><span class="token string">&quot;/employees/{id}/vehicle&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Employee Vehicle POST success&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> employeeId<span class="token operator">:</span> <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      content<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Vehicle<span class="token punctuation">,</span> <span class="token punctuation">{</span> partial<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    vehicleData<span class="token operator">:</span> Vehicle
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Vehicle<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>employeeRepository<span class="token punctuation">.</span><span class="token function">vehicle</span><span class="token punctuation">(</span>employeeId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vehicleData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="one-to-many" tabindex="-1"><a class="header-anchor" href="#one-to-many" aria-hidden="true">#</a> One to Many</h3><p><img src="https://user-images.githubusercontent.com/31009750/216647177-1b9f5af0-4ab2-4867-99a0-98a7eafbcb90.png" alt="image"></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property<span class="token punctuation">,</span> hasMany <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Order <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./order.model&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;phone_number&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  phoneNumber<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;email_address&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  emailAddress<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">hasMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Order<span class="token punctuation">)</span>
  orders<span class="token operator">:</span> Order<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Customer<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CustomerRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">CustomerWithRelations</span> <span class="token operator">=</span> Customer <span class="token operator">&amp;</span> CustomerRelations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> belongsTo<span class="token punctuation">,</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Customer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./customer.model&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;delivery_date&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;timestamp with time zone&quot;</span><span class="token punctuation">,</span>
      nullable<span class="token operator">:</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  deliveryDate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">belongsTo</span></span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Customer<span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;customer_id&quot;</span><span class="token punctuation">,</span>
      postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
        dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
        dataLength<span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  customerId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Order<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">OrderRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">OrderWithRelations</span> <span class="token operator">=</span> Order <span class="token operator">&amp;</span> OrderRelations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="self-relationship" tabindex="-1"><a class="header-anchor" href="#self-relationship" aria-hidden="true">#</a> Self-Relationship</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* eslint-disable @typescript-eslint/naming-convention */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> belongsTo<span class="token punctuation">,</span> hasMany<span class="token punctuation">,</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hasOne <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository/dist/relations&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vehicle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./vehicle.model&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  settings<span class="token operator">:</span> <span class="token punctuation">{</span>
    scope<span class="token operator">:</span> <span class="token punctuation">{</span>
      limit<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    indexes<span class="token operator">:</span> <span class="token punctuation">{</span>
      name_idx<span class="token operator">:</span> <span class="token punctuation">{</span>
        keys<span class="token operator">:</span> <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span>
          unique<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  position<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">hasOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Vehicle<span class="token punctuation">,</span> <span class="token punctuation">{</span> keyTo<span class="token operator">:</span> <span class="token string">&quot;employeeId&quot;</span><span class="token punctuation">,</span> keyFrom<span class="token operator">:</span> <span class="token string">&quot;id&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  vehicle<span class="token operator">:</span> Vehicle<span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">hasMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Employee<span class="token punctuation">,</span> <span class="token punctuation">{</span> keyTo<span class="token operator">:</span> <span class="token string">&quot;managerId&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  employees<span class="token operator">:</span> Employee<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">belongsTo</span></span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Employee<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;manager&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;manager_id&quot;</span><span class="token punctuation">,</span>
      postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
        dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
        dataLength<span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  managerId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Employee<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">EmployeeRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">EmployeeWithRelations</span> <span class="token operator">=</span> Employee <span class="token operator">&amp;</span> EmployeeRelations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TimeStampRepositoryMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/mixins/time-stamp.mixin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor<span class="token punctuation">,</span> Getter<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  BelongsToAccessor<span class="token punctuation">,</span>
  DefaultCrudRepository<span class="token punctuation">,</span>
  HasManyRepositoryFactory<span class="token punctuation">,</span>
  HasOneRepositoryFactory<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Employee<span class="token punctuation">,</span> EmployeeRelations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vehicle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models/vehicle.model&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VehicleRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./vehicle.repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">EmployeeRepository</span> <span class="token keyword">extends</span> <span class="token class-name">TimeStampRepositoryMixin<span class="token operator">&lt;</span>
  Employee<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  Constructor<span class="token operator">&lt;</span>
    DefaultCrudRepository<span class="token operator">&lt;</span>
      Employee<span class="token punctuation">,</span>
      <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      EmployeeRelations
    <span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>DefaultCrudRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> vehicle<span class="token operator">:</span> HasOneRepositoryFactory<span class="token operator">&lt;</span>
    Vehicle<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">readonly</span> employees<span class="token operator">:</span> HasManyRepositoryFactory<span class="token operator">&lt;</span>
    Employee<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">readonly</span> manager<span class="token operator">:</span> BelongsToAccessor<span class="token operator">&lt;</span>
    Employee<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Employee<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasources.english&quot;</span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;VehicleRepository&quot;</span><span class="token punctuation">)</span>
    getVehicleRepository<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>VehicleRepository<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;EmployeeRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> employeeRepositoryGetter<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>EmployeeRepository<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>Employee<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>manager <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createBelongsToAccessorFor</span><span class="token punctuation">(</span>
      <span class="token string">&quot;manager&quot;</span><span class="token punctuation">,</span>
      employeeRepositoryGetter
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>employees <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createHasManyRepositoryFactoryFor</span><span class="token punctuation">(</span>
      <span class="token string">&quot;employees&quot;</span><span class="token punctuation">,</span>
      employeeRepositoryGetter
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vehicle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createHasOneRepositoryFactoryFor</span><span class="token punctuation">(</span>
      <span class="token string">&quot;vehicle&quot;</span><span class="token punctuation">,</span>
      getVehicleRepository
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// add this line to register inclusion resolver</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerInclusionResolver</span><span class="token punctuation">(</span><span class="token string">&quot;vehicle&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>inclusionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerInclusionResolver</span><span class="token punctuation">(</span><span class="token string">&quot;manager&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>manager<span class="token punctuation">.</span>inclusionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="many-to-many-relationship-hasmany-hasmanythrough" tabindex="-1"><a class="header-anchor" href="#many-to-many-relationship-hasmany-hasmanythrough" aria-hidden="true">#</a> Many to Many Relationship ( HasMany + HasManyThrough )</h3><p><img src="https://user-images.githubusercontent.com/31009750/216799419-bebefb3a-0144-4de5-97a3-68bd77d77cba.png" alt="image"></p><p><strong>Models</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hasMany<span class="token punctuation">,</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookAuthor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./book-author.model&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Book <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./book.model&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Author</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">hasMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Book<span class="token punctuation">,</span> <span class="token punctuation">{</span> through<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">model</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> BookAuthor <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  books<span class="token operator">:</span> Book<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Author<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AuthorRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AuthorWithRelations</span> <span class="token operator">=</span> Author <span class="token operator">&amp;</span> AuthorRelations<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> hasMany<span class="token punctuation">,</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Author <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./author.model&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookAuthor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./book-author.model&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">hasMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Author<span class="token punctuation">,</span> <span class="token punctuation">{</span> through<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">model</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> BookAuthor <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  authors<span class="token operator">:</span> Author<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BookRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BookWithRelations</span> <span class="token operator">=</span> Book <span class="token operator">&amp;</span> BookRelations<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BookAuthor</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;book_id&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  bookId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;author_id&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  authorId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>BookAuthor<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BookAuthorRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BookAuthorWithRelations</span> <span class="token operator">=</span> BookAuthor <span class="token operator">&amp;</span> BookAuthorRelations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DTO</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Author<span class="token punctuation">,</span> Book <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BookDto</span> <span class="token keyword">extends</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
    itemType<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  authorIds<span class="token operator">:</span> <span class="token keyword">typeof</span> Author<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Repositories</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* eslint-disable @typescript-eslint/naming-convention */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TimeStampRepositoryMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/mixins/time-stamp.mixin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor<span class="token punctuation">,</span> Getter<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DefaultCrudRepository<span class="token punctuation">,</span>
  HasManyThroughRepositoryFactory<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Author<span class="token punctuation">,</span> AuthorRelations<span class="token punctuation">,</span> Book<span class="token punctuation">,</span> BookAuthor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookAuthorRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./book-author.repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./book.repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthorRepository</span> <span class="token keyword">extends</span> <span class="token class-name">TimeStampRepositoryMixin<span class="token operator">&lt;</span>
  Author<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> Author<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  Constructor<span class="token operator">&lt;</span>
    DefaultCrudRepository<span class="token operator">&lt;</span>Author<span class="token punctuation">,</span> <span class="token keyword">typeof</span> Author<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span> AuthorRelations<span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>DefaultCrudRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> books<span class="token operator">:</span> HasManyThroughRepositoryFactory<span class="token operator">&lt;</span>
    Book<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Book<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    BookAuthor<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Author<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasources.english&quot;</span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;BookAuthorRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> BookAuthorRepositoryGetter<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>BookAuthorRepository<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;BookRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> bookRepositoryGetter<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>BookRepository<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>Author<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>books <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createHasManyThroughRepositoryFactoryFor</span><span class="token punctuation">(</span>
      <span class="token string">&quot;books&quot;</span><span class="token punctuation">,</span>
      bookRepositoryGetter<span class="token punctuation">,</span>
      BookAuthorRepositoryGetter
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerInclusionResolver</span><span class="token punctuation">(</span><span class="token string">&quot;books&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>books<span class="token punctuation">.</span>inclusionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* eslint-disable @typescript-eslint/naming-convention */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TimeStampRepositoryMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/mixins/time-stamp.mixin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor<span class="token punctuation">,</span> Getter<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DefaultCrudRepository<span class="token punctuation">,</span>
  HasManyThroughRepositoryFactory<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Author<span class="token punctuation">,</span> Book<span class="token punctuation">,</span> BookAuthor<span class="token punctuation">,</span> BookRelations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AuthorRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./author.repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookAuthorRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./book-author.repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BookRepository</span> <span class="token keyword">extends</span> <span class="token class-name">TimeStampRepositoryMixin<span class="token operator">&lt;</span>
  Book<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> Book<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  Constructor<span class="token operator">&lt;</span>
    DefaultCrudRepository<span class="token operator">&lt;</span>Book<span class="token punctuation">,</span> <span class="token keyword">typeof</span> Book<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span> BookRelations<span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>DefaultCrudRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> authors<span class="token operator">:</span> HasManyThroughRepositoryFactory<span class="token operator">&lt;</span>
    Author<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Author<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    BookAuthor<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Book<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasources.english&quot;</span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;BookAuthorRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> BookAuthorRepositoryGetter<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>BookAuthorRepository<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;AuthorRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> authorRepositoryGetter<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>AuthorRepository<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>Book<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>authors <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createHasManyThroughRepositoryFactoryFor</span><span class="token punctuation">(</span>
      <span class="token string">&quot;authors&quot;</span><span class="token punctuation">,</span>
      authorRepositoryGetter<span class="token punctuation">,</span>
      BookAuthorRepositoryGetter
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerInclusionResolver</span><span class="token punctuation">(</span><span class="token string">&quot;authors&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authors<span class="token punctuation">.</span>inclusionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DefaultCrudRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookAuthor<span class="token punctuation">,</span> BookAuthorRelations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BookAuthorRepository</span> <span class="token keyword">extends</span> <span class="token class-name">DefaultCrudRepository<span class="token operator">&lt;</span>
  BookAuthor<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> BookAuthor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bookId<span class="token punctuation">,</span>
  BookAuthorRelations
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token string">&quot;datasources.english&quot;</span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>BookAuthor<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Controllers</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Count<span class="token punctuation">,</span>
  CountSchema<span class="token punctuation">,</span>
  Filter<span class="token punctuation">,</span>
  FilterExcludingWhere<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
  Where<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  post<span class="token punctuation">,</span>
  param<span class="token punctuation">,</span>
  get<span class="token punctuation">,</span>
  getModelSchemaRef<span class="token punctuation">,</span>
  patch<span class="token punctuation">,</span>
  put<span class="token punctuation">,</span>
  del<span class="token punctuation">,</span>
  requestBody<span class="token punctuation">,</span>
  response<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/rest&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Author <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AuthorRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../repositories&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthorController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">(</span>AuthorRepository<span class="token punctuation">)</span>
    <span class="token keyword">public</span> authorRepository<span class="token operator">:</span> AuthorRepository
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">post</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Author model instance&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Author<span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      content<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Author<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&quot;NewAuthor&quot;</span><span class="token punctuation">,</span>
            exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    author<span class="token operator">:</span> Omit<span class="token operator">&lt;</span>Author<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Author<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors/count&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Author model count&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> schema<span class="token operator">:</span> CountSchema <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span>Author<span class="token punctuation">)</span> where<span class="token operator">?</span><span class="token operator">:</span> Where<span class="token operator">&lt;</span>Author<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Count<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>where<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Array of Author model instances&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        schema<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
          items<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Author<span class="token punctuation">,</span> <span class="token punctuation">{</span> includeRelations<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Author<span class="token punctuation">)</span> filter<span class="token operator">?</span><span class="token operator">:</span> Filter<span class="token operator">&lt;</span>Author<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Author<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">patch</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Author PATCH success count&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> schema<span class="token operator">:</span> CountSchema <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">updateAll</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      content<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Author<span class="token punctuation">,</span> <span class="token punctuation">{</span> partial<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    author<span class="token operator">:</span> Author<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span>Author<span class="token punctuation">)</span> where<span class="token operator">?</span><span class="token operator">:</span> Where<span class="token operator">&lt;</span>Author<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Count<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">updateAll</span><span class="token punctuation">(</span>author<span class="token punctuation">,</span> where<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Author model instance&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Author<span class="token punctuation">,</span> <span class="token punctuation">{</span> includeRelations<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">findById</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Author<span class="token punctuation">,</span> <span class="token punctuation">{</span> exclude<span class="token operator">:</span> <span class="token string">&quot;where&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    filter<span class="token operator">?</span><span class="token operator">:</span> FilterExcludingWhere<span class="token operator">&lt;</span>Author<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Author<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">patch</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Author PATCH success&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">updateById</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      content<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Author<span class="token punctuation">,</span> <span class="token punctuation">{</span> partial<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    author<span class="token operator">:</span> Author
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> author<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">put</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Author PUT success&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">replaceById</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> author<span class="token operator">:</span> Author
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">replaceById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> author<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">del</span></span><span class="token punctuation">(</span><span class="token string">&quot;/authors/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Author DELETE success&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authorRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> toArrayPromise <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/helpers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Count<span class="token punctuation">,</span>
  CountSchema<span class="token punctuation">,</span>
  Filter<span class="token punctuation">,</span>
  FilterExcludingWhere<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
  Where<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  del<span class="token punctuation">,</span>
  get<span class="token punctuation">,</span>
  getModelSchemaRef<span class="token punctuation">,</span>
  param<span class="token punctuation">,</span>
  patch<span class="token punctuation">,</span>
  post<span class="token punctuation">,</span>
  put<span class="token punctuation">,</span>
  requestBody<span class="token punctuation">,</span>
  response<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/rest&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Book <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../repositories&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BookDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./../dtos/book.dto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">(</span>BookRepository<span class="token punctuation">)</span>
    <span class="token keyword">public</span> bookRepository<span class="token operator">:</span> BookRepository
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">post</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Book model instance&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Book<span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      content<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>BookDto<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&quot;NewBook&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    book<span class="token operator">:</span> Omit<span class="token operator">&lt;</span>BookDto<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> authorIds<span class="token punctuation">,</span> <span class="token operator">...</span>bookData <span class="token punctuation">}</span> <span class="token operator">=</span> book<span class="token punctuation">;</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>bookData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// link</span>
      <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
        <span class="token function">toArrayPromise</span><span class="token punctuation">(</span>authorIds<span class="token punctuation">,</span> <span class="token punctuation">(</span>authorId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">authors</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">link</span><span class="token punctuation">(</span>authorId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span> include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;authors&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books/count&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Book model count&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> schema<span class="token operator">:</span> CountSchema <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span>Book<span class="token punctuation">)</span> where<span class="token operator">?</span><span class="token operator">:</span> Where<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Count<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>where<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Array of Book model instances&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        schema<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
          items<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Book<span class="token punctuation">,</span> <span class="token punctuation">{</span> includeRelations<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Book<span class="token punctuation">)</span> filter<span class="token operator">?</span><span class="token operator">:</span> Filter<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Book<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">patch</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Book PATCH success count&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> schema<span class="token operator">:</span> CountSchema <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">updateAll</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      content<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Book<span class="token punctuation">,</span> <span class="token punctuation">{</span> partial<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    book<span class="token operator">:</span> Book<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span>Book<span class="token punctuation">)</span> where<span class="token operator">?</span><span class="token operator">:</span> Where<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Count<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">updateAll</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> where<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">get</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Book model instance&quot;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>Book<span class="token punctuation">,</span> <span class="token punctuation">{</span> includeRelations<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">findById</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Book<span class="token punctuation">,</span> <span class="token punctuation">{</span> exclude<span class="token operator">:</span> <span class="token string">&quot;where&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    filter<span class="token operator">?</span><span class="token operator">:</span> FilterExcludingWhere<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">patch</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Book PATCH success&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">updateById</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      content<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;application/json&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          schema<span class="token operator">:</span> <span class="token function">getModelSchemaRef</span><span class="token punctuation">(</span>BookDto<span class="token punctuation">,</span> <span class="token punctuation">{</span> partial<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    book<span class="token operator">:</span> BookDto
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> exitedLinks <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">authors</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>exitedLinks<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">authors</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unlinkAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
      <span class="token function">toArrayPromise</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>authorIds<span class="token punctuation">,</span> <span class="token punctuation">(</span>authorId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">authors</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">link</span><span class="token punctuation">(</span>authorId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// await this.bookRepository.authors(id).link(book.authorId);</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">put</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Book PUT success&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">replaceById</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">requestBody</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> book<span class="token operator">:</span> Book
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">replaceById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">del</span></span><span class="token punctuation">(</span><span class="token string">&quot;/books/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">response</span></span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Book DELETE success&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">param</span></span><span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="one-to-many-references-many" tabindex="-1"><a class="header-anchor" href="#one-to-many-references-many" aria-hidden="true">#</a> One To Many ( References Many )</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property<span class="token punctuation">,</span> referencesMany <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./store.model&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Location</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">referencesMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Store<span class="token punctuation">)</span>
  storeIds<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Location<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LocationRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">LocationWithRelations</span> <span class="token operator">=</span> Location <span class="token operator">&amp;</span> LocationRelations<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./base.entity&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">model</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">property</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    postgresql<span class="token operator">:</span> <span class="token punctuation">{</span>
      dataType<span class="token operator">:</span> <span class="token string">&quot;VARCHAR&quot;</span><span class="token punctuation">,</span>
      dataLength<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Store<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">StoreRelations</span> <span class="token punctuation">{</span>
  <span class="token comment">// describe navigational properties here</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">StoreWithRelations</span> <span class="token operator">=</span> Store <span class="token operator">&amp;</span> StoreRelations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor<span class="token punctuation">,</span> inject<span class="token punctuation">,</span> Getter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DefaultCrudRepository<span class="token punctuation">,</span>
  repository<span class="token punctuation">,</span>
  ReferencesManyAccessor<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Location<span class="token punctuation">,</span> LocationRelations<span class="token punctuation">,</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DATASOURCE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/config/environment&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TimeStampRepositoryMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/mixins/time-stamp.mixin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StoreRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./store.repository&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LocationRepository</span> <span class="token keyword">extends</span> <span class="token class-name">TimeStampRepositoryMixin<span class="token operator">&lt;</span>
  Location<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> Location<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  Constructor<span class="token operator">&lt;</span>
    DefaultCrudRepository<span class="token operator">&lt;</span>
      Location<span class="token punctuation">,</span>
      <span class="token keyword">typeof</span> Location<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      LocationRelations
    <span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>DefaultCrudRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> stores<span class="token operator">:</span> ReferencesManyAccessor<span class="token operator">&lt;</span>
    Store<span class="token punctuation">,</span>
    <span class="token keyword">typeof</span> Location<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">datasources.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">DATASOURCE</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">repository</span></span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token string">&quot;StoreRepository&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> storeRepositoryGetter<span class="token operator">:</span> Getter<span class="token operator">&lt;</span>StoreRepository<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>Location<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stores <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createReferencesManyAccessorFor</span><span class="token punctuation">(</span>
      <span class="token string">&quot;stores&quot;</span><span class="token punctuation">,</span>
      storeRepositoryGetter
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerInclusionResolver</span><span class="token punctuation">(</span><span class="token string">&quot;stores&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stores<span class="token punctuation">.</span>inclusionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Constructor<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> DefaultCrudRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@loopback/repository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnglishDataSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../datasources&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store<span class="token punctuation">,</span> StoreRelations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../models&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DATASOURCE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/config/environment&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TimeStampRepositoryMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@english/mixins/time-stamp.mixin&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">StoreRepository</span> <span class="token keyword">extends</span> <span class="token class-name">TimeStampRepositoryMixin<span class="token operator">&lt;</span>
  Store<span class="token punctuation">,</span>
  <span class="token keyword">typeof</span> Store<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  Constructor<span class="token operator">&lt;</span>
    DefaultCrudRepository<span class="token operator">&lt;</span>Store<span class="token punctuation">,</span> <span class="token keyword">typeof</span> Store<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>id<span class="token punctuation">,</span> StoreRelations<span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>DefaultCrudRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">inject</span></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">datasources.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">DATASOURCE</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> dataSource<span class="token operator">:</span> EnglishDataSource
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>Store<span class="token punctuation">,</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generate-relation-with-cli" tabindex="-1"><a class="header-anchor" href="#generate-relation-with-cli" aria-hidden="true">#</a> Generate relation with CLI</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lb4 relation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2>`,26),S={href:"https://loopback.io/doc/en/lb4/Include-filter.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://loopback.io/doc/en/lb4/Where-filter.html",target:"_blank",rel:"noopener noreferrer"},E=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">-g</span> <span class="token parameter variable">--request</span> GET <span class="token string">&#39;http://localhost:1337/employees?filter[include][0][relation]=vehicle&amp;filter[include][0][scope][where][vehicleType]=1&amp;filter[include][1][relation]=manager&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="indexes" tabindex="-1"><a class="header-anchor" href="#indexes" aria-hidden="true">#</a> Indexes</h2>`,2),T={href:"https://strongloop.com/strongblog/loopback-index-support-cloudant-model/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/loopbackio/loopback-next/issues/2753",target:"_blank",rel:"noopener noreferrer"},C=p('<h2 id="tests" tabindex="-1"><a class="header-anchor" href="#tests" aria-hidden="true">#</a> Tests</h2><p><img src="https://user-images.githubusercontent.com/31009750/216938382-55f54855-5b30-4b75-9f1c-35ec25cb43d8.png" alt="image"></p><p><img src="https://user-images.githubusercontent.com/31009750/216941910-d3d1883c-9fa7-4c4a-81e3-230d384ed5d5.png" alt="image"></p><h3 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h3>',4),D={href:"https://sinonjs.org/releases/latest/spies/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/ladjs/supertest",target:"_blank",rel:"noopener noreferrer"},P={href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.chaijs.com/guide/",target:"_blank",rel:"noopener noreferrer"},L=p(`<h3 id="securing-application" tabindex="-1"><a class="header-anchor" href="#securing-application" aria-hidden="true">#</a> Securing Application</h3><blockquote><p><strong>Authentication</strong> is a process of verifying user/entity to the system, which enables identified/validated access to the protected routes.</p></blockquote><p><img src="https://user-images.githubusercontent.com/31009750/219852190-2b4aab64-c364-4cd3-8aa8-e2add856c2e8.png" alt="image"></p><blockquote><p><strong>Authorization</strong> is a process of deciding if a user can perform an action on a protected resource.</p></blockquote><p><img src="https://user-images.githubusercontent.com/31009750/219863855-c67d564e-c218-49c3-82ba-7f25ffaf10e9.png" alt="image"></p><h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @loopback/authentication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="authorization" tabindex="-1"><a class="header-anchor" href="#authorization" aria-hidden="true">#</a> Authorization</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @loopback/authorization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="casbin" tabindex="-1"><a class="header-anchor" href="#casbin" aria-hidden="true">#</a> Casbin</h3>`,10),j={href:"https://casbin.org/docs/get-started",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/casbin/node-casbin/blob/master/src/persist/stringAdapter.ts",target:"_blank",rel:"noopener noreferrer"};function O(F,H){const t=o("ExternalLinkIcon"),e=o("RouterLink");return i(),l("div",null,[k,n("ul",null,[n("li",null,[n("a",d,[s("https://loopback.io/doc/en/lb4/Database-connectors.html"),a(t)])])]),v,n("ul",null,[n("li",null,[n("a",m,[s("https://loopback.io/doc/en/lb4/Model.html"),a(t)])])]),b,n("ul",null,[n("li",null,[n("a",y,[s("PostSQL Data Type Mapping"),a(t)])])]),g,n("ul",null,[n("li",null,[n("a",h,[s("Loopback 4 Mixins"),a(t)])]),n("li",null,[n("a",q,[s("Typescript Mixins"),a(t)])]),n("li",null,[n("a",f,[s("Javascript Mixins"),a(t)])])]),w,n("ul",null,[n("li",null,[n("a",R,[s("References from Loopback Official Document"),a(t)])]),n("li",null,[n("a",x,[s("Relation best suited"),a(t)])])]),A,n("ul",null,[n("li",null,[n("a",S,[s("Filter"),a(t)])]),n("li",null,[n("a",B,[s("Where Filter"),a(t)])])]),E,n("ul",null,[n("li",null,[n("a",T,[s("https://strongloop.com/strongblog/loopback-index-support-cloudant-model/"),a(t)])]),n("li",null,[n("a",_,[s("Defining index for a model in @model decorator #2753"),a(t)])])]),C,n("ul",null,[n("li",null,[n("a",D,[s("Spies"),a(t)])]),n("li",null,[n("a",M,[s("Super Test"),a(t)])]),n("li",null,[n("a",P,[s("Mocha"),a(t)])]),n("li",null,[n("a",I,[s("Chai"),a(t)])])]),L,n("ul",null,[n("li",null,[n("a",j,[s("Getting started"),a(t)])]),n("li",null,[n("a",V,[s("String Adapter"),a(t)])]),n("li",null,[a(e,{to:"/security/casbin.html"},{default:u(()=>[s("Casbin typescript example")]),_:1})])])])}const G=c(r,[["render",O],["__file","index.html.vue"]]);export{G as default};
