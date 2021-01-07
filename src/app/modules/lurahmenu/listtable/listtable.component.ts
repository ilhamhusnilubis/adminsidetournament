import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import { ListtableService } from './listtable.service';


export interface lispanitaturnamen {
  firstname?: string;
  lastname?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: string;
}
@Component({
  selector: 'app-listtable',
  templateUrl: './listtable.component.html',
  styleUrls: ['./listtable.component.scss']
})
export class ListtableComponent implements OnInit{
    
    dataSource: MatTableDataSource<lispanitaturnamen>;
    listtable: lispanitaturnamen[] = [];
    columns: string[] = ['firstname', 'lastname', 'email', 'username', 'password', 'role', 'actions'];
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    
    constructor(private listtableService: ListtableService){
      
    }
  ngOnInit(): void {
    this.listtableService.getListtable().subscribe(data=>{
      this.listtable = data;
      this.dataSource = new MatTableDataSource(this.listtable);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    })
    
  }

    applyFilter(event) {
      const filterValue = (event.target as HTMLInputElement).value;

      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
