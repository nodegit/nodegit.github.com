---
layout: default
menu_item: api
title: Status
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "OPT": "#OPT"
  "SHOW": "#SHOW"
  "STATUS": "#STATUS"
---

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

