---
layout: default
menu_item: api
title: Tag
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "annotationCreate": "#annotationCreate"
  "create": "#create"
  "createBuffer": "#createBuffer"
  "createFromBuffer": "#createFromBuffer"
  "createLightweight": "#createLightweight"
  "createWithSignature": "#createWithSignature"
  "delete": "#delete"
  "list": "#list"
  "listMatch": "#listMatch"
  "lookup": "#lookup"
  "lookupPrefix": "#lookupPrefix"
  "#dup": "#dup"
  "#extractSignature": "#extractSignature"
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

## <a name="annotationCreate"></a><span>Tag.</span>annotationCreate <span class="tags"><span class="async">Async</span></span>

```js
Tag.annotationCreate(repo, tag_name, target, tagger, message).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to store the tag |
| tag_name | String | Name for the tag |
| target | [Object](/api/object/) | Object to which this tag points. This object must belong to the given `repo`. |
| tagger | [Signature](/api/signature/) | Signature of the tagger for this tag, and of the tagging time |
| message | String | Full message for this tag |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the OID of the
 newly created tag |

## <a name="create"></a><span>Tag.</span>create <span class="tags"><span class="async">Async</span></span>

```js
Tag.create(repo, tag_name, target, tagger, message, force).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to store the tag |
| tag_name | String | Name for the tag; this name is validated for consistency. It should also not conflict with an already existing tag name |
| target | [Object](/api/object/) | Object to which this tag points. This object must belong to the given `repo`. |
| tagger | [Signature](/api/signature/) | Signature of the tagger for this tag, and of the tagging time |
| message | String | Full message for this tag |
| force | Number | Overwrite existing references |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the OID of the
 newly created tag. If the tag already exists, this parameter
 will be the oid of the existing tag, and the function will
 return a GIT_EEXISTS error code. |

## <a name="createBuffer"></a><span>Tag.</span>createBuffer <span class="tags"><span class="async">Async</span></span>

```js
Tag.createBuffer(repo, tagName, target, tagger).then(function(string) {
  // Use string
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| tagName | String |  |
| target | [Oid](/api/oid/) |  |
| tagger | [Signature](/api/signature/) |  |

| Returns |  |
| --- | --- |
| String |  |

## <a name="createFromBuffer"></a><span>Tag.</span>createFromBuffer <span class="tags"><span class="async">Async</span></span>

```js
Tag.createFromBuffer(repo, buffer, force).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to store the tag |
| buffer | String | Raw tag data |
| force | Number | Overwrite existing tags |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the OID of the newly created tag |

## <a name="createLightweight"></a><span>Tag.</span>createLightweight <span class="tags"><span class="async">Async</span></span>

```js
Tag.createLightweight(repo, tag_name, target, force).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to store the lightweight tag |
| tag_name | String | Name for the tag; this name is validated for consistency. It should also not conflict with an already existing tag name |
| target | [Object](/api/object/) | Object to which this tag points. This object must belong to the given `repo`. |
| force | Number | Overwrite existing references |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the OID of the provided
 target object. If the tag already exists, this parameter
 will be filled with the oid of the existing pointed object
 and the function will return a GIT_EEXISTS error code. |

## <a name="createWithSignature"></a><span>Tag.</span>createWithSignature <span class="tags"><span class="async">Async</span></span>

```js
Tag.createWithSignature(repo, tagName, target, tagger, message, force, signingCallback).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| tagName | String |  |
| target | [Oid](/api/oid/) |  |
| tagger | [Signature](/api/signature/) |  |
| message | String |  |
| force | Number |  |
| signingCallback | Function | Takes a string and returns a string representing the signed message |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="delete"></a><span>Tag.</span>delete <span class="tags"><span class="async">Async</span></span>

```js
Tag.delete(repo, tag_name).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where lives the tag |
| tag_name | String | Name of the tag to be deleted; this name is validated for consistency. |

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_EINVALIDSPEC or an error code |

## <a name="list"></a><span>Tag.</span>list <span class="tags"><span class="async">Async</span></span>

```js
Tag.list(repo).then(function(array) {
  // Use array
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to find the tags |

| Returns |  |
| --- | --- |
| Array |  |

## <a name="listMatch"></a><span>Tag.</span>listMatch <span class="tags"><span class="async">Async</span></span>

```js
Tag.listMatch(pattern, repo).then(function(array) {
  // Use array
});
```

| Parameters | Type |   |
| --- | --- | --- |
| pattern | String | Standard fnmatch pattern |
| repo | [Repository](/api/repository/) | Repository where to find the tags |

| Returns |  |
| --- | --- |
| Array |  |

## <a name="lookup"></a><span>Tag.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Tag.lookup(repo, id).then(function(tag) {
  // Use tag
});
```

Retrieves the tag pointed to by the oid

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the tag lives in |
| id | String, [Oid](/api/oid/), [Tag](/api/tag/) | The tag to lookup |

| Returns |  |
| --- | --- |
| [Tag](/api/tag/) |  |

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
| [Tag](/api/tag/) |  |

## <a name="dup"></a><span>Tag#</span>dup <span class="tags"><span class="async">Async</span></span>

```js
tag.dup().then(function(tag) {
  // Use tag
});
```

| Returns |  |
| --- | --- |
| [Tag](/api/tag/) |  |

## <a name="extractSignature"></a><span>Tag#</span>extractSignature <span class="tags"><span class="async">Async</span></span>

```js
tag.extractSignature(signatureType).then(function(string) {
  // Use string
});
```

Retrieves the signature of an annotated tag

| Parameters | Type |
| --- | --- | --- |
| signatureType | String |  |

| Returns |  |
| --- | --- |
| String |  |

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

## <a name="peel"></a><span>Tag#</span>peel <span class="tags"><span class="async">Async</span></span>

```js
tag.peel().then(function(object) {
  // Use object
});
```

| Returns |  |
| --- | --- |
| [Object](/api/object/) |  |

## <a name="tagger"></a><span>Tag#</span>tagger <span class="tags"><span class="sync">Sync</span></span>

```js
var signature = tag.tagger();
```

| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  reference to the tag's author or NULL when unspecified |

## <a name="target"></a><span>Tag#</span>target <span class="tags"><span class="async">Async</span></span>

```js
tag.target().then(function(object) {
  // Use object
});
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
| [Oid](/api/oid/) |  |

## <a name="targetType"></a><span>Tag#</span>targetType <span class="tags"><span class="sync">Sync</span></span>

```js
var result = tag.targetType();
```

| Returns |  |
| --- | --- |
| Number |  type of the tagged object |

