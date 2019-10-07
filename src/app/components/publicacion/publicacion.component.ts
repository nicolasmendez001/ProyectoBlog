import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';
import { MatDialog } from '@angular/material';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { AddPublicacionComponent } from '../add-publicacion/add-publicacion.component';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicaciones: any;
  respu: any;

  constructor(private service: Service, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.service.getData("publicaciones").subscribe(
      res => {
        this.publicaciones = res;
        console.log(res);

      },
      error => alert("Error")
    );
  }


  public add() {
    const dialogRef = this.dialog.open(AddPublicacionComponent);
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * edit
   */
  public edit(row: any) {
    const dialogRef = this.dialog.open(AddPublicacionComponent, { data: row });
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * delete
   */
  public delete(row: any) {
    this.service.delete("publicaciones", row.id_publicacion).subscribe(
      res => {
        this.respu = res;
        alert(this.respu.message);
        this.ngOnInit();
      },
      error => alert("Error")
    );
  }
}
