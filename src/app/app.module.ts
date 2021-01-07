import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { TurnamentComponent } from './modules/panitiamenu/turnament/turnament.component';
import { PanitiaComponent } from './modules/panitiamenu/panitia/panitia.component';
import { TurnamentSepakBolaComponent } from './modules/panitiamenu/turnament/turnament-sepak-bola/turnament-sepak-bola.component';
import { TurnamentBolaVoliComponent } from './modules/panitiamenu/turnament/turnament-bola-voli/turnament-bola-voli.component';
import { TurnamentSepakTakrawComponent } from './modules/panitiamenu/turnament/turnament-sepak-takraw/turnament-sepak-takraw.component';
import { TurnamentBadmintonComponent } from './modules/panitiamenu/turnament/turnament-badminton/turnament-badminton.component';
import { TurnamenBalapKarungComponent } from './modules/panitiamenu/turnament/turnamen-balap-karung/turnamen-balap-karung.component';
import { TurnamenMakanKerupukComponent } from './modules/panitiamenu/turnament/turnamen-makan-kerupuk/turnamen-makan-kerupuk.component';
import { TurnamenBalapKelerengComponent } from './modules/panitiamenu/turnament/turnamen-balap-kelereng/turnamen-balap-kelereng.component';
import { AddturnamentComponent } from './modules/panitiamenu/addturnament/addturnament.component';
import { MatTableModule } from '@angular/material/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreatepanitiaComponent } from './modules/lurahmenu/createpanitia/createpanitia.component';
import { EditparticipantComponent } from './modules/panitiamenu/editparticipant/editparticipant.component';
import { TablescoreComponent } from './modules/panitiamenu/tablescore/tablescore.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatCardModule } from '@angular/material/card';
import { LurahComponent } from './modules/adminmenu/createlurah/lurah.component';
import { ListtableComponent } from './modules/lurahmenu/listtable/listtable.component';
import { ListturnamenComponent } from './modules/panitiamenu/listturnamen/listturnamen.component';
import { WaitinglistComponent } from './modules/panitiamenu/waitinglist/waitinglist.component';
import { ListlurahComponent } from './modules/adminmenu/listlurah/listlurah.component';
import { authIntercept, errorIntercept } from './auth/auth.interceptor';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { ListtableService } from './modules/lurahmenu/listtable/listtable.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DetailteamComponent } from './modules/panitiamenu/addturnament/detailteam/detailteam.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    TurnamentComponent,
    PanitiaComponent,
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
    LurahComponent,
    ListturnamenComponent,
    WaitinglistComponent,
    ListlurahComponent,
    ListtableComponent,
    DetailteamComponent,
  ],
  imports: [
    BrowserModule,
    MatSortModule,
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
    DefaultModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule, 
    AngularEditorModule
  ],
  providers: [authIntercept, errorIntercept,ListtableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
