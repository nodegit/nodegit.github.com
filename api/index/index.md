---
layout: default
menu_item: api
title: Index
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "open": "#open"
  "#add": "#add"
  "#addByPath": "#addByPath"
  "#caps": "#caps"
  "#clear": "#clear"
  "#conflictAdd": "#conflictAdd"
  "#conflictCleanup": "#conflictCleanup"
  "#conflictRemove": "#conflictRemove"
  "#entries": "#entries"
  "#entryCount": "#entryCount"
  "#getByIndex": "#getByIndex"
  "#getByPath": "#getByPath"
  "#hasConflicts": "#hasConflicts"
  "#owner": "#owner"
  "#path": "#path"
  "#read": "#read"
  "#readTree": "#readTree"
  "#remove": "#remove"
  "#removeByPath": "#removeByPath"
  "#removeDirectory": "#removeDirectory"
  "#setCaps": "#setCaps"
  "#write": "#write"
  "#writeTree": "#writeTree"
  "#writeTreeTo": "#writeTreeTo"
  "ADD_OPTION": "#ADD_OPTION"
  "CAP": "#CAP"
---

## <a name="open"></a><span>Index.</span>open <span class="tags"><span class="async">Async</span></span>

```js
Index.open(index_path).then(function(index) {
  // Use index
});
```

| Parameters | Type |   |
| --- | --- | --- |
| index_path | String | the path to the index file in disk |

| Returns |  |
| --- | --- |
| [Index](/api/index/) | the pointer for the new index |

## <a name="add"></a><span>Index#</span>add <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.add(source_entry);
```

| Parameters | Type |
| --- | --- | --- |
| source_entry | [IndexEntry](/api/index_entry/) | new entry object |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="addByPath"></a><span>Index#</span>addByPath <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.addByPath(path);
```

| Parameters | Type |
| --- | --- | --- |
| path | String | filename to add |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="caps"></a><span>Index#</span>caps <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.caps();
```


| Returns |  |
| --- | --- |
| Number |  A combination of GIT_INDEXCAP values |

## <a name="clear"></a><span>Index#</span>clear <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.clear();
```


| Returns |  |
| --- | --- |
| Number |  0 on success, error code 
<
 0 on failure |

## <a name="conflictAdd"></a><span>Index#</span>conflictAdd <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.conflictAdd(ancestor_entry, our_entry, their_entry);
```

| Parameters | Type |
| --- | --- | --- |
| ancestor_entry | [IndexEntry](/api/index_entry/) | the entry data for the ancestor of the conflict |
| our_entry | [IndexEntry](/api/index_entry/) | the entry data for our side of the merge conflict |
| their_entry | [IndexEntry](/api/index_entry/) | the entry data for their side of the merge conflict |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="conflictCleanup"></a><span>Index#</span>conflictCleanup <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.conflictCleanup();
```


| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="conflictRemove"></a><span>Index#</span>conflictRemove <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.conflictRemove(path);
```

| Parameters | Type |
| --- | --- | --- |
| path | String | path to remove conflicts for |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="entries"></a><span>Index#</span>entries <span class="tags"><span class="sync">Sync</span></span>

```js
index.entries();
```

Return an array of the entries in this index.

## <a name="entryCount"></a><span>Index#</span>entryCount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.entryCount();
```


| Returns |  |
| --- | --- |
| Number |  integer of count of current entries |

## <a name="getByIndex"></a><span>Index#</span>getByIndex <span class="tags"><span class="sync">Sync</span></span>

```js
var indexEntry = index.getByIndex(n);
```

| Parameters | Type |
| --- | --- | --- |
| n | Number | the position of the entry |

| Returns |  |
| --- | --- |
| [IndexEntry](/api/index_entry/) |  the entry; NULL if out of bounds |

## <a name="getByPath"></a><span>Index#</span>getByPath <span class="tags"><span class="sync">Sync</span></span>

```js
var indexEntry = index.getByPath(path, stage);
```

| Parameters | Type |
| --- | --- | --- |
| path | String | path to search |
| stage | Number | stage to search |

| Returns |  |
| --- | --- |
| [IndexEntry](/api/index_entry/) |  the entry; NULL if it was not found |

## <a name="hasConflicts"></a><span>Index#</span>hasConflicts <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.hasConflicts();
```


| Returns |  |
| --- | --- |
| Number |  1 if at least one conflict is found, 0 otherwise. |

## <a name="owner"></a><span>Index#</span>owner <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = index.owner();
```


| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  the repository |

## <a name="path"></a><span>Index#</span>path <span class="tags"><span class="sync">Sync</span></span>

```js
var string = index.path();
```


| Returns |  |
| --- | --- |
| String |  path to index file or NULL for in-memory index |

## <a name="read"></a><span>Index#</span>read <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.read(force);
```

| Parameters | Type |
| --- | --- | --- |
| force | Number | if true, always reload, vs. only read if file has changed |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="readTree"></a><span>Index#</span>readTree <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.readTree(tree);
```

| Parameters | Type |
| --- | --- | --- |
| tree | [Tree](/api/tree/) | tree to read |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="remove"></a><span>Index#</span>remove <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.remove(path, stage);
```

| Parameters | Type |
| --- | --- | --- |
| path | String | path to search |
| stage | Number | stage to search |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="removeByPath"></a><span>Index#</span>removeByPath <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.removeByPath(path);
```

| Parameters | Type |
| --- | --- | --- |
| path | String | filename to remove |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="removeDirectory"></a><span>Index#</span>removeDirectory <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.removeDirectory(dir, stage);
```

| Parameters | Type |
| --- | --- | --- |
| dir | String | container directory path |
| stage | Number | stage to search |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setCaps"></a><span>Index#</span>setCaps <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.setCaps(caps);
```

| Parameters | Type |
| --- | --- | --- |
| caps | Number | A combination of GIT_INDEXCAP values |

| Returns |  |
| --- | --- |
| Number |  0 on success, -1 on failure |

## <a name="write"></a><span>Index#</span>write <span class="tags"><span class="sync">Sync</span></span>

```js
var result = index.write();
```


| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="writeTree"></a><span>Index#</span>writeTree <span class="tags"><span class="async">Async</span></span>

```js
index.writeTree().then(function(oid) {
  // Use oid
});
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the OID of the written tree |

## <a name="writeTreeTo"></a><span>Index#</span>writeTreeTo <span class="tags"><span class="async">Async</span></span>

```js
index.writeTreeTo(repo).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to write the tree |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | OID of the the written tree |

## <a name="ADD_OPTION"></a><span>Index.</span>ADD_OPTION <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Index.ADD_OPTION.</span>ADD_DEFAULT | 0 |
| <span>Index.ADD_OPTION.</span>ADD_FORCE | 1 |
| <span>Index.ADD_OPTION.</span>ADD_DISABLE_PATHSPEC_MATCH | 2 |
| <span>Index.ADD_OPTION.</span>ADD_CHECK_PATHSPEC | 4 |

## <a name="CAP"></a><span>Index.</span>CAP <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Index.CAP.</span>IGNORE_CASE | 1 |
| <span>Index.CAP.</span>NO_FILEMODE | 2 |
| <span>Index.CAP.</span>NO_SYMLINKS | 4 |
| <span>Index.CAP.</span>FROM_OWNER | -1 |

