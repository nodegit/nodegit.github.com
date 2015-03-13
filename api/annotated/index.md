---
layout: default
menu_item: api
title: Annotated
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "commitFromFetchhead": "#commitFromFetchhead"
  "commitFromRef": "#commitFromRef"
  "commitId": "#commitId"
  "commitLookup": "#commitLookup"
---

## <a name="commitFromFetchhead"></a><span>Annotated.</span>commitFromFetchhead <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Annotated.commitFromFetchhead(repo, branch_name, remote_url, id).then(function(annotatedCommit) {
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

## <a name="commitFromRef"></a><span>Annotated.</span>commitFromRef <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Annotated.commitFromRef(repo, ref).then(function(annotatedCommit) {
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

## <a name="commitId"></a><span>Annotated.</span>commitId <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = Annotated.commitId(commit);
```

| Parameters | Type |   |
| --- | --- | --- |
| commit | [AnnotatedCommit](/api/annotated_commit/) |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  commit id |

## <a name="commitLookup"></a><span>Annotated.</span>commitLookup <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Annotated.commitLookup(repo, id).then(function(annotatedCommit) {
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

