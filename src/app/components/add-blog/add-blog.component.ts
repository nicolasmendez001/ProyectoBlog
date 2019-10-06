import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddPersonComponent } from '../add-person/add-person.component';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  form: FormGroup;
  exist = false;
  collection = "blogs";

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
        categoria: data.categoria,
        administrador_id: data.administrador_id,
        publicaciones: data.publicaciones,
        id_blog: data.id_blog
      }
    );
  }

  create(formBuilder: FormBuilder) {
    return formBuilder.group(
      {
        titulo: new FormControl(),
        categoria: new FormControl(),
        administrador_id: new FormControl(),
        publicaciones: new FormControl(),
        id_blog: this.generateId()
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
