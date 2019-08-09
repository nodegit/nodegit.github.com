---
layout: default
menu_item: api
title: Revwalk
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#commitWalk": "#commitWalk"
  "#fastWalk": "#fastWalk"
  "#fileHistoryWalk": "#fileHistoryWalk"
  "#getCommits": "#getCommits"
  "#getCommitsUntil": "#getCommitsUntil"
  "#hide": "#hide"
  "#hideGlob": "#hideGlob"
  "#hideHead": "#hideHead"
  "#hideRef": "#hideRef"
  "#next": "#next"
  "#push": "#push"
  "#pushGlob": "#pushGlob"
  "#pushHead": "#pushHead"
  "#pushRange": "#pushRange"
  "#pushRef": "#pushRef"
  "#repository": "#repository"
  "#reset": "#reset"
  "#simplifyFirstParent": "#simplifyFirstParent"
  "#sorting": "#sorting"
  "#walk": "#walk"
  "SORT": "#SORT"
---

## <a name="create"></a><span>Revwalk.</span>create <span class="tags"><span class="sync">Sync</span></span>

```js
var revwalk = Revwalk.create(repo);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repo to walk through |

| Returns |  |
| --- | --- |
| [Revwalk](/api/revwalk/) |  |

## <a name="commitWalk"></a><span>Revwalk#</span>commitWalk <span class="tags"><span class="async">Async</span></span>

```js
revwalk.commitWalk(max_count).then(function(stdVectorGitCommit) {
  // Use stdVectorGitCommit
});
```

| Parameters | Type |
| --- | --- | --- |
| max_count | Number |  |

| Returns |  |
| --- | --- |
| StdVectorGitCommit |  |

## <a name="fastWalk"></a><span>Revwalk#</span>fastWalk <span class="tags"><span class="async">Async</span></span>

```js
revwalk.fastWalk(max_count).then(function(stdVectorGitOid) {
  // Use stdVectorGitOid
});
```

| Parameters | Type |
| --- | --- | --- |
| max_count | Number |  |

| Returns |  |
| --- | --- |
| StdVectorGitOid |  |

## <a name="fileHistoryWalk"></a><span>Revwalk#</span>fileHistoryWalk <span class="tags"><span class="async">Async</span></span>

```js
revwalk.fileHistoryWalk(filePath, max_count).then(function(arrayHistoryEntry) {
  // Use arrayHistoryEntry
});
```

| Parameters | Type |
| --- | --- | --- |
| filePath | String |  |
| max_count | Number |  |

| Returns |  |
| --- | --- |
| Array&lt;historyEntry&gt; |  |

## <a name="getCommits"></a><span>Revwalk#</span>getCommits <span class="tags"><span class="async">Async</span></span>

```js
revwalk.getCommits(count).then(function(arrayCommit) {
  // Use arrayCommit
});
```

Get a number of commits.

| Parameters | Type |
| --- | --- | --- |
| count | Number | (default: 10) |

| Returns |  |
| --- | --- |
| Array&lt;[Commit](/api/commit/)&gt; |  |

## <a name="getCommitsUntil"></a><span>Revwalk#</span>getCommitsUntil <span class="tags"><span class="async">Async</span></span>

```js
revwalk.getCommitsUntil(checkFn).then(function(array) {
  // Use array
});
```

Walk the history grabbing commits until the checkFn called with the
current commit returns false.

| Parameters | Type |
| --- | --- | --- |
| checkFn | Function | function returns false to stop walking |

| Returns |  |
| --- | --- |
| Array |  |

## <a name="hide"></a><span>Revwalk#</span>hide <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.hide(commit_id);
```

| Parameters | Type |
| --- | --- | --- |
| commit_id | [Oid](/api/oid/) | the oid of commit that will be ignored during the traversal |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="hideGlob"></a><span>Revwalk#</span>hideGlob <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.hideGlob(glob);
```

| Parameters | Type |
| --- | --- | --- |
| glob | String | the glob pattern references should match |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="hideHead"></a><span>Revwalk#</span>hideHead <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.hideHead();
```

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="hideRef"></a><span>Revwalk#</span>hideRef <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.hideRef(refname);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | the reference to hide |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="next"></a><span>Revwalk#</span>next <span class="tags"><span class="async">Async</span></span>

```js
revwalk.next().then(function(oid) {
  // Use oid
});
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | the oid of the next commit |

## <a name="push"></a><span>Revwalk#</span>push <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.push(id);
```

| Parameters | Type |
| --- | --- | --- |
| id | [Oid](/api/oid/) | the oid of the commit to start from. |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="pushGlob"></a><span>Revwalk#</span>pushGlob <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.pushGlob(glob);
```

| Parameters | Type |
| --- | --- | --- |
| glob | String | the glob pattern references should match |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="pushHead"></a><span>Revwalk#</span>pushHead <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.pushHead();
```

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="pushRange"></a><span>Revwalk#</span>pushRange <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.pushRange(range);
```

| Parameters | Type |
| --- | --- | --- |
| range | String | the range |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="pushRef"></a><span>Revwalk#</span>pushRef <span class="tags"><span class="sync">Sync</span></span>

```js
var result = revwalk.pushRef(refname);
```

| Parameters | Type |
| --- | --- | --- |
| refname | String | the reference to push |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="repository"></a><span>Revwalk#</span>repository <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = revwalk.repository();
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  the repository being walked |

## <a name="reset"></a><span>Revwalk#</span>reset <span class="tags"><span class="sync">Sync</span></span>

```js
revwalk.reset();
```

## <a name="simplifyFirstParent"></a><span>Revwalk#</span>simplifyFirstParent <span class="tags"><span class="sync">Sync</span></span>

```js
revwalk.simplifyFirstParent();
```

## <a name="sorting"></a><span>Revwalk#</span>sorting <span class="tags"><span class="sync">Sync</span></span>

```js
revwalk.sorting(sort);
```

Set the sort order for the revwalk. This function takes variable arguments
like `revwalk.sorting(NodeGit.RevWalk.Topological, NodeGit.RevWalk.Reverse).`

| Parameters | Type |
| --- | --- | --- |
| sort | Number |  |

## <a name="walk"></a><span>Revwalk#</span>walk <span class="tags"><span class="sync">Sync</span></span>

```js
revwalk.walk(oid, callback);
```

Walk the history from the given oid. The callback is invoked for each commit;
When the walk is over, the callback is invoked with `(null, null)`.

| Parameters | Type |
| --- | --- | --- |
| oid | [Oid](/api/oid/) |  |
| callback | Function |  |

## <a name="SORT"></a><span>Revwalk.</span>SORT <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Revwalk.SORT.</span>NONE | 0 |
| <span>Revwalk.SORT.</span>TOPOLOGICAL | 1 |
| <span>Revwalk.SORT.</span>TIME | 2 |
| <span>Revwalk.SORT.</span>REVERSE | 4 |

