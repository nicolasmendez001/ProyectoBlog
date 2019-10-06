import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AddPersonComponent } from '../add-person/add-person.component';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: any;
  respu: any;

  constructor(private service: Service, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.service.getData("personas").subscribe(
      res => {
        this.personas = res;
        console.log(res);

      },
      error => alert("Error")
    );
  }

  /**
   * add
   */
  public add() {
    const dialogRef = this.dialog.open(AddPersonComponent);
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * edit
   */
  public edit(row: any) {
    const dialogRef = this.dialog.open(AddPersonComponent, { data: row });
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * delete
   */
  public delete(row: any) {
    console.log("A eliminar: ", row);
    alert(row.id_persona);
    this.service.delete(`{id_persona: ${row.id_persona}}`, "personas").subscribe(
      res => {
        this.respu = res;
        alert(this.respu.message);
        this.ngOnInit();
      },
      error => alert("Error")
    );
  }

}
