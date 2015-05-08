---
layout: default
menu_item: api
title: Stash
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "drop": "#drop"
  "foreach": "#foreach"
  "save": "#save"
  "FLAGS": "#FLAGS"
---

## <a name="drop"></a><span>Stash.</span>drop <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Stash.drop(repo, index);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The owning repository. |
| index | Number | The position within the stash list. 0 points to the most recent stashed state. |

| Returns |  |
| --- | --- |
| Number |  0 on success, or error code |

## <a name="foreach"></a><span>Stash.</span>foreach <span class="tags"><span class="async">Async</span></span>

```js
Stash.foreach(repo, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to find the stash. |
| callback | StashCb | Callback to invoke per found stashed state. The most recent stash state will be enumerated first. |
| payload | Void | Extra parameter to callback function. |

| Returns |  |
| --- | --- |
| Number |  0 on success, non-zero callback return value, or error code |

## <a name="save"></a><span>Stash.</span>save <span class="tags"><span class="async">Async</span></span>

```js
Stash.save(repo, stasher, message, flags).then(function(oid) {
  // Use oid
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| stasher | [Signature](/api/signature/) |  |
| message | String |  |
| flags | Number |  |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="FLAGS"></a><span>Stash.</span>FLAGS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Stash.FLAGS.</span>DEFAULT | 0 |
| <span>Stash.FLAGS.</span>KEEP_INDEX | 1 |
| <span>Stash.FLAGS.</span>INCLUDE_UNTRACKED | 2 |
| <span>Stash.FLAGS.</span>INCLUDE_IGNORED | 4 |

