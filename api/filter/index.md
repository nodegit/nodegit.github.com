---
layout: default
menu_item: api
title: Filter
description: Version 0.11.5
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
  "unregister": "#unregister"
  "#lookup": "#lookup"
  "#register": "#register"
  "FLAG": "#FLAG"
  "MODE": "#MODE"
  "Instance Variables": "#ivars"
---

## <a name="listContains"></a><span>Filter.</span>listContains <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

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

## <a name="listLength"></a><span>Filter.</span>listLength <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Filter.listLength(fl);
```

| Parameters | Type |   |
| --- | --- | --- |
| fl | [FilterList](/api/filter_list/) | A filter list |

| Returns |  |
| --- | --- |
| Number |  The number of filters in the list |

## <a name="listNew"></a><span>Filter.</span>listNew <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

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

## <a name="listStreamBlob"></a><span>Filter.</span>listStreamBlob <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

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

## <a name="listStreamData"></a><span>Filter.</span>listStreamData <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

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

## <a name="listStreamFile"></a><span>Filter.</span>listStreamFile <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

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

## <a name="unregister"></a><span>Filter.</span>unregister <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

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

## <a name="lookup"></a><span>Filter#</span>lookup <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var filter = filter.lookup(name);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | The name of the filter |

| Returns |  |
| --- | --- |
| [Filter](/api/filter/) |  |

## <a name="register"></a><span>Filter#</span>register <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

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

| Variable | Type |
| --- | --- |
| <a name="attributes"></a>attributes | String |
| <a name="stream"></a>stream | FilterStreamFn |
| <a name="version"></a>version | Number |

