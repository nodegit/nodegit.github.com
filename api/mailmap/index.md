---
layout: default
menu_item: api
title: Mailmap
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "fromBuffer": "#fromBuffer"
  "fromRepository": "#fromRepository"
  "#addEntry": "#addEntry"
  "#resolve": "#resolve"
  "#resolveSignature": "#resolveSignature"
---

## <a name="create"></a><span>Mailmap.</span>create <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Mailmap.create().then(function(mailmap) {
  // Use mailmap
});
```

| Returns |  |
| --- | --- |
| [Mailmap](/api/mailmap/) |  |

## <a name="fromBuffer"></a><span>Mailmap.</span>fromBuffer <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Mailmap.fromBuffer(buf, len).then(function(mailmap) {
  // Use mailmap
});
```

| Parameters | Type |   |
| --- | --- | --- |
| buf | String | buffer to parse the mailmap from |
| len | Number | the length of the input buffer |

| Returns |  |
| --- | --- |
| [Mailmap](/api/mailmap/) |  |

## <a name="fromRepository"></a><span>Mailmap.</span>fromRepository <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Mailmap.fromRepository(repo).then(function(mailmap) {
  // Use mailmap
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository to load mailmap information from |

| Returns |  |
| --- | --- |
| [Mailmap](/api/mailmap/) |  |

## <a name="addEntry"></a><span>Mailmap#</span>addEntry <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
mailmap.addEntry(real_name, real_email, replace_name, replace_email).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| real_name | String | the real name to use, or NULL |
| real_email | String | the real email to use, or NULL |
| replace_name | String | the name to replace, or NULL |
| replace_email | String | the email to replace |

| Returns |  |
| --- | --- |
| Number |  0 on success, or an error code |

## <a name="resolve"></a><span>Mailmap#</span>resolve <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
mailmap.resolve(name, email).then(function(string) {
  // Use string
});
```

| Parameters | Type |
| --- | --- | --- |
| name | String | the name to look up |
| email | String | the email to look up |

| Returns |  |
| --- | --- |
| String |  |

## <a name="resolveSignature"></a><span>Mailmap#</span>resolveSignature <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
mailmap.resolveSignature(sig).then(function(signature) {
  // Use signature
});
```

| Parameters | Type |
| --- | --- | --- |
| sig | [Signature](/api/signature/) | signature to resolve |

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) | new signature |

