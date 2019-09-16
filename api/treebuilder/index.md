---
layout: default
menu_item: api
title: Treebuilder
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#clear": "#clear"
  "#entrycount": "#entrycount"
  "#get": "#get"
  "#insert": "#insert"
  "#remove": "#remove"
  "#write": "#write"
---

## <a name="create"></a><span>Treebuilder.</span>create <span class="tags"><span class="async">Async</span></span>

```js
Treebuilder.create(repo, source).then(function(treebuilder) {
  // Use treebuilder
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository in which to store the object |
| source | [Tree](/api/tree/) | Source tree to initialize the builder (optional) |

| Returns |  |
| --- | --- |
| [Treebuilder](/api/treebuilder/) | the tree builder |

## <a name="clear"></a><span>Treebuilder#</span>clear <span class="tags"><span class="sync">Sync</span></span>

```js
treebuilder.clear();
```

## <a name="entrycount"></a><span>Treebuilder#</span>entrycount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = treebuilder.entrycount();
```

| Returns |  |
| --- | --- |
| Number |  the number of entries in the treebuilder |

## <a name="get"></a><span>Treebuilder#</span>get <span class="tags"><span class="sync">Sync</span></span>

```js
var treeEntry = treebuilder.get(filename);
```

| Parameters | Type |
| --- | --- | --- |
| filename | String | Name of the entry |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  |

## <a name="insert"></a><span>Treebuilder#</span>insert <span class="tags"><span class="sync">Sync</span></span>

```js
var treeEntry = treebuilder.insert(filename, id, filemode);
```

| Parameters | Type |
| --- | --- | --- |
| filename | String | Filename of the entry |
| id | [Oid](/api/oid/) | SHA1 oid of the entry |
| filemode | Number | Folder attributes of the entry. This parameter must be valued with one of the following entries: 0040000, 0100644, 0100755, 0120000 or 0160000. |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  |

## <a name="remove"></a><span>Treebuilder#</span>remove <span class="tags"><span class="sync">Sync</span></span>

```js
var result = treebuilder.remove(filename);
```

| Parameters | Type |
| --- | --- | --- |
| filename | String | Filename of the entry to remove |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="write"></a><span>Treebuilder#</span>write <span class="tags"><span class="async">Async</span></span>

```js
treebuilder.write().then(function(oid) {
  // Use oid
});
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

