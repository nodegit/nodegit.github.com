---
layout: default
menu_item: api
title: Merge
description: Version 0.17.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "base": "#base"
  "bases": "#bases"
  "commits": "#commits"
  "fileInitInput": "#fileInitInput"
  "initOptions": "#initOptions"
  "merge": "#merge"
  "trees": "#trees"
  "ANALYSIS": "#ANALYSIS"
  "FILE_FAVOR": "#FILE_FAVOR"
  "FILE_FLAG": "#FILE_FLAG"
  "FLAG": "#FLAG"
  "PREFERENCE": "#PREFERENCE"
---

## <a name="base"></a><span>Merge.</span>base <span class="tags"><span class="async">Async</span></span>

```js
Merge.base(repo, one, two).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository where the commits exist |
| one | [Oid](/api/oid/) | one of the commits |
| two | [Oid](/api/oid/) | the other commit |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the OID of a merge base between 'one' and 'two' |

## <a name="bases"></a><span>Merge.</span>bases <span class="tags"><span class="async">Async</span></span>

```js
Merge.bases(repo, one, two).then(function(oidarray) {
  // Use oidarray
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository where the commits exist |
| one | [Oid](/api/oid/) | one of the commits |
| two | [Oid](/api/oid/) | the other commit |

| Returns |  |
| --- | --- |
| [Oidarray](/api/oidarray/) | array in which to store the resulting ids |

## <a name="commits"></a><span>Merge.</span>commits <span class="tags"><span class="sync">Sync</span></span>

```js
Merge.commits(repo, ourCommit, theirCommit, [options]);
```

Merge 2 commits together and create an new index that can
be used to create a merge commit.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository that contains the given commits |
| ourCommit | [Commit](/api/commit/) | The commit that reflects the destination tree |
| theirCommit | [Commit](/api/commit/) | The commit to merge into ourCommit |
| [options] | [MergeOptions](/api/merge_options/) | The merge tree options (null for default) |

## <a name="fileInitInput"></a><span>Merge.</span>fileInitInput <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Merge.fileInitInput(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [MergeFileInput](/api/merge_file_input/) | the `git_merge_file_input` instance to initialize. |
| version | Number | the version of the struct; you should pass `GIT_MERGE_FILE_INPUT_VERSION` here. |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="initOptions"></a><span>Merge.</span>initOptions <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Merge.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [MergeOptions](/api/merge_options/) | the `git_merge_options` instance to initialize. |
| version | Number | the version of the struct; you should pass `GIT_MERGE_OPTIONS_VERSION` here. |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="merge"></a><span>Merge.</span>merge <span class="tags"><span class="sync">Sync</span></span>

```js
Merge.merge(repo, theirHead, [mergeOpts], [checkoutOpts]);
```

Merge a commit into HEAD and writes the results to the working directory.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository that contains the given commits |
| theirHead | [AnnotatedCommit](/api/annotated_commit/) | The annotated commit to merge into HEAD |
| [mergeOpts] | [MergeOptions](/api/merge_options/) | The merge tree options (null for default) |
| [checkoutOpts] | [CheckoutOptions](/api/checkout_options/) | The checkout options (null for default) |

## <a name="trees"></a><span>Merge.</span>trees <span class="tags"><span class="async">Async</span></span>

```js
Merge.trees(repo, ancestor_tree, our_tree, their_tree, opts).then(function(index) {
  // Use index
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository that contains the given trees |
| ancestor_tree | [Tree](/api/tree/) | the common ancestor between the trees (or null if none) |
| our_tree | [Tree](/api/tree/) | the tree that reflects the destination tree |
| their_tree | [Tree](/api/tree/) | the tree to merge in to `our_tree` |
| opts | [MergeOptions](/api/merge_options/) | the merge tree options (or null for defaults) |

| Returns |  |
| --- | --- |
| [Index](/api/index/) |  |

## <a name="ANALYSIS"></a><span>Merge.</span>ANALYSIS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.ANALYSIS.</span>NONE | 0 |
| <span>Merge.ANALYSIS.</span>NORMAL | 1 |
| <span>Merge.ANALYSIS.</span>UP_TO_DATE | 2 |
| <span>Merge.ANALYSIS.</span>FASTFORWARD | 4 |
| <span>Merge.ANALYSIS.</span>UNBORN | 8 |

## <a name="FILE_FAVOR"></a><span>Merge.</span>FILE_FAVOR <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.FILE_FAVOR.</span>NORMAL | 0 |
| <span>Merge.FILE_FAVOR.</span>OURS | 1 |
| <span>Merge.FILE_FAVOR.</span>THEIRS | 2 |
| <span>Merge.FILE_FAVOR.</span>UNION | 3 |

## <a name="FILE_FLAG"></a><span>Merge.</span>FILE_FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.FILE_FLAG.</span>FILE_DEFAULT | 0 |
| <span>Merge.FILE_FLAG.</span>FILE_STYLE_MERGE | 1 |
| <span>Merge.FILE_FLAG.</span>FILE_STYLE_DIFF3 | 2 |
| <span>Merge.FILE_FLAG.</span>FILE_SIMPLIFY_ALNUM | 4 |
| <span>Merge.FILE_FLAG.</span>FILE_IGNORE_WHITESPACE | 8 |
| <span>Merge.FILE_FLAG.</span>FILE_IGNORE_WHITESPACE_CHANGE | 16 |
| <span>Merge.FILE_FLAG.</span>FILE_IGNORE_WHITESPACE_EOL | 32 |
| <span>Merge.FILE_FLAG.</span>FILE_DIFF_PATIENCE | 64 |
| <span>Merge.FILE_FLAG.</span>FILE_DIFF_MINIMAL | 128 |

## <a name="FLAG"></a><span>Merge.</span>FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.FLAG.</span>FIND_RENAMES | 1 |
| <span>Merge.FLAG.</span>FAIL_ON_CONFLICT | 2 |
| <span>Merge.FLAG.</span>SKIP_REUC | 4 |
| <span>Merge.FLAG.</span>NO_RECURSIVE | 8 |

## <a name="PREFERENCE"></a><span>Merge.</span>PREFERENCE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.PREFERENCE.</span>NONE | 0 |
| <span>Merge.PREFERENCE.</span>NO_FASTFORWARD | 1 |
| <span>Merge.PREFERENCE.</span>FASTFORWARD_ONLY | 2 |

