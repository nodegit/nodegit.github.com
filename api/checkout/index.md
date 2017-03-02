---
layout: default
menu_item: api
title: Checkout
description: Version 0.18.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "head": "#head"
  "index": "#index"
  "initOptions": "#initOptions"
  "tree": "#tree"
  "NOTIFY": "#NOTIFY"
  "STRATEGY": "#STRATEGY"
---

## <a name="head"></a><span>Checkout.</span>head <span class="tags"><span class="async">Async</span></span>

```js
Checkout.head(repo, [options]).then(function() {
  // checkout complete
});
```

Patch head checkout to automatically coerce objects.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo to checkout head |
| [options] | [CheckoutOptions](/api/checkout_options/) | Options for the checkout |

## <a name="index"></a><span>Checkout.</span>index <span class="tags"><span class="async">Async</span></span>

```js
Checkout.index(repo, index, [options]).then(function() {
  // checkout complete
});
```

Patch index checkout to automatically coerce objects.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo to checkout an index |
| index | [Index](/api/index/) | The index to checkout |
| [options] | [CheckoutOptions](/api/checkout_options/) | Options for the checkout |

## <a name="initOptions"></a><span>Checkout.</span>initOptions <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Checkout.initOptions(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [CheckoutOptions](/api/checkout_options/) | the `git_checkout_options` struct to initialize. |
| version | Number | Version of struct; pass `GIT_CHECKOUT_OPTIONS_VERSION` |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="tree"></a><span>Checkout.</span>tree <span class="tags"><span class="async">Async</span></span>

```js
Checkout.tree(repo, treeish, [options]).then(function() {
  // checkout complete
});
```

Patch tree checkout to automatically coerce objects.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| treeish | String, [Tree](/api/tree/), [Commit](/api/commit/), [Reference](/api/reference/) |  |
| [options] | [CheckoutOptions](/api/checkout_options/) |  |

## <a name="NOTIFY"></a><span>Checkout.</span>NOTIFY <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Checkout.NOTIFY.</span>NONE | 0 |
| <span>Checkout.NOTIFY.</span>CONFLICT | 1 |
| <span>Checkout.NOTIFY.</span>DIRTY | 2 |
| <span>Checkout.NOTIFY.</span>UPDATED | 4 |
| <span>Checkout.NOTIFY.</span>UNTRACKED | 8 |
| <span>Checkout.NOTIFY.</span>IGNORED | 16 |
| <span>Checkout.NOTIFY.</span>ALL | 65535 |

## <a name="STRATEGY"></a><span>Checkout.</span>STRATEGY <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Checkout.STRATEGY.</span>NONE | 0 |
| <span>Checkout.STRATEGY.</span>SAFE | 1 |
| <span>Checkout.STRATEGY.</span>FORCE | 2 |
| <span>Checkout.STRATEGY.</span>RECREATE_MISSING | 4 |
| <span>Checkout.STRATEGY.</span>ALLOW_CONFLICTS | 16 |
| <span>Checkout.STRATEGY.</span>REMOVE_UNTRACKED | 32 |
| <span>Checkout.STRATEGY.</span>REMOVE_IGNORED | 64 |
| <span>Checkout.STRATEGY.</span>UPDATE_ONLY | 128 |
| <span>Checkout.STRATEGY.</span>DONT_UPDATE_INDEX | 256 |
| <span>Checkout.STRATEGY.</span>NO_REFRESH | 512 |
| <span>Checkout.STRATEGY.</span>SKIP_UNMERGED | 1024 |
| <span>Checkout.STRATEGY.</span>USE_OURS | 2048 |
| <span>Checkout.STRATEGY.</span>USE_THEIRS | 4096 |
| <span>Checkout.STRATEGY.</span>DISABLE_PATHSPEC_MATCH | 8192 |
| <span>Checkout.STRATEGY.</span>SKIP_LOCKED_DIRECTORIES | 262144 |
| <span>Checkout.STRATEGY.</span>DONT_OVERWRITE_IGNORED | 524288 |
| <span>Checkout.STRATEGY.</span>CONFLICT_STYLE_MERGE | 1048576 |
| <span>Checkout.STRATEGY.</span>CONFLICT_STYLE_DIFF3 | 2097152 |
| <span>Checkout.STRATEGY.</span>DONT_REMOVE_EXISTING | 4194304 |
| <span>Checkout.STRATEGY.</span>DONT_WRITE_INDEX | 8388608 |
| <span>Checkout.STRATEGY.</span>UPDATE_SUBMODULES | 65536 |
| <span>Checkout.STRATEGY.</span>UPDATE_SUBMODULES_IF_CHANGED | 131072 |

