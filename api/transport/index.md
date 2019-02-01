---
layout: default
menu_item: api
title: Transport
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#smartCertificateCheck": "#smartCertificateCheck"
  "#smartCredentials": "#smartCredentials"
  "#smartProxyOptions": "#smartProxyOptions"
  "FLAGS": "#FLAGS"
---

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

## <a name="smartCredentials"></a><span>Transport#</span>smartCredentials <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
transport.smartCredentials(user, methods).then(function(cred) {
  // Use cred
});
```

| Parameters | Type |
| --- | --- | --- |
| user | String | the user we saw on the url (if any) |
| methods | Number | available methods for authentication |

| Returns |  |
| --- | --- |
| [Cred](/api/cred/) |  |

## <a name="smartProxyOptions"></a><span>Transport#</span>smartProxyOptions <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
transport.smartProxyOptions().then(function(proxyOptions) {
  // Use proxyOptions
});
```

| Returns |  |
| --- | --- |
| [ProxyOptions](/api/proxy_options/) | options struct to fill |

## <a name="FLAGS"></a><span>Transport.</span>FLAGS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Transport.FLAGS.</span>NONE | 0 |

