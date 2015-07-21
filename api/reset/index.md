---
layout: default
menu_item: api
title: Reset
description: Version 0.4.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "default": "#default"
  "reset": "#reset"
  "TYPE": "#TYPE"
---

## <a name="default"></a><span>Reset.</span>default <span class="tags"><span class="async">Async</span></span>

```js
Reset.default(repo, target, pathspecs).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to perform the reset operation. |
| target | [Object](/api/object/) | The committish which content will be used to reset the content of the index. |
| pathspecs | [Strarray](/api/strarray/) | List of pathspecs to operate on. |

| Returns |  |
| --- | --- |
| Number |  0 on success or an error code 
<
 0 |

## <a name="reset"></a><span>Reset.</span>reset <span class="tags"><span class="async">Async</span></span>

```js
Reset.reset(repo, target, reset_type, checkout_opts, signature, log_message).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| target | [Object](/api/object/) |  |
| reset_type | Number |  |
| checkout_opts | [CheckoutOptions](/api/checkout_options/) |  |
| signature | [Signature](/api/signature/) |  |
| log_message | String |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="TYPE"></a><span>Reset.</span>TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Reset.TYPE.</span>SOFT | 1 |
| <span>Reset.TYPE.</span>MIXED | 2 |
| <span>Reset.TYPE.</span>HARD | 3 |

