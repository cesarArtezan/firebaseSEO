# SEO con Universal

1. `ng add @ng-toolkit/universal`
2. `npm run build:prod`
3. `npm run server`

##firebase

1. `npm i xmlhttprequest ws -s`
2. `npm i bufferutil utf-8-validate -s`
3. en server.ts poner

```typescript
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```

4. Para deploy perpararlo con:

```bash
ng add @ng-toolkit/serverless --provider firebase --firebaseProject POJECTID
```

5. Para ejecutar deploy y subirlo a firebase `npm run build:prod:deploy`

## Meta tags

```typescript

import { Meta, Title } from '@angular/platform-browser';



  constructor(
    private fireBaseSvc: FireBaseService,
    private meta: Meta,
    private titleService: Title,
  ) {}

 // Set meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'inmobiliaria,renta,venta',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Inmobiliaria Cobian Venta y renta de casas en Puebla. inmobiliariacobian@gmail.com. Bienvenidos a Inmobiliaria Cobian.',
    });
    // ... and so on
  }

```
