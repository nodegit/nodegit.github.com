---
layout: default
menu_item: api
title: Blob
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "createFromBuffer": "#createFromBuffer"
  "createFromDisk": "#createFromDisk"
  "createFromWorkdir": "#createFromWorkdir"
  "filteredContent": "#filteredContent"
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#content": "#content"
  "#dup": "#dup"
  "#filemode": "#filemode"
  "#filter": "#filter"
  "#id": "#id"
  "#isBinary": "#isBinary"
  "#owner": "#owner"
  "#rawcontent": "#rawcontent"
  "#rawsize": "#rawsize"
  "#toString": "#toString"
  "FILTER_FLAG": "#FILTER_FLAG"
---

## <a name="createFromBuffer"></a><span>Blob.</span>createFromBuffer <span class="tags"><span class="async">Async</span></span>

```js
Blob.createFromBuffer(repo, buffer, len).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository where to blob will be written |
| buffer | Buffer | data to be written into the blob |
| len | Number | length of the data |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | return the id of the written blob |

## <a name="createFromDisk"></a><span>Blob.</span>createFromDisk <span class="tags"><span class="async">Async</span></span>

```js
Blob.createFromDisk(repo, path).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository where the blob will be written. this repository can be bare or not |
| path | String | file from which the blob will be created |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | return the id of the written blob |

## <a name="createFromWorkdir"></a><span>Blob.</span>createFromWorkdir <span class="tags"><span class="async">Async</span></span>

```js
Blob.createFromWorkdir(repo, relative_path).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository where the blob will be written. this repository cannot be bare |
| relative_path | String | file from which the blob will be created, relative to the repository's working dir |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | return the id of the written blob |

## <a name="filteredContent"></a><span>Blob.</span>filteredContent <span class="tags"><span class="async">Async</span></span>

```js
Blob.filteredContent(blob, as_path, check_for_binary_data).then(function(buffer) {
  // Use buffer
});
```

| Parameters | Type |   |
| --- | --- | --- |
| blob | [Blob](/api/blob/) |  |
| as_path | String |  |
| check_for_binary_data | Number |  |

| Returns |  |
| --- | --- |
| Buffer |  |

## <a name="lookup"></a><span>Blob.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Blob.lookup(repo, id).then(function(blob) {
  // Use blob
});
```

Retrieves the blob pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the blob lives in |
| id | String, [Oid](/api/oid/), [Blob](/api/blob/) | The blob to lookup |

| Returns |  |
| --- | --- |
| [Blob](/api/blob/) |  |

## <a name="lookupPrefix"></a><span>Blob.</span>lookupPrefix <span class="tags"><span class="async">Async</span></span>

```js
Blob.lookupPrefix(repo, id, len).then(function(blob) {
  // Use blob
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repo to use when locating the blob. |
| id | [Oid](/api/oid/) | identity of the blob to locate. |
| len | Number | the length of the short identifier |

| Returns |  |
| --- | --- |
| [Blob](/api/blob/) |  |

## <a name="content"></a><span>Blob#</span>content <span class="tags"><span class="sync">Sync</span></span>

```js
var buffer = blob.content();
```

Retrieve the content of the Blob.

| Returns |  |
| --- | --- |
| Buffer | Contents as a buffer. |

## <a name="dup"></a><span>Blob#</span>dup <span class="tags"><span class="async">Async</span></span>

```js
blob.dup().then(function(blob) {
  // Use blob
});
```

| Returns |  |
| --- | --- |
| [Blob](/api/blob/) |  |

## <a name="filemode"></a><span>Blob#</span>filemode <span class="tags"><span class="sync">Sync</span></span>

```js
var number = blob.filemode();
```

Retrieve the Blob's type.

| Returns |  |
| --- | --- |
| Number | The filemode of the blob. |

## <a name="filter"></a><span>Blob#</span>filter <span class="tags"><span class="async">Async</span></span>

```js
blob.filter(asPath, opts).then(function(promiseString) {
  // Use promiseString
});
```

Get a buffer with the filtered content of a blob.

This applies filters as if the blob was being checked out to the
working directory under the specified filename. This may apply
CRLF filtering or other types of changes depending on the file
attributes set for the blob and the content detected in it.

| Parameters | Type |
| --- | --- | --- |
| asPath |  | Path used for file attribute lookups, etc. |
| opts |  | Options to use for filtering the blob |

| Returns |  |
| --- | --- |
| Promise.<string> |  |

## <a name="id"></a><span>Blob#</span>id <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = blob.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  SHA1 hash for this blob. |

## <a name="isBinary"></a><span>Blob#</span>isBinary <span class="tags"><span class="sync">Sync</span></span>

```js
var result = blob.isBinary();
```

| Returns |  |
| --- | --- |
| Number |  1 if the content of the blob is detected
 as binary; 0 otherwise. |

## <a name="owner"></a><span>Blob#</span>owner <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = blob.owner();
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  Repository that contains this blob. |

## <a name="rawcontent"></a><span>Blob#</span>rawcontent <span class="tags"><span class="sync">Sync</span></span>

```js
var buffer = blob.rawcontent();
```

| Returns |  |
| --- | --- |
| Buffer |  |

## <a name="rawsize"></a><span>Blob#</span>rawsize <span class="tags"><span class="sync">Sync</span></span>

```js
var result = blob.rawsize();
```

| Returns |  |
| --- | --- |
| Number |  size on bytes |

## <a name="toString"></a><span>Blob#</span>toString <span class="tags"><span class="sync">Sync</span></span>

```js
var string = blob.toString();
```

Retrieve the Blob's content as String.

| Returns |  |
| --- | --- |
| String | Contents as a string. |

## <a name="FILTER_FLAG"></a><span>Blob.</span>FILTER_FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Blob.FILTER_FLAG.</span>CHECK_FOR_BINARY | 1 |
| <span>Blob.FILTER_FLAG.</span>NO_SYSTEM_ATTRIBUTES | 2 |
| <span>Blob.FILTER_FLAG.</span>ATTTRIBUTES_FROM_HEAD | 4 |

