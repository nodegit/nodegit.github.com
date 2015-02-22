---
layout: default
menu_item: api
title: Blob
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#content": "#content"
  "#filemode": "#filemode"
  "#id": "#id"
  "#isBinary": "#isBinary"
  "#owner": "#owner"
  "#rawcontent": "#rawcontent"
  "#rawsize": "#rawsize"
  "#toString": "#toString"
---

## <a name="lookup"></a><span>Blob.</span>lookup <span class="tags"><span class="sync">Sync</span></span>

```js
Blob.lookup(repo, id, callback);
```

Retrieves the blob pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the blob lives in |
| id | String, [Oid](/api/oid/), [Blob](/api/blob/) | The blob to lookup |
| callback | Function |  |
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
| [Blob](/api/blob/) | pointer to the looked up blob |

## <a name="content"></a><span>Blob#</span>content <span class="tags"><span class="sync">Sync</span></span>

```js
blob.content();
```

Retrieve the content of the Blob.


## <a name="filemode"></a><span>Blob#</span>filemode <span class="tags"><span class="sync">Sync</span></span>

```js
blob.filemode();
```

Retrieve the Blob's type.


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
| Buffer |  the pointer |

## <a name="rawsize"></a><span>Blob#</span>rawsize <span class="tags"><span class="sync">Sync</span></span>

```js
var result = blob.rawsize();
```


| Returns |  |
| --- | --- |
| Number |  size on bytes |

## <a name="toString"></a><span>Blob#</span>toString <span class="tags"><span class="sync">Sync</span></span>

```js
blob.toString();
```

Retrieve the Blob's content as String.


