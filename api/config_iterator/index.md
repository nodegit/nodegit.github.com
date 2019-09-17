---
layout: default
menu_item: api
title: ConfigIterator
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createGlob": "#createGlob"
  "createMultivar": "#createMultivar"
  "#next": "#next"
---

## <a name="create"></a><span>ConfigIterator.</span>create <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
ConfigIterator.create(cfg).then(function(configIterator) {
  // Use configIterator
});
```

| Parameters | Type |   |
| --- | --- | --- |
| cfg | [Config](/api/config/) | where to ge the variables from |

| Returns |  |
| --- | --- |
| [ConfigIterator](/api/config_iterator/) |  |

## <a name="createGlob"></a><span>ConfigIterator.</span>createGlob <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
ConfigIterator.createGlob(cfg, regexp).then(function(configIterator) {
  // Use configIterator
});
```

| Parameters | Type |   |
| --- | --- | --- |
| cfg | [Config](/api/config/) | where to ge the variables from |
| regexp | String | regular expression to match the names |

| Returns |  |
| --- | --- |
| [ConfigIterator](/api/config_iterator/) |  |

## <a name="createMultivar"></a><span>ConfigIterator.</span>createMultivar <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
ConfigIterator.createMultivar(cfg, name, regexp).then(function(configIterator) {
  // Use configIterator
});
```

| Parameters | Type |   |
| --- | --- | --- |
| cfg | [Config](/api/config/) | where to look for the variable |
| name | String | the variable's name |
| regexp | String | regular expression to filter which variables we're interested in. Use NULL to indicate all |

| Returns |  |
| --- | --- |
| [ConfigIterator](/api/config_iterator/) |  |

## <a name="next"></a><span>ConfigIterator#</span>next <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = configIterator.next(entry);
```

| Parameters | Type |
| --- | --- | --- |
| entry | [ConfigEntry](/api/config_entry/) | pointer to store the entry |

| Returns |  |
| --- | --- |
| Number |  0 or an error code. GIT_ITEROVER if the iteration has completed |

