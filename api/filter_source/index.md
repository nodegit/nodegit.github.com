---
layout: default
menu_item: api
title: FilterSource
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#filemode": "#filemode"
  "#flags": "#flags"
  "#id": "#id"
  "#mode": "#mode"
  "#path": "#path"
  "#repo": "#repo"
---

## <a name="filemode"></a><span>FilterSource#</span>filemode <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = filterSource.filemode();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="flags"></a><span>FilterSource#</span>flags <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = filterSource.flags();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="id"></a><span>FilterSource#</span>id <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = filterSource.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="mode"></a><span>FilterSource#</span>mode <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = filterSource.mode();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="path"></a><span>FilterSource#</span>path <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = filterSource.path();
```

| Returns |  |
| --- | --- |
| String |  |

## <a name="repo"></a><span>FilterSource#</span>repo <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
filterSource.repo().then(function(repository) {
  // Use repository
});
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

