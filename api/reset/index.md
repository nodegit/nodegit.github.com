---
layout: default
menu_item: api
title: Reset
description: Version 0.17.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "default": "#default"
  "fromAnnotated": "#fromAnnotated"
  "reset": "#reset"
  "TYPE": "#TYPE"
---

## <a name="default"></a><span>Reset.</span>default <span class="tags"><span class="async">Async</span></span>

```js
Reset.default(repo, target, pathspecs).then(function(number) {
  // Use number
});
```

Look up a refs's commit.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to perform the reset operation. |
| target | [Commit](/api/commit/), [Tag](/api/tag/) | The committish which content will be used to reset the content of the index. |
| pathspecs | [Strarray](/api/strarray/) | List of pathspecs to operate on. |

| Returns |  |
| --- | --- |
| Number | 0 on success or an error code |

## <a name="fromAnnotated"></a><span>Reset.</span>fromAnnotated <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Reset.fromAnnotated(repo, commit, reset_type, checkout_opts);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| commit | [AnnotatedCommit](/api/annotated_commit/) |  |
| reset_type | Number |  |
| checkout_opts | [CheckoutOptions](/api/checkout_options/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="reset"></a><span>Reset.</span>reset <span class="tags"><span class="async">Async</span></span>

```js
Reset.reset(repo, target, resetType, opts, name).then(function(number) {
  // Use number
});
```

Look up a refs's commit.

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to perform the reset operation. |
| target | [Commit](/api/commit/), [Tag](/api/tag/) | Committish to which the Head should be moved to. This object must belong to the given `repo` and can either be a git_commit or a git_tag. When a git_tag is being passed, it should be dereferencable to a git_commit which oid will be used as the target of the branch. |
| resetType | Number | Kind of reset operation to perform. |
| opts | [CheckoutOptions](/api/checkout_options/) | Checkout options to be used for a HARD reset. The checkout_strategy field will be overridden (based on reset_type). This parameter can be used to propagate notify and progress callbacks. |
| name | String, Ref | Ref name, e.g. "master", "refs/heads/master" or Branch Ref |

| Returns |  |
| --- | --- |
| Number | 0 on success or an error code |

## <a name="TYPE"></a><span>Reset.</span>TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Reset.TYPE.</span>SOFT | 1 |
| <span>Reset.TYPE.</span>MIXED | 2 |
| <span>Reset.TYPE.</span>HARD | 3 |

