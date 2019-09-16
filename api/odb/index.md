---
layout: default
menu_item: api
title: Odb
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "hashfile": "#hashfile"
  "open": "#open"
  "#addDiskAlternate": "#addDiskAlternate"
  "#existsPrefix": "#existsPrefix"
  "#read": "#read"
  "#readPrefix": "#readPrefix"
  "#write": "#write"
  "STREAM": "#STREAM"
---

## <a name="hashfile"></a><span>Odb.</span>hashfile <span class="tags"><span class="async">Async</span></span>

```js
Odb.hashfile(path, type).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String | file to read and determine object id for |
| type | Number | the type of the object that will be hashed |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | oid structure the result is written into. |

## <a name="open"></a><span>Odb.</span>open <span class="tags"><span class="async">Async</span></span>

```js
Odb.open(objects_dir).then(function(odb) {
  // Use odb
});
```

| Parameters | Type |   |
| --- | --- | --- |
| objects_dir | String | path of the backends' "objects" directory. |

| Returns |  |
| --- | --- |
| [Odb](/api/odb/) |  |

## <a name="addDiskAlternate"></a><span>Odb#</span>addDiskAlternate <span class="tags"><span class="async">Async</span></span>

```js
odb.addDiskAlternate(path).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| path | String | path to the objects folder for the alternate |

| Returns |  |
| --- | --- |
| Number |  0 on success; error code otherwise |

## <a name="existsPrefix"></a><span>Odb#</span>existsPrefix <span class="tags"><span class="async">Async</span></span>

```js
odb.existsPrefix(short_id, len).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |
| --- | --- | --- |
| short_id | [Oid](/api/oid/) | A prefix of the id of the object to read. |
| len | Number | The length of the prefix. |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | The full OID of the found object if just one is found. |

## <a name="read"></a><span>Odb#</span>read <span class="tags"><span class="async">Async</span></span>

```js
odb.read(id).then(function(odbObject) {
  // Use odbObject
});
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | identity of the object to read. |

| Returns |  |
| --- | --- |
| [OdbObject](/api/odb_object/) | the read object |

## <a name="readPrefix"></a><span>Odb#</span>readPrefix <span class="tags"><span class="async">Async</span></span>

```js
odb.readPrefix(short_id, len).then(function(odbObject) {
  // Use odbObject
});
```

| Parameters | Type |
| --- | --- | --- |
| short_id | [Oid](/api/oid/) | a prefix of the id of the object to read. |
| len | Number | the length of the prefix |

| Returns |  |
| --- | --- |
| [OdbObject](/api/odb_object/) | the read object |

## <a name="write"></a><span>Odb#</span>write <span class="tags"><span class="async">Async</span></span>

```js
odb.write(data, len, type).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |
| --- | --- | --- |
| data | Buffer | buffer with the data to store |
| len | Number | size of the buffer |
| type | Number | type of the data to store |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="STREAM"></a><span>Odb.</span>STREAM <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Odb.STREAM.</span>RDONLY | 2 |
| <span>Odb.STREAM.</span>WRONLY | 4 |
| <span>Odb.STREAM.</span>RW | 6 |

