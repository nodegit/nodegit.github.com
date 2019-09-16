---
layout: default
menu_item: api
title: OidShorten
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#add": "#add"
---

## <a name="create"></a><span>OidShorten.</span>create <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oidShorten = OidShorten.create(min_length);
```

| Parameters | Type |   |
| --- | --- | --- |
| min_length | Number | The minimal length for all identifiers, which will be used even if shorter OIDs would still be unique. |

| Returns |  |
| --- | --- |
| [OidShorten](/api/oid_shorten/) |  a `git_oid_shorten` instance, NULL if OOM |

## <a name="add"></a><span>OidShorten#</span>add <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = oidShorten.add(text_id);
```

| Parameters | Type |
| --- | --- | --- |
| text_id | String | an OID in text form |

| Returns |  |
| --- | --- |
| Number |  the minimal length to uniquely identify all OIDs
		added so far to the set; or an error code (
<
0) if an
		error occurs. |

