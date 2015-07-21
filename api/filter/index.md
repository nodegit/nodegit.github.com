---
layout: default
menu_item: api
title: Filter
description: Version 0.4.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "listLength": "#listLength"
  "listNew": "#listNew"
  "unregister": "#unregister"
  "#lookup": "#lookup"
  "#register": "#register"
  "MODE": "#MODE"
  "OPT": "#OPT"
  "Instance Variables": "#ivars"
---

## <a name="listLength"></a><span>Filter.</span>listLength <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Filter.listLength(fl);
```

| Parameters | Type |   |
| --- | --- | --- |
| fl | [FilterList](/api/filter_list/) | A filter list |

| Returns |  |
| --- | --- |
| Number |  The number of filters in the list |

## <a name="listNew"></a><span>Filter.</span>listNew <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Filter.listNew(repo, mode, options).then(function(filterList) {
  // Use filterList
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| mode | Number |  |
| options | Number |  |

| Returns |  |
| --- | --- |
| [FilterList](/api/filter_list/) |  |

## <a name="unregister"></a><span>Filter.</span>unregister <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Filter.unregister(name);
```

| Parameters | Type |   |
| --- | --- | --- |
| name | String | The name under which the filter was registered |

| Returns |  |
| --- | --- |
| Number |  0 on success, error code 
<
0 on failure |

## <a name="lookup"></a><span>Filter#</span>lookup <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var filter = filter.lookup(name);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | The name of the filter |

| Returns |  |
| --- | --- |
| [Filter](/api/filter/) |  |

## <a name="register"></a><span>Filter#</span>register <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = filter.register(name, priority);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | A name by which the filter can be referenced. Attempting to register with an in-use name will return GIT_EEXISTS. |
| priority | Number | The priority for filter application |

| Returns |  |
| --- | --- |
| Number |  0 on successful registry, error code 
<
0 on failure |

## <a name="MODE"></a><span>Filter.</span>MODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Filter.MODE.</span>TO_WORKTREE | 0 |
| <span>Filter.MODE.</span>SMUDGE | 0 |
| <span>Filter.MODE.</span>TO_ODB | 1 |
| <span>Filter.MODE.</span>CLEAN | 1 |

## <a name="OPT"></a><span>Filter.</span>OPT <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Filter.OPT.</span>DEFAULT | 0 |
| <span>Filter.OPT.</span>ALLOW_UNSAFE | 1 |

## <a name="ivars"></a>Instance Variables

| Variable | Type |
| --- | --- |
| <a name="attributes"></a>attributes | String |
| <a name="version"></a>version | Number |

