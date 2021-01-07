import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator'
import { ListlurahService } from './listlurah.service';

export interface datalurah {
  firstname?: string;
  lastname?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: string;
}

@Component({
  selector: 'app-listlurah',
  templateUrl: './listlurah.component.html',
  styleUrls: ['./listlurah.component.scss']
})
export class ListlurahComponent implements OnInit {
    
    dataSource: MatTableDataSource<datalurah>;
    listlurah: datalurah[] = [];
    columns: string[] = ['firstname', 'lastname', 'email', 'username', 'password', 'role', 'actions'];
    // @ViewChild(MatSort, {static: true}) sort: MatSort;
    // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    
    constructor(private listlurahService: ListlurahService){
    
    }

  ngOnInit(): void {
    this.listlurahService.getListlurah().subscribe(data=>{
      this.listlurah = data;
      this.dataSource = new MatTableDataSource(this.listlurah);
      // this.dataSource.sort= this.sort;
      // this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
