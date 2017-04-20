---
layout: default
menu_item: api
title: Proxy
description: Version 0.19.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "initOptions": "#initOptions"
  "PROXY": "#PROXY"
---

## <a name="initOptions"></a><span>Proxy.</span>initOptions <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Proxy.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [ProxyOptions](/api/proxy_options/) | the options struct to initialize |
| version | Number | the version of the struct, use `GIT_PROXY_OPTIONS_VERSION` |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="PROXY"></a><span>Proxy.</span>PROXY <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Proxy.PROXY.</span>NONE | 0 |
| <span>Proxy.PROXY.</span>AUTO | 1 |
| <span>Proxy.PROXY.</span>SPECIFIED | 2 |

