---
layout: default
menu_item: api
title: Clone
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "clone": "#clone"
  "LOCAL": "#LOCAL"
---

## <a name="clone"></a><span>Clone.</span>clone <span class="tags"><span class="async">Async</span></span>

```js
Clone.clone(url, local_path, [options]).then(function(repository) {
  // Use repository
});
```

Patch repository cloning to automatically coerce objects.

| Parameters | Type |   |
| --- | --- | --- |
| url | String | url of the repository |
| local_path | String | local path to store repository |
| [options] | [CloneOptions](/api/clone_options/) |  |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) | repo |

## <a name="LOCAL"></a><span>Clone.</span>LOCAL <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Clone.LOCAL.</span>AUTO | 0 |
| <span>Clone.LOCAL.</span>LOCAL | 1 |
| <span>Clone.LOCAL.</span>NO_LOCAL | 2 |
| <span>Clone.LOCAL.</span>NO_LINKS | 3 |

