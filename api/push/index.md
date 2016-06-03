---
layout: default
menu_item: api
title: Push
description: Version 0.13.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "initOptions": "#initOptions"
---

## <a name="initOptions"></a><span>Push.</span>initOptions <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Push.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [PushOptions](/api/push_options/) | the `git_push_options` instance to initialize. |
| version | Number | the version of the struct; you should pass `GIT_PUSH_OPTIONS_VERSION` here. |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

