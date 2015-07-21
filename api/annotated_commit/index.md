---
layout: default
menu_item: api
title: AnnotatedCommit
description: Version 0.4.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "fromFetchhead": "#fromFetchhead"
  "fromRef": "#fromRef"
  "lookup": "#lookup"
  "#free": "#free"
  "#id": "#id"
---

## <a name="fromFetchhead"></a><span>AnnotatedCommit.</span>fromFetchhead <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

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
| id | [Oid](/api/oid/) |  |

| Returns |  |
| --- | --- |
| [AnnotatedCommit](/api/annotated_commit/) |  |

## <a name="fromRef"></a><span>AnnotatedCommit.</span>fromRef <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

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

## <a name="lookup"></a><span>AnnotatedCommit.</span>lookup <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

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

## <a name="free"></a><span>AnnotatedCommit#</span>free <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
annotatedCommit.free();
```

## <a name="id"></a><span>AnnotatedCommit#</span>id <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = annotatedCommit.id();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  commit id |

