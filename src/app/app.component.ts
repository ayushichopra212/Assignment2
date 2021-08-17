import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from './shared/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment2';
  posts: any;
  dataSource = new MatTableDataSource();
  displayedColumns : string[] = ['userId', 'id','title', 'body'];
  paginator: MatPaginator;
  

  constructor(private service: ServicesService ){

  }
  //  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
      console.log(this.posts);
      // this.dataSource = new MatTableDataSource(response)
      this.dataSource = this.posts;
      // this.dataSource.paginator = this.paginator
    })
  }
}
