---
layout: default
menu_item: api
title: Status
description: Version 0.12.2
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "byIndex": "#byIndex"
  "file": "#file"
  "foreach": "#foreach"
  "foreachExt": "#foreachExt"
  "shouldIgnore": "#shouldIgnore"
  "OPT": "#OPT"
  "SHOW": "#SHOW"
  "STATUS": "#STATUS"
---

## <a name="byIndex"></a><span>Status.</span>byIndex <span class="tags"><span class="sync">Sync</span></span>

```js
var statusEntry = Status.byIndex(statuslist, idx);
```

| Parameters | Type |   |
| --- | --- | --- |
| statuslist | [StatusList](/api/status_list/) | Existing status list object |
| idx | Number | Position of the entry |

| Returns |  |
| --- | --- |
| [StatusEntry](/api/status_entry/) |  |

## <a name="file"></a><span>Status.</span>file <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Status.file(repo, path);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | A repository object |
| path | String | The exact path to retrieve status for relative to the repository working directory |

| Returns |  |
| --- | --- |
| Number | Output combination of git_status_t values for file |

## <a name="foreach"></a><span>Status.</span>foreach <span class="tags"><span class="async">Async</span></span>

```js
Status.foreach(repo, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | A repository object |
| callback | StatusCb | The function to call on each file |
| payload | Void | Pointer to pass through to callback function |

| Returns |  |
| --- | --- |
| Number |  0 on success, non-zero callback return value, or error code |

## <a name="foreachExt"></a><span>Status.</span>foreachExt <span class="tags"><span class="async">Async</span></span>

```js
Status.foreachExt(repo, opts, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository object |
| opts | [StatusOptions](/api/status_options/) | Status options structure |
| callback | StatusCb | The function to call on each file |
| payload | Void | Pointer to pass through to callback function |

| Returns |  |
| --- | --- |
| Number |  0 on success, non-zero callback return value, or error code |

## <a name="shouldIgnore"></a><span>Status.</span>shouldIgnore <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Status.shouldIgnore(ignored, repo, path);
```

| Parameters | Type |   |
| --- | --- | --- |
| ignored | Number | Boolean returning 0 if the file is not ignored, 1 if it is |
| repo | [Repository](/api/repository/) | A repository object |
| path | String | The file to check ignores for, rooted at the repo's workdir. |

| Returns |  |
| --- | --- |
| Number |  0 if ignore rules could be processed for the file (regardless
         of whether it exists or not), or an error 
<
 0 if they could not. |

## <a name="OPT"></a><span>Status.</span>OPT <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Status.OPT.</span>INCLUDE_UNTRACKED | 1 |
| <span>Status.OPT.</span>INCLUDE_IGNORED | 2 |
| <span>Status.OPT.</span>INCLUDE_UNMODIFIED | 4 |
| <span>Status.OPT.</span>EXCLUDE_SUBMODULES | 8 |
| <span>Status.OPT.</span>RECURSE_UNTRACKED_DIRS | 16 |
| <span>Status.OPT.</span>DISABLE_PATHSPEC_MATCH | 32 |
| <span>Status.OPT.</span>RECURSE_IGNORED_DIRS | 64 |
| <span>Status.OPT.</span>RENAMES_HEAD_TO_INDEX | 128 |
| <span>Status.OPT.</span>RENAMES_INDEX_TO_WORKDIR | 256 |
| <span>Status.OPT.</span>SORT_CASE_SENSITIVELY | 512 |
| <span>Status.OPT.</span>SORT_CASE_INSENSITIVELY | 1024 |
| <span>Status.OPT.</span>RENAMES_FROM_REWRITES | 2048 |
| <span>Status.OPT.</span>NO_REFRESH | 4096 |
| <span>Status.OPT.</span>UPDATE_INDEX | 8192 |
| <span>Status.OPT.</span>INCLUDE_UNREADABLE | 16384 |
| <span>Status.OPT.</span>INCLUDE_UNREADABLE_AS_UNTRACKED | 32768 |

## <a name="SHOW"></a><span>Status.</span>SHOW <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Status.SHOW.</span>INDEX_AND_WORKDIR | 0 |
| <span>Status.SHOW.</span>INDEX_ONLY | 1 |
| <span>Status.SHOW.</span>WORKDIR_ONLY | 2 |

## <a name="STATUS"></a><span>Status.</span>STATUS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Status.STATUS.</span>CURRENT | 0 |
| <span>Status.STATUS.</span>INDEX_NEW | 1 |
| <span>Status.STATUS.</span>INDEX_MODIFIED | 2 |
| <span>Status.STATUS.</span>INDEX_DELETED | 4 |
| <span>Status.STATUS.</span>INDEX_RENAMED | 8 |
| <span>Status.STATUS.</span>INDEX_TYPECHANGE | 16 |
| <span>Status.STATUS.</span>WT_NEW | 128 |
| <span>Status.STATUS.</span>WT_MODIFIED | 256 |
| <span>Status.STATUS.</span>WT_DELETED | 512 |
| <span>Status.STATUS.</span>WT_TYPECHANGE | 1024 |
| <span>Status.STATUS.</span>WT_RENAMED | 2048 |
| <span>Status.STATUS.</span>WT_UNREADABLE | 4096 |
| <span>Status.STATUS.</span>IGNORED | 16384 |
| <span>Status.STATUS.</span>CONFLICTED | 32768 |

