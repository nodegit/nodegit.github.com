---
layout: default
menu_item: api
title: Pathspec
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "matchListDiffEntry": "#matchListDiffEntry"
  "matchListEntry": "#matchListEntry"
  "matchListEntrycount": "#matchListEntrycount"
  "matchListFailedEntry": "#matchListFailedEntry"
  "matchListFailedEntrycount": "#matchListFailedEntrycount"
  "#free": "#free"
  "#matchDiff": "#matchDiff"
  "#matchIndex": "#matchIndex"
  "#matchTree": "#matchTree"
  "#matchWorkdir": "#matchWorkdir"
  "#matchesPath": "#matchesPath"
  "FLAG": "#FLAG"
---

## <a name="create"></a><span>Pathspec.</span>create <span class="tags"><span class="async">Async</span></span>

```js
Pathspec.create(pathspec).then(function(pathspec) {
  // Use pathspec
});
```

| Parameters | Type |   |
| --- | --- | --- |
| pathspec | [Strarray](/api/strarray/) | A git_strarray of the paths to match |

| Returns |  |
| --- | --- |
| [Pathspec](/api/pathspec/) | Output of the compiled pathspec |

## <a name="matchListDiffEntry"></a><span>Pathspec.</span>matchListDiffEntry <span class="tags"><span class="sync">Sync</span></span>

```js
var diffDelta = Pathspec.matchListDiffEntry(m, pos);
```

| Parameters | Type |   |
| --- | --- | --- |
| m | [PathspecMatchList](/api/pathspec_match_list/) | The git_pathspec_match_list object |
| pos | Number | The index into the list |

| Returns |  |
| --- | --- |
| [DiffDelta](/api/diff_delta/) |  The filename of the match |

## <a name="matchListEntry"></a><span>Pathspec.</span>matchListEntry <span class="tags"><span class="sync">Sync</span></span>

```js
var string = Pathspec.matchListEntry(m, pos);
```

| Parameters | Type |   |
| --- | --- | --- |
| m | [PathspecMatchList](/api/pathspec_match_list/) | The git_pathspec_match_list object |
| pos | Number | The index into the list |

| Returns |  |
| --- | --- |
| String |  The filename of the match |

## <a name="matchListEntrycount"></a><span>Pathspec.</span>matchListEntrycount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Pathspec.matchListEntrycount(m);
```

| Parameters | Type |   |
| --- | --- | --- |
| m | [PathspecMatchList](/api/pathspec_match_list/) | The git_pathspec_match_list object |

| Returns |  |
| --- | --- |
| Number |  Number of items in match list |

## <a name="matchListFailedEntry"></a><span>Pathspec.</span>matchListFailedEntry <span class="tags"><span class="sync">Sync</span></span>

```js
var string = Pathspec.matchListFailedEntry(m, pos);
```

| Parameters | Type |   |
| --- | --- | --- |
| m | [PathspecMatchList](/api/pathspec_match_list/) | The git_pathspec_match_list object |
| pos | Number | The index into the failed items |

| Returns |  |
| --- | --- |
| String |  The pathspec pattern that didn't match anything |

## <a name="matchListFailedEntrycount"></a><span>Pathspec.</span>matchListFailedEntrycount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Pathspec.matchListFailedEntrycount(m);
```

| Parameters | Type |   |
| --- | --- | --- |
| m | [PathspecMatchList](/api/pathspec_match_list/) | The git_pathspec_match_list object |

| Returns |  |
| --- | --- |
| Number |  Number of items in original pathspec that had no matches |

## <a name="free"></a><span>Pathspec#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
pathspec.free();
```

## <a name="matchDiff"></a><span>Pathspec#</span>matchDiff <span class="tags"><span class="async">Async</span></span>

```js
pathspec.matchDiff(diff, flags).then(function(pathspecMatchList) {
  // Use pathspecMatchList
});
```

| Parameters | Type |
| --- | --- | --- |
| diff | [Diff](/api/diff/) | A generated diff list |
| flags | Number | Combination of git_pathspec_flag_t options to control match |

| Returns |  |
| --- | --- |
| [PathspecMatchList](/api/pathspec_match_list/) | Output list of matches; pass NULL to just get return value |

## <a name="matchIndex"></a><span>Pathspec#</span>matchIndex <span class="tags"><span class="async">Async</span></span>

```js
pathspec.matchIndex(index, flags).then(function(pathspecMatchList) {
  // Use pathspecMatchList
});
```

| Parameters | Type |
| --- | --- | --- |
| index | [Index](/api/index/) | The index to match against |
| flags | Number | Combination of git_pathspec_flag_t options to control match |

| Returns |  |
| --- | --- |
| [PathspecMatchList](/api/pathspec_match_list/) | Output list of matches; pass NULL to just get return value |

## <a name="matchTree"></a><span>Pathspec#</span>matchTree <span class="tags"><span class="async">Async</span></span>

```js
pathspec.matchTree(tree, flags).then(function(pathspecMatchList) {
  // Use pathspecMatchList
});
```

| Parameters | Type |
| --- | --- | --- |
| tree | [Tree](/api/tree/) | The root-level tree to match against |
| flags | Number | Combination of git_pathspec_flag_t options to control match |

| Returns |  |
| --- | --- |
| [PathspecMatchList](/api/pathspec_match_list/) | Output list of matches; pass NULL to just get return value |

## <a name="matchWorkdir"></a><span>Pathspec#</span>matchWorkdir <span class="tags"><span class="async">Async</span></span>

```js
pathspec.matchWorkdir(repo, flags).then(function(pathspecMatchList) {
  // Use pathspecMatchList
});
```

| Parameters | Type |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository in which to match; bare repo is an error |
| flags | Number | Combination of git_pathspec_flag_t options to control match |

| Returns |  |
| --- | --- |
| [PathspecMatchList](/api/pathspec_match_list/) | Output list of matches; pass NULL to just get return value |

## <a name="matchesPath"></a><span>Pathspec#</span>matchesPath <span class="tags"><span class="sync">Sync</span></span>

```js
var result = pathspec.matchesPath(flags, path);
```

| Parameters | Type |
| --- | --- | --- |
| flags | Number | Combination of git_pathspec_flag_t options to control match |
| path | String | The pathname to attempt to match |

| Returns |  |
| --- | --- |
| Number |  1 is path matches spec, 0 if it does not |

## <a name="FLAG"></a><span>Pathspec.</span>FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Pathspec.FLAG.</span>DEFAULT | 0 |
| <span>Pathspec.FLAG.</span>IGNORE_CASE | 1 |
| <span>Pathspec.FLAG.</span>USE_CASE | 2 |
| <span>Pathspec.FLAG.</span>NO_GLOB | 4 |
| <span>Pathspec.FLAG.</span>NO_MATCH_ERROR | 8 |
| <span>Pathspec.FLAG.</span>FIND_FAILURES | 16 |
| <span>Pathspec.FLAG.</span>FAILURES_ONLY | 32 |

