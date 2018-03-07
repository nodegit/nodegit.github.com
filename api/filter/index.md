---
layout: default
menu_item: api
title: Filter
description: Version 0.19.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "listContains": "#listContains"
  "listLength": "#listLength"
  "load": "#load"
  "unregister": "#unregister"
  "#applyToBlob": "#applyToBlob"
  "#applyToData": "#applyToData"
  "#applyToFile": "#applyToFile"
  "#free": "#free"
  "#lookup": "#lookup"
  "#register": "#register"
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

## <a name="listLength"></a><span>Filter.</span>listLength <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Filter.listLength(fl);
```

| Parameters | Type |   |
| --- | --- | --- |
| fl | [FilterList](/api/filter_list/) | A filter list |

| Returns |  |
| --- | --- |
| Number |  The number of filters in the list |

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

## <a name="unregister"></a><span>Filter.</span>unregister <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Filter.unregister(name);
```

| Parameters | Type |   |
| --- | --- | --- |
| name | String | The name under which the filter was registered |

| Returns |  |
| --- | --- |
| Number |  0 on success, error code 
<
0 on failure |

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

## <a name="free"></a><span>Filter#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
filter.free();
```

## <a name="lookup"></a><span>Filter#</span>lookup <span class="tags"><span class="sync">Sync</span></span>

```js
var filter = filter.lookup(name);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | The name of the filter |

| Returns |  |
| --- | --- |
| [Filter](/api/filter/) |  |

## <a name="register"></a><span>Filter#</span>register <span class="tags"><span class="sync">Sync</span></span>

```js
var result = filter.register(name, priority);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | A name by which the filter can be referenced. Attempting to register with an in-use name will return GIT_EEXISTS. |
| priority | Number | The priority for filter application |

| Returns |  |
| --- | --- |
| Number |  0 on successful registry, error code 
<
0 on failure |

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

