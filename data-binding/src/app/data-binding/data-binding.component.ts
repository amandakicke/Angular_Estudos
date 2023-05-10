import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

url: string = 'http://loiane.com';
urlImagem = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fwide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg%3Fw%3D2000&tbnid=x02ED2e9FSww0M&vet=12ahUKEwiz_orztOv-AhUFBbkGHdI7BJsQMygAegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fbeautiful-nature&docid=NABFHYJiiBh6ZM&w=2000&h=1334&q=nature&ved=2ahUKEwiz_orztOv-AhUFBbkGHdI7BJsQMygAegUIARDeAQ';

cursoAngular: boolean = true;

getValor(){
  return 1;
}

getCurtirCurso(){
  return true;
}

}
