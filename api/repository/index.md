---
layout: default
menu_item: api
title: Repository
description: Version 0.5.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "discover": "#discover"
  "init": "#init"
  "initExt": "#initExt"
  "open": "#open"
  "openBare": "#openBare"
  "openExt": "#openExt"
  "wrapOdb": "#wrapOdb"
  "#checkoutBranch": "#checkoutBranch"
  "#config": "#config"
  "#configSnapshot": "#configSnapshot"
  "#continueRebase": "#continueRebase"
  "#createBlobFromBuffer": "#createBlobFromBuffer"
  "#createBranch": "#createBranch"
  "#createCommit": "#createCommit"
  "#createCommitOnHead": "#createCommitOnHead"
  "#createLightweightTag": "#createLightweightTag"
  "#createRevWalk": "#createRevWalk"
  "#createTag": "#createTag"
  "#defaultSignature": "#defaultSignature"
  "#deleteTagByName": "#deleteTagByName"
  "#detachHead": "#detachHead"
  "#fetch": "#fetch"
  "#fetchAll": "#fetchAll"
  "#fetchheadForeach": "#fetchheadForeach"
  "#free": "#free"
  "#getBlob": "#getBlob"
  "#getBranch": "#getBranch"
  "#getBranchCommit": "#getBranchCommit"
  "#getCommit": "#getCommit"
  "#getCurrentBranch": "#getCurrentBranch"
  "#getHeadCommit": "#getHeadCommit"
  "#getMasterCommit": "#getMasterCommit"
  "#getNamespace": "#getNamespace"
  "#getReference": "#getReference"
  "#getReferenceCommit": "#getReferenceCommit"
  "#getReferenceNames": "#getReferenceNames"
  "#getReferences": "#getReferences"
  "#getRemote": "#getRemote"
  "#getRemotes": "#getRemotes"
  "#getStatus": "#getStatus"
  "#getStatusExt": "#getStatusExt"
  "#getTag": "#getTag"
  "#getTagByName": "#getTagByName"
  "#getTree": "#getTree"
  "#head": "#head"
  "#headDetached": "#headDetached"
  "#headUnborn": "#headUnborn"
  "#index": "#index"
  "#isApplyingMailbox": "#isApplyingMailbox"
  "#isBare": "#isBare"
  "#isBisecting": "#isBisecting"
  "#isCherrypicking": "#isCherrypicking"
  "#isDefaultState": "#isDefaultState"
  "#isEmpty": "#isEmpty"
  "#isMerging": "#isMerging"
  "#isRebasing": "#isRebasing"
  "#isReverting": "#isReverting"
  "#isShallow": "#isShallow"
  "#mergeBranches": "#mergeBranches"
  "#messageRemove": "#messageRemove"
  "#odb": "#odb"
  "#path": "#path"
  "#rebaseBranches": "#rebaseBranches"
  "#refdb": "#refdb"
  "#setHead": "#setHead"
  "#setHeadDetached": "#setHeadDetached"
  "#setHeadDetachedFromAnnotated": "#setHeadDetachedFromAnnotated"
  "#setIdent": "#setIdent"
  "#setNamespace": "#setNamespace"
  "#setWorkdir": "#setWorkdir"
  "#stageLines": "#stageLines"
  "#state": "#state"
  "#stateCleanup": "#stateCleanup"
  "#treeBuilder": "#treeBuilder"
  "#workdir": "#workdir"
  "INIT_FLAG": "#INIT_FLAG"
  "INIT_MODE": "#INIT_MODE"
  "OPEN_FLAG": "#OPEN_FLAG"
  "STATE": "#STATE"
---

## <a name="discover"></a><span>Repository.</span>discover <span class="tags"><span class="async">Async</span></span>

```js
Repository.discover(start_path, across_fs, ceiling_dirs).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |   |
| --- | --- | --- |
| start_path | String | The base path where the lookup starts. |
| across_fs | Number | If true, then the lookup will not stop when a filesystem device change is detected while exploring parent directories. |
| ceiling_dirs | String | A GIT_PATH_LIST_SEPARATOR separated list of absolute symbolic link free paths. The lookup will stop when any of this paths is reached. Note that the lookup always performs on start_path no matter start_path appears in ceiling_dirs ceiling_dirs might be NULL (which is equivalent to an empty string) |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | a user-allocated git_buf which will contain
 the found path. |

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

## <a name="checkoutBranch"></a><span>Repository#</span>checkoutBranch <span class="tags"><span class="async">Async</span></span>

```js
repository.checkoutBranch(branch, opts).then(function() {
  // method complete});
```

This will set the HEAD to point to the local branch and then attempt
to update the index and working tree to match the content of the
latest commit on that branch

| Parameters | Type |
| --- | --- | --- |
| branch | String, [Reference](/api/reference/) | the branch to checkout |
| opts | [Object](/api/object/), [CheckoutOptions](/api/checkout_options/) | the options to use for the checkout |

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

## <a name="continueRebase"></a><span>Repository#</span>continueRebase <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = repository.continueRebase(signature);
```

Continues an existing rebase

| Parameters | Type |
| --- | --- | --- |
| signature | [Signature](/api/signature/) | Identity of the one performing the rebase |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | A commit id for a succesful merge or an index for a                      rebase with conflicts |

## <a name="createBlobFromBuffer"></a><span>Repository#</span>createBlobFromBuffer <span class="tags"><span class="sync">Sync</span></span>

```js
var blob = repository.createBlobFromBuffer(buffer);
```

Create a blob from a buffer

| Parameters | Type |
| --- | --- | --- |
| buffer | Buffer |  |

| Returns |  |
| --- | --- |
| [Blob](/api/blob/) |  |

## <a name="createBranch"></a><span>Repository#</span>createBranch <span class="tags"><span class="async">Async</span></span>

```js
repository.createBranch(name, commit, force, signature, logMessage).then(function(ref) {
  // Use ref
});
```

Creates a branch with the passed in name pointing to the commit

| Parameters | Type |
| --- | --- | --- |
| name | String | Branch name, e.g. "master" |
| commit | [Commit](/api/commit/), String, [Oid](/api/oid/) | The commit the branch will point to |
| force | bool | Overwrite branch if it exists |
| signature | [Signature](/api/signature/) | Identity to use to populate reflog |
| logMessage | String | One line message to be appended to the reflog |

| Returns |  |
| --- | --- |
| Ref |  |

## <a name="createCommit"></a><span>Repository#</span>createCommit <span class="tags"><span class="async">Async</span></span>

```js
repository.createCommit(updateRef, author, committer, message, Tree, parents).then(function(oid) {
  // Use oid
});
```

Create a commit

| Parameters | Type |
| --- | --- | --- |
| updateRef | String |  |
| author | [Signature](/api/signature/) |  |
| committer | [Signature](/api/signature/) |  |
| message | String |  |
| Tree | [Tree](/api/tree/), [Oid](/api/oid/), String |  |
| parents | Array |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | The oid of the commit |

## <a name="createCommitOnHead"></a><span>Repository#</span>createCommitOnHead <span class="tags"><span class="async">Async</span></span>

```js
repository.createCommitOnHead(filesToAdd, author, committer, message).then(function(oid) {
  // Use oid
});
```

Creates a new commit on HEAD from the list of passed in files

| Parameters | Type |
| --- | --- | --- |
| filesToAdd | Array |  |
| author | [Signature](/api/signature/) |  |
| committer | [Signature](/api/signature/) |  |
| message | String |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | The oid of the new commit |

## <a name="createLightweightTag"></a><span>Repository#</span>createLightweightTag <span class="tags"><span class="async">Async</span></span>

```js
repository.createLightweightTag(String, name).then(function(reference) {
  // Use reference
});
```

Creates a new lightweight tag

| Parameters | Type |
| --- | --- | --- |
| String | String, [Oid](/api/oid/) | sha or Oid |
| name | String | the name of the tag |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

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

## <a name="createTag"></a><span>Repository#</span>createTag <span class="tags"><span class="async">Async</span></span>

```js
repository.createTag(String, name, message).then(function(tag) {
  // Use tag
});
```

Creates a new annotated tag

| Parameters | Type |
| --- | --- | --- |
| String | String, [Oid](/api/oid/) | sha or Oid |
| name | String | the name of the tag |
| message | String | the description that will be attached to the annotated tag |

| Returns |  |
| --- | --- |
| [Tag](/api/tag/) |  |

## <a name="defaultSignature"></a><span>Repository#</span>defaultSignature <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = repository.defaultSignature();
```

Gets the default signature for the default user and now timestamp

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  |

## <a name="deleteTagByName"></a><span>Repository#</span>deleteTagByName <span class="tags"><span class="async">Async</span></span>

```js
repository.deleteTagByName(Short).then(function() {
  // method complete});
```

Deletes a tag from a repository by the tag name.

| Parameters | Type |
| --- | --- | --- |
| Short | String | or full tag name |

## <a name="detachHead"></a><span>Repository#</span>detachHead <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.detachHead();
```

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_EUNBORNBRANCH when HEAD points to a non existing
 branch or an error code |

## <a name="fetch"></a><span>Repository#</span>fetch <span class="tags"><span class="sync">Sync</span></span>

```js
repository.fetch(remote, fetchOptions);
```

Fetches from a remote

| Parameters | Type |
| --- | --- | --- |
| remote | String, [Remote](/api/remote/) |  |
| fetchOptions | [Object](/api/object/), [FetchOptions](/api/fetch_options/) | Options for the fetch, includes callbacks for fetching |

## <a name="fetchAll"></a><span>Repository#</span>fetchAll <span class="tags"><span class="sync">Sync</span></span>

```js
repository.fetchAll(fetchOptions, callback);
```

Fetches from all remotes. This is done in series due to deadlocking issues
with fetching from many remotes that can happen.

| Parameters | Type |
| --- | --- | --- |
| fetchOptions | [Object](/api/object/), [FetchOptions](/api/fetch_options/) | Options for the fetch, includes callbacks for fetching |
| callback | Function |  |

## <a name="fetchheadForeach"></a><span>Repository#</span>fetchheadForeach <span class="tags"><span class="async">Async</span></span>

```js
repository.fetchheadForeach(callback).then(function() {
  // method complete});
```

| Parameters | Type |
| --- | --- | --- |
| callback | FetchheadForeachCb | The callback function to be called on each entry |

## <a name="free"></a><span>Repository#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
repository.free();
```

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

## <a name="getHeadCommit"></a><span>Repository#</span>getHeadCommit <span class="tags"><span class="async">Async</span></span>

```js
repository.getHeadCommit().then(function(commit) {
  // Use commit
});
```

Retrieve the commit that HEAD is currently pointing to

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) |  |

## <a name="getMasterCommit"></a><span>Repository#</span>getMasterCommit <span class="tags"><span class="async">Async</span></span>

```js
repository.getMasterCommit().then(function(commit) {
  // Use commit
});
```

Retrieve the master branch commit.

| Returns |  |
| --- | --- |
| [Commit](/api/commit/) |  |

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

## <a name="getRemote"></a><span>Repository#</span>getRemote <span class="tags"><span class="sync">Sync</span></span>

```js
var remote = repository.getRemote(remote, callback);
```

Gets a remote from the repo

| Parameters | Type |
| --- | --- | --- |
| remote | String, [Remote](/api/remote/) |  |
| callback | Function |  |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) | The remote object |

## <a name="getRemotes"></a><span>Repository#</span>getRemotes <span class="tags"><span class="sync">Sync</span></span>

```js
var object = repository.getRemotes(Optional);
```

Lists out the remotes in the given repository.

| Parameters | Type |
| --- | --- | --- |
| Optional | Function | callback |

| Returns |  |
| --- | --- |
| [Object](/api/object/) | Promise object. |

## <a name="getStatus"></a><span>Repository#</span>getStatus <span class="tags"><span class="sync">Sync</span></span>

```js
var arrayStatusFile = repository.getStatus(opts);
```

Get the status of a repo to it's working directory

| Parameters | Type |
| --- | --- | --- |
| opts | obj |  |

| Returns |  |
| --- | --- |
| Array&lt;StatusFile&gt; |  |

## <a name="getStatusExt"></a><span>Repository#</span>getStatusExt <span class="tags"><span class="sync">Sync</span></span>

```js
var arrayStatusEntry = repository.getStatusExt(opts);
```

Get extended statuses of a repo to it's working directory. Status entries
have `status`, `headToIndex` delta, and `indexToWorkdir` deltas

| Parameters | Type |
| --- | --- | --- |
| opts | obj |  |

| Returns |  |
| --- | --- |
| Array&lt;[StatusEntry](/api/status_entry/)&gt; |  |

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

## <a name="isApplyingMailbox"></a><span>Repository#</span>isApplyingMailbox <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = repository.isApplyingMailbox();
```

Returns true if the repository is in the APPLY_MAILBOX or
APPLY_MAILBOX_OR_REBASE state.

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isBare"></a><span>Repository#</span>isBare <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.isBare();
```

| Returns |  |
| --- | --- |
| Number |  1 if the repository is bare, 0 otherwise. |

## <a name="isBisecting"></a><span>Repository#</span>isBisecting <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = repository.isBisecting();
```

Returns true if the repository is in the BISECT state.

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isCherrypicking"></a><span>Repository#</span>isCherrypicking <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = repository.isCherrypicking();
```

Returns true if the repository is in the CHERRYPICK state.

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isDefaultState"></a><span>Repository#</span>isDefaultState <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = repository.isDefaultState();
```

Returns true if the repository is in the default NONE state.

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isEmpty"></a><span>Repository#</span>isEmpty <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.isEmpty();
```

| Returns |  |
| --- | --- |
| Number |  1 if the repository is empty, 0 if it isn't, error code
 if the repository is corrupted |

## <a name="isMerging"></a><span>Repository#</span>isMerging <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = repository.isMerging();
```

Returns true if the repository is in the MERGE state.

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isRebasing"></a><span>Repository#</span>isRebasing <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = repository.isRebasing();
```

Returns true if the repository is in the REBASE, REBASE_INTERACTIVE, or
REBASE_MERGE state.

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isReverting"></a><span>Repository#</span>isReverting <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = repository.isReverting();
```

Returns true if the repository is in the REVERT state.

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isShallow"></a><span>Repository#</span>isShallow <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.isShallow();
```

| Returns |  |
| --- | --- |
| Number |  1 if shallow, zero if not |

## <a name="mergeBranches"></a><span>Repository#</span>mergeBranches <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = repository.mergeBranches(to, from, signature, mergePreference);
```

Merge a branch onto another branch

| Parameters | Type |
| --- | --- | --- |
| to | String, Ref |  |
| from | String, Ref |  |
| signature | [Signature](/api/signature/) |  |
| mergePreference | [Merge.PREFERENCE](/api/merge/#PREFERENCE) |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | A commit id for a succesful merge or an index for a                      merge with conflicts |

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

## <a name="rebaseBranches"></a><span>Repository#</span>rebaseBranches <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = repository.rebaseBranches(branch, upstream, onto, signature);
```

Rebases a branch onto another branch

| Parameters | Type |
| --- | --- | --- |
| branch | String |  |
| upstream | String |  |
| onto | String |  |
| signature | [Signature](/api/signature/) | Identity of the one performing the rebase |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | A commit id for a succesful merge or an index for a                      rebase with conflicts |

## <a name="refdb"></a><span>Repository#</span>refdb <span class="tags"><span class="async">Async</span></span>

```js
repository.refdb().then(function(refdb) {
  // Use refdb
});
```

| Returns |  |
| --- | --- |
| [Refdb](/api/refdb/) |  |

## <a name="setHead"></a><span>Repository#</span>setHead <span class="tags"><span class="async">Async</span></span>

```js
repository.setHead(refname).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | Canonical name of the reference the HEAD should point at |

| Returns |  |
| --- | --- |
| Number |  0 on success, or an error code |

## <a name="setHeadDetached"></a><span>Repository#</span>setHeadDetached <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.setHeadDetached(commitish);
```

| Parameters | Type |
| --- | --- | --- |
| commitish | [Oid](/api/oid/) | Object id of the Commit the HEAD should point to |

| Returns |  |
| --- | --- |
| Number |  0 on success, or an error code |

## <a name="setHeadDetachedFromAnnotated"></a><span>Repository#</span>setHeadDetachedFromAnnotated <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.setHeadDetachedFromAnnotated(commitish);
```

| Parameters | Type |
| --- | --- | --- |
| commitish | [AnnotatedCommit](/api/annotated_commit/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="setIdent"></a><span>Repository#</span>setIdent <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.setIdent(name, email);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the email to use for the reflog entries |
| email | String |  |

| Returns |  |
| --- | --- |
| Number |  |

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

## <a name="stageLines"></a><span>Repository#</span>stageLines <span class="tags"><span class="async">Async</span></span>

```js
repository.stageLines(filePath, newLines, isStaged).then(function(number) {
  // Use number
});
```

Stages or unstages line selection of a specified file

| Parameters | Type |
| --- | --- | --- |
| filePath | String | The relative path of this file in the repo |
| newLines | Array | The array of DiffLine objects selected for staging or unstaging |
| isStaged | Boolean | Are the selected lines currently staged |

| Returns |  |
| --- | --- |
| Number | 0 or an error code |

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

## <a name="treeBuilder"></a><span>Repository#</span>treeBuilder <span class="tags"><span class="sync">Sync</span></span>

```js
repository.treeBuilder(tree);
```

Create a new tree builder.

| Parameters | Type |
| --- | --- | --- |
| tree | [Tree](/api/tree/) |  |

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

