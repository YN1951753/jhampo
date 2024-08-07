import { Component } from '@angular/core';
import { TitleTutorialComponent } from '../../title-tutorial/title-tutorial.component';
import { AnuncioVerticalComponent } from '../../anuncio-vertical/anuncio-vertical.component';
import { SidebarTutorialComponent } from '../../sidebar-tutorial/sidebar-tutorial.component';
import { SidebarTutorial } from '../../../../models/tutoriales/sidebar-tutorial';
import { CodigoDesign1Component } from '../../../codigo/codigo-design-1/codigo-design-1.component';
import { SectionTutorialComponent } from '../../section-tutorial/section-tutorial.component';
import { SectionTutorial } from '../../../../models/tutoriales/section-tutorial';
import { SectionTutorialCode } from '../../../../models/tutoriales/section-tutorial-code';
import { SectionTutorialCodeComponent } from '../../section-tutorial-code/section-tutorial-code.component';
import { HeaderTutorial } from '../../../../models/tutoriales/header-tutorial';

@Component({
  selector: 'app-naves-csharp',
  standalone: true,
  imports: [TitleTutorialComponent,AnuncioVerticalComponent,SidebarTutorialComponent,CodigoDesign1Component,SectionTutorialComponent,SectionTutorialCodeComponent],
  templateUrl: './naves-csharp.component.html',
  styleUrl: './../style-video-tutorial.css'
})

export class NavesCsharpComponent {

  titile:HeaderTutorial = {
    title:"Cómo crear un videojuego en consola usando C#",
    srcImg:"assets/languages/csharp.svg",
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
      text:"Dibujo del marco de juego"
    },
    {
      id:3,
      anchor:"#",
      text:"Creación de la nave "
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
    parrafo:['Abrimos Visual Studio y creamos un nuevo proyecto "Aplicación de consola".'],
    img:"assets/tutoriales/csharp-nave/img-csharp-nave1.jpg",
  }
  part2:SectionTutorial = {
    parrafo:['Elegimos el framework (versiones probadas para el proyecto: desde la 6.0 en adelante).'],
    img:"assets/tutoriales/csharp-nave/img-csharp-nave2.jpg",

  }
  part3:SectionTutorial = {
    parrafo:[`Creamos una nueva clase llamada  Ventana`],
    img:"assets/tutoriales/csharp-nave/img-csharp-nave3.jpg",
  }
  part4:SectionTutorialCode = {
    parrafo:[`Creamos atributos para almacenar el ancho, la altura y el color de la consola. Además, para dibujar el marco de nuestro juego, creamos dos atributos de tipo Point.`,
      `"LimiteSuperior" será la parte superior izquierda de nuestro marco`,
      `"LimiteInferior" será la parte inferior izquierda de nuestro marco.`
    ],
    code:`
    public class Ventana
    {
        public int Ancho { get; set; }
        public int Altura { get; set; }
        public ConsoleColor Color { get; set; }
        public Point LimiteSuperior { get; set; }
        public Point LimiteInferior { get; set; }

        public Ventana(int ancho,
            int altura, ConsoleColor color, 
            Point limiteSuperior,
            Point limiteInferior)
        {
            Ancho = ancho;
            Altura = altura;
            Color = color;
            LimiteSuperior = limiteSuperior;
            LimiteInferior = limiteInferior;
        } 
    }
    `,
    language:"c#" 
  }
  part5:SectionTutorialCode = {
    parrafo:[`Dentro de la clase Ventana creamos un método público llamado Initi`,
      `Establecemos el alto y el ancho de la consola, añadimos el título a la consola, ocultamos el cursor de la consola, asignamos el color de la consola y limpiamos el buffer de pantalla para eliminar lo que se está mostrando.`],
    code:`
    public void Initi()
    {
        Console.SetWindowSize(Ancho, Altura);
        Console.Title = "Nave";
        Console.CursorVisible = false;
        Console.BackgroundColor = Color;
        Console.Clear();
    }
     `,
     language:"c#"
  }
  part6:SectionTutorialCode = {
    parrafo:[`Usando los siguientes caracteres de código ASCII (═, ║, ╔, ╚, ╗, ╝), creamos el marco de nuestro juego. Para esto, creo un método más llamado DibujarMarco.`],
    code:`
    public void DibujarMarco()
    {
        Console.ForegroundColor = ConsoleColor.White;

        for(int i = LimiteSuperior.X; i <= LimiteInferior.X; i++)
        {
            Console.SetCursorPosition(i,LimiteSuperior.Y);
            Console.Write("═");
            Console.SetCursorPosition(i,LimiteInferior.Y);
            Console.Write("═");
        }
        for(int i = LimiteSuperior.Y; i <= LimiteInferior.Y; i++)
        {
            Console.SetCursorPosition(LimiteSuperior.X,i);
            Console.Write("║");
            Console.SetCursorPosition(LimiteInferior.X,i);
            Console.Write("║");
        }

        Console.SetCursorPosition(LimiteSuperior.X,LimiteSuperior.Y);
        Console.Write("╔");
        Console.SetCursorPosition(LimiteSuperior.X,LimiteInferior.Y);
        Console.Write("╚");
        Console.SetCursorPosition(LimiteInferior.X,LimiteSuperior.Y);
        Console.Write("╗");
        Console.SetCursorPosition(LimiteInferior.X,LimiteInferior.Y);
        Console.Write("╝");
    }
    `, 
    language:"c#"
  }
  part7:SectionTutorialCode = {
    parrafo:[`En el archivo `],
    code:`
    Ventana ventana;
    int width = 150;
    int height = 40;
    void Inicar()
    {
        ventana = new Ventana(width, height, ConsoleColor.Black, new Point(10, 2), new Point(width-10, height-2));
        ventana.Initial();
        ventana.DibujarMarco();
    }
    Inicar();   
    Console.ReadKey();
    `,
    language:"c#"
  }
  
  constructor(){
   
  }

}
