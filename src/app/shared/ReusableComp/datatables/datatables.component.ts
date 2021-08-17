import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {  MatTableDataSource } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {
@Input() posts: any;
@Input() dataSource;
@Input() displayedColumns : string[]=[];



@ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
@ViewChild(MatSort,{static: false})sort: MatSort;

  constructor() {
   }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
   

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.posts); 
    // this.dataSource.filterPredicate = function(posts, filter: number): boolean{
    //   return posts.id.toLowerCase().includes(filter) 
    // }
  }
  
//   onFilter(filteredValue){
//   //  console.log(filteredValue);
//    this.dataSource.filter = filteredValue.trim()
//    console.log(this.dataSource.filteredData)
//   // if (filteredValue == 1 || 2 || 3 || 4 || 5){
//   //   console.log(this.dataSource.filteredData)
//   // }
// }
}
