import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { TurnamentComponent } from './modules/turnament/turnament.component';
import { PanitiaComponent } from './modules/panitia/panitia.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { TurnamentSepakBolaComponent } from './modules/turnament/turnament-sepak-bola/turnament-sepak-bola.component';
import { TurnamentBolaVoliComponent } from './modules/turnament/turnament-bola-voli/turnament-bola-voli.component';
import { TurnamentSepakTakrawComponent } from './modules/turnament/turnament-sepak-takraw/turnament-sepak-takraw.component';
import { TurnamentBadmintonComponent } from './modules/turnament/turnament-badminton/turnament-badminton.component';
import { TurnamenBalapKarungComponent } from './modules/turnament/turnamen-balap-karung/turnamen-balap-karung.component';
import { TurnamenMakanKerupukComponent } from './modules/turnament/turnamen-makan-kerupuk/turnamen-makan-kerupuk.component';
import { TurnamenBalapKelerengComponent } from './modules/turnament/turnamen-balap-kelereng/turnamen-balap-kelereng.component';
import { AddturnamentComponent } from './modules/turnament/addturnament/addturnament.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreatepanitiaComponent } from './modules/panitia/createpanitia/createpanitia.component';
import { EditparticipantComponent } from './modules/editparticipant/editparticipant.component';
import { TablescoreComponent } from './modules/tablescore/tablescore.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LurahloginComponent } from './modules/lurahlogin/lurahlogin.component';
import { PanitialoginComponent } from './modules/panitialogin/panitialogin.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TurnamentComponent,
    PanitiaComponent,
    ArticlesComponent,
    TurnamentSepakBolaComponent,
    TurnamentBolaVoliComponent,
    TurnamentSepakTakrawComponent,
    TurnamentBadmintonComponent,
    TurnamenBalapKarungComponent,
    TurnamenMakanKerupukComponent,
    TurnamenBalapKelerengComponent,
    AddturnamentComponent,
    CreatepanitiaComponent,
    EditparticipantComponent,
    TablescoreComponent,
    AdminloginComponent,
    LurahloginComponent,
    PanitialoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MDBBootstrapModule.forRoot(),
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
