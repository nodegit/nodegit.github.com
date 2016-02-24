---
layout: default
menu_item: api
title: Fetch
description: Version 0.11.4
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "initOptions": "#initOptions"
  "PRUNE": "#PRUNE"
---

## <a name="initOptions"></a><span>Fetch.</span>initOptions <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Fetch.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [FetchOptions](/api/fetch_options/) | the `git_push_options` instance to initialize. |
| version | Number | the version of the struct; you should pass `GIT_FETCH_OPTIONS_VERSION` here. |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="PRUNE"></a><span>Fetch.</span>PRUNE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Fetch.PRUNE.</span>GIT_FETCH_PRUNE_UNSPECIFIED | 0 |
| <span>Fetch.PRUNE.</span>GIT_FETCH_PRUNE | 1 |
| <span>Fetch.PRUNE.</span>GIT_FETCH_NO_PRUNE | 2 |

