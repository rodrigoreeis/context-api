## Organização de components

Components locais deverão permanecer dentro da própria `page/`, deixando a pasta `components/` para apenas os que forem utilizados em mais de um local.

```
pages/
  └── About/
    ├── components/
      └── Modal/
        └── hooks/
    ├── hooks/
    └── index.js
components/
  └── Header
    ├── hooks/
    └── index.js
services/
  ├── index.js
  └── auth.js
hooks/
  └── cards.js
styles
  └── mixins.scss
```

## Services

Requests que necessitarem de mapeamento de dados ou forem reutilizáveis deverão ser colocadas dentro de `services/`.
