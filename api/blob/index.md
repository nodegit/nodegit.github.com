---
layout: default
menu_item: api
title: Blob
description: Version 0.15.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "createFromBuffer": "#createFromBuffer"
  "createFromDisk": "#createFromDisk"
  "createFromStream": "#createFromStream"
  "createFromWorkdir": "#createFromWorkdir"
  "createFromstreamCommit": "#createFromstreamCommit"
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#content": "#content"
  "#dup": "#dup"
  "#filemode": "#filemode"
  "#free": "#free"
  "#id": "#id"
  "#isBinary": "#isBinary"
  "#owner": "#owner"
  "#rawcontent": "#rawcontent"
  "#rawsize": "#rawsize"
  "#toString": "#toString"
---

## <a name="createFromBuffer"></a><span>Blob.</span>createFromBuffer <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = Blob.createFromBuffer(repo, buffer, len);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository where to blob will be written |
| buffer | Buffer | data to be written into the blob |
| len | Number | length of the data |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | return the id of the written blob |

## <a name="createFromDisk"></a><span>Blob.</span>createFromDisk <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Blob.createFromDisk(id, repo, path);
```

| Parameters | Type |   |
| --- | --- | --- |
| id | [Oid](/api/oid/) | return the id of the written blob |
| repo | [Repository](/api/repository/) | repository where the blob will be written. this repository can be bare or not |
| path | String | file from which the blob will be created |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="createFromStream"></a><span>Blob.</span>createFromStream <span class="tags"><span class="async">Async</span></span>

```js
Blob.createFromStream(repo, hintpath).then(function(writestream) {
  // Use writestream
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where the blob will be written. This repository can be bare or not. |
| hintpath | String | If not NULL, will be used to select data filters to apply onto the content of the blob to be created. |

| Returns |  |
| --- | --- |
| [Writestream](/api/writestream/) | the stream into which to write |

## <a name="createFromWorkdir"></a><span>Blob.</span>createFromWorkdir <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Blob.createFromWorkdir(id, repo, relative_path);
```

| Parameters | Type |   |
| --- | --- | --- |
| id | [Oid](/api/oid/) | return the id of the written blob |
| repo | [Repository](/api/repository/) | repository where the blob will be written. this repository cannot be bare |
| relative_path | String | file from which the blob will be created, relative to the repository's working dir |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="createFromstreamCommit"></a><span>Blob.</span>createFromstreamCommit <span class="tags"><span class="async">Async</span></span>

```js
Blob.createFromstreamCommit(stream).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| stream | [Writestream](/api/writestream/) | the stream to close |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the id of the new blob |

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

## <a name="free"></a><span>Blob#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
blob.free();
```

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

