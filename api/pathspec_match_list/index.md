---
layout: default
menu_item: api
title: PathspecMatchList
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#diffEntry": "#diffEntry"
  "#entry": "#entry"
  "#entrycount": "#entrycount"
  "#failedEntry": "#failedEntry"
  "#failedEntrycount": "#failedEntrycount"
---

## <a name="diffEntry"></a><span>PathspecMatchList#</span>diffEntry <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var diffDelta = pathspecMatchList.diffEntry(pos);
```

| Parameters | Type |
| --- | --- | --- |
| pos | Number | The index into the list |

| Returns |  |
| --- | --- |
| [DiffDelta](/api/diff_delta/) |  The filename of the match |

## <a name="entry"></a><span>PathspecMatchList#</span>entry <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = pathspecMatchList.entry(pos);
```

| Parameters | Type |
| --- | --- | --- |
| pos | Number | The index into the list |

| Returns |  |
| --- | --- |
| String |  The filename of the match |

## <a name="entrycount"></a><span>PathspecMatchList#</span>entrycount <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = pathspecMatchList.entrycount();
```

| Returns |  |
| --- | --- |
| Number |  Number of items in match list |

## <a name="failedEntry"></a><span>PathspecMatchList#</span>failedEntry <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = pathspecMatchList.failedEntry(pos);
```

| Parameters | Type |
| --- | --- | --- |
| pos | Number | The index into the failed items |

| Returns |  |
| --- | --- |
| String |  The pathspec pattern that didn't match anything |

## <a name="failedEntrycount"></a><span>PathspecMatchList#</span>failedEntrycount <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = pathspecMatchList.failedEntrycount();
```

| Returns |  |
| --- | --- |
| Number |  Number of items in original pathspec that had no matches |

