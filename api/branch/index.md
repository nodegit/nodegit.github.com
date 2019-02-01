---
layout: default
menu_item: api
title: Branch
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createFromAnnotated": "#createFromAnnotated"
  "delete": "#delete"
  "isCheckedOut": "#isCheckedOut"
  "isHead": "#isHead"
  "lookup": "#lookup"
  "move": "#move"
  "name": "#name"
  "remoteName": "#remoteName"
  "setUpstream": "#setUpstream"
  "upstream": "#upstream"
  "BRANCH": "#BRANCH"
---

## <a name="create"></a><span>Branch.</span>create <span class="tags"><span class="async">Async</span></span>

```js
Branch.create(repo, branch_name, target, force).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| branch_name | String | Name for the branch; this name is validated for consistency. It should also not conflict with an already existing branch name. |
| target | [Commit](/api/commit/) | Commit to which this branch should point. This object must belong to the given `repo`. |
| force | Number | Overwrite existing branch. |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | the underlying reference. |

## <a name="createFromAnnotated"></a><span>Branch.</span>createFromAnnotated <span class="tags"><span class="async">Async</span></span>

```js
Branch.createFromAnnotated(repository, branch_name, commit, force).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repository | [Repository](/api/repository/) |  |
| branch_name | String |  |
| commit | [AnnotatedCommit](/api/annotated_commit/) |  |
| force | Number |  |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="delete"></a><span>Branch.</span>delete <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Branch.delete(branch);
```

| Parameters | Type |   |
| --- | --- | --- |
| branch | [Reference](/api/reference/) | A valid reference representing a branch |

| Returns |  |
| --- | --- |
| Number |  0 on success, or an error code. |

## <a name="isCheckedOut"></a><span>Branch.</span>isCheckedOut <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Branch.isCheckedOut(branch);
```

| Parameters | Type |   |
| --- | --- | --- |
| branch | [Reference](/api/reference/) | Reference to the branch. |

| Returns |  |
| --- | --- |
| Number |  1 if branch is checked out, 0 if it isn't,
 error code otherwise. |

## <a name="isHead"></a><span>Branch.</span>isHead <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Branch.isHead(branch);
```

| Parameters | Type |   |
| --- | --- | --- |
| branch | [Reference](/api/reference/) | Current underlying reference of the branch. |

| Returns |  |
| --- | --- |
| Number |  1 if HEAD points at the branch, 0 if it isn't,
 error code otherwise. |

## <a name="lookup"></a><span>Branch.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Branch.lookup(repo, branch_name, branch_type).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to look up the branch |
| branch_name | String | Name of the branch to be looked-up; this name is validated for consistency. |
| branch_type | Number | Type of the considered branch. This should be valued with either GIT_BRANCH_LOCAL or GIT_BRANCH_REMOTE. |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="move"></a><span>Branch.</span>move <span class="tags"><span class="async">Async</span></span>

```js
Branch.move(branch, new_branch_name, force).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| branch | [Reference](/api/reference/) | Current underlying reference of the branch. |
| new_branch_name | String | Target name of the branch once the move is performed; this name is validated for consistency. |
| force | Number | Overwrite existing branch. |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) |  |

## <a name="name"></a><span>Branch.</span>name <span class="tags"><span class="async">Async</span></span>

```js
Branch.name(ref).then(function(string) {
  // Use string
});
```

| Parameters | Type |   |
| --- | --- | --- |
| ref | [Reference](/api/reference/) | the reference ideally pointing to a branch |

| Returns |  |
| --- | --- |
| String |  |

## <a name="remoteName"></a><span>Branch.</span>remoteName <span class="tags"><span class="async">Async</span></span>

```js
Branch.remoteName(repo, the).then(function(string) {
  // Use string
});
```

Retrieve the Branch's Remote Name as a String.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo to get the remote name from |
| the | String | refname of the branch |

| Returns |  |
| --- | --- |
| String | remote name as a string. |

## <a name="setUpstream"></a><span>Branch.</span>setUpstream <span class="tags"><span class="async">Async</span></span>

```js
Branch.setUpstream(branch, upstream_name).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| branch | [Reference](/api/reference/) | the branch to configure |
| upstream_name | String | remote-tracking or local branch to set as upstream. Pass NULL to unset. |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="upstream"></a><span>Branch.</span>upstream <span class="tags"><span class="async">Async</span></span>

```js
Branch.upstream(branch).then(function(reference) {
  // Use reference
});
```

| Parameters | Type |   |
| --- | --- | --- |
| branch | [Reference](/api/reference/) | Current underlying reference of the branch. |

| Returns |  |
| --- | --- |
| [Reference](/api/reference/) | the retrieved
 reference. |

## <a name="BRANCH"></a><span>Branch.</span>BRANCH <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Branch.BRANCH.</span>LOCAL | 1 |
| <span>Branch.BRANCH.</span>REMOTE | 2 |
| <span>Branch.BRANCH.</span>ALL | 3 |

