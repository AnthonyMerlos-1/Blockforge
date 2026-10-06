# Blockforge 3.4

FPS multijugador para PC y móvil. Lee `LEEME_PRIMERO.txt` para los cambios, controles y reglas.

```bash
npm start
```

Abre http://localhost:3000. Node.js 22 o superior; no requiere instalar dependencias npm. Usa el Dockerfile y railway.json incluidos para Railway. Configura un volumen persistente con DATA_DIR para conservar los perfiles.

```bash
npm test
```

Mapas normales: jugadores reales y bots opcionales de 5 a 15. Sector Cero: cooperativo hasta 10 jugadores, oleadas y ocho jefes, construcciones destructibles. Granadas permanentes con espera de cinco segundos, suministros recogibles, ragdolls y reapariciones en posiciones distintas.

`node scripts-generate-maps.cjs` regenera la geometría de colisión del servidor desde el constructor de escenarios. Debe ejecutarse si se modifica la geometría del cliente. Se entrega ya regenerada.
# Blockforge
