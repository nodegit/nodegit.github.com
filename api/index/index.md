---
layout: default
menu_item: api
title: Index
description: Version 0.11.5
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "entryIsConflict": "#entryIsConflict"
  "entryStage": "#entryStage"
  "open": "#open"
  "#add": "#add"
  "#addAll": "#addAll"
  "#addByPath": "#addByPath"
  "#caps": "#caps"
  "#checksum": "#checksum"
  "#clear": "#clear"
  "#conflictAdd": "#conflictAdd"
  "#conflictCleanup": "#conflictCleanup"
  "#conflictGet": "#conflictGet"
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
  "#removeAll": "#removeAll"
  "#removeByPath": "#removeByPath"
  "#removeDirectory": "#removeDirectory"
  "#setCaps": "#setCaps"
  "#updateAll": "#updateAll"
  "#write": "#write"
  "#writeTree": "#writeTree"
  "#writeTreeTo": "#writeTreeTo"
  "ADD_OPTION": "#ADD_OPTION"
  "CAP": "#CAP"
---

## <a name="entryIsConflict"></a><span>Index.</span>entryIsConflict <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Index.entryIsConflict(entry);
```

| Parameters | Type |   |
| --- | --- | --- |
| entry | [IndexEntry](/api/index_entry/) | The entry |

| Returns |  |
| --- | --- |
| Number |  1 if the entry is a conflict entry, 0 otherwise |

## <a name="entryStage"></a><span>Index.</span>entryStage <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Index.entryStage(entry);
```

| Parameters | Type |   |
| --- | --- | --- |
| entry | [IndexEntry](/api/index_entry/) | The entry |

| Returns |  |
| --- | --- |
| Number |  the stage number |

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
| [Index](/api/index/) |  |

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

## <a name="addAll"></a><span>Index#</span>addAll <span class="tags"><span class="async">Async</span></span>

```js
index.addAll(pathspec, flags, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| pathspec | [Strarray](/api/strarray/) | array of path patterns |
| flags | Number | combination of git_index_add_option_t flags |
| callback | IndexMatchedPathCb | notification callback for each added/updated path (also gets index of matching pathspec entry); can be NULL; return 0 to add, >0 to skip, <0 to abort scan. |
| payload | Void | payload passed through to callback function |

| Returns |  |
| --- | --- |
| Number |  0 on success, negative callback return value, or error code |

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

## <a name="checksum"></a><span>Index#</span>checksum <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = index.checksum();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the checksum of the index |

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

## <a name="conflictGet"></a><span>Index#</span>conflictGet <span class="tags"><span class="async">Async</span></span>

```js
index.conflictGet(path).then(function(indexEntry) {
  // Use indexEntry
});
```

| Parameters | Type |
| --- | --- | --- |
| path | String | path to search |

| Returns |  |
| --- | --- |
| [IndexEntry](/api/index_entry/) |  |

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
var arrayIndexEntry = index.entries();
```

Return an array of the entries in this index.

| Returns |  |
| --- | --- |
| Array&lt;[IndexEntry](/api/index_entry/)&gt; | an array of IndexEntrys |

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

## <a name="removeAll"></a><span>Index#</span>removeAll <span class="tags"><span class="async">Async</span></span>

```js
index.removeAll(pathspec, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| pathspec | [Strarray](/api/strarray/) | array of path patterns |
| callback | IndexMatchedPathCb | notification callback for each removed path (also gets index of matching pathspec entry); can be NULL; return 0 to add, >0 to skip, <0 to abort scan. |
| payload | Void | payload passed through to callback function |

| Returns |  |
| --- | --- |
| Number |  0 on success, negative callback return value, or error code |

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

## <a name="updateAll"></a><span>Index#</span>updateAll <span class="tags"><span class="async">Async</span></span>

```js
index.updateAll(pathspec, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| pathspec | [Strarray](/api/strarray/) | array of path patterns |
| callback | IndexMatchedPathCb | notification callback for each updated path (also gets index of matching pathspec entry); can be NULL; return 0 to add, >0 to skip, <0 to abort scan. |
| payload | Void | payload passed through to callback function |

| Returns |  |
| --- | --- |
| Number |  0 on success, negative callback return value, or error code |

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

