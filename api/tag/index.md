---
layout: default
menu_item: api
title: Tag
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#id": "#id"
  "#message": "#message"
  "#name": "#name"
  "#owner": "#owner"
  "#peel": "#peel"
  "#tagger": "#tagger"
  "#target": "#target"
  "#targetId": "#targetId"
  "#targetType": "#targetType"
---

## <a name="lookup"></a><span>Tag.</span>lookup <span class="tags"><span class="sync">Sync</span></span>

```js
Tag.lookup(repo, id, callback);
```

Retrieves the tag pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the tag lives in |
| id | String, [Oid](/api/oid/), [Tag](/api/tag/) | The tag to lookup |
| callback | Function |  |
## <a name="lookupPrefix"></a><span>Tag.</span>lookupPrefix <span class="tags"><span class="async">Async</span></span>

```js
Tag.lookupPrefix(repo, id, len).then(function(tag) {
  // Use tag
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repo to use when locating the tag. |
| id | [Oid](/api/oid/) | identity of the tag to locate. |
| len | Number | the length of the short identifier |

| Returns |  |
| --- | --- |
| [Tag](/api/tag/) | pointer to the looked up tag |

## <a name="id"></a><span>Tag#</span>id <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = tag.id();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  object identity for the tag. |

## <a name="message"></a><span>Tag#</span>message <span class="tags"><span class="sync">Sync</span></span>

```js
var string = tag.message();
```


| Returns |  |
| --- | --- |
| String |  message of the tag or NULL when unspecified |

## <a name="name"></a><span>Tag#</span>name <span class="tags"><span class="sync">Sync</span></span>

```js
var string = tag.name();
```


| Returns |  |
| --- | --- |
| String |  name of the tag |

## <a name="owner"></a><span>Tag#</span>owner <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = tag.owner();
```


| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  Repository that contains this tag. |

## <a name="peel"></a><span>Tag#</span>peel <span class="tags"><span class="sync">Sync</span></span>

```js
var result = tag.peel(tag_target_out);
```

| Parameters | Type |
| --- | --- | --- |
| tag_target_out | [Object](/api/object/) | Pointer to the peeled git_object |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="tagger"></a><span>Tag#</span>tagger <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = tag.tagger();
```


| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  reference to the tag's author or NULL when unspecified |

## <a name="target"></a><span>Tag#</span>target <span class="tags"><span class="sync">Sync</span></span>

```js
var object = tag.target();
```


| Returns |  |
| --- | --- |
| [Object](/api/object/) | the target |

## <a name="targetId"></a><span>Tag#</span>targetId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = tag.targetId();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  pointer to the OID |

## <a name="targetType"></a><span>Tag#</span>targetType <span class="tags"><span class="sync">Sync</span></span>

```js
var result = tag.targetType();
```


| Returns |  |
| --- | --- |
| Number |  type of the tagged object |

