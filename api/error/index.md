---
layout: default
menu_item: api
title: Error
description: Version 0.8.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "CODE": "#CODE"
  "ERROR": "#ERROR"
  "Instance Variables": "#ivars"
---

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
| <span>Error.CODE.</span>PASSTHROUGH | -30 |
| <span>Error.CODE.</span>ITEROVER | -31 |

## <a name="ERROR"></a><span>Error.</span>ERROR <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Error.ERROR.</span>GITERR_NONE | 0 |
| <span>Error.ERROR.</span>GITERR_NOMEMORY | 1 |
| <span>Error.ERROR.</span>GITERR_OS | 2 |
| <span>Error.ERROR.</span>GITERR_INVALID | 3 |
| <span>Error.ERROR.</span>GITERR_REFERENCE | 4 |
| <span>Error.ERROR.</span>GITERR_ZLIB | 5 |
| <span>Error.ERROR.</span>GITERR_REPOSITORY | 6 |
| <span>Error.ERROR.</span>GITERR_CONFIG | 7 |
| <span>Error.ERROR.</span>GITERR_REGEX | 8 |
| <span>Error.ERROR.</span>GITERR_ODB | 9 |
| <span>Error.ERROR.</span>GITERR_INDEX | 10 |
| <span>Error.ERROR.</span>GITERR_OBJECT | 11 |
| <span>Error.ERROR.</span>GITERR_NET | 12 |
| <span>Error.ERROR.</span>GITERR_TAG | 13 |
| <span>Error.ERROR.</span>GITERR_TREE | 14 |
| <span>Error.ERROR.</span>GITERR_INDEXER | 15 |
| <span>Error.ERROR.</span>GITERR_SSL | 16 |
| <span>Error.ERROR.</span>GITERR_SUBMODULE | 17 |
| <span>Error.ERROR.</span>GITERR_THREAD | 18 |
| <span>Error.ERROR.</span>GITERR_STASH | 19 |
| <span>Error.ERROR.</span>GITERR_CHECKOUT | 20 |
| <span>Error.ERROR.</span>GITERR_FETCHHEAD | 21 |
| <span>Error.ERROR.</span>GITERR_MERGE | 22 |
| <span>Error.ERROR.</span>GITERR_SSH | 23 |
| <span>Error.ERROR.</span>GITERR_FILTER | 24 |
| <span>Error.ERROR.</span>GITERR_REVERT | 25 |
| <span>Error.ERROR.</span>GITERR_CALLBACK | 26 |
| <span>Error.ERROR.</span>GITERR_CHERRYPICK | 27 |
| <span>Error.ERROR.</span>GITERR_DESCRIBE | 28 |
| <span>Error.ERROR.</span>GITERR_REBASE | 29 |
| <span>Error.ERROR.</span>GITERR_FILESYSTEM | 30 |

## <a name="ivars"></a>Instance Variables

| Variable | Type |
| --- | --- |
| <a name="klass"></a>klass | Number |
| <a name="message"></a>message | String |

