---
layout: default
menu_item: api
title: Merge
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "commits": "#commits"
  "ANALYSIS": "#ANALYSIS"
  "FILE_FAVOR": "#FILE_FAVOR"
  "FILE_FLAGS": "#FILE_FLAGS"
  "PREFERENCE": "#PREFERENCE"
  "TREE_FLAG": "#TREE_FLAG"
---

## <a name="commits"></a><span>Merge.</span>commits <span class="tags"><span class="sync">Sync</span></span>

```js
Merge.commits(Repository, The, The);
```

Merge 2 commits together and create an new index that can
be used to create a merge commit.


| Parameters | Type |   |
| --- | --- | --- |
| Repository | ep | that contains the given commits |
| The | urCommi | commit that reflects the destination tree |
| The | ption | merge tree options (null for default) |
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

## <a name="FILE_FLAGS"></a><span>Merge.</span>FILE_FLAGS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.FILE_FLAGS.</span>FILE_DEFAULT | 0 |
| <span>Merge.FILE_FLAGS.</span>FILE_STYLE_MERGE | 1 |
| <span>Merge.FILE_FLAGS.</span>FILE_STYLE_DIFF3 | 2 |
| <span>Merge.FILE_FLAGS.</span>FILE_SIMPLIFY_ALNUM | 4 |

## <a name="PREFERENCE"></a><span>Merge.</span>PREFERENCE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.PREFERENCE.</span>NONE | 0 |
| <span>Merge.PREFERENCE.</span>NO_FASTFORWARD | 1 |
| <span>Merge.PREFERENCE.</span>FASTFORWARD_ONLY | 2 |

## <a name="TREE_FLAG"></a><span>Merge.</span>TREE_FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Merge.TREE_FLAG.</span>TREE_FIND_RENAMES | 1 |

