---
layout: default
menu_item: api
title: Libgit2
description: Version 0.13.2
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "features": "#features"
  "init": "#init"
  "opts": "#opts"
  "shutdown": "#shutdown"
  "version": "#version"
  "OPT": "#OPT"
---

## <a name="features"></a><span>Libgit2.</span>features <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Libgit2.features();
```

| Returns |  |
| --- | --- |
| Number |  A combination of GIT_FEATURE_* values. |

## <a name="init"></a><span>Libgit2.</span>init <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Libgit2.init();
```

| Returns |  |
| --- | --- |
| Number |  the number of initializations of the library, or an error code. |

## <a name="opts"></a><span>Libgit2.</span>opts <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Libgit2.opts(option);
```

| Parameters | Type |   |
| --- | --- | --- |
| option | Number | Option key |

| Returns |  |
| --- | --- |
| Number |  0 on success, 
<
0 on failure |

## <a name="shutdown"></a><span>Libgit2.</span>shutdown <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Libgit2.shutdown();
```

| Returns |  |
| --- | --- |
| Number |  the number of remaining initializations of the library, or an
 error code. |

## <a name="version"></a><span>Libgit2.</span>version <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
Libgit2.version(major, minor, rev);
```

| Parameters | Type |   |
| --- | --- | --- |
| major | Number | Store the major version number |
| minor | Number | Store the minor version number |
| rev | Number | Store the revision (patch) number |

## <a name="OPT"></a><span>Libgit2.</span>OPT <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Libgit2.OPT.</span>GET_MWINDOW_SIZE | 0 |
| <span>Libgit2.OPT.</span>SET_MWINDOW_SIZE | 1 |
| <span>Libgit2.OPT.</span>GET_MWINDOW_MAPPED_LIMIT | 2 |
| <span>Libgit2.OPT.</span>SET_MWINDOW_MAPPED_LIMIT | 3 |
| <span>Libgit2.OPT.</span>GET_SEARCH_PATH | 4 |
| <span>Libgit2.OPT.</span>SET_SEARCH_PATH | 5 |
| <span>Libgit2.OPT.</span>SET_CACHE_OBJECT_LIMIT | 6 |
| <span>Libgit2.OPT.</span>SET_CACHE_MAX_SIZE | 7 |
| <span>Libgit2.OPT.</span>ENABLE_CACHING | 8 |
| <span>Libgit2.OPT.</span>GET_CACHED_MEMORY | 9 |
| <span>Libgit2.OPT.</span>GET_TEMPLATE_PATH | 10 |
| <span>Libgit2.OPT.</span>SET_TEMPLATE_PATH | 11 |
| <span>Libgit2.OPT.</span>SET_SSL_CERT_LOCATIONS | 12 |
| <span>Libgit2.OPT.</span>SET_USER_AGENT | 13 |
| <span>Libgit2.OPT.</span>ENABLE_STRICT_OBJECT_CREATION | 14 |
| <span>Libgit2.OPT.</span>SET_SSL_CIPHERS | 15 |

