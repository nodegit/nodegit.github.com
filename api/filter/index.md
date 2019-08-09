---
layout: default
menu_item: api
title: Filter
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "listContains": "#listContains"
  "listStreamBlob": "#listStreamBlob"
  "listStreamData": "#listStreamData"
  "listStreamFile": "#listStreamFile"
  "load": "#load"
  "#applyToBlob": "#applyToBlob"
  "#applyToData": "#applyToData"
  "#applyToFile": "#applyToFile"
  "FLAG": "#FLAG"
  "MODE": "#MODE"
  "Instance Variables": "#ivars"
---

```js
var filter = new Filter();
```

## <a name="listContains"></a><span>Filter.</span>listContains <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Filter.listContains(filters, name);
```

| Parameters | Type |   |
| --- | --- | --- |
| filters | [FilterList](/api/filter_list/) | A loaded git_filter_list (or NULL) |
| name | String | The name of the filter to query |

| Returns |  |
| --- | --- |
| Number |  1 if the filter is in the list, 0 otherwise |

## <a name="listStreamBlob"></a><span>Filter.</span>listStreamBlob <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Filter.listStreamBlob(filters, blob, target);
```

| Parameters | Type |   |
| --- | --- | --- |
| filters | [FilterList](/api/filter_list/) | the list of filters to apply |
| blob | [Blob](/api/blob/) | the blob to filter |
| target | [Writestream](/api/writestream/) | the stream into which the data will be written |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="listStreamData"></a><span>Filter.</span>listStreamData <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Filter.listStreamData(filters, data, target);
```

| Parameters | Type |   |
| --- | --- | --- |
| filters | [FilterList](/api/filter_list/) | the list of filters to apply |
| data | [Buf](/api/buf/) | the buffer to filter |
| target | [Writestream](/api/writestream/) | the stream into which the data will be written |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="listStreamFile"></a><span>Filter.</span>listStreamFile <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Filter.listStreamFile(filters, repo, path, target);
```

| Parameters | Type |   |
| --- | --- | --- |
| filters | [FilterList](/api/filter_list/) | the list of filters to apply |
| repo | [Repository](/api/repository/) | the repository in which to perform the filtering |
| path | String | the path of the file to filter, a relative path will be taken as relative to the workdir |
| target | [Writestream](/api/writestream/) | the stream into which the data will be written |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="load"></a><span>Filter.</span>load <span class="tags"><span class="async">Async</span></span>

```js
Filter.load(repo, blob, path, mode, flags).then(function(filterList) {
  // Use filterList
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository object that contains `path` |
| blob | [Blob](/api/blob/) | The blob to which the filter will be applied (if known) |
| path | String | Relative path of the file to be filtered |
| mode | Number | Filtering direction (WT->ODB or ODB->WT) |
| flags | Number | Combination of `git_filter_flag_t` flags |

| Returns |  |
| --- | --- |
| [FilterList](/api/filter_list/) | Output newly created git_filter_list (or NULL) |

## <a name="applyToBlob"></a><span>Filter#</span>applyToBlob <span class="tags"><span class="async">Async</span></span>

```js
filter.applyToBlob(blob).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| blob | [Blob](/api/blob/) | the blob to filter |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | buffer into which to store the filtered file |

## <a name="applyToData"></a><span>Filter#</span>applyToData <span class="tags"><span class="async">Async</span></span>

```js
filter.applyToData(in).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| in | [Buf](/api/buf/) | Buffer containing the data to filter |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | Buffer to store the result of the filtering |

## <a name="applyToFile"></a><span>Filter#</span>applyToFile <span class="tags"><span class="async">Async</span></span>

```js
filter.applyToFile(repo, path).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to perform the filtering |
| path | String | the path of the file to filter, a relative path will be taken as relative to the workdir |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | buffer into which to store the filtered file |

## <a name="FLAG"></a><span>Filter.</span>FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Filter.FLAG.</span>DEFAULT | 0 |
| <span>Filter.FLAG.</span>ALLOW_UNSAFE | 1 |

## <a name="MODE"></a><span>Filter.</span>MODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Filter.MODE.</span>TO_WORKTREE | 0 |
| <span>Filter.MODE.</span>SMUDGE | 0 |
| <span>Filter.MODE.</span>TO_ODB | 1 |
| <span>Filter.MODE.</span>CLEAN | 1 |

## <a name="ivars"></a>Instance Variables

| Variable | Type | Description |
| --- | --- | --- |
| <a name="apply"></a>apply | FilterApplyFn |  |
| <a name="attributes"></a>attributes | String |  |
| <a name="check"></a>check | FilterCheckFn |  |
| <a name="cleanup"></a>cleanup | FilterCleanupFn |  |
| <a name="initialize"></a>initialize | FilterInitFn |  |
| <a name="shutdown"></a>shutdown | FilterShutdownFn |  |
| <a name="version"></a>version | Number |  |

