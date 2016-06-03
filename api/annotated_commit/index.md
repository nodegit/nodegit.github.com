---
layout: default
menu_item: api
title: AnnotatedCommit
description: Version 0.13.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "fromFetchhead": "#fromFetchhead"
  "fromRef": "#fromRef"
  "fromRevspec": "#fromRevspec"
  "lookup": "#lookup"
  "#free": "#free"
  "#id": "#id"
---

## <a name="fromFetchhead"></a><span>AnnotatedCommit.</span>fromFetchhead <span class="tags"><span class="async">Async</span></span>

```js
AnnotatedCommit.fromFetchhead(repo, branch_name, remote_url, id).then(function(annotatedCommit) {
  // Use annotatedCommit
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository that contains the given commit |
| branch_name | String | name of the (remote) branch |
| remote_url | String | url of the remote |
| id | [Oid](/api/oid/) | the commit object id of the remote branch |

| Returns |  |
| --- | --- |
| [AnnotatedCommit](/api/annotated_commit/) |  |

## <a name="fromRef"></a><span>AnnotatedCommit.</span>fromRef <span class="tags"><span class="async">Async</span></span>

```js
AnnotatedCommit.fromRef(repo, ref).then(function(annotatedCommit) {
  // Use annotatedCommit
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository that contains the given reference |
| ref | [Reference](/api/reference/) | reference to use to lookup the git_annotated_commit |

| Returns |  |
| --- | --- |
| [AnnotatedCommit](/api/annotated_commit/) |  |

## <a name="fromRevspec"></a><span>AnnotatedCommit.</span>fromRevspec <span class="tags"><span class="async">Async</span></span>

```js
AnnotatedCommit.fromRevspec(repo, revspec).then(function(annotatedCommit) {
  // Use annotatedCommit
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository that contains the given commit |
| revspec | String | the extended sha syntax string to use to lookup the commit |

| Returns |  |
| --- | --- |
| [AnnotatedCommit](/api/annotated_commit/) |  |

## <a name="lookup"></a><span>AnnotatedCommit.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
AnnotatedCommit.lookup(repo, id).then(function(annotatedCommit) {
  // Use annotatedCommit
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository that contains the given commit |
| id | [Oid](/api/oid/) | the commit object id to lookup |

| Returns |  |
| --- | --- |
| [AnnotatedCommit](/api/annotated_commit/) |  |

## <a name="free"></a><span>AnnotatedCommit#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
annotatedCommit.free();
```

## <a name="id"></a><span>AnnotatedCommit#</span>id <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = annotatedCommit.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  commit id |

