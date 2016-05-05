---
layout: default
menu_item: api
title: Transport
description: Version 0.13.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "sshWithPaths": "#sshWithPaths"
  "unregister": "#unregister"
  "#init": "#init"
  "#smartCertificateCheck": "#smartCertificateCheck"
  "FLAGS": "#FLAGS"
---

## <a name="sshWithPaths"></a><span>Transport.</span>sshWithPaths <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Transport.sshWithPaths(owner, payload).then(function(transport) {
  // Use transport
});
```

| Parameters | Type |   |
| --- | --- | --- |
| owner | [Remote](/api/remote/) | the owning remote |
| payload | Void | a strarray with the paths |

| Returns |  |
| --- | --- |
| [Transport](/api/transport/) | the resulting transport |

## <a name="unregister"></a><span>Transport.</span>unregister <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Transport.unregister(prefix);
```

| Parameters | Type |   |
| --- | --- | --- |
| prefix | String | From the previous call to git_transport_register |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="init"></a><span>Transport#</span>init <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transport.init(version);
```

| Parameters | Type |
| --- | --- | --- |
| version | Number | Version of struct; pass `GIT_TRANSPORT_VERSION` |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="smartCertificateCheck"></a><span>Transport#</span>smartCertificateCheck <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = transport.smartCertificateCheck(cert, valid, hostname);
```

| Parameters | Type |
| --- | --- | --- |
| cert | [Cert](/api/cert/) | the certificate to pass to the caller |
| valid | Number | whether we believe the certificate is valid |
| hostname | String | the hostname we connected to |

| Returns |  |
| --- | --- |
| Number |  the return value of the callback |

## <a name="FLAGS"></a><span>Transport.</span>FLAGS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Transport.FLAGS.</span>NONE | 0 |

