---
layout: default
menu_item: api
title: Reference
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createMatching": "#createMatching"
  "dwim": "#dwim"
  "lookup": "#lookup"
  "symbolicCreate": "#symbolicCreate"
  "symbolicCreateMatching": "#symbolicCreateMatching"
  "#cmp": "#cmp"
  "#delete": "#delete"
  "#isBranch": "#isBranch"
  "#isConcrete": "#isConcrete"
  "#isHead": "#isHead"
  "#isNote": "#isNote"
  "#isRemote": "#isRemote"
  "#isSymbolic": "#isSymbolic"
  "#isTag": "#isTag"
  "#isValid": "#isValid"
  "#name": "#name"
  "#owner": "#owner"
  "#peel": "#peel"
  "#rename": "#rename"
  "#resolve": "#resolve"
  "#setTarget": "#setTarget"
  "#shorthand": "#shorthand"
  "#symbolicSetTarget": "#symbolicSetTarget"
  "#symbolicTarget": "#symbolicTarget"
  "#target": "#target"
  "#targetPeel": "#targetPeel"
  "#toString": "#toString"
  "#type": "#type"
  "NORMALIZE": "#NORMALIZE"
  "TYPE": "#TYPE"
---

## <a name="create"></a><span>Reference.</span>create <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.create(repo, name, id, force, signature, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where that reference will live |
| name | String | The name of the reference |
| id | [Oid](/api/oid/) | The object id pointed to by the reference. |
| force | Number | Overwrite existing references |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | Pointer to the newly created reference |

## <a name="createMatching"></a><span>Reference.</span>createMatching <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.createMatching(repo, name, id, force, current_id, signature, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where that reference will live |
| name | String | The name of the reference |
| id | [Oid](/api/oid/) | The object id pointed to by the reference. |
| force | Number | Overwrite existing references |
| current_id | [Oid](/api/oid/) | The expected value of the reference at the time of update |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | Pointer to the newly created reference |

## <a name="dwim"></a><span>Reference.</span>dwim <span class="tags"><span class="sync">Sync</span></span>

```js
Reference.dwim(repo, id, callback);
```

Retrieves the reference by it's short name

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the reference lives in |
| id | String, [Reference](/api/reference/) | The reference to lookup |
| callback | Function |  |
## <a name="lookup"></a><span>Reference.</span>lookup <span class="tags"><span class="sync">Sync</span></span>

```js
Reference.lookup(repo, id, callback);
```

Retrieves the reference pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the reference lives in |
| id | String, [Reference](/api/reference/) | The reference to lookup |
| callback | Function |  |
## <a name="symbolicCreate"></a><span>Reference.</span>symbolicCreate <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.symbolicCreate(repo, name, target, force, signature, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where that reference will live |
| name | String | The name of the reference |
| target | String | The target of the reference |
| force | Number | Overwrite existing references |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | Pointer to the newly created reference |

## <a name="symbolicCreateMatching"></a><span>Reference.</span>symbolicCreateMatching <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.symbolicCreateMatching(repo, name, target, force, current_value, signature, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where that reference will live |
| name | String | The name of the reference |
| target | String | The target of the reference |
| force | Number | Overwrite existing references |
| current_value | String | The expected value of the reference when updating |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | Pointer to the newly created reference |

## <a name="cmp"></a><span>Reference#</span>cmp <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.cmp();
```


| Returns |  |
| --- | --- |
| Number |  0 if the same, else a stable but meaningless ordering. |

## <a name="delete"></a><span>Reference#</span>delete <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.delete();
```


| Returns |  |
| --- | --- |
| Number |  0, GIT_EMODIFIED or an error code |

## <a name="isBranch"></a><span>Reference#</span>isBranch <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.isBranch();
```


| Returns |  |
| --- | --- |
| Number |  1 when the reference lives in the refs/heads
 namespace; 0 otherwise. |

## <a name="isConcrete"></a><span>Reference#</span>isConcrete <span class="tags"><span class="sync">Sync</span></span>

```js
reference.isConcrete();
```

Returns true if this reference is not symbolic

## <a name="isHead"></a><span>Reference#</span>isHead <span class="tags"><span class="sync">Sync</span></span>

```js
reference.isHead();
```

Returns if the ref is pointed at by HEAD

## <a name="isNote"></a><span>Reference#</span>isNote <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.isNote();
```


| Returns |  |
| --- | --- |
| Number |  1 when the reference lives in the refs/notes
 namespace; 0 otherwise. |

## <a name="isRemote"></a><span>Reference#</span>isRemote <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.isRemote();
```


| Returns |  |
| --- | --- |
| Number |  1 when the reference lives in the refs/remotes
 namespace; 0 otherwise. |

## <a name="isSymbolic"></a><span>Reference#</span>isSymbolic <span class="tags"><span class="sync">Sync</span></span>

```js
reference.isSymbolic();
```

Returns true if this reference is symbolic

## <a name="isTag"></a><span>Reference#</span>isTag <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.isTag();
```


| Returns |  |
| --- | --- |
| Number |  1 when the reference lives in the refs/tags
 namespace; 0 otherwise. |

## <a name="isValid"></a><span>Reference#</span>isValid <span class="tags"><span class="sync">Sync</span></span>

```js
reference.isValid();
```

Returns true if this reference is valid

## <a name="name"></a><span>Reference#</span>name <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = reference.name();
```


| Returns |  |
| --- | --- |
| String |  the full name for the ref |

## <a name="owner"></a><span>Reference#</span>owner <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var repository = reference.owner();
```


| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  the repo |

## <a name="peel"></a><span>Reference#</span>peel <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.peel(type).then(function(object) {
  // Use object
});
```

| Parameters | Type |
| --- | --- | --- |
| type | Number | The type of the requested object (GIT_OBJ_COMMIT, GIT_OBJ_TAG, GIT_OBJ_TREE, GIT_OBJ_BLOB or GIT_OBJ_ANY). |

| Returns |  |
| --- | --- |
| [Object](/api/object/) | Pointer to the peeled git_object |

## <a name="rename"></a><span>Reference#</span>rename <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.rename(new_name, force, signature, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |
| --- | --- | --- |
| new_name | String | The new name for the reference |
| force | Number | Overwrite an existing reference |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="resolve"></a><span>Reference#</span>resolve <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.resolve().then(function(reference) {
  // Use reference
});
```


| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | Pointer to the peeled reference |

## <a name="setTarget"></a><span>Reference#</span>setTarget <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.setTarget(id, signature, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | The new target OID for the reference |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | Pointer to the newly created reference |

## <a name="shorthand"></a><span>Reference#</span>shorthand <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = reference.shorthand();
```


| Returns |  |
| --- | --- |
| String |  the human-readable version of the name |

## <a name="symbolicSetTarget"></a><span>Reference#</span>symbolicSetTarget <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.symbolicSetTarget(target, signature, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |
| --- | --- | --- |
| target | String | The new target for the reference |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | Pointer to the newly created reference |

## <a name="symbolicTarget"></a><span>Reference#</span>symbolicTarget <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = reference.symbolicTarget();
```


| Returns |  |
| --- | --- |
| String |  the name if available, NULL otherwise |

## <a name="target"></a><span>Reference#</span>target <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = reference.target();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the oid if available, NULL otherwise |

## <a name="targetPeel"></a><span>Reference#</span>targetPeel <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = reference.targetPeel();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the oid if available, NULL otherwise |

## <a name="toString"></a><span>Reference#</span>toString <span class="tags"><span class="sync">Sync</span></span>

```js
reference.toString();
```

Returns the name of the reference.

## <a name="type"></a><span>Reference#</span>type <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.type();
```


| Returns |  |
| --- | --- |
| Number |  the type |

## <a name="NORMALIZE"></a><span>Reference.</span>NORMALIZE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Reference.NORMALIZE.</span>REF_FORMAT_NORMAL | 0 |
| <span>Reference.NORMALIZE.</span>REF_FORMAT_ALLOW_ONELEVEL | 1 |
| <span>Reference.NORMALIZE.</span>REF_FORMAT_REFSPEC_PATTERN | 2 |
| <span>Reference.NORMALIZE.</span>REF_FORMAT_REFSPEC_SHORTHAND | 4 |

## <a name="TYPE"></a><span>Reference.</span>TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Reference.TYPE.</span>INVALID | 0 |
| <span>Reference.TYPE.</span>OID | 1 |
| <span>Reference.TYPE.</span>SYMBOLIC | 2 |
| <span>Reference.TYPE.</span>LISTALL | 3 |

