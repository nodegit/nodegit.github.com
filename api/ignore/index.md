---
layout: default
menu_item: api
title: Ignore
description: Version 0.4.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "addRule": "#addRule"
  "clearInternalRules": "#clearInternalRules"
---

## <a name="addRule"></a><span>Ignore.</span>addRule <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Ignore.addRule(repo, rules);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository to add ignore rules to. |
| rules | String | Text of rules, a la the contents of a .gitignore file. It is okay to have multiple rules in the text; if so, each rule should be terminated with a newline. |

| Returns |  |
| --- | --- |
| Number |  0 on success |

## <a name="clearInternalRules"></a><span>Ignore.</span>clearInternalRules <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Ignore.clearInternalRules(repo);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository to remove ignore rules from. |

| Returns |  |
| --- | --- |
| Number |  0 on success |

