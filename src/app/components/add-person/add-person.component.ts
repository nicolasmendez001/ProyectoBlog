import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Service } from 'src/app/services/service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  form: FormGroup;
  existPerson = false;

  constructor(private router: Router, private service: Service, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddPersonComponent>, @Inject(MAT_DIALOG_DATA) data) {
   

    if (data != null) {
      this.existPerson = true;
      this.form = this.edit(formBuilder, data);
    } else {
      this.form = this.create(formBuilder);
    }
  }

  edit(formBuilder: FormBuilder, data) {
    return formBuilder.group(
      {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        edad: data.edad,
        genero: data.genero,
        telefono: data.telefono,
        dirrecion: data.dirrecion,
        id_persona: data.id_persona
      }
    );
  }

  create(formBuilder: FormBuilder) {
    return formBuilder.group(
      {
        nombre: new FormControl(),
        apellido: new FormControl(),
        email: new FormControl(),
        edad: new FormControl(),
        genero: new FormControl(),
        telefono: new FormControl(),
        dirrecion: new FormControl(),
        id_persona: this.generateId()
      }
    );
  }

  private generateId() {
    return Math.round(Math.random() * (2000 - 10) + 10);
  }

  ngOnInit() {
  }

  onSubmit() {
    const result = Object.assign({}, this.form.value);
    if (this.existPerson) {
      this.editPerson(result);
    } else {
      this.save(result);
    }
  }

  private editPerson(data) {
    this.service.update(data, "personas").subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
        this.router.navigate(["/personas"]);
      },
      error => alert("Error")
    )
  }

  private save(data) {
    this.service.save(data, "personas").subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
        this.router.navigate(["/personas"]);
      },
      error => alert("Error")
    );
  }
}
