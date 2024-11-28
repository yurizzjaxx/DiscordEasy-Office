![title](https://raw.githubusercontent.com/yurizzjaxx/DiscordEasy-Office/refs/heads/main/image/gato%20emo.jpeg)
# Discord Easy - Office

### Código de importação local do caminho JavaScript:

**import "discordEasy.js" module**

- **Website:** [Web Browser](https://yurizzjaxx.github.io/DiscordEasy-Office/)

- **Clique:** [discordEasy aqui](https://github.com/yurizzjaxx/DiscordEasy-Office/blob/main/discordEasy.js)

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
console.log(user)
}, function(er) {
// Error
console.error(er);
});
```

### Discord Media Easy todas

**Mídia e Cdn com Avatar no ícone da Guild**

**Usuário para `avatar`, `banner`, `emoji`, `Guilda ícone`, `mídia`**

- `getCdnUrl()` or `https://cdn.discordapp.com/`
- `getMediaUrl()` or `https://media.discordapp.net/`

**Discord Avatar e banner**

`getAvatar()`

```js
getAvatar("Usuário ID", "avatar", /* Discriminator número 0 - 5 */, /* Número size 2048 max */);
```

`getBanner()`

```js
getBanner("Usuário ID", "banner", /* Número size 2048 max */);
```
## Discord Avatar Support

**Discord embed avatar**

<table>
  <tr>
    <td>Cdn discord imagem</td>
    <td>Discriminator 0 - 5</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Discriminator</td>
    <td>Size 2048</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Media discord imagem</td>
    <td>Discriminator 0 - 5</td>
    <td>❌</td>
  </tr>
</table>

**Discord Avatar**

<table>
  <tr>
    <td>Cdn discord imagem</td>
    <td>Avatar</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Avatar</td>
    <td>Size 2048</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Media discord imagem</td>
    <td>Avatar</td>
    <td>✅</td>
  </tr>
</table>
