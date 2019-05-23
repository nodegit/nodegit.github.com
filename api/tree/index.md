---
layout: default
menu_item: api
title: Tree
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "entryCmp": "#entryCmp"
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#_entryByIndex": "#_entryByIndex"
  "#_entryByName": "#_entryByName"
  "#builder": "#builder"
  "#createUpdated": "#createUpdated"
  "#diff": "#diff"
  "#diffWithOptions": "#diffWithOptions"
  "#dup": "#dup"
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
  "UPDATE": "#UPDATE"
  "WALK_MODE": "#WALK_MODE"
---

## <a name="entryCmp"></a><span>Tree.</span>entryCmp <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Tree.entryCmp(e1, e2);
```

| Parameters | Type |   |
| --- | --- | --- |
| e1 | [TreeEntry](/api/tree_entry/) | first tree entry |
| e2 | [TreeEntry](/api/tree_entry/) | second tree entry |

| Returns |  |
| --- | --- |
| Number |  
<
0 if e1 is before e2, 0 if e1 == e2, >0 if e1 is after e2 |

## <a name="lookup"></a><span>Tree.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Tree.lookup(repo, id, callback).then(function(tree) {
  // Use tree
});
```

Retrieves the tree pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the tree lives in |
| id | String, [Oid](/api/oid/), [Tree](/api/tree/) | The tree to lookup |
| callback | Function |  |

| Returns |  |
| --- | --- |
| [Tree](/api/tree/) |  |

## <a name="lookupPrefix"></a><span>Tree.</span>lookupPrefix <span class="tags"><span class="async">Async</span></span>

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
| [Tree](/api/tree/) |  |

## <a name="_entryByIndex"></a><span>Tree#</span>_entryByIndex <span class="tags"><span class="sync">Sync</span></span>

```js
var treeEntry = tree._entryByIndex(idx);
```

| Parameters | Type |
| --- | --- | --- |
| idx | Number | the position in the entry list |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  the tree entry; NULL if not found |

## <a name="_entryByName"></a><span>Tree#</span>_entryByName <span class="tags"><span class="sync">Sync</span></span>

```js
var treeEntry = tree._entryByName(filename);
```

| Parameters | Type |
| --- | --- | --- |
| filename | String | the filename of the desired entry |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  the tree entry; NULL if not found |

## <a name="builder"></a><span>Tree#</span>builder <span class="tags"><span class="sync">Sync</span></span>

```js
var treebuilder = tree.builder();
```

Make builder. This is helpful for modifying trees.

| Returns |  |
| --- | --- |
| [Treebuilder](/api/treebuilder/) |  |

## <a name="createUpdated"></a><span>Tree#</span>createUpdated <span class="tags"><span class="async">Async</span></span>

```js
tree.createUpdated(repo, nupdates, updates).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to create the tree, must be the same as for `baseline` |
| nupdates | Number | the number of elements in the update list |
| updates | [TreeUpdate](/api/tree_update/) | the list of updates to perform |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | id of the new tree |

## <a name="diff"></a><span>Tree#</span>diff <span class="tags"><span class="async">Async</span></span>

```js
tree.diff(tree, callback).then(function(diffList) {
  // Use diffList
});
```

Diff two trees

| Parameters | Type |
| --- | --- | --- |
| tree | [Tree](/api/tree/) | to diff against |
| callback | Function |  |

| Returns |  |
| --- | --- |
| DiffList |  |

## <a name="diffWithOptions"></a><span>Tree#</span>diffWithOptions <span class="tags"><span class="async">Async</span></span>

```js
tree.diffWithOptions(tree, options, callback).then(function(diffList) {
  // Use diffList
});
```

Diff two trees with options

| Parameters | Type |
| --- | --- | --- |
| tree | [Tree](/api/tree/) | to diff against |
| options | [Object](/api/object/) |  |
| callback | Function |  |

| Returns |  |
| --- | --- |
| DiffList |  |

## <a name="dup"></a><span>Tree#</span>dup <span class="tags"><span class="async">Async</span></span>

```js
tree.dup().then(function(tree) {
  // Use tree
});
```

| Returns |  |
| --- | --- |
| [Tree](/api/tree/) |  |

## <a name="entries"></a><span>Tree#</span>entries <span class="tags"><span class="sync">Sync</span></span>

```js
var arrayTreeEntry = tree.entries();
```

Return an array of the entries in this tree (excluding its children).

| Returns |  |
| --- | --- |
| Array&lt;[TreeEntry](/api/tree_entry/)&gt; | an array of TreeEntrys |

## <a name="entryById"></a><span>Tree#</span>entryById <span class="tags"><span class="sync">Sync</span></span>

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
var treeEntry = tree.entryByIndex(i);
```

Get an entry at the ith position.

| Parameters | Type |
| --- | --- | --- |
| i | Number |  |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  |

## <a name="entryByName"></a><span>Tree#</span>entryByName <span class="tags"><span class="sync">Sync</span></span>

```js
var treeEntry = tree.entryByName(name);
```

Get an entry by name; if the tree is a directory, the name is the filename.

| Parameters | Type |
| --- | --- | --- |
| name | String |  |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  |

## <a name="entryByPath"></a><span>Tree#</span>entryByPath <span class="tags"><span class="async">Async</span></span>

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

## <a name="entryCount"></a><span>Tree#</span>entryCount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = tree.entryCount();
```

| Returns |  |
| --- | --- |
| Number |  the number of entries in the tree |

## <a name="getEntry"></a><span>Tree#</span>getEntry <span class="tags"><span class="async">Async</span></span>

```js
tree.getEntry(filePath).then(function(treeEntry) {
  // Use treeEntry
});
```

Get an entry at a path. Unlike by name, this takes a fully
qualified path, like `/foo/bar/baz.javascript`

| Parameters | Type |
| --- | --- | --- |
| filePath | String |  |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  |

## <a name="id"></a><span>Tree#</span>id <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = tree.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  object identity for the tree. |

## <a name="owner"></a><span>Tree#</span>owner <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = tree.owner();
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  Repository that contains this tree. |

## <a name="path"></a><span>Tree#</span>path <span class="tags"><span class="sync">Sync</span></span>

```js
var string = tree.path();
```

Return the path of this tree, like `/lib/foo/bar`

| Returns |  |
| --- | --- |
| String |  |

## <a name="walk"></a><span>Tree#</span>walk <span class="tags"><span class="sync">Sync</span></span>

```js
var eventEmitter = tree.walk();

eventEmitter.on('entry', function(tree) {
  // Use tree
});

eventEmitter.on('end', function(trees) {
  // Use trees
});

eventEmitter.on('error', function(error) {
  // Use error
});

// start walking the tree
eventEmitter.start()
```

Recursively walk the tree in breadth-first order. Fires an event for each
entry.

| Parameters | Type |
| --- | --- | --- |
| [blobsOnly | Boolean | = true] True to emit only blob & blob executable entries. |

| Fires | Sends |
| --- | --- |
| entry | [Tree](/api/tree/) |
| end | Array&lt;[Tree](/api/tree/)&gt; |
| error | [Error](/api/error/) |

| Returns |  |
| --- | --- |
| EventEmitter |  |

## <a name="UPDATE"></a><span>Tree.</span>UPDATE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Tree.UPDATE.</span>UPSERT | 0 |
| <span>Tree.UPDATE.</span>REMOVE | 1 |

## <a name="WALK_MODE"></a><span>Tree.</span>WALK_MODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Tree.WALK_MODE.</span>WALK_PRE | 0 |
| <span>Tree.WALK_MODE.</span>WALK_POST | 1 |

