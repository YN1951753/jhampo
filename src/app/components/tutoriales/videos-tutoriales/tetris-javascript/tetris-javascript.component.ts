import { Component } from '@angular/core';
import { HeaderTutorial } from '../../../../models/tutoriales/header-tutorial';
import { SidebarTutorial } from '../../../../models/tutoriales/sidebar-tutorial';
import { TitleTutorialComponent } from '../../title-tutorial/title-tutorial.component';
import { AnuncioVerticalComponent } from '../../anuncio-vertical/anuncio-vertical.component';
import { SidebarTutorialComponent } from '../../sidebar-tutorial/sidebar-tutorial.component';
import { CodigoDesign1Component } from '../../../codigo/codigo-design-1/codigo-design-1.component';
import { SectionTutorialComponent } from '../../section-tutorial/section-tutorial.component';
import { SectionTutorialCodeComponent } from '../../section-tutorial-code/section-tutorial-code.component';
import { SectionTutorial } from '../../../../models/tutoriales/section-tutorial';
import { SectionTutorialCode } from '../../../../models/tutoriales/section-tutorial-code';

@Component({
  selector: 'app-tetris-javascript',
  standalone: true,
  imports: [TitleTutorialComponent,AnuncioVerticalComponent,SidebarTutorialComponent,CodigoDesign1Component,SectionTutorialComponent,SectionTutorialCodeComponent],
  templateUrl: './tetris-javascript.component.html',
  styleUrl: './../style-video-tutorial.css'
})
export class TetrisJavascriptComponent {
  titile:HeaderTutorial = {
    title:"Cómo crear Tetris en JavaScript (guía completa)",
    srcImg:"assets/languages/javascript.svg",
    srcYoutube:"https://www.youtube.com/watch?v=SqNOKrVey_w"
  }
  items:SidebarTutorial[]=[
    {
      id:1,
      anchor:"#",
      text:"Creación del Proyecto"
    },
    {
       id:2,
      anchor:"#",
      text:"Creación del tablero"
    },
    {
      id:3,
      anchor:"#",
      text:"Creacion tetromino"
    },
    {
      id:4,
      anchor:"#",
      text:"Movimiento de la Nave"
    },
    {
      id:5,
      anchor:"#",
      text:" Colisiones de la nave"
    },
    {
      id:6,
      anchor:"#",
      text:"Disparos de la nave"
    }
  ]
  part1:SectionTutorial = {
    parrafo:[`Creamos una carpeta para alojar nuestros archivos JavaScript. Luego, creamos un archivo <code>index.html</code> para el HTML y un archivo <code>styles.css</code> para los estilos.`,
    `Dentro de nuestra carpeta scripts, creamos un archivo llamado <code>main.js</code> que será nuestro archivo principal,`
    ],
    img:"assets/tutoriales/javascript-tetris/img1.jpg",
  }
  part2:SectionTutorialCode = {
    parrafo:[`En el archivo <code>index.html</code>, creamos la estructura básica, le colocamos un título y vinculamos nuestro archivo CSS y nuestro archivo JavaScript.`,
    `Luego, creamos un <code>canvas</code> en el que vamos a renderizar todo nuestro juego.`
    ],
    code:`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tetris</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <canvas id="canvas-tetris"></canvas>

    <script src="/scripts/main.js" type="module"></script>
</body>
</html> 
     `,
     language:"html"
  }
  part3:SectionTutorial = {
    parrafo:[`Nuestro tablero tendrá 10 filas y 20 columnas, donde cada fila y cada columna se representarán con un cuadro dentro del tablero.`,`Crearemos una matriz con las mismas filas y columnas que nuestro tablero. Inicialmente, la matriz estará llena de ceros y estará sincronizada con el tablero.`,`Si algún valor en la matriz es diferente de cero, se dibujará un cuadro en el tablero en la posición correspondiente de la matriz. Pero esto lo explicaremos con más detalle más adelante.`],
    img:"assets/tutoriales/javascript-tetris/img2.jpg",
  }
  part4:SectionTutorial = {
    parrafo:[`Dentro de la carpeta scripts, creamos un nuevo archivo llamado <code>grid.js</code>`
    ],
    img:"assets/tutoriales/javascript-tetris/img3.jpg"
  }
  part5:SectionTutorialCode = {
    parrafo:[`En el archivo <code>index.html</code>, creamos la estructura básica, le colocamos un título y vinculamos nuestro archivo CSS y nuestro archivo JavaScript.`,
    `Luego, creamos un <code>canvas</code> en el que vamos a renderizar todo nuestro juego.`
    ],
    code:`
export class Grid{
    constructor(canvas, rows, cols, cellSize, space){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.space = space;
        this.matriz = [];
        this.restartMatriz();

        this.canvas.width = this.cols * this.cellSize + (this.space*this.cols);
        this.canvas.height = this.rows * this.cellSize + (this.space*this.rows);

        this.block = new Tetromino(this.canvas, this.cellSize);
    }
    restartMatriz(){
        for(let r = 0; r < this.rows; r++){
            this.matriz[r] = [];
            for(let c = 0; c < this.cols; c++){
                this.matriz[r][c] = 0;
            }
        }
    }
}
     `,
     language:"javascript"
  }
}
