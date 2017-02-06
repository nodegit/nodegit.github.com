---
layout: default
menu_item: api
title: Packbuilder
description: Version 0.17.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#free": "#free"
  "#hash": "#hash"
  "#insert": "#insert"
  "#insertCommit": "#insertCommit"
  "#insertRecur": "#insertRecur"
  "#insertTree": "#insertTree"
  "#insertWalk": "#insertWalk"
  "#objectCount": "#objectCount"
  "#setThreads": "#setThreads"
  "#written": "#written"
  "STAGE": "#STAGE"
---

## <a name="create"></a><span>Packbuilder.</span>create <span class="tags"><span class="sync">Sync</span></span>

```js
var packbuilder = Packbuilder.create(repo);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository |

| Returns |  |
| --- | --- |
| [Packbuilder](/api/packbuilder/) | The new packbuilder object |

## <a name="free"></a><span>Packbuilder#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
packbuilder.free();
```

## <a name="hash"></a><span>Packbuilder#</span>hash <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = packbuilder.hash();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="insert"></a><span>Packbuilder#</span>insert <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.insert(id, name);
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | The oid of the commit |
| name | String | The name; might be NULL |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="insertCommit"></a><span>Packbuilder#</span>insertCommit <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.insertCommit(id);
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | The oid of the commit |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="insertRecur"></a><span>Packbuilder#</span>insertRecur <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.insertRecur(id, name);
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | the id of the root object to insert |
| name | String | optional name for the object |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="insertTree"></a><span>Packbuilder#</span>insertTree <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.insertTree(id);
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | The oid of the root tree |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="insertWalk"></a><span>Packbuilder#</span>insertWalk <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.insertWalk(walk);
```

| Parameters | Type |
| --- | --- | --- |
| walk | [Revwalk](/api/revwalk/) | the revwalk to use to fill the packbuilder |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="objectCount"></a><span>Packbuilder#</span>objectCount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.objectCount();
```

| Returns |  |
| --- | --- |
| Number |  the number of objects in the packfile |

## <a name="setThreads"></a><span>Packbuilder#</span>setThreads <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.setThreads(n);
```

| Parameters | Type |
| --- | --- | --- |
| n | Number | Number of threads to spawn |

| Returns |  |
| --- | --- |
| Number |  number of actual threads to be used |

## <a name="written"></a><span>Packbuilder#</span>written <span class="tags"><span class="sync">Sync</span></span>

```js
var result = packbuilder.written();
```

| Returns |  |
| --- | --- |
| Number |  the number of objects which have already been written |

## <a name="STAGE"></a><span>Packbuilder.</span>STAGE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Packbuilder.STAGE.</span>ADDING_OBJECTS | 0 |
| <span>Packbuilder.STAGE.</span>DELTAFICATION | 1 |

