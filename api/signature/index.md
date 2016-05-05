---
layout: default
menu_item: api
title: Signature
description: Version 0.13.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "default": "#default"
  "now": "#now"
  "#dup": "#dup"
  "#free": "#free"
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
| time | Number | time when the action happened |
| offset | Number | timezone offset in minutes for the time |

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) | new signature, in case of error NULL |

## <a name="default"></a><span>Signature.</span>default <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = Signature.default(repo);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository pointer |

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

## <a name="dup"></a><span>Signature#</span>dup <span class="tags"><span class="async">Async</span></span>

```js
signature.dup().then(function(signature) {
  // Use signature
});
```

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) | the copy |

## <a name="free"></a><span>Signature#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
signature.free();
```

## <a name="toString"></a><span>Signature#</span>toString <span class="tags"><span class="sync">Sync</span></span>

```js
var string = signature.toString();
```

Standard string representation of an author.

| Returns |  |
| --- | --- |
| string | Representation of the author. |

## <a name="ivars"></a>Instance Variables

| Variable | Type |
| --- | --- |
| <a name="email"></a>email | String |
| <a name="name"></a>name | String |
| <a name="when"></a>when | Time |

