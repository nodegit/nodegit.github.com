---
layout: default
menu_item: api
title: OdbObject
description: Version 0.8.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#data": "#data"
  "#dup": "#dup"
  "#free": "#free"
  "#id": "#id"
  "#size": "#size"
  "#type": "#type"
---

## <a name="data"></a><span>OdbObject#</span>data <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var buffer = odbObject.data();
```

| Returns |  |
| --- | --- |
| Buffer |  the data |

## <a name="dup"></a><span>OdbObject#</span>dup <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
odbObject.dup().then(function(odbObject) {
  // Use odbObject
});
```

| Returns |  |
| --- | --- |
| [OdbObject](/api/odb_object/) | the copy |

## <a name="free"></a><span>OdbObject#</span>free <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
odbObject.free();
```

## <a name="id"></a><span>OdbObject#</span>id <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = odbObject.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the OID |

## <a name="size"></a><span>OdbObject#</span>size <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = odbObject.size();
```

| Returns |  |
| --- | --- |
| Number |  the size |

## <a name="type"></a><span>OdbObject#</span>type <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = odbObject.type();
```

| Returns |  |
| --- | --- |
| Number |  the type |

