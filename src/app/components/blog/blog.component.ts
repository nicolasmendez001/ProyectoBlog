import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  respu: any;
  blogs: any;

  constructor(private service: Service, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.service.getData("blogs").subscribe(
      res => {
        this.blogs = res;
        console.log(res);

      },
      error => alert("Error")
    );
  }

  /**
   * publicaciones
   */
  public publicaciones(blog_id) {
    alert(blog_id);
    this.service.getOnlyData(blog_id,"publicaciones").subscribe(
      res => {
        this.blogs = res;
        console.log(res);

      },
      error => alert("Error")
    );
  }


  public add() {
    const dialogRef = this.dialog.open(AddBlogComponent);
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * edit
   */
  public edit(row: any) {
    const dialogRef = this.dialog.open(AddBlogComponent, { data: row });
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  /**
   * delete
   */
  public delete(row: any) {
    this.service.delete("blogs", row.id_blog).subscribe(
      res => {
        this.respu = res;
        alert(this.respu.message);
        this.ngOnInit();
      },
      error => alert("Error")
    );
  }
}
