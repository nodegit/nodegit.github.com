---
layout: default
menu_item: api
title: DiffStats
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#deletions": "#deletions"
  "#filesChanged": "#filesChanged"
  "#insertions": "#insertions"
  "#toBuf": "#toBuf"
---

## <a name="deletions"></a><span>DiffStats#</span>deletions <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = diffStats.deletions();
```

| Returns |  |
| --- | --- |
| Number |  total number of deletions in the diff |

## <a name="filesChanged"></a><span>DiffStats#</span>filesChanged <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = diffStats.filesChanged();
```

| Returns |  |
| --- | --- |
| Number |  total number of files changed in the diff |

## <a name="insertions"></a><span>DiffStats#</span>insertions <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = diffStats.insertions();
```

| Returns |  |
| --- | --- |
| Number |  total number of insertions in the diff |

## <a name="toBuf"></a><span>DiffStats#</span>toBuf <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
diffStats.toBuf(format, width).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| format | Number | Formatting option. |
| width | Number | Target width for output (only affects GIT_DIFF_STATS_FULL) |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | buffer to store the formatted diff statistics in. |

