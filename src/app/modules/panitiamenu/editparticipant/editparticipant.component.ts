import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import { EditparticipantService } from './editparticipant.service';

export interface dataparticipant {
  name?: string;
  age?: number;
  team?: string;
  game?: string;
}

@Component({
  selector: 'app-editparticipant',
  templateUrl: './editparticipant.component.html',
  styleUrls: ['./editparticipant.component.scss']
})
export class EditparticipantComponent implements OnInit {
  dataSource: MatTableDataSource<dataparticipant>;
  editparticipant: dataparticipant[] = [];
  columns: string[] = ['name', 'age', 'team', 'game', 'actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private editparticipantService: EditparticipantService){
    
  }
ngOnInit(): void {
  this.editparticipantService.getEditparticipant().subscribe(data=>{
    this.editparticipant = data;
    this.dataSource = new MatTableDataSource(this.editparticipant);
    this.dataSource.sort= this.sort;
    this.dataSource.paginator = this.paginator;
  })
}

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

