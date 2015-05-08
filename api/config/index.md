---
layout: default
menu_item: api
title: Config
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "openDefault": "#openDefault"
  "#getString": "#getString"
  "#setInt64": "#setInt64"
  "#setMultivar": "#setMultivar"
  "#setString": "#setString"
  "#snapshot": "#snapshot"
  "LEVEL": "#LEVEL"
---

## <a name="openDefault"></a><span>Config.</span>openDefault <span class="tags"><span class="async">Async</span></span>

```js
Config.openDefault().then(function(config) {
  // Use config
});
```

| Returns |  |
| --- | --- |
| [Config](/api/config/) |  |

## <a name="getString"></a><span>Config#</span>getString <span class="tags"><span class="async">Async</span></span>

```js
config.getString(name).then(function(string) {
  // Use string
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |

| Returns |  |
| --- | --- |
| String |  |

## <a name="setInt64"></a><span>Config#</span>setInt64 <span class="tags"><span class="sync">Sync</span></span>

```js
var result = config.setInt64(name, value);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |
| value | Number | Long integer value for the variable |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setMultivar"></a><span>Config#</span>setMultivar <span class="tags"><span class="sync">Sync</span></span>

```js
var result = config.setMultivar(name, regexp, value);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |
| regexp | String | a regular expression to indicate which values to replace |
| value | String | the new value. |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="setString"></a><span>Config#</span>setString <span class="tags"><span class="async">Async</span></span>

```js
config.setString(name, value).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |
| value | String | the string to store. |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="snapshot"></a><span>Config#</span>snapshot <span class="tags"><span class="async">Async</span></span>

```js
config.snapshot().then(function(config) {
  // Use config
});
```

| Returns |  |
| --- | --- |
| [Config](/api/config/) |  |

## <a name="LEVEL"></a><span>Config.</span>LEVEL <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Config.LEVEL.</span>SYSTEM | 1 |
| <span>Config.LEVEL.</span>XDG | 2 |
| <span>Config.LEVEL.</span>GLOBAL | 3 |
| <span>Config.LEVEL.</span>LOCAL | 4 |
| <span>Config.LEVEL.</span>APP | 5 |
| <span>Config.LEVEL.</span>HIGHEST_LEVEL | -1 |

