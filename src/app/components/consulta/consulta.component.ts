import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  primero: any;
  segundo: any;
  tercero: any;
  cuarto: any;
  quinto: any;


  constructor(private service: Service) { }

  ngOnInit() {
    this.loadOne();
    this.loadTwo();
    this.loadThree();
    this.loadFive();
  }

  private loadOne() {
    this.service.getConsult("allComments").subscribe(
      res => {
        this.primero = res;
        console.log(res);

      },
      error => alert("Error")
    );
  }

  private loadTwo() {
    this.service.getConsult("blogCate").subscribe(
      res => {
        this.segundo = res;
        console.log(res);

      },
      error => alert("Error")
    );
  }

  private loadThree() {
    this.service.getConsult("numberBlogs").subscribe(
      res => {
        this.tercero = res;
        console.log(res);
      },
      error => alert("Error")
    );
  }

  private loadFour() {
    this.service.getConsult("").subscribe(
      res => {
        this.tercero = res;
        console.log(res);
      },
      error => alert("Error")
    );
  }

  private loadFive() {
    this.service.getConsult("moreFive").subscribe(
      res => {
        this.quinto = res;
        console.log(res);
      },
      error => alert("Error")
    );
  }
}
