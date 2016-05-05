---
layout: default
menu_item: api
title: RebaseOperation
description: Version 0.13.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "REBASE_OPERATION": "#REBASE_OPERATION"
  "Instance Variables": "#ivars"
---

## <a name="REBASE_OPERATION"></a><span>RebaseOperation.</span>REBASE_OPERATION <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>RebaseOperation.REBASE_OPERATION.</span>PICK | 0 |
| <span>RebaseOperation.REBASE_OPERATION.</span>REWORD | 1 |
| <span>RebaseOperation.REBASE_OPERATION.</span>EDIT | 2 |
| <span>RebaseOperation.REBASE_OPERATION.</span>SQUASH | 3 |
| <span>RebaseOperation.REBASE_OPERATION.</span>FIXUP | 4 |
| <span>RebaseOperation.REBASE_OPERATION.</span>EXEC | 5 |

## <a name="ivars"></a>Instance Variables

| Variable | Type |
| --- | --- |
| <a name="exec"></a>exec | String |
| <a name="id"></a>id | Oid |
| <a name="type"></a>type | Number |

