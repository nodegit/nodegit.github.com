---
layout: default
menu_item: api
title: Apply
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "apply": "#apply"
  "toTree": "#toTree"
  "LOCATION": "#LOCATION"
---

## <a name="apply"></a><span>Apply.</span>apply <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Apply.apply(repo, diff, location, options);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to apply to |
| diff | [Diff](/api/diff/) | the diff to apply |
| location | Number | the location to apply (workdir, index or both) |
| options | [ApplyOptions](/api/apply_options/) | the options for the apply (or null for defaults) |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="toTree"></a><span>Apply.</span>toTree <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Apply.toTree(repo, preimage, diff, options).then(function(index) {
  // Use index
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to apply |
| preimage | [Tree](/api/tree/) | the tree to apply the diff to |
| diff | [Diff](/api/diff/) | the diff to apply |
| options | [ApplyOptions](/api/apply_options/) | the options for the apply (or null for defaults) |

| Returns |  |
| --- | --- |
| [Index](/api/index/) | the postimage of the application |

## <a name="LOCATION"></a><span>Apply.</span>LOCATION <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Apply.LOCATION.</span>WORKDIR | 0 |
| <span>Apply.LOCATION.</span>INDEX | 1 |
| <span>Apply.LOCATION.</span>BOTH | 2 |

