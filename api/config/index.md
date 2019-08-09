---
layout: default
menu_item: api
title: Config
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "findGlobal": "#findGlobal"
  "findProgramdata": "#findProgramdata"
  "findSystem": "#findSystem"
  "findXdg": "#findXdg"
  "openDefault": "#openDefault"
  "openOndisk": "#openOndisk"
  "#deleteEntry": "#deleteEntry"
  "#deleteMultivar": "#deleteMultivar"
  "#getBool": "#getBool"
  "#getEntry": "#getEntry"
  "#getInt32": "#getInt32"
  "#getInt64": "#getInt64"
  "#getPath": "#getPath"
  "#getStringBuf": "#getStringBuf"
  "#lock": "#lock"
  "#setBool": "#setBool"
  "#setInt32": "#setInt32"
  "#setInt64": "#setInt64"
  "#setMultivar": "#setMultivar"
  "#setString": "#setString"
  "#snapshot": "#snapshot"
  "LEVEL": "#LEVEL"
  "MAP": "#MAP"
---

## <a name="findGlobal"></a><span>Config.</span>findGlobal <span class="tags"><span class="async">Async</span></span>

```js
Config.findGlobal().then(function(buf) {
  // Use buf
});
```

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) |  |

## <a name="findProgramdata"></a><span>Config.</span>findProgramdata <span class="tags"><span class="async">Async</span></span>

```js
Config.findProgramdata().then(function(buf) {
  // Use buf
});
```

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) |  |

## <a name="findSystem"></a><span>Config.</span>findSystem <span class="tags"><span class="async">Async</span></span>

```js
Config.findSystem().then(function(buf) {
  // Use buf
});
```

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) |  |

## <a name="findXdg"></a><span>Config.</span>findXdg <span class="tags"><span class="async">Async</span></span>

```js
Config.findXdg().then(function(buf) {
  // Use buf
});
```

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) |  |

## <a name="openDefault"></a><span>Config.</span>openDefault <span class="tags"><span class="async">Async</span></span>

```js
Config.openDefault().then(function(config) {
  // Use config
});
```

| Returns |  |
| --- | --- |
| [Config](/api/config/) |  |

## <a name="openOndisk"></a><span>Config.</span>openOndisk <span class="tags"><span class="async">Async</span></span>

```js
Config.openOndisk(path).then(function(config) {
  // Use config
});
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String | Path to the on-disk file to open |

| Returns |  |
| --- | --- |
| [Config](/api/config/) | The configuration instance to create |

## <a name="deleteEntry"></a><span>Config#</span>deleteEntry <span class="tags"><span class="sync">Sync</span></span>

```js
var result = config.deleteEntry(name);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable to delete |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="deleteMultivar"></a><span>Config#</span>deleteMultivar <span class="tags"><span class="sync">Sync</span></span>

```js
var result = config.deleteMultivar(name, regexp);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |
| regexp | String | a regular expression to indicate which values to delete |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="getBool"></a><span>Config#</span>getBool <span class="tags"><span class="async">Async</span></span>

```js
config.getBool(name).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="getEntry"></a><span>Config#</span>getEntry <span class="tags"><span class="async">Async</span></span>

```js
config.getEntry(name).then(function(configEntry) {
  // Use configEntry
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |

| Returns |  |
| --- | --- |
| [ConfigEntry](/api/config_entry/) |  |

## <a name="getInt32"></a><span>Config#</span>getInt32 <span class="tags"><span class="async">Async</span></span>

```js
config.getInt32(name).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="getInt64"></a><span>Config#</span>getInt64 <span class="tags"><span class="async">Async</span></span>

```js
config.getInt64(name).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="getPath"></a><span>Config#</span>getPath <span class="tags"><span class="async">Async</span></span>

```js
config.getPath(name).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | the buffer in which to store the result |

## <a name="getStringBuf"></a><span>Config#</span>getStringBuf <span class="tags"><span class="async">Async</span></span>

```js
config.getStringBuf(name).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | buffer in which to store the string |

## <a name="lock"></a><span>Config#</span>lock <span class="tags"><span class="async">Async</span></span>

```js
config.lock().then(function(transaction) {
  // Use transaction
});
```

| Returns |  |
| --- | --- |
| [Transaction](/api/transaction/) | the resulting transaction, use this to commit or undo the
 changes |

## <a name="setBool"></a><span>Config#</span>setBool <span class="tags"><span class="async">Async</span></span>

```js
config.setBool(name, value).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |
| value | Number | the value to store |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setInt32"></a><span>Config#</span>setInt32 <span class="tags"><span class="async">Async</span></span>

```js
config.setInt32(name, value).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |
| value | Number | Integer value for the variable |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setInt64"></a><span>Config#</span>setInt64 <span class="tags"><span class="async">Async</span></span>

```js
config.setInt64(name, value).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the variable's name |
| value | Number | Long integer value for the variable |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setMultivar"></a><span>Config#</span>setMultivar <span class="tags"><span class="async">Async</span></span>

```js
config.setMultivar(name, regexp, value).then(function(result) {
  // Use result
});
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
| <span>Config.LEVEL.</span>PROGRAMDATA | 1 |
| <span>Config.LEVEL.</span>SYSTEM | 2 |
| <span>Config.LEVEL.</span>XDG | 3 |
| <span>Config.LEVEL.</span>GLOBAL | 4 |
| <span>Config.LEVEL.</span>LOCAL | 5 |
| <span>Config.LEVEL.</span>APP | 6 |
| <span>Config.LEVEL.</span>HIGHEST_LEVEL | -1 |

## <a name="MAP"></a><span>Config.</span>MAP <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Config.MAP.</span>FALSE | 0 |
| <span>Config.MAP.</span>TRUE | 1 |
| <span>Config.MAP.</span>INT32 | 2 |
| <span>Config.MAP.</span>STRING | 3 |

