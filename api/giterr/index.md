---
layout: default
menu_item: api
title: Giterr
description: Version 0.7.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "errClear": "#errClear"
  "errDetach": "#errDetach"
  "errLast": "#errLast"
  "errSetOom": "#errSetOom"
  "errSetString": "#errSetString"
---

## <a name="errClear"></a><span>Giterr.</span>errClear <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
Giterr.errClear();
```

## <a name="errDetach"></a><span>Giterr.</span>errDetach <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Giterr.errDetach(cpy);
```

| Parameters | Type |   |
| --- | --- | --- |
| cpy | [Error](/api/error/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="errLast"></a><span>Giterr.</span>errLast <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var error = Giterr.errLast();
```

| Returns |  |
| --- | --- |
| [Error](/api/error/) |  A git_error object. |

## <a name="errSetOom"></a><span>Giterr.</span>errSetOom <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
Giterr.errSetOom();
```

## <a name="errSetString"></a><span>Giterr.</span>errSetString <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
Giterr.errSetString(error_class, string);
```

| Parameters | Type |   |
| --- | --- | --- |
| error_class | Number | One of the `git_error_t` enum above describing the general subsystem that is responsible for the error. |
| string | String | The formatted error message to keep |

