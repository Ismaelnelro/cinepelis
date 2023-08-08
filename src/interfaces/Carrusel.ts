import { Result } from "./Movies"

export interface CarruselProps {
  styles: string;
  title: string;
  moviList: Result[];
  handdleModal: ()=>void
}


export interface arrowPorps {
  icon: any,
  position: string
}