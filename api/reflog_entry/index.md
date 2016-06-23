---
layout: default
menu_item: api
title: ReflogEntry
description: Version 0.14.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#committer": "#committer"
  "#idNew": "#idNew"
  "#idOld": "#idOld"
  "#message": "#message"
---

## <a name="committer"></a><span>ReflogEntry#</span>committer <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var signature = reflogEntry.committer();
```

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  the committer |

## <a name="idNew"></a><span>ReflogEntry#</span>idNew <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = reflogEntry.idNew();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the new oid at this time |

## <a name="idOld"></a><span>ReflogEntry#</span>idOld <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = reflogEntry.idOld();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the old oid |

## <a name="message"></a><span>ReflogEntry#</span>message <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = reflogEntry.message();
```

| Returns |  |
| --- | --- |
| String |  the log msg |

