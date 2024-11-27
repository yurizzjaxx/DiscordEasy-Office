# Discord Easy - Office

### Código de importação local do caminho JavaScript:

**import "discordEasy.js" module**

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
-- código 
}, function(er) {
-- código Error
console.error(er);
});
```
