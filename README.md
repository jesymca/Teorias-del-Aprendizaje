# Wiki Teorías del Aprendizaje — UPTPC

Línea de Tiempo interactiva sobre las principales teorías del aprendizaje.

## Despliegue en GitHub Pages

1. Subir todos los archivos a un repositorio GitHub
2. Ir a **Settings > Pages** y seleccionar la branch `main` con folder `/ (root)`
3. Ajustar `BASE_PATH` en `components.js` según el nombre del repositorio:
   - Si el repo es `usuario.github.io/wiki-teorias/`: `BASE_PATH = '/wiki-teorias/'`
   - Si el repo es un site principal: `BASE_PATH = '/'`
4. El sitio estará disponible en `https://usuario.github.io/wiki-teorias/`

## Estructura

```
├── index.html                 # Página principal con línea de tiempo
├── components.js              # Header/footer compartidos + funciones JS
├── assets/logos/              # Logos UPTPC
│   ├── logo-uptpc.png
│   ├── educacion-universitaria.png
│   └── ciencia-tecnologia.png
├── modulos/
│   ├── conductismo.html       # Teoría del Conductismo
│   ├── cognitivismo.html      # Teoría del Cognitivismo
│   ├── constructivismo.html   # Teoría del Constructivismo
│   ├── humanismo.html         # Teoría del Humanismo
│   ├── cambios-conceptuales.html # Cambios Conceptuales
│   ├── electica.html          # Enfoque Ecléctico
│   ├── conectivismo.html      # Teoría del Conectivismo
│   └── conclusion.html        # Síntesis final
```

## Tecnologías

- Bootstrap 5.3.3 (CDN)
- Bootstrap Icons 1.11.3 (CDN)
- JavaScript vanilla (components.js)

## Autor

**José Herrera** — Unidad de Ciencia y Tecnologia, UPTPC
