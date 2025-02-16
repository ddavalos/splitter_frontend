# splitter_frontend
Ejercicio de División en Segmentos de Archivos Varios (Frontend)

# React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay dos complementos oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Ampliación de la configuración de ESLint

Si está desarrollando una aplicación a producción, se recomienda que actualice la configuración para habilitar las reglas de lint que tengan en cuenta sus tipos:

- Configure la propiedad `parserOptions` en top-level de la siguiente manera:
- 
```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Remplace `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` o `tseslint.configs.strictTypeChecked`
- Optionalmente agregue add `...tseslint.configs.stylisticTypeChecked`
- Instale [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y actualize el config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
