---
layout: default
menu_item: api
title: Clone
description: Version 0.11.3
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "clone": "#clone"
  "initOptions": "#initOptions"
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

## <a name="initOptions"></a><span>Clone.</span>initOptions <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Clone.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [CloneOptions](/api/clone_options/) | The `git_clone_options` struct to initialize |
| version | Number | Version of struct; pass `GIT_CLONE_OPTIONS_VERSION` |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="LOCAL"></a><span>Clone.</span>LOCAL <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Clone.LOCAL.</span>AUTO | 0 |
| <span>Clone.LOCAL.</span>LOCAL | 1 |
| <span>Clone.LOCAL.</span>NO_LOCAL | 2 |
| <span>Clone.LOCAL.</span>NO_LINKS | 3 |

