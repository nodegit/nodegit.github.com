---
layout: default
menu_item: api
title: StatusList
description: Version 0.11.2
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#entrycount": "#entrycount"
  "#free": "#free"
  "#getPerfdata": "#getPerfdata"
---

## <a name="create"></a><span>StatusList.</span>create <span class="tags"><span class="async">Async</span></span>

```js
StatusList.create(repo, opts).then(function(statusList) {
  // Use statusList
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository object |
| opts | [StatusOptions](/api/status_options/) | Status options structure |

| Returns |  |
| --- | --- |
| [StatusList](/api/status_list/) |  |

## <a name="entrycount"></a><span>StatusList#</span>entrycount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = statusList.entrycount();
```

| Returns |  |
| --- | --- |
| Number |  the number of status entries |

## <a name="free"></a><span>StatusList#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
statusList.free();
```

## <a name="getPerfdata"></a><span>StatusList#</span>getPerfdata <span class="tags"><span class="async">Async</span></span>

```js
statusList.getPerfdata().then(function(diffPerfdata) {
  // Use diffPerfdata
});
```

| Returns |  |
| --- | --- |
| [DiffPerfdata](/api/diff_perfdata/) |  |

