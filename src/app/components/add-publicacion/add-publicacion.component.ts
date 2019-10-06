import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddPersonComponent } from '../add-person/add-person.component';

@Component({
  selector: 'app-add-publicacion',
  templateUrl: './add-publicacion.component.html',
  styleUrls: ['./add-publicacion.component.css']
})
export class AddPublicacionComponent implements OnInit {

  form: FormGroup;
  exist = false;
  collection = "publicaciones";

  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddPersonComponent>, @Inject(MAT_DIALOG_DATA) data) {
    if (data != null) {
      this.exist = true;
      this.form = this.editOpc(formBuilder, data);
    } else {
      this.form = this.create(formBuilder);
    }
  }

  editOpc(formBuilder: FormBuilder, data) {
    return formBuilder.group(
      {
        titulo: data.titulo,
        contenido: data.contenido,
        id_persona: data.id_persona,
        publicaciones: data.publicaciones,
        fecha_publicacion: data.fecha_publicacion,
        id_publicacion: data.id_publicacion
      }
    );
  }

  create(formBuilder: FormBuilder) {
    return formBuilder.group(
      {
        titulo: new FormControl(),
        contenido: new FormControl(),
        id_persona: new FormControl(),
        publicaciones: new FormControl(),
        fecha_publicacion: this.getDate(),
        id_publicacion: this.generateId()
      }
    );
  }

  private getDate() {
    return new Date();
  }

  private generateId() {
    return Math.round(Math.random() * (2000 - 10) + 10);
  }

  ngOnInit() {
  }

  onSubmit() {
    const result = Object.assign({}, this.form.value);
    if (this.exist) {
      this.edit(result);
    } else {
      this.save(result);
    }
  }

  private edit(data) {
    this.service.update(data, this.collection).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
      },
      error => alert("Error")
    )
  }

  private save(data) {
    this.service.save(data, this.collection).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
      },
      error => alert("Error")
    );
  }


}
