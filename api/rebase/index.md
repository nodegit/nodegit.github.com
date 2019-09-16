---
layout: default
menu_item: api
title: Rebase
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "init": "#init"
  "open": "#open"
  "#abort": "#abort"
  "#commit": "#commit"
  "#finish": "#finish"
  "#inmemoryIndex": "#inmemoryIndex"
  "#next": "#next"
  "#ontoId": "#ontoId"
  "#ontoName": "#ontoName"
  "#operationByIndex": "#operationByIndex"
  "#operationCurrent": "#operationCurrent"
  "#operationEntrycount": "#operationEntrycount"
  "#origHeadId": "#origHeadId"
  "#origHeadName": "#origHeadName"
---

## <a name="init"></a><span>Rebase.</span>init <span class="tags"><span class="async">Async</span></span>

```js
Rebase.init(repo, branch, upstream, onto, options).then(function(remote) {
  // Use remote
});
```

Initializes a rebase

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository to perform the rebase |
| branch | [AnnotatedCommit](/api/annotated_commit/) | The terminal commit to rebase, or NULL to rebase the current branch |
| upstream | [AnnotatedCommit](/api/annotated_commit/) | The commit to begin rebasing from, or NULL to rebase all reachable commits |
| onto | [AnnotatedCommit](/api/annotated_commit/) | The branch to rebase onto, or NULL to rebase onto the given upstream |
| options | [RebaseOptions](/api/rebase_options/) | Options to specify how rebase is performed, or NULL |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) |  |

## <a name="open"></a><span>Rebase.</span>open <span class="tags"><span class="async">Async</span></span>

```js
Rebase.open(repo, options).then(function(remote) {
  // Use remote
});
```

Opens an existing rebase that was previously started by either an invocation
of Rebase.open or by another client.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository that has a rebase in-progress |
| options | [RebaseOptions](/api/rebase_options/) | Options to specify how rebase is performed |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) |  |

## <a name="abort"></a><span>Rebase#</span>abort <span class="tags"><span class="async">Async</span></span>

```js
rebase.abort().then(function(result) {
  // Use result
});
```

| Returns |  |
| --- | --- |
| Number |  Zero on success; GIT_ENOTFOUND if a rebase is not in progress,
         -1 on other errors. |

## <a name="commit"></a><span>Rebase#</span>commit <span class="tags"><span class="async">Async</span></span>

```js
rebase.commit(author, committer, message_encoding, message).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |
| --- | --- | --- |
| author | [Signature](/api/signature/) | The author of the updated commit, or NULL to keep the author from the original commit |
| committer | [Signature](/api/signature/) | The committer of the rebase |
| message_encoding | String | The encoding for the message in the commit, represented with a standard encoding name. If message is NULL, this should also be NULL, and the encoding from the original commit will be maintained. If message is specified, this may be NULL to indicate that "UTF-8" is to be used. |
| message | String | The message for this commit, or NULL to use the message from the original commit. |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="finish"></a><span>Rebase#</span>finish <span class="tags"><span class="sync">Sync</span></span>

```js
var result = rebase.finish(signature);
```

| Parameters | Type |
| --- | --- | --- |
| signature | [Signature](/api/signature/) | The identity that is finishing the rebase (optional) |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on error |

## <a name="inmemoryIndex"></a><span>Rebase#</span>inmemoryIndex <span class="tags"><span class="sync">Sync</span></span>

```js
var result = rebase.inmemoryIndex(index);
```

| Parameters | Type |
| --- | --- | --- |
| index | [Index](/api/index/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="next"></a><span>Rebase#</span>next <span class="tags"><span class="async">Async</span></span>

```js
rebase.next().then(function(rebaseOperation) {
  // Use rebaseOperation
});
```

| Returns |  |
| --- | --- |
| [RebaseOperation](/api/rebase_operation/) |  |

## <a name="ontoId"></a><span>Rebase#</span>ontoId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = rebase.ontoId();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  The `onto` id |

## <a name="ontoName"></a><span>Rebase#</span>ontoName <span class="tags"><span class="sync">Sync</span></span>

```js
var string = rebase.ontoName();
```

| Returns |  |
| --- | --- |
| String |  The `onto` ref name |

## <a name="operationByIndex"></a><span>Rebase#</span>operationByIndex <span class="tags"><span class="sync">Sync</span></span>

```js
var rebaseOperation = rebase.operationByIndex(idx);
```

| Parameters | Type |
| --- | --- | --- |
| idx | Number | The index of the rebase operation to retrieve |

| Returns |  |
| --- | --- |
| [RebaseOperation](/api/rebase_operation/) |  The rebase operation or NULL if `idx` was out of bounds |

## <a name="operationCurrent"></a><span>Rebase#</span>operationCurrent <span class="tags"><span class="sync">Sync</span></span>

```js
var result = rebase.operationCurrent();
```

| Returns |  |
| --- | --- |
| Number |  The index of the rebase operation currently being applied. |

## <a name="operationEntrycount"></a><span>Rebase#</span>operationEntrycount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = rebase.operationEntrycount();
```

| Returns |  |
| --- | --- |
| Number |  The number of rebase operations in total |

## <a name="origHeadId"></a><span>Rebase#</span>origHeadId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = rebase.origHeadId();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  The original `HEAD` id |

## <a name="origHeadName"></a><span>Rebase#</span>origHeadName <span class="tags"><span class="sync">Sync</span></span>

```js
var string = rebase.origHeadName();
```

| Returns |  |
| --- | --- |
| String |  The original `HEAD` ref name |

