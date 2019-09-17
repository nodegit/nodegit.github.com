---
layout: default
menu_item: api
title: Transaction
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#commit": "#commit"
  "#lockRef": "#lockRef"
  "#remove": "#remove"
  "#setReflog": "#setReflog"
  "#setSymbolicTarget": "#setSymbolicTarget"
  "#setTarget": "#setTarget"
---

## <a name="create"></a><span>Transaction.</span>create <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Transaction.create(repo).then(function(transaction) {
  // Use transaction
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to lock |

| Returns |  |
| --- | --- |
| [Transaction](/api/transaction/) | the resulting transaction |

## <a name="commit"></a><span>Transaction#</span>commit <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transaction.commit();
```

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="lockRef"></a><span>Transaction#</span>lockRef <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transaction.lockRef(refname);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | the reference to lock |

| Returns |  |
| --- | --- |
| Number |  0 or an error message |

## <a name="remove"></a><span>Transaction#</span>remove <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transaction.remove(refname);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | the reference to remove |

| Returns |  |
| --- | --- |
| Number |  0, GIT_ENOTFOUND if the reference is not among the locked ones, or an error code |

## <a name="setReflog"></a><span>Transaction#</span>setReflog <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transaction.setReflog(refname, reflog);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | the reference whose reflog to set |
| reflog | [Reflog](/api/reflog/) | the reflog as it should be written out |

| Returns |  |
| --- | --- |
| Number |  0, GIT_ENOTFOUND if the reference is not among the locked ones, or an error code |

## <a name="setSymbolicTarget"></a><span>Transaction#</span>setSymbolicTarget <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transaction.setSymbolicTarget(refname, target, sig, msg);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | reference to update |
| target | String | target to set the reference to |
| sig | [Signature](/api/signature/) | signature to use in the reflog; pass NULL to read the identity from the config |
| msg | String | message to use in the reflog |

| Returns |  |
| --- | --- |
| Number |  0, GIT_ENOTFOUND if the reference is not among the locked ones, or an error code |

## <a name="setTarget"></a><span>Transaction#</span>setTarget <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transaction.setTarget(refname, target, sig, msg);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | reference to update |
| target | [Oid](/api/oid/) | target to set the reference to |
| sig | [Signature](/api/signature/) | signature to use in the reflog; pass NULL to read the identity from the config |
| msg | String | message to use in the reflog |

| Returns |  |
| --- | --- |
| Number |  0, GIT_ENOTFOUND if the reference is not among the locked ones, or an error code |

