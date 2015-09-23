---
layout: default
menu_item: api
title: Branch
description: Version 0.5.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createFromAnnotated": "#createFromAnnotated"
  "delete": "#delete"
  "isHead": "#isHead"
  "iteratorNew": "#iteratorNew"
  "lookup": "#lookup"
  "move": "#move"
  "name": "#name"
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

## <a name="createFromAnnotated"></a><span>Branch.</span>createFromAnnotated <span class="tags"><span class="sync">Sync</span></span>

```js
var reference = Branch.createFromAnnotated(repository, branch_name, commit, force);
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

## <a name="iteratorNew"></a><span>Branch.</span>iteratorNew <span class="tags"><span class="async">Async</span></span>

```js
Branch.iteratorNew(repo, list_flags).then(function(branchIterator) {
  // Use branchIterator
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to find the branches. |
| list_flags | Number | Filtering flags for the branch listing. Valid values are GIT_BRANCH_LOCAL, GIT_BRANCH_REMOTE or GIT_BRANCH_ALL. |

| Returns |  |
| --- | --- |
| [BranchIterator](/api/branch_iterator/) | the iterator |

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

## <a name="setUpstream"></a><span>Branch.</span>setUpstream <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Branch.setUpstream(branch, upstream_name);
```

| Parameters | Type |   |
| --- | --- | --- |
| branch | [Reference](/api/reference/) | the branch to configure |
| upstream_name | String | remote-tracking or local branch to set as upstream. Pass NULL to unset. |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="upstream"></a><span>Branch.</span>upstream <span class="tags"><span class="sync">Sync</span></span>

```js
var reference = Branch.upstream(branch);
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

