---
layout: default
menu_item: api
title: Stash
description: Version 0.15.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "apply": "#apply"
  "applyInitOptions": "#applyInitOptions"
  "drop": "#drop"
  "foreach": "#foreach"
  "pop": "#pop"
  "save": "#save"
  "APPLY_FLAGS": "#APPLY_FLAGS"
  "APPLY_PROGRESS": "#APPLY_PROGRESS"
  "FLAGS": "#FLAGS"
---

## <a name="apply"></a><span>Stash.</span>apply <span class="tags"><span class="async">Async</span></span>

```js
Stash.apply(repo, index, options).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The owning repository. |
| index | Number | The position within the stash list. 0 points to the most recent stashed state. |
| options | [StashApplyOptions](/api/stash_apply_options/) | Options to control how stashes are applied. |

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_ENOTFOUND if there's no stashed state for the
         given index, GIT_EMERGECONFLICT if changes exist in the working
         directory, or an error code |

## <a name="applyInitOptions"></a><span>Stash.</span>applyInitOptions <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Stash.applyInitOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [StashApplyOptions](/api/stash_apply_options/) | the `git_stash_apply_options` instance to initialize. |
| version | Number | the version of the struct; you should pass `GIT_STASH_APPLY_OPTIONS_INIT` here. |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="drop"></a><span>Stash.</span>drop <span class="tags"><span class="async">Async</span></span>

```js
Stash.drop(repo, index).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The owning repository. |
| index | Number | The position within the stash list. 0 points to the most recent stashed state. |

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_ENOTFOUND if there's no stashed state for the given
 index, or error code. |

## <a name="foreach"></a><span>Stash.</span>foreach <span class="tags"><span class="async">Async</span></span>

```js
Stash.foreach(repo, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to find the stash. |
| callback | StashCb | Callback to invoke per found stashed state. The most recent stash state will be enumerated first. |
| payload | Void | Extra parameter to callback function. |

| Returns |  |
| --- | --- |
| Number |  0 on success, non-zero callback return value, or error code. |

## <a name="pop"></a><span>Stash.</span>pop <span class="tags"><span class="async">Async</span></span>

```js
Stash.pop(repo, index, options).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The owning repository. |
| index | Number | The position within the stash list. 0 points to the most recent stashed state. |
| options | [StashApplyOptions](/api/stash_apply_options/) | Options to control how stashes are applied. |

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_ENOTFOUND if there's no stashed state for the given
 index, or error code. (see git_stash_apply() above for details) |

## <a name="save"></a><span>Stash.</span>save <span class="tags"><span class="async">Async</span></span>

```js
Stash.save(repo, stasher, message, flags).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| stasher | [Signature](/api/signature/) |  |
| message | String |  |
| flags | Number |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="APPLY_FLAGS"></a><span>Stash.</span>APPLY_FLAGS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Stash.APPLY_FLAGS.</span>APPLY_DEFAULT | 0 |
| <span>Stash.APPLY_FLAGS.</span>APPLY_REINSTATE_INDEX | 1 |

## <a name="APPLY_PROGRESS"></a><span>Stash.</span>APPLY_PROGRESS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Stash.APPLY_PROGRESS.</span>NONE | 0 |
| <span>Stash.APPLY_PROGRESS.</span>LOADING_STASH | 1 |
| <span>Stash.APPLY_PROGRESS.</span>ANALYZE_INDEX | 2 |
| <span>Stash.APPLY_PROGRESS.</span>ANALYZE_MODIFIED | 3 |
| <span>Stash.APPLY_PROGRESS.</span>ANALYZE_UNTRACKED | 4 |
| <span>Stash.APPLY_PROGRESS.</span>CHECKOUT_UNTRACKED | 5 |
| <span>Stash.APPLY_PROGRESS.</span>CHECKOUT_MODIFIED | 6 |
| <span>Stash.APPLY_PROGRESS.</span>DONE | 7 |

## <a name="FLAGS"></a><span>Stash.</span>FLAGS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Stash.FLAGS.</span>DEFAULT | 0 |
| <span>Stash.FLAGS.</span>KEEP_INDEX | 1 |
| <span>Stash.FLAGS.</span>INCLUDE_UNTRACKED | 2 |
| <span>Stash.FLAGS.</span>INCLUDE_IGNORED | 4 |

