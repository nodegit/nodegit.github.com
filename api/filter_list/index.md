---
layout: default
menu_item: api
title: FilterList
description: Version 0.19.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "load": "#load"
  "#applyToBlob": "#applyToBlob"
  "#applyToData": "#applyToData"
  "#applyToFile": "#applyToFile"
  "#free": "#free"
---

## <a name="load"></a><span>FilterList.</span>load <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
FilterList.load(repo, blob, path, mode, flags).then(function(filterList) {
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

## <a name="applyToBlob"></a><span>FilterList#</span>applyToBlob <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
filterList.applyToBlob(blob).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| blob | [Blob](/api/blob/) | the blob to filter |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | buffer into which to store the filtered file |

## <a name="applyToData"></a><span>FilterList#</span>applyToData <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
filterList.applyToData(in).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| in | [Buf](/api/buf/) | Buffer containing the data to filter |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | Buffer to store the result of the filtering |

## <a name="applyToFile"></a><span>FilterList#</span>applyToFile <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
filterList.applyToFile(repo, path).then(function(buf) {
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

## <a name="free"></a><span>FilterList#</span>free <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
filterList.free();
```

