## Este proyecto es una idea basica (BASICA) de un launcher, en esencia solo es una gui para el modulo [MinecraftLauncher-core](https://github.com/Pierce01/MinecraftLauncher-core).
Para mas informacion/documentacion favor de checar el github del enlace.


## ¿Que hace este proyecto?
Añadi una interfaz para que se pueda ingresar un nick y ejecutar el juego con dicho nick, por ende el juego sera en modo offline.

## ¿Como puedo probarlo?
Deberas clonar el repositorio y tener [Node](https://nodejs.org/en/download)<br />
Una vez tengas node y el repositorio, entraras a la carpeta del proyecto y ejecutaras
```
npm install
```

Una vez se descarguen las dependencias, podras ejecutar la aplicacion con
```
npm start
```

Para modificar la interfaz grafica, puedes jugar con el index.html y style.css<br />
## Quiero hacer que mi launcher ejecute Forge o Fabric, ¿Como le puedo hacer?
Como dije arriba, debes visitar la wiki<br />
Una pequeña ayuda, Fabric se puede ejecutar directamente el cliente instalado en el %appdata% de toda la vida<br />
Deberas usar la version [custom](https://github.com/Pierce01/MinecraftLauncher-core#custom) mas detalles en [options.version.custom](https://github.com/Pierce01/MinecraftLauncher-core#launch)<br /><br />

Forge es un tanto mas complicado, para ello necesitas el instalador universal de Forge, mas detalles en [options.forge](https://github.com/Pierce01/MinecraftLauncher-core#launch)

## Pese a que este proyecto esta un poco mas a guia, ideas basicas y cosas por el estilo, añadi la posibilidad de generar un .exe
```
npm run build
```
(Si piensan generar el .exe, remuevan la carpeta del minecraft que este instalado)<br /><br /><br />

Soporte y ma$ ayuda Discord: PandaUwU#2438
