export interface Language {
    name: string;
    src: string;
    color:string;
}
  
export interface Video {
    id: number;
    title: string;
    src: string;
    description: string;
    languages: Language[];
    tutorial: string;
    youtube: string;
    github: string;
    pathTutorial:String;
  }