---
layout: default
menu_item: api
title: Signature
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "default": "#default"
  "fromBuffer": "#fromBuffer"
  "now": "#now"
  "#toString": "#toString"
  "Instance Variables": "#ivars"
---

## <a name="create"></a><span>Signature.</span>create <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = Signature.create(name, email, time, offset);
```

| Parameters | Type |   |
| --- | --- | --- |
| name | String | name of the person |
| email | String | email of the person |
| time | Number | time (in seconds from epoch) when the action happened |
| offset | Number | timezone offset (in minutes) for the time |

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) | new signature, in case of error NULL |

## <a name="default"></a><span>Signature.</span>default <span class="tags"><span class="async">Async</span></span>

```js
Signature.default(repo).then(function(signature) {
  // Use signature
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository pointer |

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) | new signature |

## <a name="fromBuffer"></a><span>Signature.</span>fromBuffer <span class="tags"><span class="async">Async</span></span>

```js
Signature.fromBuffer(buf).then(function(signature) {
  // Use signature
});
```

| Parameters | Type |   |
| --- | --- | --- |
| buf | String | signature string |

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) | new signature |

## <a name="now"></a><span>Signature.</span>now <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = Signature.now(name, email);
```

| Parameters | Type |   |
| --- | --- | --- |
| name | String | name of the person |
| email | String | email of the person |

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) | new signature, in case of error NULL |

## <a name="toString"></a><span>Signature#</span>toString <span class="tags"><span class="sync">Sync</span></span>

```js
var string = signature.toString(withTime);
```

Standard string representation of an author.

| Parameters | Type |
| --- | --- | --- |
| withTime | Boolean | Whether or not to include timestamp |

| Returns |  |
| --- | --- |
| String | Representation of the author. |

## <a name="ivars"></a>Instance Variables

| Variable | Type | Description |
| --- | --- | --- |
| <a name="email"></a>email | String |  |
| <a name="name"></a>name | String |  |
| <a name="when"></a>when | Time |  |

