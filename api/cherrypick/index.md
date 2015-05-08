---
layout: default
menu_item: api
title: Cherrypick
description: Version 0.4.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "cherrypick": "#cherrypick"
  "commit": "#commit"
  "initOptions": "#initOptions"
---

## <a name="cherrypick"></a><span>Cherrypick.</span>cherrypick <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Cherrypick.cherrypick(repo, commit, cherrypick_options);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to cherry-pick |
| commit | [Commit](/api/commit/) | the commit to cherry-pick |
| cherrypick_options | [CherrypickOptions](/api/cherrypick_options/) | the cherry-pick options (or null for defaults) |

| Returns |  |
| --- | --- |
| Number |  zero on success, -1 on failure. |

## <a name="commit"></a><span>Cherrypick.</span>commit <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Cherrypick.commit(repo, cherrypick_commit, our_commit, mainline, merge_options).then(function(index) {
  // Use index
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository that contains the given commits |
| cherrypick_commit | [Commit](/api/commit/) | the commit to cherry-pick |
| our_commit | [Commit](/api/commit/) | the commit to revert against (eg, HEAD) |
| mainline | Number | the parent of the revert commit, if it is a merge |
| merge_options | [MergeOptions](/api/merge_options/) | the merge options (or null for defaults) |

| Returns |  |
| --- | --- |
| [Index](/api/index/) |  |

## <a name="initOptions"></a><span>Cherrypick.</span>initOptions <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Cherrypick.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [CherrypickOptions](/api/cherrypick_options/) | the `git_cherrypick_options` struct to initialize |
| version | Number | Version of struct; pass `GIT_CHERRYPICK_OPTIONS_VERSION` |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

