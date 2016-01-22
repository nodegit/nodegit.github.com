---
layout: default
menu_item: api
title: Attr
description: Version 0.9.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "addMacro": "#addMacro"
  "cacheFlush": "#cacheFlush"
  "get": "#get"
  "getMany": "#getMany"
  "value": "#value"
  "STATES": "#STATES"
---

## <a name="addMacro"></a><span>Attr.</span>addMacro <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Attr.addMacro(repo, name, values);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| name | String |  |
| values | String |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="cacheFlush"></a><span>Attr.</span>cacheFlush <span class="tags"><span class="sync">Sync</span></span>

```js
Attr.cacheFlush(repo);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |

## <a name="get"></a><span>Attr.</span>get <span class="tags"><span class="async">Async</span></span>

```js
Attr.get(repo, flags, path, name).then(function(string) {
  // Use string
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository containing the path. |
| flags | Number | A combination of GIT_ATTR_CHECK... flags. |
| path | String | The path to check for attributes. Relative paths are interpreted relative to the repo root. The file does not have to exist, but if it does not, then it will be treated as a plain file (not a directory). |
| name | String | The name of the attribute to look up. |

| Returns |  |
| --- | --- |
| String | Output of the value of the attribute.  Use the GIT_ATTR_...
             macros to test for TRUE, FALSE, UNSPECIFIED, etc. or just
             use the string value for attributes set to a value.  You
             should NOT modify or free this value. |

## <a name="getMany"></a><span>Attr.</span>getMany <span class="tags"><span class="sync">Sync</span></span>

```js
var array = Attr.getMany(repo, flags, path, num_attr, names);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository containing the path. |
| flags | Number | A combination of GIT_ATTR_CHECK... flags. |
| path | String | The path inside the repo to check attributes. This does not have to exist, but if it does not, then it will be treated as a plain file (i.e. not a directory). |
| num_attr | Number | The number of attributes being looked up |
| names | String | An array of num_attr strings containing attribute names. |

| Returns |  |
| --- | --- |
| Array |  |

## <a name="value"></a><span>Attr.</span>value <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Attr.value(attr);
```

| Parameters | Type |   |
| --- | --- | --- |
| attr | String | The attribute |

| Returns |  |
| --- | --- |
| Number |  the value type for the attribute |

## <a name="STATES"></a><span>Attr.</span>STATES <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Attr.STATES.</span>UNSPECIFIED_T | 0 |
| <span>Attr.STATES.</span>TRUE_T | 1 |
| <span>Attr.STATES.</span>FALSE_T | 2 |
| <span>Attr.STATES.</span>VALUE_T | 3 |

