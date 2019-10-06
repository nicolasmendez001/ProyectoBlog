import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';
import { MatDialog } from '@angular/material';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { AddComentarioComponent } from '../add-comentario/add-comentario.component';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  respu: any;
  comentarios: any;
  publicaciones: any;

  constructor(private service: Service, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {

    this.service.getData("comentarios").subscribe(
      res => {
        this.comentarios = res;
        console.log(res);
      },
      error => alert("Error")
    );
  }

  private loadPublicaciones() {
    this.service.getData("publicaciones").subscribe(
      res => {
        this.publicaciones = res;
        console.log(res);

      },
      error => alert("Error")
    );
  }


  public add() {
    const dialogRef = this.dialog.open(AddComentarioComponent);
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * edit
   */
  public edit(row: any) {
    const dialogRef = this.dialog.open(AddComentarioComponent, { data: row });
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * delete
   */
  public delete(row: any) {
    console.log("A eliminar: ", row);
    alert(row.id_blog);
    this.service.delete(`{id_blog: ${row.id_blog}}`, "personas").subscribe(
      res => {
        this.respu = res;
        alert(this.respu.message);
        this.ngOnInit();
      },
      error => alert("Error")
    );
  }


}
