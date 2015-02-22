---
layout: default
menu_item: api
title: Commit
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#amend": "#amend"
  "#author": "#author"
  "#committer": "#committer"
  "#date": "#date"
  "#getEntry": "#getEntry"
  "#getTree": "#getTree"
  "#history": "#history"
  "#id": "#id"
  "#message": "#message"
  "#messageEncoding": "#messageEncoding"
  "#messageRaw": "#messageRaw"
  "#nthGenAncestor": "#nthGenAncestor"
  "#owner": "#owner"
  "#parent": "#parent"
  "#parentId": "#parentId"
  "#parentcount": "#parentcount"
  "#parents": "#parents"
  "#rawHeader": "#rawHeader"
  "#sha": "#sha"
  "#summary": "#summary"
  "#time": "#time"
  "#timeMs": "#timeMs"
  "#timeOffset": "#timeOffset"
  "#tree": "#tree"
  "#treeId": "#treeId"
---

## <a name="lookup"></a><span>Commit.</span>lookup <span class="tags"><span class="sync">Sync</span></span>

```js
Commit.lookup(repo, id, callback);
```

Retrieves the commit pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the commit lives in |
| id | String, [Oid](/api/oid/), [Commit](/api/commit/) | The commit to lookup |
| callback | Function |  |
## <a name="lookupPrefix"></a><span>Commit.</span>lookupPrefix <span class="tags"><span class="async">Async</span></span>

```js
Commit.lookupPrefix(repo, id, len).then(function(commit) {
  // Use commit
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repo to use when locating the commit. |
| id | [Oid](/api/oid/) | identity of the commit to locate. If the object is an annotated tag it will be peeled back to the commit. |
| len | Number | the length of the short identifier |

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) | pointer to the looked up commit |

## <a name="amend"></a><span>Commit#</span>amend <span class="tags"><span class="sync">Sync</span></span>

```js
var result = commit.amend(id, update_ref, author, committer, message_encoding, message, tree);
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) |  |
| update_ref | String |  |
| author | [Signature](/api/signature/) |  |
| committer | [Signature](/api/signature/) |  |
| message_encoding | String |  |
| message | String |  |
| tree | [Tree](/api/tree/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="author"></a><span>Commit#</span>author <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = commit.author();
```


| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  the author of a commit |

## <a name="committer"></a><span>Commit#</span>committer <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = commit.committer();
```


| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  the committer of a commit |

## <a name="date"></a><span>Commit#</span>date <span class="tags"><span class="sync">Sync</span></span>

```js
commit.date();
```

Retrieve the commit time as a Date object.

## <a name="getEntry"></a><span>Commit#</span>getEntry <span class="tags"><span class="sync">Sync</span></span>

```js
commit.getEntry(path, callback);
```

Retrieve the entry represented by path for this commit.
Path must be relative to repository root.


| Parameters | Type |
| --- | --- | --- |
| path | String |  |
| callback | Function |  |
## <a name="getTree"></a><span>Commit#</span>getTree <span class="tags"><span class="sync">Sync</span></span>

```js
commit.getTree(callback);
```

Get the tree associated with this commit.


| Parameters | Type |
| --- | --- | --- |
| callback | Function |  |
## <a name="history"></a><span>Commit#</span>history <span class="tags"><span class="sync">Sync</span></span>

```js
commit.history();
```

Walk the history from this commit backwards.
An EventEmitter is returned that will emit a "commit" event for each
commit in the history, and one "end" event when the walk is completed.
Don"t forget to call `start()` on the returned event.


## <a name="id"></a><span>Commit#</span>id <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = commit.id();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  object identity for the commit. |

## <a name="message"></a><span>Commit#</span>message <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.message();
```


| Returns |  |
| --- | --- |
| String |  the message of a commit |

## <a name="messageEncoding"></a><span>Commit#</span>messageEncoding <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.messageEncoding();
```


| Returns |  |
| --- | --- |
| String |  NULL, or the encoding |

## <a name="messageRaw"></a><span>Commit#</span>messageRaw <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.messageRaw();
```


| Returns |  |
| --- | --- |
| String |  the raw message of a commit |

## <a name="nthGenAncestor"></a><span>Commit#</span>nthGenAncestor <span class="tags"><span class="async">Async</span></span>

```js
commit.nthGenAncestor(n).then(function(commit) {
  // Use commit
});
```

| Parameters | Type |
| --- | --- | --- |
| n | Number | the requested generation |

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) | the ancestor commit |

## <a name="owner"></a><span>Commit#</span>owner <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = commit.owner();
```


| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  Repository that contains this commit. |

## <a name="parent"></a><span>Commit#</span>parent <span class="tags"><span class="async">Async</span></span>

```js
commit.parent(n).then(function(commit) {
  // Use commit
});
```

| Parameters | Type |
| --- | --- | --- |
| n | Number | the position of the parent (from 0 to `parentcount`) |

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) | the parent commit |

## <a name="parentId"></a><span>Commit#</span>parentId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = commit.parentId(n);
```

| Parameters | Type |
| --- | --- | --- |
| n | Number | the position of the parent (from 0 to `parentcount`) |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the id of the parent, NULL on error. |

## <a name="parentcount"></a><span>Commit#</span>parentcount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = commit.parentcount();
```


| Returns |  |
| --- | --- |
| Number |  integer of count of parents |

## <a name="parents"></a><span>Commit#</span>parents <span class="tags"><span class="sync">Sync</span></span>

```js
commit.parents(callback);
```

Retrieve the commit"s parent shas.


| Parameters | Type |
| --- | --- | --- |
| callback | Function |  |
## <a name="rawHeader"></a><span>Commit#</span>rawHeader <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.rawHeader();
```


| Returns |  |
| --- | --- |
| String |  the header text of the commit |

## <a name="sha"></a><span>Commit#</span>sha <span class="tags"><span class="sync">Sync</span></span>

```js
commit.sha();
```

Retrieve the SHA.

## <a name="summary"></a><span>Commit#</span>summary <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.summary();
```


| Returns |  |
| --- | --- |
| String |  the summary of a commit or NULL on error |

## <a name="time"></a><span>Commit#</span>time <span class="tags"><span class="sync">Sync</span></span>

```js
var result = commit.time();
```


| Returns |  |
| --- | --- |
| Number |  the time of a commit |

## <a name="timeMs"></a><span>Commit#</span>timeMs <span class="tags"><span class="sync">Sync</span></span>

```js
commit.timeMs();
```

Retrieve the commit time as a unix timestamp.

## <a name="timeOffset"></a><span>Commit#</span>timeOffset <span class="tags"><span class="sync">Sync</span></span>

```js
var result = commit.timeOffset();
```


| Returns |  |
| --- | --- |
| Number |  positive or negative timezone offset, in minutes from UTC |

## <a name="tree"></a><span>Commit#</span>tree <span class="tags"><span class="sync">Sync</span></span>

```js
var result = commit.tree(tree_out);
```

| Parameters | Type |
| --- | --- | --- |
| tree_out | [Tree](/api/tree/) | pointer where to store the tree object |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="treeId"></a><span>Commit#</span>treeId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = commit.treeId();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the id of tree pointed to by commit. |

