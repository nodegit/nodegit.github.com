---
layout: default
menu_item: api
title: Worktree
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "add": "#add"
  "list": "#list"
  "lookup": "#lookup"
  "openFromRepository": "#openFromRepository"
  "#isLocked": "#isLocked"
  "#isPrunable": "#isPrunable"
  "#lock": "#lock"
  "#name": "#name"
  "#path": "#path"
  "#prune": "#prune"
  "#unlock": "#unlock"
  "#validate": "#validate"
  "PRUNE": "#PRUNE"
---

## <a name="add"></a><span>Worktree.</span>add <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Worktree.add(repo, name, path, opts).then(function(worktree) {
  // Use worktree
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository to create working tree for |
| name | String | Name of the working tree |
| path | String | Path to create working tree at |
| opts | [WorktreeAddOptions](/api/worktree_add_options/) | Options to modify default behavior. May be NULL |

| Returns |  |
| --- | --- |
| [Worktree](/api/worktree/) |  |

## <a name="list"></a><span>Worktree.</span>list <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Worktree.list(repo).then(function(strarray) {
  // Use strarray
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repo to use when listing working trees |

| Returns |  |
| --- | --- |
| [Strarray](/api/strarray/) |  |

## <a name="lookup"></a><span>Worktree.</span>lookup <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Worktree.lookup(repo, name).then(function(worktree) {
  // Use worktree
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository containing worktrees |
| name | String | Name of the working tree to look up |

| Returns |  |
| --- | --- |
| [Worktree](/api/worktree/) |  |

## <a name="openFromRepository"></a><span>Worktree.</span>openFromRepository <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Worktree.openFromRepository(repo).then(function(worktree) {
  // Use worktree
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository to look up worktree for |

| Returns |  |
| --- | --- |
| [Worktree](/api/worktree/) |  |

## <a name="isLocked"></a><span>Worktree#</span>isLocked <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = worktree.isLocked(reason);
```

| Parameters | Type |
| --- | --- | --- |
| reason | [Buf](/api/buf/) | Buffer to store reason in. If NULL no reason is stored. |

| Returns |  |
| --- | --- |
| Number |  0 when the working tree not locked, a value greater
  than zero if it is locked, less than zero if there was an
  error |

## <a name="isPrunable"></a><span>Worktree#</span>isPrunable <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = worktree.isPrunable(opts);
```

| Parameters | Type |
| --- | --- | --- |
| opts | [WorktreePruneOptions](/api/worktree_prune_options/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="lock"></a><span>Worktree#</span>lock <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = worktree.lock(reason);
```

| Parameters | Type |
| --- | --- | --- |
| reason | String | Reason why the working tree is being locked |

| Returns |  |
| --- | --- |
| Number |  0 on success, non-zero otherwise |

## <a name="name"></a><span>Worktree#</span>name <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = worktree.name();
```

| Returns |  |
| --- | --- |
| String |  |

## <a name="path"></a><span>Worktree#</span>path <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = worktree.path();
```

| Returns |  |
| --- | --- |
| String |  |

## <a name="prune"></a><span>Worktree#</span>prune <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = worktree.prune(opts);
```

| Parameters | Type |
| --- | --- | --- |
| opts | [WorktreePruneOptions](/api/worktree_prune_options/) | Specifies which checks to override. See `git_worktree_is_prunable`. May be NULL |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="unlock"></a><span>Worktree#</span>unlock <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = worktree.unlock();
```

| Returns |  |
| --- | --- |
| Number |  0 on success, 1 if worktree was not locked, error-code
  otherwise |

## <a name="validate"></a><span>Worktree#</span>validate <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = worktree.validate();
```

| Returns |  |
| --- | --- |
| Number |  0 when worktree is valid, error-code otherwise |

## <a name="PRUNE"></a><span>Worktree.</span>PRUNE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Worktree.PRUNE.</span>GIT_WORKTREE_PRUNE_VALID | 1 |
| <span>Worktree.PRUNE.</span>GIT_WORKTREE_PRUNE_LOCKED | 2 |
| <span>Worktree.PRUNE.</span>GIT_WORKTREE_PRUNE_WORKING_TREE | 4 |

