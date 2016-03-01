---
layout: default
menu_item: api
title: Odb
description: Version 0.11.6
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "open": "#open"
  "#addDiskAlternate": "#addDiskAlternate"
  "#free": "#free"
  "#read": "#read"
  "#write": "#write"
  "STREAM": "#STREAM"
---

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

## <a name="addDiskAlternate"></a><span>Odb#</span>addDiskAlternate <span class="tags"><span class="sync">Sync</span></span>

```js
var result = odb.addDiskAlternate(path);
```

| Parameters | Type |
| --- | --- | --- |
| path | String | path to the objects folder for the alternate |

| Returns |  |
| --- | --- |
| Number |  0 on success; error code otherwise |

## <a name="free"></a><span>Odb#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
odb.free();
```

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

