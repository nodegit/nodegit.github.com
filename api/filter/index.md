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
  "listLength": "#listLength"
  "listNew": "#listNew"
  "listStreamBlob": "#listStreamBlob"
  "listStreamData": "#listStreamData"
  "listStreamFile": "#listStreamFile"
  "load": "#load"
  "unregister": "#unregister"
  "#applyToBlob": "#applyToBlob"
  "#applyToData": "#applyToData"
  "#applyToFile": "#applyToFile"
  "#filemode": "#filemode"
  "#flags": "#flags"
  "#id": "#id"
  "#init": "#init"
  "#listPush": "#listPush"
  "#lookup": "#lookup"
  "#mode": "#mode"
  "#path": "#path"
  "#register": "#register"
  "#repo": "#repo"
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

## <a name="listNew"></a><span>Filter.</span>listNew <span class="tags"><span class="async">Async</span></span>

```js
Filter.listNew(repo, mode, options).then(function(filterList) {
  // Use filterList
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| mode | Number |  |
| options | Number |  |

| Returns |  |
| --- | --- |
| [FilterList](/api/filter_list/) |  |

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

## <a name="filemode"></a><span>Filter#</span>filemode <span class="tags"><span class="sync">Sync</span></span>

```js
var result = filter.filemode();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="flags"></a><span>Filter#</span>flags <span class="tags"><span class="sync">Sync</span></span>

```js
var result = filter.flags();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="id"></a><span>Filter#</span>id <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = filter.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="init"></a><span>Filter#</span>init <span class="tags"><span class="sync">Sync</span></span>

```js
var result = filter.init(version);
```

| Parameters | Type |
| --- | --- | --- |
| version | Number | Version the struct; pass `GIT_FILTER_VERSION` |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="listPush"></a><span>Filter#</span>listPush <span class="tags"><span class="sync">Sync</span></span>

```js
var result = filter.listPush(fl, payload);
```

| Parameters | Type |
| --- | --- | --- |
| fl | [FilterList](/api/filter_list/) |  |
| payload | Void |  |

| Returns |  |
| --- | --- |
| Number |  |

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

## <a name="mode"></a><span>Filter#</span>mode <span class="tags"><span class="sync">Sync</span></span>

```js
var result = filter.mode();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="path"></a><span>Filter#</span>path <span class="tags"><span class="sync">Sync</span></span>

```js
var string = filter.path();
```

| Returns |  |
| --- | --- |
| String |  |

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

## <a name="repo"></a><span>Filter#</span>repo <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = filter.repo();
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

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

