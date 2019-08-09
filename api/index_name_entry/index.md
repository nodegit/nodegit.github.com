---
layout: default
menu_item: api
title: IndexNameEntry
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "add": "#add"
  "clear": "#clear"
  "entryCount": "#entryCount"
  "getByIndex": "#getByIndex"
  "Instance Variables": "#ivars"
---

## <a name="add"></a><span>IndexNameEntry.</span>add <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexNameEntry.add(index, ancestor, ours, theirs).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |
| ancestor | String |  |
| ours | String |  |
| theirs | String |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="clear"></a><span>IndexNameEntry.</span>clear <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexNameEntry.clear(index).then(function() {
  // method complete});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |

## <a name="entryCount"></a><span>IndexNameEntry.</span>entryCount <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = IndexNameEntry.entryCount(index);
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="getByIndex"></a><span>IndexNameEntry.</span>getByIndex <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var indexNameEntry = IndexNameEntry.getByIndex(index, n);
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |
| n | Number |  |

| Returns |  |
| --- | --- |
| [IndexNameEntry](/api/index_name_entry/) |  |

## <a name="ivars"></a>Instance Variables

| Variable | Type | Description |
| --- | --- | --- |
| <a name="ancestor"></a>ancestor | String |  |
| <a name="ours"></a>ours | String |  |
| <a name="theirs"></a>theirs | String |  |

