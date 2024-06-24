import { Component } from '@angular/core';
import { TitleTutorialComponent } from '../title-tutorial/title-tutorial.component';
import { AnuncioVerticalComponent } from '../anuncio-vertical/anuncio-vertical.component';
import { SidebarTutorialComponent } from '../sidebar-tutorial/sidebar-tutorial.component';
import { SidebarTutorial } from '../../../models/tutoriales/sidebar-tutorial';
import { CodigoDesign1Component } from '../../codigo/codigo-design-1/codigo-design-1.component';

@Component({
  selector: 'app-naves-csharp',
  standalone: true,
  imports: [TitleTutorialComponent,AnuncioVerticalComponent,SidebarTutorialComponent,CodigoDesign1Component],
  templateUrl: './naves-csharp.component.html',
  styleUrl: './naves-csharp.component.css'
})

export class NavesCsharpComponent {
  items:SidebarTutorial[]=[
    {
      id:1,
      anchor:"#",
      text:"Configuracion cosnoal"
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
  codeSnippet:string = `
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hola Mundo!");
        }
    }
  `;
  language:string = "c#";
  constructor(){
    this.codeSnippet = this.cleanCodeSnippet(this.codeSnippet);
  }
  cleanCodeSnippet(code: string): string {
    let lines = code.split('\n');

    lines.splice(0, 1); 
    lines.pop();
    lines = lines.map(line => line.replace(/^\s{4}/, ''));

    return lines.join('\n');
  }

}
