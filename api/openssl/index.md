---
layout: default
menu_item: api
title: Openssl
description: Version 0.8.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "setLocking": "#setLocking"
---

## <a name="setLocking"></a><span>Openssl.</span>setLocking <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Openssl.setLocking();
```

| Returns |  |
| --- | --- |
| Number |  0 on success, -1 if there are errors or if libgit2 was not
 built with OpenSSL and threading support. |

