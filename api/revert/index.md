---
layout: default
menu_item: api
title: Revert
description: Version 0.9.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "commit": "#commit"
  "revert": "#revert"
---

## <a name="commit"></a><span>Revert.</span>commit <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Revert.commit(repo, revert_commit, our_commit, mainline, merge_options).then(function(index) {
  // Use index
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository that contains the given commits |
| revert_commit | [Commit](/api/commit/) | the commit to revert |
| our_commit | [Commit](/api/commit/) | the commit to revert against (eg, HEAD) |
| mainline | Number | the parent of the revert commit, if it is a merge |
| merge_options | [MergeOptions](/api/merge_options/) | the merge options (or null for defaults) |

| Returns |  |
| --- | --- |
| [Index](/api/index/) |  |

## <a name="revert"></a><span>Revert.</span>revert <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Revert.revert(repo, commit, given_opts);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to revert |
| commit | [Commit](/api/commit/) | the commit to revert |
| given_opts | [RevertOptions](/api/revert_options/) | merge flags |

| Returns |  |
| --- | --- |
| Number |  zero on success, -1 on failure. |

