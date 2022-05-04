import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: any[] = [
    {nomeCurso: 'Sistemas de Informação' , valor: 1, marcado: false},
    {nomeCurso: 'Direito' , valor: 2, marcado: false},
    {nomeCurso: 'Medicina' , valor: 3, marcado: false},
    {nomeCurso: 'Engenharia Civil' , valor: 4, marcado: false},
    {nomeCurso: 'Engenharia de Produção' , valor: 5, marcado: false},
    {nomeCurso: 'Fisioterapia' , valor: 6, marcado: false},
    {nomeCurso: 'Enfermagem' , valor: 7, marcado: false},
    {nomeCurso: 'Educação Física' , valor: 8, marcado: false},
    {nomeCurso: 'BioMedicina' , valor: 9, marcado: false},
    {nomeCurso: 'Agronomia' , valor: 10, marcado: false},
    
  ] 

  constructor() { }

  ngOnInit() {
  }

  exibirCursos(){
    console.log(this.cursos);
  }

}
