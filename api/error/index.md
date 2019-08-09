---
layout: default
menu_item: api
title: Error
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "clear": "#clear"
  "setOom": "#setOom"
  "setString": "#setString"
  "#last": "#last"
  "CODE": "#CODE"
  "ERROR": "#ERROR"
  "Instance Variables": "#ivars"
---

## <a name="clear"></a><span>Error.</span>clear <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
Error.clear();
```

## <a name="setOom"></a><span>Error.</span>setOom <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
Error.setOom();
```

## <a name="setString"></a><span>Error.</span>setString <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
Error.setString(error_class, string);
```

| Parameters | Type |   |
| --- | --- | --- |
| error_class | Number | One of the `git_error_t` enum above describing the general subsystem that is responsible for the error. |
| string | String | The formatted error message to keep |

## <a name="last"></a><span>Error#</span>last <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var error = error.last();
```

| Returns |  |
| --- | --- |
| [Error](/api/error/) |  A git_error object. |

## <a name="CODE"></a><span>Error.</span>CODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Error.CODE.</span>OK | 0 |
| <span>Error.CODE.</span>ERROR | -1 |
| <span>Error.CODE.</span>ENOTFOUND | -3 |
| <span>Error.CODE.</span>EEXISTS | -4 |
| <span>Error.CODE.</span>EAMBIGUOUS | -5 |
| <span>Error.CODE.</span>EBUFS | -6 |
| <span>Error.CODE.</span>EUSER | -7 |
| <span>Error.CODE.</span>EBAREREPO | -8 |
| <span>Error.CODE.</span>EUNBORNBRANCH | -9 |
| <span>Error.CODE.</span>EUNMERGED | -10 |
| <span>Error.CODE.</span>ENONFASTFORWARD | -11 |
| <span>Error.CODE.</span>EINVALIDSPEC | -12 |
| <span>Error.CODE.</span>ECONFLICT | -13 |
| <span>Error.CODE.</span>ELOCKED | -14 |
| <span>Error.CODE.</span>EMODIFIED | -15 |
| <span>Error.CODE.</span>EAUTH | -16 |
| <span>Error.CODE.</span>ECERTIFICATE | -17 |
| <span>Error.CODE.</span>EAPPLIED | -18 |
| <span>Error.CODE.</span>EPEEL | -19 |
| <span>Error.CODE.</span>EEOF | -20 |
| <span>Error.CODE.</span>EINVALID | -21 |
| <span>Error.CODE.</span>EUNCOMMITTED | -22 |
| <span>Error.CODE.</span>EDIRECTORY | -23 |
| <span>Error.CODE.</span>EMERGECONFLICT | -24 |
| <span>Error.CODE.</span>PASSTHROUGH | -30 |
| <span>Error.CODE.</span>ITEROVER | -31 |
| <span>Error.CODE.</span>RETRY | -32 |
| <span>Error.CODE.</span>EMISMATCH | -33 |
| <span>Error.CODE.</span>EINDEXDIRTY | -34 |
| <span>Error.CODE.</span>EAPPLYFAIL | -35 |

## <a name="ERROR"></a><span>Error.</span>ERROR <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Error.ERROR.</span>NONE | 0 |
| <span>Error.ERROR.</span>NOMEMORY | 1 |
| <span>Error.ERROR.</span>OS | 2 |
| <span>Error.ERROR.</span>INVALID | 3 |
| <span>Error.ERROR.</span>REFERENCE | 4 |
| <span>Error.ERROR.</span>ZLIB | 5 |
| <span>Error.ERROR.</span>REPOSITORY | 6 |
| <span>Error.ERROR.</span>CONFIG | 7 |
| <span>Error.ERROR.</span>REGEX | 8 |
| <span>Error.ERROR.</span>ODB | 9 |
| <span>Error.ERROR.</span>INDEX | 10 |
| <span>Error.ERROR.</span>OBJECT | 11 |
| <span>Error.ERROR.</span>NET | 12 |
| <span>Error.ERROR.</span>TAG | 13 |
| <span>Error.ERROR.</span>TREE | 14 |
| <span>Error.ERROR.</span>INDEXER | 15 |
| <span>Error.ERROR.</span>SSL | 16 |
| <span>Error.ERROR.</span>SUBMODULE | 17 |
| <span>Error.ERROR.</span>THREAD | 18 |
| <span>Error.ERROR.</span>STASH | 19 |
| <span>Error.ERROR.</span>CHECKOUT | 20 |
| <span>Error.ERROR.</span>FETCHHEAD | 21 |
| <span>Error.ERROR.</span>MERGE | 22 |
| <span>Error.ERROR.</span>SSH | 23 |
| <span>Error.ERROR.</span>FILTER | 24 |
| <span>Error.ERROR.</span>REVERT | 25 |
| <span>Error.ERROR.</span>CALLBACK | 26 |
| <span>Error.ERROR.</span>CHERRYPICK | 27 |
| <span>Error.ERROR.</span>DESCRIBE | 28 |
| <span>Error.ERROR.</span>REBASE | 29 |
| <span>Error.ERROR.</span>FILESYSTEM | 30 |
| <span>Error.ERROR.</span>PATCH | 31 |
| <span>Error.ERROR.</span>WORKTREE | 32 |
| <span>Error.ERROR.</span>SHA1 | 33 |

## <a name="ivars"></a>Instance Variables

| Variable | Type | Description |
| --- | --- | --- |
| <a name="klass"></a>klass | Number |  |
| <a name="message"></a>message | String |  |

