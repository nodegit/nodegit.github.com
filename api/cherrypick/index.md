---
layout: default
menu_item: api
title: Cherrypick
description: Version 0.12.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "cherrypick": "#cherrypick"
  "commit": "#commit"
  "initOptions": "#initOptions"
---

## <a name="cherrypick"></a><span>Cherrypick.</span>cherrypick <span class="tags"><span class="async">Async</span></span>

```js
Cherrypick.cherrypick(repo, commit, [options]).then(function(int) {
  // Use int
});
```

Cherrypick a commit and, changing the index and working directory

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo to checkout head |
| commit | [Commit](/api/commit/) | The commit to cherrypick |
| [options] | [CherrypickOptions](/api/cherrypick_options/) | Options for the cherrypick |

| Returns |  |
| --- | --- |
| int | 0 on success, -1 on failure |

## <a name="commit"></a><span>Cherrypick.</span>commit <span class="tags"><span class="async">Async</span></span>

```js
Cherrypick.commit(repo, cherrypick_commit, our_commit, mainline, [merge_options]).then(function(int) {
  // Use int
});
```

Cherrypicks the given commit against "our" commit, producing an index that
reflects the result of the cherrypick. The index is not backed by a repo.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo to cherrypick commits |
| cherrypick_commit | [Commit](/api/commit/) | The commit to cherrypick |
| our_commit | [Commit](/api/commit/) | The commit to revert against |
| mainline | int | The parent of the revert commit (1 or 2) if it's a merge, 0 otherwise |
| [merge_options] | [MergeOptions](/api/merge_options/) | Merge options for the cherrypick |

| Returns |  |
| --- | --- |
| int | 0 on success, -1 on failure |

## <a name="initOptions"></a><span>Cherrypick.</span>initOptions <span class="tags"><span class="sync">Sync</span></span>

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

