# Playwright Workflow Notes

## Estado actual
- Repo: `https://github.com/LoreSVi/ecommerce-qa-playwright.git`
- Workflow: `.github/workflows/playwright.yml`
- Triggers:
  - `push` a `main`
  - `pull_request` hacia `main`
  - `workflow_dispatch` (ejecución manual desde Actions UI)
- Se corrigió el archivo YAML duplicado y se validó que el workflow es sintácticamente correcto.

## Resultado reciente
- El workflow se ejecutó manualmente y falló en la tarea `Run Playwright E2E` con `exit code 1`.
- El fallo no fue por el YAML, sino por la ejecución de la prueba.

## Qué revisar la próxima vez
1. Abrir el log completo del job fallido y ver en qué paso falló.
2. Confirmar si `npm ci` e `npx playwright install --with-deps` terminaron correctamente.
3. Ver si `npx playwright test --reporter=list` necesita un servidor activo o datos adicionales.
4. Revisar si hay errores en las pruebas Playwright o si faltan selectors/URLs actualizadas.

## Nota
- Yo no conservo memoria persistente entre sesiones, así que este archivo sirve para guardar el resumen en el repo.
- Cuando vuelvas, podemos retomar desde este punto.
