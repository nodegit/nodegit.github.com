---
layout: default
menu_item: api
title: Tree
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#_entryByIndex": "#_entryByIndex"
  "#builder": "#builder"
  "#diff": "#diff"
  "#entries": "#entries"
  "#entryById": "#entryById"
  "#entryByIndex": "#entryByIndex"
  "#entryByName": "#entryByName"
  "#entryByPath": "#entryByPath"
  "#entryCount": "#entryCount"
  "#getEntry": "#getEntry"
  "#id": "#id"
  "#owner": "#owner"
  "#path": "#path"
  "#walk": "#walk"
  "WALK_MODE": "#WALK_MODE"
---

## <a name="lookup"></a><span>Tree.</span>lookup <span class="tags"><span class="sync">Sync</span></span>

```js
Tree.lookup(repo, id, callback);
```

Retrieves the tree pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the tree lives in |
| id | String, [Oid](/api/oid/), [Tree](/api/tree/) | The tree to lookup |
| callback | Function |  |
## <a name="lookupPrefix"></a><span>Tree.</span>lookupPrefix <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Tree.lookupPrefix(repo, id, len).then(function(tree) {
  // Use tree
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repo to use when locating the tree. |
| id | [Oid](/api/oid/) | identity of the tree to locate. |
| len | Number | the length of the short identifier |

| Returns |  |
| --- | --- |
| [Tree](/api/tree/) | pointer to the looked up tree |

## <a name="_entryByIndex"></a><span>Tree#</span>_entryByIndex <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var treeEntry = tree._entryByIndex(idx);
```

| Parameters | Type |
| --- | --- | --- |
| idx | Number | the position in the entry list |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  the tree entry; NULL if not found |

## <a name="builder"></a><span>Tree#</span>builder <span class="tags"><span class="sync">Sync</span></span>

```js
tree.builder();
```

Make builder. This is helpful for modifying trees.

## <a name="diff"></a><span>Tree#</span>diff <span class="tags"><span class="sync">Sync</span></span>

```js
tree.diff(tree, callback);
```

Diff two trees

| Parameters | Type |
| --- | --- | --- |
| tree | [Tree](/api/tree/) | to diff against |
| callback | Function |  |
## <a name="entries"></a><span>Tree#</span>entries <span class="tags"><span class="sync">Sync</span></span>

```js
tree.entries();
```

Return an array of the entries in this tree (excluding its children).

## <a name="entryById"></a><span>Tree#</span>entryById <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var treeEntry = tree.entryById(id);
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | the sha being looked for |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  the tree entry; NULL if not found |

## <a name="entryByIndex"></a><span>Tree#</span>entryByIndex <span class="tags"><span class="sync">Sync</span></span>

```js
tree.entryByIndex(i);
```

Get an entry at the ith position.


| Parameters | Type |
| --- | --- | --- |
| i | Number |  |
## <a name="entryByName"></a><span>Tree#</span>entryByName <span class="tags"><span class="sync">Sync</span></span>

```js
tree.entryByName(name);
```

Get an entry by name; if the tree is a directory, the name is the filename.


| Parameters | Type |
| --- | --- | --- |
| name | String |  |
## <a name="entryByPath"></a><span>Tree#</span>entryByPath <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
tree.entryByPath(path).then(function(treeEntry) {
  // Use treeEntry
});
```

| Parameters | Type |
| --- | --- | --- |
| path | String | Path to the contained entry |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) | the tree entry |

## <a name="entryCount"></a><span>Tree#</span>entryCount <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = tree.entryCount();
```


| Returns |  |
| --- | --- |
| Number |  the number of entries in the tree |

## <a name="getEntry"></a><span>Tree#</span>getEntry <span class="tags"><span class="sync">Sync</span></span>

```js
tree.getEntry(path);
```

Get an entry at a path. Unlike by name, this takes a fully
qualified path, like `/foo/bar/baz.javascript`


| Parameters | Type |
| --- | --- | --- |
| path | String |  |
## <a name="id"></a><span>Tree#</span>id <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = tree.id();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  object identity for the tree. |

## <a name="owner"></a><span>Tree#</span>owner <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var repository = tree.owner();
```


| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  Repository that contains this tree. |

## <a name="path"></a><span>Tree#</span>path <span class="tags"><span class="sync">Sync</span></span>

```js
tree.path();
```

Return the path of this tree, like `/lib/foo/bar`

## <a name="walk"></a><span>Tree#</span>walk <span class="tags"><span class="sync">Sync</span></span>

```js
tree.walk([blobsOnly);
```

Recursively walk the tree in breadth-first order. Fires an event for each
entry.


| Parameters | Type |
| --- | --- | --- |
| [blobsOnly | Boolean | = true] True to emit only blob & blob executable entries. |
## <a name="WALK_MODE"></a><span>Tree.</span>WALK_MODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Tree.WALK_MODE.</span>WALK_PRE | 0 |
| <span>Tree.WALK_MODE.</span>WALK_POST | 1 |

