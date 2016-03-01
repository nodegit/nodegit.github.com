---
layout: default
menu_item: api
title: Blame
description: Version 0.11.6
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "file": "#file"
  "initOptions": "#initOptions"
  "#buffer": "#buffer"
  "#free": "#free"
  "#getHunkByIndex": "#getHunkByIndex"
  "#getHunkByLine": "#getHunkByLine"
  "#getHunkCount": "#getHunkCount"
  "FLAG": "#FLAG"
---

## <a name="file"></a><span>Blame.</span>file <span class="tags"><span class="sync">Sync</span></span>

```js
Blame.file(repo, path, [options]);
```

Retrieve the blame of a file

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | that contains the file |
| path | String | to the file to get the blame of |
| [options] | [BlameOptions](/api/blame_options/) | Options for the blame |

## <a name="initOptions"></a><span>Blame.</span>initOptions <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Blame.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [BlameOptions](/api/blame_options/) | The `git_blame_options` struct to initialize |
| version | Number | Version of struct; pass `GIT_BLAME_OPTIONS_VERSION` |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="buffer"></a><span>Blame#</span>buffer <span class="tags"><span class="async">Async</span></span>

```js
blame.buffer(buffer, buffer_len).then(function(blame) {
  // Use blame
});
```

| Parameters | Type |
| --- | --- | --- |
| buffer | String | the (possibly) modified contents of the file |
| buffer_len | Number | number of valid bytes in the buffer |

| Returns |  |
| --- | --- |
| [Blame](/api/blame/) |  |

## <a name="free"></a><span>Blame#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
blame.free();
```

## <a name="getHunkByIndex"></a><span>Blame#</span>getHunkByIndex <span class="tags"><span class="sync">Sync</span></span>

```js
var blameHunk = blame.getHunkByIndex(index);
```

| Parameters | Type |
| --- | --- | --- |
| index | Number | index of the hunk to retrieve |

| Returns |  |
| --- | --- |
| [BlameHunk](/api/blame_hunk/) |  the hunk at the given index, or NULL on error |

## <a name="getHunkByLine"></a><span>Blame#</span>getHunkByLine <span class="tags"><span class="sync">Sync</span></span>

```js
var blameHunk = blame.getHunkByLine(lineno);
```

| Parameters | Type |
| --- | --- | --- |
| lineno | Number | the (1-based) line number to find a hunk for |

| Returns |  |
| --- | --- |
| [BlameHunk](/api/blame_hunk/) |  the hunk that contains the given line, or NULL on error |

## <a name="getHunkCount"></a><span>Blame#</span>getHunkCount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = blame.getHunkCount();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="FLAG"></a><span>Blame.</span>FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Blame.FLAG.</span>NORMAL | 0 |
| <span>Blame.FLAG.</span>TRACK_COPIES_SAME_FILE | 1 |
| <span>Blame.FLAG.</span>TRACK_COPIES_SAME_COMMIT_MOVES | 2 |
| <span>Blame.FLAG.</span>TRACK_COPIES_SAME_COMMIT_COPIES | 4 |
| <span>Blame.FLAG.</span>TRACK_COPIES_ANY_COMMIT_COPIES | 8 |
| <span>Blame.FLAG.</span>FIRST_PARENT | 16 |

