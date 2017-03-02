---
layout: default
menu_item: api
title: Commit
description: Version 0.18.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createV": "#createV"
  "createWithSignature": "#createWithSignature"
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#amend": "#amend"
  "#author": "#author"
  "#body": "#body"
  "#committer": "#committer"
  "#date": "#date"
  "#dup": "#dup"
  "#free": "#free"
  "#getDiff": "#getDiff"
  "#getDiffWithOptions": "#getDiffWithOptions"
  "#getEntry": "#getEntry"
  "#getParents": "#getParents"
  "#getTree": "#getTree"
  "#headerField": "#headerField"
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
  "#toString": "#toString"
  "#tree": "#tree"
  "#treeId": "#treeId"
---

## <a name="create"></a><span>Commit.</span>create <span class="tags"><span class="async">Async</span></span>

```js
Commit.create(repo, update_ref, author, committer, message_encoding, message, tree, parent_count, parents).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to store the commit |
| update_ref | String | If not NULL, name of the reference that will be updated to point to this commit. If the reference is not direct, it will be resolved to a direct reference. Use "HEAD" to update the HEAD of the current branch and make it point to this commit. If the reference doesn't exist yet, it will be created. If it does exist, the first parent must be the tip of this branch. |
| author | [Signature](/api/signature/) | Signature with author and author time of commit |
| committer | [Signature](/api/signature/) | Signature with committer and * commit time of commit |
| message_encoding | String | The encoding for the message in the commit, represented with a standard encoding name. E.g. "UTF-8". If NULL, no encoding header is written and UTF-8 is assumed. |
| message | String | Full message for this commit |
| tree | [Tree](/api/tree/) | An instance of a `git_tree` object that will be used as the tree for the commit. This tree object must also be owned by the given `repo`. |
| parent_count | Number | Number of parents for this commit |
| parents | Array | Array of `parent_count` pointers to `git_commit` objects that will be used as the parents for this commit. This array may be NULL if `parent_count` is 0 (root commit). All the given commits must be owned by the `repo`. |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="createV"></a><span>Commit.</span>createV <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Commit.createV(id, repo, update_ref, author, committer, message_encoding, message, tree, parent_count);
```

| Parameters | Type |   |
| --- | --- | --- |
| id | [Oid](/api/oid/) |  |
| repo | [Repository](/api/repository/) |  |
| update_ref | String |  |
| author | [Signature](/api/signature/) |  |
| committer | [Signature](/api/signature/) |  |
| message_encoding | String |  |
| message | String |  |
| tree | [Tree](/api/tree/) |  |
| parent_count | Number |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="createWithSignature"></a><span>Commit.</span>createWithSignature <span class="tags"><span class="async">Async</span></span>

```js
Commit.createWithSignature(repo, commit_content, signature, signature_field).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| commit_content | String | the content of the unsigned commit object |
| signature | String | the signature to add to the commit |
| signature_field | String | which header field should contain this signature. Leave `NULL` for the default of "gpgsig" |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the resulting commit id |

## <a name="lookup"></a><span>Commit.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Commit.lookup(repo, id).then(function(commit) {
  // Use commit
});
```

Retrieves the commit pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the commit lives in |
| id | String, [Oid](/api/oid/), [Commit](/api/commit/) | The commit to lookup |

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) |  |

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
| [Commit](/api/commit/) |  |

## <a name="amend"></a><span>Commit#</span>amend <span class="tags"><span class="async">Async</span></span>

```js
commit.amend(update_ref, author, committer, message_encoding, message, tree, callback).then(function() {
  // method complete});
```

Amend a commit

| Parameters | Type |
| --- | --- | --- |
| update_ref | String |  |
| author | [Signature](/api/signature/) |  |
| committer | [Signature](/api/signature/) |  |
| message_encoding | String |  |
| message | String |  |
| tree | [Tree](/api/tree/), [Oid](/api/oid/) |  |
| callback | [Oid](/api/oid/) |  |

## <a name="author"></a><span>Commit#</span>author <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = commit.author();
```

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  the author of a commit |

## <a name="body"></a><span>Commit#</span>body <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.body();
```

| Returns |  |
| --- | --- |
| String |  the body of a commit or NULL when no the message only
   consists of a summary |

## <a name="committer"></a><span>Commit#</span>committer <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = commit.committer();
```

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  the committer of a commit |

## <a name="date"></a><span>Commit#</span>date <span class="tags"><span class="sync">Sync</span></span>

```js
var date = commit.date();
```

Retrieve the commit time as a Date object.

| Returns |  |
| --- | --- |
| Date |  |

## <a name="dup"></a><span>Commit#</span>dup <span class="tags"><span class="async">Async</span></span>

```js
commit.dup().then(function(commit) {
  // Use commit
});
```

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) |  |

## <a name="free"></a><span>Commit#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
commit.free();
```

## <a name="getDiff"></a><span>Commit#</span>getDiff <span class="tags"><span class="async">Async</span></span>

```js
commit.getDiff(callback).then(function(arrayDiff) {
  // Use arrayDiff
});
```

Generate an array of diff trees showing changes between this commit
and its parent(s).

| Parameters | Type |
| --- | --- | --- |
| callback | Function |  |

| Returns |  |
| --- | --- |
| Array&lt;[Diff](/api/diff/)&gt; | an array of diffs |

## <a name="getDiffWithOptions"></a><span>Commit#</span>getDiffWithOptions <span class="tags"><span class="async">Async</span></span>

```js
commit.getDiffWithOptions(options, callback).then(function(arrayDiff) {
  // Use arrayDiff
});
```

Generate an array of diff trees showing changes between this commit
and its parent(s).

| Parameters | Type |
| --- | --- | --- |
| options | [Object](/api/object/) |  |
| callback | Function |  |

| Returns |  |
| --- | --- |
| Array&lt;[Diff](/api/diff/)&gt; | an array of diffs |

## <a name="getEntry"></a><span>Commit#</span>getEntry <span class="tags"><span class="async">Async</span></span>

```js
commit.getEntry(path).then(function(treeEntry) {
  // Use treeEntry
});
```

Retrieve the entry represented by path for this commit.
Path must be relative to repository root.

| Parameters | Type |
| --- | --- | --- |
| path | String |  |

| Returns |  |
| --- | --- |
| [TreeEntry](/api/tree_entry/) |  |

## <a name="getParents"></a><span>Commit#</span>getParents <span class="tags"><span class="async">Async</span></span>

```js
commit.getParents(limit, callback).then(function(arrayCommit) {
  // Use arrayCommit
});
```

Retrieve the commit's parents as commit objects.

| Parameters | Type |
| --- | --- | --- |
| limit | number | Optional amount of parents to return. |
| callback | Function |  |

| Returns |  |
| --- | --- |
| Array&lt;[Commit](/api/commit/)&gt; | array of commits |

## <a name="getTree"></a><span>Commit#</span>getTree <span class="tags"><span class="async">Async</span></span>

```js
commit.getTree().then(function(tree) {
  // Use tree
});
```

Get the tree associated with this commit.

| Returns |  |
| --- | --- |
| [Tree](/api/tree/) |  |

## <a name="headerField"></a><span>Commit#</span>headerField <span class="tags"><span class="async">Async</span></span>

```js
commit.headerField(field).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| field | String | the header field to return |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | the buffer to fill |

## <a name="history"></a><span>Commit#</span>history <span class="tags"><span class="sync">Sync</span></span>

```js
var eventEmitter = commit.history();

eventEmitter.on('commit', function(commit) {
  // Use commit
});

eventEmitter.on('end', function(commits) {
  // Use commits
});

eventEmitter.on('error', function(error) {
  // Use error
});

eventEmitter.start()
```

Walk the history from this commit backwards.

An EventEmitter is returned that will emit a "commit" event for each
commit in the history, and one "end" event when the walk is completed.
Don't forget to call `start()` on the returned event.

| Fires | Sends |
| --- | --- |
| commit | [Commit](/api/commit/) |
| end | Array&lt;[Commit](/api/commit/)&gt; |
| error | [Error](/api/error/) |

| Returns |  |
| --- | --- |
| EventEmitter |  |

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
var arrayOid = commit.parents();
```

Retrieve the commit's parent shas.

| Returns |  |
| --- | --- |
| Array&lt;[Oid](/api/oid/)&gt; | array of oids |

## <a name="rawHeader"></a><span>Commit#</span>rawHeader <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.rawHeader();
```

| Returns |  |
| --- | --- |
| String |  the header text of the commit |

## <a name="sha"></a><span>Commit#</span>sha <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.sha();
```

Retrieve the SHA.

| Returns |  |
| --- | --- |
| String |  |

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
var number = commit.timeMs();
```

Retrieve the commit time as a unix timestamp.

| Returns |  |
| --- | --- |
| Number |  |

## <a name="timeOffset"></a><span>Commit#</span>timeOffset <span class="tags"><span class="sync">Sync</span></span>

```js
var result = commit.timeOffset();
```

| Returns |  |
| --- | --- |
| Number |  positive or negative timezone offset, in minutes from UTC |

## <a name="toString"></a><span>Commit#</span>toString <span class="tags"><span class="sync">Sync</span></span>

```js
var string = commit.toString();
```

The sha of this commit

| Returns |  |
| --- | --- |
| String |  |

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

