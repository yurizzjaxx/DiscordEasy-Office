# Discord Easy - Office

### Código de importação local do caminho JavaScript:

**import "discordEasy.js" module**

**Clique:** [discordEasy aqui](https://github.com/yurizzjaxx/DiscordEasy-Office/blob/main/discordEasy.js)

```js
import {
  getCdnUrl,
  getMediaUrl,
  japiUser,
  getAvatar,
  getBanner,
  getEmoji,
  getIcon
} from '/discordEasy.js';
```
**HTML de JavaScript para module**

```html
<script type="module" src="main.js"></script>
```
### buscar resposta da rede
**Discord Usuário do ID**

`JapiUser()`
```js
japiUser("Usuário ID", function(user) {
// código
}, function(er) {
// Error
console.error(er);
});
```

### Discord Media & Cdn Easy todas
**Usuário para `avatar`, `banner`, `emoji`, `Guilda ícone`, `mídia`**

**Media e Cdn**

`getCdnUrl()` or __`https://cdn.discordapp.com/`__

`getMediaUrl()` or `https://media.discordapp.net/`
