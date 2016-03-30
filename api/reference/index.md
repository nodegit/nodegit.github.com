---
layout: default
menu_item: api
title: Reference
description: Version 0.12.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createMatching": "#createMatching"
  "dwim": "#dwim"
  "ensureLog": "#ensureLog"
  "hasLog": "#hasLog"
  "isValidName": "#isValidName"
  "list": "#list"
  "lookup": "#lookup"
  "nameToId": "#nameToId"
  "normalizeName": "#normalizeName"
  "remove": "#remove"
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
Reference.create(repo, name, id, force, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where that reference will live |
| name | String | The name of the reference |
| id | [Oid](/api/oid/) | The object id pointed to by the reference. |
| force | Number | Overwrite existing references |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="createMatching"></a><span>Reference.</span>createMatching <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.createMatching(repo, name, id, force, current_id, log_message).then(function(reference) {
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
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="dwim"></a><span>Reference.</span>dwim <span class="tags"><span class="async">Async</span></span>

```js
Reference.dwim(repo, id, callback).then(function(reference) {
  // Use reference
});
```

Retrieves the reference by it's short name

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the reference lives in |
| id | String, [Reference](/api/reference/) | The reference to lookup |
| callback | Function |  |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="ensureLog"></a><span>Reference.</span>ensureLog <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Reference.ensureLog(repo, refname);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository |
| refname | String | the reference's name |

| Returns |  |
| --- | --- |
| Number |  0 or an error code. |

## <a name="hasLog"></a><span>Reference.</span>hasLog <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Reference.hasLog(repo, refname);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository |
| refname | String | the reference's name |

| Returns |  |
| --- | --- |
| Number |  0 when no reflog can be found, 1 when it exists;
 otherwise an error code. |

## <a name="isValidName"></a><span>Reference.</span>isValidName <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Reference.isValidName(refname);
```

| Parameters | Type |   |
| --- | --- | --- |
| refname | String | name to be checked. |

| Returns |  |
| --- | --- |
| Number |  1 if the reference name is acceptable; 0 if it isn't |

## <a name="list"></a><span>Reference.</span>list <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.list(repo).then(function(array) {
  // Use array
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to find the refs |

| Returns |  |
| --- | --- |
| Array |  |

## <a name="lookup"></a><span>Reference.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Reference.lookup(repo, id, callback).then(function(reference) {
  // Use reference
});
```

Retrieves the reference pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the reference lives in |
| id | String, [Reference](/api/reference/) | The reference to lookup |
| callback | Function |  |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="nameToId"></a><span>Reference.</span>nameToId <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.nameToId(repo, name).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository in which to look up the reference |
| name | String | The long name for the reference (e.g. HEAD, refs/heads/master, refs/tags/v0.1.0, ...) |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="normalizeName"></a><span>Reference.</span>normalizeName <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Reference.normalizeName(buffer_out, buffer_size, name, flags);
```

| Parameters | Type |   |
| --- | --- | --- |
| buffer_out | String | User allocated buffer to store normalized name |
| buffer_size | Number | Size of buffer_out |
| name | String | Reference name to be checked. |
| flags | Number | Flags to constrain name validation rules - see the GIT_REF_FORMAT constants above. |

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_EBUFS if buffer is too small, GIT_EINVALIDSPEC
 or an error code. |

## <a name="remove"></a><span>Reference.</span>remove <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Reference.remove(repo, name);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| name | String | The reference to remove |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="symbolicCreate"></a><span>Reference.</span>symbolicCreate <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.symbolicCreate(repo, name, target, force, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where that reference will live |
| name | String | The name of the reference |
| target | String | The target of the reference |
| force | Number | Overwrite existing references |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="symbolicCreateMatching"></a><span>Reference.</span>symbolicCreateMatching <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Reference.symbolicCreateMatching(repo, name, target, force, current_value, log_message).then(function(reference) {
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
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="cmp"></a><span>Reference#</span>cmp <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = reference.cmp(ref2);
```

| Parameters | Type |
| --- | --- | --- |
| ref2 | [Reference](/api/reference/) | The second git_reference |

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
var boolean = reference.isConcrete();
```

Returns true if this reference is not symbolic

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isHead"></a><span>Reference#</span>isHead <span class="tags"><span class="sync">Sync</span></span>

```js
var bool = reference.isHead();
```

Returns if the ref is pointed at by HEAD

| Returns |  |
| --- | --- |
| bool |  |

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
var boolean = reference.isSymbolic();
```

Returns true if this reference is symbolic

| Returns |  |
| --- | --- |
| Boolean |  |

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
var boolean = reference.isValid();
```

Returns true if this reference is valid

| Returns |  |
| --- | --- |
| Boolean |  |

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
| [Object](/api/object/) |  |

## <a name="rename"></a><span>Reference#</span>rename <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.rename(new_name, force, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |
| --- | --- | --- |
| new_name | String | The new name for the reference |
| force | Number | Overwrite an existing reference |
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
| [Reference](/api/reference/) |  |

## <a name="setTarget"></a><span>Reference#</span>setTarget <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.setTarget(id, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | The new target OID for the reference |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="shorthand"></a><span>Reference#</span>shorthand <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = reference.shorthand();
```

| Returns |  |
| --- | --- |
| String |  the human-readable version of the name |

## <a name="symbolicSetTarget"></a><span>Reference#</span>symbolicSetTarget <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
reference.symbolicSetTarget(target, log_message).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |
| --- | --- | --- |
| target | String | The new target for the reference |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

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
var string = reference.toString();
```

Returns the name of the reference.

| Returns |  |
| --- | --- |
| String |  |

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

