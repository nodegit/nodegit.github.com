---
layout: default
menu_item: api
title: Cred
description: Version 0.18.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "defaultNew": "#defaultNew"
  "sshKeyFromAgent": "#sshKeyFromAgent"
  "sshKeyMemoryNew": "#sshKeyMemoryNew"
  "sshKeyNew": "#sshKeyNew"
  "usernameNew": "#usernameNew"
  "userpassPlaintextNew": "#userpassPlaintextNew"
  "#free": "#free"
  "#hasUsername": "#hasUsername"
  "TYPE": "#TYPE"
---

## <a name="defaultNew"></a><span>Cred.</span>defaultNew <span class="tags"><span class="sync">Sync</span></span>

```js
var cred = Cred.defaultNew();
```

| Returns |  |
| --- | --- |
| [Cred](/api/cred/) |  |

## <a name="sshKeyFromAgent"></a><span>Cred.</span>sshKeyFromAgent <span class="tags"><span class="sync">Sync</span></span>

```js
var cred = Cred.sshKeyFromAgent(username);
```

| Parameters | Type |   |
| --- | --- | --- |
| username | String | username to use to authenticate |

| Returns |  |
| --- | --- |
| [Cred](/api/cred/) | The newly created credential object. |

## <a name="sshKeyMemoryNew"></a><span>Cred.</span>sshKeyMemoryNew <span class="tags"><span class="async">Async</span></span>

```js
Cred.sshKeyMemoryNew(username, publickey, privatekey, passphrase).then(function(cred) {
  // Use cred
});
```

| Parameters | Type |   |
| --- | --- | --- |
| username | String | username to use to authenticate. |
| publickey | String | The public key of the credential. |
| privatekey | String | The private key of the credential. |
| passphrase | String | The passphrase of the credential. |

| Returns |  |
| --- | --- |
| [Cred](/api/cred/) | The newly created credential object. |

## <a name="sshKeyNew"></a><span>Cred.</span>sshKeyNew <span class="tags"><span class="sync">Sync</span></span>

```js
var cred = Cred.sshKeyNew(username, publickey, privatekey, passphrase);
```

| Parameters | Type |   |
| --- | --- | --- |
| username | String | username to use to authenticate |
| publickey | String | The path to the public key of the credential. |
| privatekey | String | The path to the private key of the credential. |
| passphrase | String | The passphrase of the credential. |

| Returns |  |
| --- | --- |
| [Cred](/api/cred/) | The newly created credential object. |

## <a name="usernameNew"></a><span>Cred.</span>usernameNew <span class="tags"><span class="async">Async</span></span>

```js
Cred.usernameNew(username).then(function(cred) {
  // Use cred
});
```

| Parameters | Type |   |
| --- | --- | --- |
| username | String |  |

| Returns |  |
| --- | --- |
| [Cred](/api/cred/) |  |

## <a name="userpassPlaintextNew"></a><span>Cred.</span>userpassPlaintextNew <span class="tags"><span class="sync">Sync</span></span>

```js
var cred = Cred.userpassPlaintextNew(username, password);
```

| Parameters | Type |   |
| --- | --- | --- |
| username | String | The username of the credential. |
| password | String | The password of the credential. |

| Returns |  |
| --- | --- |
| [Cred](/api/cred/) | The newly created credential object. |

## <a name="free"></a><span>Cred#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
cred.free();
```

## <a name="hasUsername"></a><span>Cred#</span>hasUsername <span class="tags"><span class="sync">Sync</span></span>

```js
var result = cred.hasUsername();
```

| Returns |  |
| --- | --- |
| Number |  1 if the credential object has non-NULL username, 0 otherwise |

## <a name="TYPE"></a><span>Cred.</span>TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Cred.TYPE.</span>USERPASS_PLAINTEXT | 1 |
| <span>Cred.TYPE.</span>SSH_KEY | 2 |
| <span>Cred.TYPE.</span>SSH_CUSTOM | 4 |
| <span>Cred.TYPE.</span>DEFAULT | 8 |
| <span>Cred.TYPE.</span>SSH_INTERACTIVE | 16 |
| <span>Cred.TYPE.</span>USERNAME | 32 |
| <span>Cred.TYPE.</span>SSH_MEMORY | 64 |

