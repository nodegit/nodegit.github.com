---
layout: default
menu_item: api
title: Repository
description: Version 0.26.1
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
  "openFromWorktree": "#openFromWorktree"
  "wrapOdb": "#wrapOdb"
  "#checkoutBranch": "#checkoutBranch"
  "#checkoutRef": "#checkoutRef"
  "#cleanup": "#cleanup"
  "#commondir": "#commondir"
  "#config": "#config"
  "#continueRebase": "#continueRebase"
  "#createBlobFromBuffer": "#createBlobFromBuffer"
  "#createBranch": "#createBranch"
  "#createCommit": "#createCommit"
  "#createCommitBuffer": "#createCommitBuffer"
  "#createCommitOnHead": "#createCommitOnHead"
  "#createCommitWithSignature": "#createCommitWithSignature"
  "#createLightweightTag": "#createLightweightTag"
  "#createRevWalk": "#createRevWalk"
  "#createTag": "#createTag"
  "#defaultSignature": "#defaultSignature"
  "#deleteTagByName": "#deleteTagByName"
  "#detachHead": "#detachHead"
  "#fetch": "#fetch"
  "#fetchAll": "#fetchAll"
  "#fetchheadForeach": "#fetchheadForeach"
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
  "#getRemoteNames": "#getRemoteNames"
  "#getRemotes": "#getRemotes"
  "#getStatus": "#getStatus"
  "#getStatusExt": "#getStatusExt"
  "#getSubmoduleNames": "#getSubmoduleNames"
  "#getSubmodules": "#getSubmodules"
  "#getTag": "#getTag"
  "#getTagByName": "#getTagByName"
  "#getTree": "#getTree"
  "#head": "#head"
  "#headDetached": "#headDetached"
  "#headDetachedForWorktree": "#headDetachedForWorktree"
  "#headForWorktree": "#headForWorktree"
  "#headUnborn": "#headUnborn"
  "#ident": "#ident"
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
  "#isWorktree": "#isWorktree"
  "#itemPath": "#itemPath"
  "#mergeBranches": "#mergeBranches"
  "#mergeheadForeach": "#mergeheadForeach"
  "#messageRemove": "#messageRemove"
  "#odb": "#odb"
  "#path": "#path"
  "#rebaseBranches": "#rebaseBranches"
  "#refdb": "#refdb"
  "#refreshIndex": "#refreshIndex"
  "#refreshReferences": "#refreshReferences"
  "#setHead": "#setHead"
  "#setHeadDetached": "#setHeadDetached"
  "#setHeadDetachedFromAnnotated": "#setHeadDetachedFromAnnotated"
  "#setIdent": "#setIdent"
  "#setIndex": "#setIndex"
  "#setNamespace": "#setNamespace"
  "#setWorkdir": "#setWorkdir"
  "#stageFilemode": "#stageFilemode"
  "#stageLines": "#stageLines"
  "#state": "#state"
  "#stateCleanup": "#stateCleanup"
  "#submoduleCacheAll": "#submoduleCacheAll"
  "#submoduleCacheClear": "#submoduleCacheClear"
  "#treeBuilder": "#treeBuilder"
  "#workdir": "#workdir"
  "INIT_FLAG": "#INIT_FLAG"
  "INIT_MODE": "#INIT_MODE"
  "ITEM": "#ITEM"
  "OPEN_FLAG": "#OPEN_FLAG"
  "STATE": "#STATE"
---

## <a name="discover"></a><span>Repository.</span>discover <span class="tags"><span class="async">Async</span></span>

```js
Repository.discover(startPath, acrossFs, ceilingDirs).then(function(string) {
  // Use string
});
```

Look for a git repository beginning with startPath and walk around parent paths, if nothing has been found. The lookup ends as soon as a repository is found or when a directory, referenced in ceilingDirs is reached.

| Parameters | Type |   |
| --- | --- | --- |
| startPath | String | The base path where the lookup starts. |
| acrossFs | Number | If non-zero, then the lookup will not stop when a filesystem device change is detected while exploring parent directories. |
| ceilingDirs | String | A list of absolute symbolic link free paths. the search will stop if any of these paths are hit. This may be set to null |

| Returns |  |
| --- | --- |
| String | Path of the git repository |

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
| path | String | Path to open as git repository. If the flags permit "searching", then this can be a path to a subdirectory inside the working directory of the repository. May be NULL if flags is GIT_REPOSITORY_OPEN_FROM_ENV. |
| flags | Number | A combination of the GIT_REPOSITORY_OPEN flags above. |
| ceiling_dirs | String | A GIT_PATH_LIST_SEPARATOR delimited list of path prefixes at which the search for a containing repository should terminate. |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="openFromWorktree"></a><span>Repository.</span>openFromWorktree <span class="tags"><span class="async">Async</span></span>

```js
Repository.openFromWorktree(wt).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |   |
| --- | --- | --- |
| wt | [Worktree](/api/worktree/) | Working tree to open |

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

## <a name="checkoutRef"></a><span>Repository#</span>checkoutRef <span class="tags"><span class="async">Async</span></span>

```js
repository.checkoutRef(reference, opts).then(function() {
  // method complete});
```

This will set the HEAD to point to the reference and then attempt
to update the index and working tree to match the content of the
latest commit on that reference

| Parameters | Type |
| --- | --- | --- |
| reference | [Reference](/api/reference/) | the reference to checkout |
| opts | [Object](/api/object/), [CheckoutOptions](/api/checkout_options/) | the options to use for the checkout |

## <a name="cleanup"></a><span>Repository#</span>cleanup <span class="tags"><span class="async">Async</span></span>

```js
repository.cleanup().then(function() {
  // method complete});
```

## <a name="commondir"></a><span>Repository#</span>commondir <span class="tags"><span class="sync">Sync</span></span>

```js
var string = repository.commondir();
```

| Returns |  |
| --- | --- |
| String |  the path to the common dir |

## <a name="config"></a><span>Repository#</span>config <span class="tags"><span class="async">Async</span></span>

```js
repository.config().then(function(config) {
  // Use config
});
```

| Returns |  |
| --- | --- |
| [Config](/api/config/) |  |

## <a name="continueRebase"></a><span>Repository#</span>continueRebase <span class="tags"><span class="async">Async</span></span>

```js
repository.continueRebase(signature, beforeNextFn, beforeFinishFn, rebaseOptions).then(function(oid) {
  // Use oid
});
```

Continues an existing rebase

| Parameters | Type |
| --- | --- | --- |
| signature | [Signature](/api/signature/) | Identity of the one performing the rebase |
| beforeNextFn | Function | Callback to be called before each step of the rebase. If the callback returns a promise, the rebase will resume when the promise resolves. The rebase object is is passed to the callback. |
| beforeFinishFn | Function | Callback called before the invocation of finish(). If the callback returns a promise, finish() will be called when the promise resolves. This callback will be provided a detailed overview of the rebase |
| rebaseOptions | [RebaseOptions](/api/rebase_options/) | Options to initialize the rebase object with |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | A commit id for a succesful merge or an index for a                      rebase with conflicts |

## <a name="createBlobFromBuffer"></a><span>Repository#</span>createBlobFromBuffer <span class="tags"><span class="async">Async</span></span>

```js
repository.createBlobFromBuffer(buffer).then(function(oid) {
  // Use oid
});
```

Create a blob from a buffer

| Parameters | Type |
| --- | --- | --- |
| buffer | Buffer |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="createBranch"></a><span>Repository#</span>createBranch <span class="tags"><span class="async">Async</span></span>

```js
repository.createBranch(name, commit, force).then(function(reference) {
  // Use reference
});
```

Creates a branch with the passed in name pointing to the commit

| Parameters | Type |
| --- | --- | --- |
| name | String | Branch name, e.g. "master" |
| commit | [Commit](/api/commit/), String, [Oid](/api/oid/) | The commit the branch will point to |
| force | Boolean | Overwrite branch if it exists |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

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
| Tree | [Oid](/api/oid/), String |  |
| parents | Array |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | The oid of the commit |

## <a name="createCommitBuffer"></a><span>Repository#</span>createCommitBuffer <span class="tags"><span class="async">Async</span></span>

```js
repository.createCommitBuffer(author, committer, message, treeOid, parents).then(function(string) {
  // Use string
});
```

Create a commit

| Parameters | Type |
| --- | --- | --- |
| author | [Signature](/api/signature/) |  |
| committer | [Signature](/api/signature/) |  |
| message | String |  |
| treeOid | [Oid](/api/oid/), String |  |
| parents | Array |  |

| Returns |  |
| --- | --- |
| String | The content of the commit object                  as a string |

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

## <a name="createCommitWithSignature"></a><span>Repository#</span>createCommitWithSignature <span class="tags"><span class="async">Async</span></span>

```js
repository.createCommitWithSignature(updateRef, author, committer, message, Tree, parents, onSignature).then(function(oid) {
  // Use oid
});
```

Create a commit that is digitally signed

| Parameters | Type |
| --- | --- | --- |
| updateRef | String |  |
| author | [Signature](/api/signature/) |  |
| committer | [Signature](/api/signature/) |  |
| message | String |  |
| Tree | [Tree](/api/tree/), [Oid](/api/oid/), String |  |
| parents | Array |  |
| onSignature | Function | Callback to be called with string to be signed |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | The oid of the commit |

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
var revwalk = repository.createRevWalk();
```

Instantiate a new revision walker for browsing the Repository"s history.
See also `Commit.prototype.history()`

| Returns |  |
| --- | --- |
| [Revwalk](/api/revwalk/) |  |

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

## <a name="defaultSignature"></a><span>Repository#</span>defaultSignature <span class="tags"><span class="async">Async</span></span>

```js
repository.defaultSignature().then(function(signature) {
  // Use signature
});
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

## <a name="fetch"></a><span>Repository#</span>fetch <span class="tags"><span class="async">Async</span></span>

```js
repository.fetch(remote, fetchOptions).then(function() {
  // method complete});
```

Fetches from a remote

| Parameters | Type |
| --- | --- | --- |
| remote | String, [Remote](/api/remote/) |  |
| fetchOptions | [Object](/api/object/), [FetchOptions](/api/fetch_options/) | Options for the fetch, includes callbacks for fetching |

## <a name="fetchAll"></a><span>Repository#</span>fetchAll <span class="tags"><span class="async">Async</span></span>

```js
repository.fetchAll(fetchOptions, callback).then(function() {
  // method complete});
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
repository.getBranch(name).then(function(reference) {
  // Use reference
});
```

Look up a branch. Alias for `getReference`

| Parameters | Type |
| --- | --- | --- |
| name | String, [Reference](/api/reference/) | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="getBranchCommit"></a><span>Repository#</span>getBranchCommit <span class="tags"><span class="async">Async</span></span>

```js
repository.getBranchCommit(name).then(function(commit) {
  // Use commit
});
```

Look up a branch's most recent commit. Alias to `getReferenceCommit`

| Parameters | Type |
| --- | --- | --- |
| name | String, [Reference](/api/reference/) | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

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
| name | String, [Reference](/api/reference/) | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

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
| name | String, [Reference](/api/reference/) | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

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
repository.getReferences().then(function(stdVectorGitReference) {
  // Use stdVectorGitReference
});
```

| Returns |  |
| --- | --- |
| StdVectorGitReference |  |

## <a name="getRemote"></a><span>Repository#</span>getRemote <span class="tags"><span class="async">Async</span></span>

```js
repository.getRemote(remote, callback).then(function(remote) {
  // Use remote
});
```

Gets a remote from the repo

| Parameters | Type |
| --- | --- | --- |
| remote | String, [Remote](/api/remote/) |  |
| callback | Function |  |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) | The remote object |

## <a name="getRemoteNames"></a><span>Repository#</span>getRemoteNames <span class="tags"><span class="async">Async</span></span>

```js
repository.getRemoteNames(Optional).then(function(object) {
  // Use object
});
```

Lists out the remotes in the given repository.

| Parameters | Type |
| --- | --- | --- |
| Optional | Function | callback |

| Returns |  |
| --- | --- |
| [Object](/api/object/) | Promise object. |

## <a name="getRemotes"></a><span>Repository#</span>getRemotes <span class="tags"><span class="async">Async</span></span>

```js
repository.getRemotes().then(function(stdVectorGitRemote) {
  // Use stdVectorGitRemote
});
```

| Returns |  |
| --- | --- |
| StdVectorGitRemote |  |

## <a name="getStatus"></a><span>Repository#</span>getStatus <span class="tags"><span class="async">Async</span></span>

```js
repository.getStatus(opts).then(function(arrayStatusFile) {
  // Use arrayStatusFile
});
```

Get the status of a repo to it's working directory

| Parameters | Type |
| --- | --- | --- |
| opts | obj |  |

| Returns |  |
| --- | --- |
| Array&lt;StatusFile&gt; |  |

## <a name="getStatusExt"></a><span>Repository#</span>getStatusExt <span class="tags"><span class="async">Async</span></span>

```js
repository.getStatusExt(opts).then(function(arrayStatusFile) {
  // Use arrayStatusFile
});
```

Get extended statuses of a repo to it's working directory. Status entries
have `status`, `headToIndex` delta, and `indexToWorkdir` deltas

| Parameters | Type |
| --- | --- | --- |
| opts | obj |  |

| Returns |  |
| --- | --- |
| Array&lt;StatusFile&gt; |  |

## <a name="getSubmoduleNames"></a><span>Repository#</span>getSubmoduleNames <span class="tags"><span class="async">Async</span></span>

```js
repository.getSubmoduleNames().then(function(arrayString) {
  // Use arrayString
});
```

Get the names of the submodules in the repository.

| Returns |  |
| --- | --- |
| Array&lt;String&gt; |  |

## <a name="getSubmodules"></a><span>Repository#</span>getSubmodules <span class="tags"><span class="async">Async</span></span>

```js
repository.getSubmodules().then(function(stdVectorGitSubmodule) {
  // Use stdVectorGitSubmodule
});
```

| Returns |  |
| --- | --- |
| StdVectorGitSubmodule |  |

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

## <a name="headDetachedForWorktree"></a><span>Repository#</span>headDetachedForWorktree <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.headDetachedForWorktree(name);
```

| Parameters | Type |
| --- | --- | --- |
| name | String | name of the worktree to retrieve HEAD for |

| Returns |  |
| --- | --- |
| Number |  1 if HEAD is detached, 0 if its not; error code if
  there was an error |

## <a name="headForWorktree"></a><span>Repository#</span>headForWorktree <span class="tags"><span class="async">Async</span></span>

```js
repository.headForWorktree(name).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | name of the worktree to retrieve HEAD for |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="headUnborn"></a><span>Repository#</span>headUnborn <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.headUnborn();
```

| Returns |  |
| --- | --- |
| Number |  1 if the current branch is unborn, 0 if it's not; error
 code if there was an error |

## <a name="ident"></a><span>Repository#</span>ident <span class="tags"><span class="sync">Sync</span></span>

```js
var string = repository.ident();
```

| Returns |  |
| --- | --- |
| String |  |

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

## <a name="isWorktree"></a><span>Repository#</span>isWorktree <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.isWorktree();
```

| Returns |  |
| --- | --- |
| Number |  1 if the repository is a linked work tree, 0 otherwise. |

## <a name="itemPath"></a><span>Repository#</span>itemPath <span class="tags"><span class="async">Async</span></span>

```js
repository.itemPath(item).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |
| --- | --- | --- |
| item | Number | The repository item for which to retrieve the path |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | Buffer to store the path at |

## <a name="mergeBranches"></a><span>Repository#</span>mergeBranches <span class="tags"><span class="async">Async</span></span>

```js
repository.mergeBranches(to, from, signature, mergePreference, mergeOptions, mergeBranchOptions).then(function(oid) {
  // Use oid
});
```

Merge a branch onto another branch

| Parameters | Type |
| --- | --- | --- |
| to | String, [Reference](/api/reference/) |  |
| from | String, [Reference](/api/reference/) |  |
| signature | [Signature](/api/signature/) |  |
| mergePreference | [Merge.PREFERENCE](/api/merge/#PREFERENCE) |  |
| mergeOptions | [MergeOptions](/api/merge_options/) |  |
| mergeBranchOptions | MergeBranchOptions |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | A commit id for a succesful merge or an index for a                      merge with conflicts |

## <a name="mergeheadForeach"></a><span>Repository#</span>mergeheadForeach <span class="tags"><span class="async">Async</span></span>

```js
repository.mergeheadForeach(callback).then(function() {
  // method complete});
```

| Parameters | Type |
| --- | --- | --- |
| callback | MergeheadForeachCb | The callback function to be called on each entry |

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

## <a name="rebaseBranches"></a><span>Repository#</span>rebaseBranches <span class="tags"><span class="async">Async</span></span>

```js
repository.rebaseBranches(branch, upstream, onto, signature, beforeNextFn, beforeFinishFn, rebaseOptions).then(function(oid) {
  // Use oid
});
```

Rebases a branch onto another branch

| Parameters | Type |
| --- | --- | --- |
| branch | String |  |
| upstream | String |  |
| onto | String |  |
| signature | [Signature](/api/signature/) | Identity of the one performing the rebase |
| beforeNextFn | Function | Callback to be called before each step of the rebase. If the callback returns a promise, the rebase will resume when the promise resolves. The rebase object is is passed to the callback. |
| beforeFinishFn | Function | Callback called before the invocation of finish(). If the callback returns a promise, finish() will be called when the promise resolves. This callback will be provided a detailed overview of the rebase |
| rebaseOptions | [RebaseOptions](/api/rebase_options/) | Options to initialize the rebase object with |

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

## <a name="refreshIndex"></a><span>Repository#</span>refreshIndex <span class="tags"><span class="async">Async</span></span>

```js
repository.refreshIndex().then(function(index) {
  // Use index
});
```

Grabs a fresh copy of the index from the repository. Invalidates
all previously grabbed indexes

| Returns |  |
| --- | --- |
| [Index](/api/index/) |  |

## <a name="refreshReferences"></a><span>Repository#</span>refreshReferences <span class="tags"><span class="async">Async</span></span>

```js
repository.refreshReferences().then(function() {
  // method complete});
```

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
| name | String | the name to use for the reflog entries |
| email | String | the email to use for the reflog entries |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="setIndex"></a><span>Repository#</span>setIndex <span class="tags"><span class="sync">Sync</span></span>

```js
repository.setIndex(index);
```

| Parameters | Type |
| --- | --- | --- |
| index | [Index](/api/index/) |  |

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

## <a name="stageFilemode"></a><span>Repository#</span>stageFilemode <span class="tags"><span class="async">Async</span></span>

```js
repository.stageFilemode(filePath, stageNew).then(function(number) {
  // Use number
});
```

Stages or unstages line selection of a specified file

| Parameters | Type |
| --- | --- | --- |
| filePath | String, Array | The relative path of this file in the repo |
| stageNew | Boolean | Set to stage new filemode. Unset to unstage. |

| Returns |  |
| --- | --- |
| Number | 0 or an error code |

## <a name="stageLines"></a><span>Repository#</span>stageLines <span class="tags"><span class="async">Async</span></span>

```js
repository.stageLines(filePath, selectedLines, isStaged).then(function(number) {
  // Use number
});
```

Stages or unstages line selection of a specified file

| Parameters | Type |
| --- | --- | --- |
| filePath | String | The relative path of this file in the repo |
| selectedLines | Array | The array of DiffLine objects selected for staging or unstaging |
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

## <a name="submoduleCacheAll"></a><span>Repository#</span>submoduleCacheAll <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.submoduleCacheAll();
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="submoduleCacheClear"></a><span>Repository#</span>submoduleCacheClear <span class="tags"><span class="sync">Sync</span></span>

```js
var result = repository.submoduleCacheClear();
```

| Returns |  |
| --- | --- |
| Number |  |

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

## <a name="ITEM"></a><span>Repository.</span>ITEM <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Repository.ITEM.</span>GITDIR | 0 |
| <span>Repository.ITEM.</span>WORKDIR | 1 |
| <span>Repository.ITEM.</span>COMMONDIR | 2 |
| <span>Repository.ITEM.</span>INDEX | 3 |
| <span>Repository.ITEM.</span>OBJECTS | 4 |
| <span>Repository.ITEM.</span>REFS | 5 |
| <span>Repository.ITEM.</span>PACKED_REFS | 6 |
| <span>Repository.ITEM.</span>REMOTES | 7 |
| <span>Repository.ITEM.</span>CONFIG | 8 |
| <span>Repository.ITEM.</span>INFO | 9 |
| <span>Repository.ITEM.</span>HOOKS | 10 |
| <span>Repository.ITEM.</span>LOGS | 11 |
| <span>Repository.ITEM.</span>MODULES | 12 |
| <span>Repository.ITEM.</span>WORKTREES | 13 |
| <span>Repository.ITEM.</span>_LAST | 14 |

## <a name="OPEN_FLAG"></a><span>Repository.</span>OPEN_FLAG <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Repository.OPEN_FLAG.</span>OPEN_NO_SEARCH | 1 |
| <span>Repository.OPEN_FLAG.</span>OPEN_CROSS_FS | 2 |
| <span>Repository.OPEN_FLAG.</span>OPEN_BARE | 4 |
| <span>Repository.OPEN_FLAG.</span>OPEN_NO_DOTGIT | 8 |
| <span>Repository.OPEN_FLAG.</span>OPEN_FROM_ENV | 16 |

## <a name="STATE"></a><span>Repository.</span>STATE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Repository.STATE.</span>NONE | 0 |
| <span>Repository.STATE.</span>MERGE | 1 |
| <span>Repository.STATE.</span>REVERT | 2 |
| <span>Repository.STATE.</span>REVERT_SEQUENCE | 3 |
| <span>Repository.STATE.</span>CHERRYPICK | 4 |
| <span>Repository.STATE.</span>CHERRYPICK_SEQUENCE | 5 |
| <span>Repository.STATE.</span>BISECT | 6 |
| <span>Repository.STATE.</span>REBASE | 7 |
| <span>Repository.STATE.</span>REBASE_INTERACTIVE | 8 |
| <span>Repository.STATE.</span>REBASE_MERGE | 9 |
| <span>Repository.STATE.</span>APPLY_MAILBOX | 10 |
| <span>Repository.STATE.</span>APPLY_MAILBOX_OR_REBASE | 11 |

