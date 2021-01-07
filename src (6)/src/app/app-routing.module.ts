import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TurnamentComponent } from './modules/panitiamenu/turnament/turnament.component';
import { LoginComponent } from './shared/login/login.component';
import { TurnamentSepakBolaComponent } from './modules/panitiamenu/turnament/turnament-sepak-bola/turnament-sepak-bola.component';
import { TurnamentBolaVoliComponent } from './modules/panitiamenu/turnament/turnament-bola-voli/turnament-bola-voli.component';
import { TurnamentSepakTakrawComponent } from './modules/panitiamenu/turnament/turnament-sepak-takraw/turnament-sepak-takraw.component';
import { TurnamentBadmintonComponent } from './modules/panitiamenu/turnament/turnament-badminton/turnament-badminton.component';
import { TurnamenBalapKarungComponent } from './modules/panitiamenu/turnament/turnamen-balap-karung/turnamen-balap-karung.component';
import { TurnamenMakanKerupukComponent } from './modules/panitiamenu/turnament/turnamen-makan-kerupuk/turnamen-makan-kerupuk.component';
import { TurnamenBalapKelerengComponent } from './modules/panitiamenu/turnament/turnamen-balap-kelereng/turnamen-balap-kelereng.component';
import { AddturnamentComponent } from './modules/panitiamenu/addturnament/addturnament.component';
import { PanitiaComponent } from './modules/panitiamenu/panitia/panitia.component';
import { CreatepanitiaComponent } from './modules/lurahmenu/createpanitia/createpanitia.component';
import { EditparticipantComponent } from './modules/panitiamenu/editparticipant/editparticipant.component';
import { TablescoreComponent } from './modules/panitiamenu/tablescore/tablescore.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListtableComponent } from './modules/lurahmenu/listtable/listtable.component';
import { LurahComponent } from './modules/adminmenu/createlurah/lurah.component';
import { ListturnamenComponent } from './modules/panitiamenu/listturnamen/listturnamen.component';
import { WaitinglistComponent } from './modules/panitiamenu/waitinglist/waitinglist.component';
import { ListlurahComponent } from './modules/adminmenu/listlurah/listlurah.component';
import { AuthGuard } from './auth/auth.guard';
import { Role } from './models/enum.interface';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'listtable',
        component: ListtableComponent,
      },
      {
        path: 'turnament',
        component: TurnamentComponent,
      },
      {
        path: 'turnamentbadminton',
        component: TurnamentBadmintonComponent,
      },
      {
        path: 'turnamentsepakbola',
        component: TurnamentSepakBolaComponent,
      },
      {
        path: 'turnamentsepaktakraw',
        component: TurnamentSepakTakrawComponent,
      },
      {
        path: 'turnamentmakankerupuk',
        component: TurnamenMakanKerupukComponent,
      },
      {
        path: 'turnamentbalapkelereng',
        component: TurnamenBalapKelerengComponent,
      },
      {
        path: 'turnamentmakankerupuk',
        component: TurnamenMakanKerupukComponent,
      },
      {
        path: 'turnamentbolavoli',
        component: TurnamentBolaVoliComponent,
      },
      {
        path: 'turnamenbalapkarung',
        component: TurnamenBalapKarungComponent,
      },
      {
        path: 'addturnament',
        component: AddturnamentComponent,
        canActivate: [AuthGuard],
        data: { role: Role.panitia },
      },
      {
        path: 'createpanitia',
        component: CreatepanitiaComponent,
        canActivate: [AuthGuard],
        data: { role: Role.panitia },
      },
      {
        path: 'editparticipant',
        component: EditparticipantComponent,
        canActivate: [AuthGuard],
        data: { role: Role.panitia },
      },
      {
        path: 'tablescore',
        component: TablescoreComponent,
        canActivate: [AuthGuard],
        data: { role: Role.panitia },
      },
      {
        path: 'lurah',
        component: LurahComponent,
        canActivate: [AuthGuard],
        data: { role: Role.lurah },
      },
      {
        path: 'listtable',
        component: ListtableComponent,
        canActivate: [AuthGuard],
        data: { role: Role.lurah },
      },
      {
        path: 'listturnamen',
        component: ListturnamenComponent,
        canActivate: [AuthGuard],
        data: { role: Role.panitia },
      },
      {
        path: 'waitinglist/:_id',
        component: WaitinglistComponent,
        canActivate: [AuthGuard],
        data: { role: Role.panitia },
      },
      {
        path: 'listlurah',
        component: ListlurahComponent,
      },
      { path: 'panitia', component: PanitiaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
