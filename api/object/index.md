---
layout: default
menu_item: api
title: Object
description: Version 0.9.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "size": "#size"
  "string2type": "#string2type"
  "type2string": "#type2string"
  "typeisloose": "#typeisloose"
  "#dup": "#dup"
  "#free": "#free"
  "#id": "#id"
  "#lookupByPath": "#lookupByPath"
  "#owner": "#owner"
  "#peel": "#peel"
  "#shortId": "#shortId"
  "#type": "#type"
  "TYPE": "#TYPE"
---

## <a name="lookup"></a><span>Object.</span>lookup <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Object.lookup(repo, id, type).then(function(object) {
  // Use object
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to look up the object |
| id | [Oid](/api/oid/) | the unique identifier for the object |
| type | Number | the type of the object |

| Returns |  |
| --- | --- |
| [Object](/api/object/) |  |

## <a name="lookupPrefix"></a><span>Object.</span>lookupPrefix <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Object.lookupPrefix(repo, id, len, type).then(function(object) {
  // Use object
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to look up the object |
| id | [Oid](/api/oid/) | a short identifier for the object |
| len | Number | the length of the short identifier |
| type | Number | the type of the object |

| Returns |  |
| --- | --- |
| [Object](/api/object/) | the looked-up object |

## <a name="size"></a><span>Object.</span>size <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Object.size(type);
```

| Parameters | Type |   |
| --- | --- | --- |
| type | Number | object type to get its size |

| Returns |  |
| --- | --- |
| Number |  size in bytes of the object |

## <a name="string2type"></a><span>Object.</span>string2type <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Object.string2type(str);
```

| Parameters | Type |   |
| --- | --- | --- |
| str | String | the string to convert. |

| Returns |  |
| --- | --- |
| Number |  the corresponding git_otype. |

## <a name="type2string"></a><span>Object.</span>type2string <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = Object.type2string(type);
```

| Parameters | Type |   |
| --- | --- | --- |
| type | Number | object type to convert. |

| Returns |  |
| --- | --- |
| String |  the corresponding string representation. |

## <a name="typeisloose"></a><span>Object.</span>typeisloose <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Object.typeisloose(type);
```

| Parameters | Type |   |
| --- | --- | --- |
| type | Number | object type to test. |

| Returns |  |
| --- | --- |
| Number |  true if the type represents a valid loose object type,
 false otherwise. |

## <a name="dup"></a><span>Object#</span>dup <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
object.dup().then(function(object) {
  // Use object
});
```

| Returns |  |
| --- | --- |
| [Object](/api/object/) |  |

## <a name="free"></a><span>Object#</span>free <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
object.free();
```

## <a name="id"></a><span>Object#</span>id <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = object.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the SHA1 id |

## <a name="lookupByPath"></a><span>Object#</span>lookupByPath <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
object.lookupByPath(path, type).then(function(object) {
  // Use object
});
```

| Parameters | Type |
| --- | --- | --- |
| path | String | relative path from the root object to the desired object |
| type | Number | type of object desired |

| Returns |  |
| --- | --- |
| [Object](/api/object/) | buffer that receives the object (which must be freed
            by the caller) |

## <a name="owner"></a><span>Object#</span>owner <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var repository = object.owner();
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  the repository who owns this object |

## <a name="peel"></a><span>Object#</span>peel <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
object.peel(target_type).then(function(object) {
  // Use object
});
```

| Parameters | Type |
| --- | --- | --- |
| target_type | Number | The type of the requested object (a GIT_OBJ_ value) |

| Returns |  |
| --- | --- |
| [Object](/api/object/) |  |

## <a name="shortId"></a><span>Object#</span>shortId <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
object.shortId().then(function(buf) {
  // Use buf
});
```

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | Buffer to write string into |

## <a name="type"></a><span>Object#</span>type <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = object.type();
```

| Returns |  |
| --- | --- |
| Number |  the object's type |

## <a name="TYPE"></a><span>Object.</span>TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Object.TYPE.</span>ANY | -2 |
| <span>Object.TYPE.</span>BAD | -1 |
| <span>Object.TYPE.</span>EXT1 | 0 |
| <span>Object.TYPE.</span>COMMIT | 1 |
| <span>Object.TYPE.</span>TREE | 2 |
| <span>Object.TYPE.</span>BLOB | 3 |
| <span>Object.TYPE.</span>TAG | 4 |
| <span>Object.TYPE.</span>EXT2 | 5 |
| <span>Object.TYPE.</span>OFS_DELTA | 6 |
| <span>Object.TYPE.</span>REF_DELTA | 7 |

