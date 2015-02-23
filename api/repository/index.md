---
layout: default
menu_item: api
title: Repository
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "init": "#init"
  "initExt": "#initExt"
  "open": "#open"
  "openBare": "#openBare"
  "openExt": "#openExt"
  "wrapOdb": "#wrapOdb"
  "#config": "#config"
  "#configSnapshot": "#configSnapshot"
  "#createRevWalk": "#createRevWalk"
  "#detachHead": "#detachHead"
  "#getBlob": "#getBlob"
  "#getBranch": "#getBranch"
  "#getBranchCommit": "#getBranchCommit"
  "#getCommit": "#getCommit"
  "#getCurrentBranch": "#getCurrentBranch"
  "#getNamespace": "#getNamespace"
  "#getReference": "#getReference"
  "#getReferenceCommit": "#getReferenceCommit"
  "#getReferenceNames": "#getReferenceNames"
  "#getReferences": "#getReferences"
  "#getTag": "#getTag"
  "#getTagByName": "#getTagByName"
  "#getTree": "#getTree"
  "#head": "#head"
  "#headDetached": "#headDetached"
  "#headUnborn": "#headUnborn"
  "#index": "#index"
  "#isBare": "#isBare"
  "#isEmpty": "#isEmpty"
  "#isShallow": "#isShallow"
  "#messageRemove": "#messageRemove"
  "#odb": "#odb"
  "#path": "#path"
  "#refdb": "#refdb"
  "#setHead": "#setHead"
  "#setHeadDetached": "#setHeadDetached"
  "#setNamespace": "#setNamespace"
  "#setWorkdir": "#setWorkdir"
  "#state": "#state"
  "#stateCleanup": "#stateCleanup"
  "#workdir": "#workdir"
  "INIT_FLAG": "#INIT_FLAG"
  "INIT_MODE": "#INIT_MODE"
  "OPEN_FLAG": "#OPEN_FLAG"
  "STATE": "#STATE"
---

## <a name="init"></a><span>Repository.</span>init <span class="tags"><span class="async">Async</span></span>

```js
Repository.init(path, is_bare).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String | the path to the repository |
| is_bare | Number | if true, a Git repository without a working directory is created at the pointed path. If false, provided path will be considered as the working directory into which the .git directory will be created. |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="initExt"></a><span>Repository.</span>initExt <span class="tags"><span class="async">Async</span></span>

```js
Repository.initExt(repo_path, opts).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo_path | String | The path to the repository. |
| opts | [RepositoryInitOptions](/api/repository_init_options/) | Pointer to git_repository_init_options struct. |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="open"></a><span>Repository.</span>open <span class="tags"><span class="async">Async</span></span>

```js
Repository.open(path).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String | the path to the repository |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="openBare"></a><span>Repository.</span>openBare <span class="tags"><span class="async">Async</span></span>

```js
Repository.openBare(bare_path).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |   |
| --- | --- | --- |
| bare_path | String | Direct path to the bare repository |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="openExt"></a><span>Repository.</span>openExt <span class="tags"><span class="async">Async</span></span>

```js
Repository.openExt(path, flags, ceiling_dirs).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String | Path to open as git repository. If the flags permit "searching", then this can be a path to a subdirectory inside the working directory of the repository. |
| flags | Number | A combination of the GIT_REPOSITORY_OPEN flags above. |
| ceiling_dirs | String | A GIT_PATH_LIST_SEPARATOR delimited list of path prefixes at which the search for a containing repository should terminate. |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="wrapOdb"></a><span>Repository.</span>wrapOdb <span class="tags"><span class="async">Async</span></span>

```js
Repository.wrapOdb(odb).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |   |
| --- | --- | --- |
| odb | [Odb](/api/odb/) | the object database to wrap |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="config"></a><span>Repository#</span>config <span class="tags"><span class="async">Async</span></span>

```js
repository.config().then(function(config) {
  // Use config
});
```

| Returns |  |
| --- | --- |
| [Config](/api/config/) |  |

## <a name="configSnapshot"></a><span>Repository#</span>configSnapshot <span class="tags"><span class="async">Async</span></span>

```js
repository.configSnapshot().then(function(config) {
  // Use config
});
```

| Returns |  |
| --- | --- |
| [Config](/api/config/) |  |

## <a name="createRevWalk"></a><span>Repository#</span>createRevWalk <span class="tags"><span class="sync">Sync</span></span>

```js
var revWalk = repository.createRevWalk(String);
```

Instantiate a new revision walker for browsing the Repository"s history.
See also `Commit.prototype.history()`


| Parameters | Type |
| --- | --- | --- |
| String | String, [Oid](/api/oid/) | sha or Oid |

| Returns |  |
| --- | --- |
| RevWalk |  |

## <a name="detachHead"></a><span>Repository#</span>detachHead <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.detachHead(signature, reflog_message);
```

| Parameters | Type |
| --- | --- | --- |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| reflog_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_EUNBORNBRANCH when HEAD points to a non existing
 branch or an error code |

## <a name="getBlob"></a><span>Repository#</span>getBlob <span class="tags"><span class="async">Async</span></span>

```js
repository.getBlob(String).then(function(blob) {
  // Use blob
});
```

Retrieve the blob represented by the oid.


| Parameters | Type |
| --- | --- | --- |
| String | String, [Oid](/api/oid/) | sha or Oid |

| Returns |  |
| --- | --- |
| [Blob](/api/blob/) |  |

## <a name="getBranch"></a><span>Repository#</span>getBranch <span class="tags"><span class="async">Async</span></span>

```js
repository.getBranch(name).then(function(ref) {
  // Use ref
});
```

Look up a branch. Alias for `getReference`


| Parameters | Type |
| --- | --- | --- |
| name | String, Ref | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

| Returns |  |
| --- | --- |
| Ref |  |

## <a name="getBranchCommit"></a><span>Repository#</span>getBranchCommit <span class="tags"><span class="async">Async</span></span>

```js
repository.getBranchCommit(name).then(function(commit) {
  // Use commit
});
```

Look up a branch's most recent commit. Alias to `getReferenceCommit`


| Parameters | Type |
| --- | --- | --- |
| name | String, Ref | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) |  |

## <a name="getCommit"></a><span>Repository#</span>getCommit <span class="tags"><span class="async">Async</span></span>

```js
repository.getCommit(String).then(function(commit) {
  // Use commit
});
```

Retrieve the commit identified by oid.


| Parameters | Type |
| --- | --- | --- |
| String | String, [Oid](/api/oid/) | sha or Oid |

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) |  |

## <a name="getCurrentBranch"></a><span>Repository#</span>getCurrentBranch <span class="tags"><span class="async">Async</span></span>

```js
repository.getCurrentBranch().then(function(reference) {
  // Use reference
});
```

Gets the branch that HEAD currently points to
Is an alias to head()

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="getNamespace"></a><span>Repository#</span>getNamespace <span class="tags"><span class="sync">Sync</span></span>

```js
var string = repository.getNamespace();
```

| Returns |  |
| --- | --- |
| String |  the active namespace, or NULL if there isn't one |

## <a name="getReference"></a><span>Repository#</span>getReference <span class="tags"><span class="async">Async</span></span>

```js
repository.getReference(name).then(function(reference) {
  // Use reference
});
```

Lookup the reference with the given name.


| Parameters | Type |
| --- | --- | --- |
| name | String, Ref | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="getReferenceCommit"></a><span>Repository#</span>getReferenceCommit <span class="tags"><span class="async">Async</span></span>

```js
repository.getReferenceCommit(name).then(function(commit) {
  // Use commit
});
```

Look up a refs's commit.


| Parameters | Type |
| --- | --- | --- |
| name | String, Ref | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) |  |

## <a name="getReferenceNames"></a><span>Repository#</span>getReferenceNames <span class="tags"><span class="async">Async</span></span>

```js
repository.getReferenceNames(type).then(function(arrayString) {
  // Use arrayString
});
```

Lookup reference names for a repository.


| Parameters | Type |
| --- | --- | --- |
| type | [Reference.TYPE](/api/reference/#TYPE) | Type of reference to look up |

| Returns |  |
| --- | --- |
| Array&lt;String&gt; |  |

## <a name="getReferences"></a><span>Repository#</span>getReferences <span class="tags"><span class="async">Async</span></span>

```js
repository.getReferences(type).then(function(arrayReference) {
  // Use arrayReference
});
```

Lookup references for a repository.


| Parameters | Type |
| --- | --- | --- |
| type | [Reference.TYPE](/api/reference/#TYPE) | Type of reference to look up |

| Returns |  |
| --- | --- |
| Array&lt;[Reference](/api/reference/)&gt; |  |

## <a name="getTag"></a><span>Repository#</span>getTag <span class="tags"><span class="async">Async</span></span>

```js
repository.getTag(String).then(function(tag) {
  // Use tag
});
```

Retrieve the tag represented by the oid.


| Parameters | Type |
| --- | --- | --- |
| String | String, [Oid](/api/oid/) | sha or Oid |

| Returns |  |
| --- | --- |
| [Tag](/api/tag/) |  |

## <a name="getTagByName"></a><span>Repository#</span>getTagByName <span class="tags"><span class="async">Async</span></span>

```js
repository.getTagByName(Short).then(function(tag) {
  // Use tag
});
```

Retrieve the tag represented by the tag name.


| Parameters | Type |
| --- | --- | --- |
| Short | String | or full tag name |

| Returns |  |
| --- | --- |
| [Tag](/api/tag/) |  |

## <a name="getTree"></a><span>Repository#</span>getTree <span class="tags"><span class="async">Async</span></span>

```js
repository.getTree(String).then(function(tree) {
  // Use tree
});
```

Retrieve the tree represented by the oid.


| Parameters | Type |
| --- | --- | --- |
| String | String, [Oid](/api/oid/) | sha or Oid |

| Returns |  |
| --- | --- |
| [Tree](/api/tree/) |  |

## <a name="head"></a><span>Repository#</span>head <span class="tags"><span class="async">Async</span></span>

```js
repository.head().then(function(reference) {
  // Use reference
});
```

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="headDetached"></a><span>Repository#</span>headDetached <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.headDetached();
```

| Returns |  |
| --- | --- |
| Number |  1 if HEAD is detached, 0 if it's not; error code if there
 was an error. |

## <a name="headUnborn"></a><span>Repository#</span>headUnborn <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.headUnborn();
```

| Returns |  |
| --- | --- |
| Number |  1 if the current branch is unborn, 0 if it's not; error
 code if there was an error |

## <a name="index"></a><span>Repository#</span>index <span class="tags"><span class="async">Async</span></span>

```js
repository.index().then(function(index) {
  // Use index
});
```

| Returns |  |
| --- | --- |
| [Index](/api/index/) |  |

## <a name="isBare"></a><span>Repository#</span>isBare <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.isBare();
```

| Returns |  |
| --- | --- |
| Number |  1 if the repository is bare, 0 otherwise. |

## <a name="isEmpty"></a><span>Repository#</span>isEmpty <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.isEmpty();
```

| Returns |  |
| --- | --- |
| Number |  1 if the repository is empty, 0 if it isn't, error code
 if the repository is corrupted |

## <a name="isShallow"></a><span>Repository#</span>isShallow <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.isShallow();
```

| Returns |  |
| --- | --- |
| Number |  1 if shallow, zero if not |

## <a name="messageRemove"></a><span>Repository#</span>messageRemove <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.messageRemove();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="odb"></a><span>Repository#</span>odb <span class="tags"><span class="async">Async</span></span>

```js
repository.odb().then(function(odb) {
  // Use odb
});
```

| Returns |  |
| --- | --- |
| [Odb](/api/odb/) |  |

## <a name="path"></a><span>Repository#</span>path <span class="tags"><span class="sync">Sync</span></span>

```js
var string = repository.path();
```

| Returns |  |
| --- | --- |
| String |  the path to the repository |

## <a name="refdb"></a><span>Repository#</span>refdb <span class="tags"><span class="async">Async</span></span>

```js
repository.refdb().then(function(refdb) {
  // Use refdb
});
```

| Returns |  |
| --- | --- |
| [Refdb](/api/refdb/) |  |

## <a name="setHead"></a><span>Repository#</span>setHead <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.setHead(refname, signature, log_message);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | Canonical name of the reference the HEAD should point at |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| Number |  0 on success, or an error code |

## <a name="setHeadDetached"></a><span>Repository#</span>setHeadDetached <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.setHeadDetached(commitish, signature, log_message);
```

| Parameters | Type |
| --- | --- | --- |
| commitish | [Oid](/api/oid/) | Object id of the Commit the HEAD should point to |
| signature | [Signature](/api/signature/) | The identity that will used to populate the reflog entry |
| log_message | String | The one line long message to be appended to the reflog |

| Returns |  |
| --- | --- |
| Number |  0 on success, or an error code |

## <a name="setNamespace"></a><span>Repository#</span>setNamespace <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.setNamespace(nmspace);
```

| Parameters | Type |
| --- | --- | --- |
| nmspace | String | The namespace. This should not include the refs folder, e.g. to namespace all references under `refs/namespaces/foo/`, use `foo` as the namespace. |

| Returns |  |
| --- | --- |
| Number |  0 on success, -1 on error |

## <a name="setWorkdir"></a><span>Repository#</span>setWorkdir <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.setWorkdir(workdir, update_gitlink);
```

| Parameters | Type |
| --- | --- | --- |
| workdir | String | The path to a working directory |
| update_gitlink | Number | Create/update gitlink in workdir and set config "core.worktree" (if workdir is not the parent of the .git directory) |

| Returns |  |
| --- | --- |
| Number |  0, or an error code |

## <a name="state"></a><span>Repository#</span>state <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.state();
```

| Returns |  |
| --- | --- |
| Number |  The state of the repository |

## <a name="stateCleanup"></a><span>Repository#</span>stateCleanup <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.stateCleanup();
```

| Returns |  |
| --- | --- |
| Number |  0 on success, or error |

## <a name="workdir"></a><span>Repository#</span>workdir <span class="tags"><span class="sync">Sync</span></span>

```js
var string = repository.workdir();
```

| Returns |  |
| --- | --- |
| String |  the path to the working dir, if it exists |

## <a name="INIT_FLAG"></a><span>Repository.</span>INIT_FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Repository.INIT_FLAG.</span>BARE | 1 |
| <span>Repository.INIT_FLAG.</span>NO_REINIT | 2 |
| <span>Repository.INIT_FLAG.</span>NO_DOTGIT_DIR | 4 |
| <span>Repository.INIT_FLAG.</span>MKDIR | 8 |
| <span>Repository.INIT_FLAG.</span>MKPATH | 16 |
| <span>Repository.INIT_FLAG.</span>EXTERNAL_TEMPLATE | 32 |
| <span>Repository.INIT_FLAG.</span>RELATIVE_GITLINK | 64 |

## <a name="INIT_MODE"></a><span>Repository.</span>INIT_MODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Repository.INIT_MODE.</span>INIT_SHARED_UMASK | 0 |
| <span>Repository.INIT_MODE.</span>INIT_SHARED_GROUP | 1533 |
| <span>Repository.INIT_MODE.</span>INIT_SHARED_ALL | 1535 |

## <a name="OPEN_FLAG"></a><span>Repository.</span>OPEN_FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Repository.OPEN_FLAG.</span>OPEN_NO_SEARCH | 1 |
| <span>Repository.OPEN_FLAG.</span>OPEN_CROSS_FS | 2 |
| <span>Repository.OPEN_FLAG.</span>OPEN_BARE | 4 |

## <a name="STATE"></a><span>Repository.</span>STATE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Repository.STATE.</span>NONE | 0 |
| <span>Repository.STATE.</span>MERGE | 1 |
| <span>Repository.STATE.</span>REVERT | 2 |
| <span>Repository.STATE.</span>CHERRYPICK | 3 |
| <span>Repository.STATE.</span>BISECT | 4 |
| <span>Repository.STATE.</span>REBASE | 5 |
| <span>Repository.STATE.</span>REBASE_INTERACTIVE | 6 |
| <span>Repository.STATE.</span>REBASE_MERGE | 7 |
| <span>Repository.STATE.</span>APPLY_MAILBOX | 8 |
| <span>Repository.STATE.</span>APPLY_MAILBOX_OR_REBASE | 9 |

