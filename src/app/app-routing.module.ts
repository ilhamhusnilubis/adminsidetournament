import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostComponent } from './modules/post/post.component';
import { TurnamentComponent } from './modules/turnament/turnament.component';
import { LoginComponent } from './shared/login/login.component';
import { TurnamentSepakBolaComponent } from './modules/turnament/turnament-sepak-bola/turnament-sepak-bola.component';
import { TurnamentBolaVoliComponent } from './modules/turnament/turnament-bola-voli/turnament-bola-voli.component';
import { TurnamentSepakTakrawComponent } from './modules/turnament/turnament-sepak-takraw/turnament-sepak-takraw.component';
import { TurnamentBadmintonComponent } from './modules/turnament/turnament-badminton/turnament-badminton.component';
import { TurnamenBalapKarungComponent } from './modules/turnament/turnamen-balap-karung/turnamen-balap-karung.component';
import { TurnamenMakanKerupukComponent } from './modules/turnament/turnamen-makan-kerupuk/turnamen-makan-kerupuk.component';
import { TurnamenBalapKelerengComponent } from './modules/turnament/turnamen-balap-kelereng/turnamen-balap-kelereng.component';
import { AddturnamentComponent } from './modules/turnament/addturnament/addturnament.component';
import { PanitiaComponent } from './modules/panitia/panitia.component';
import { CreatepanitiaComponent } from './modules/panitia/createpanitia/createpanitia.component';
import { EditparticipantComponent } from './modules/editparticipant/editparticipant.component';
import { TablescoreComponent } from './modules/tablescore/tablescore.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TableturnamenComponent } from './modules/tableturnamen/tableturnamen.component';
import { ListpanitiaComponent} from './modules/listpanitia/listpanitia.component';
import { LurahComponent } from './modules/lurahmenu/createlurah/lurah.component';
import { ListturnamenComponent } from './modules/listturnamen/listturnamen.component';
import { WaitinglistComponent } from './modules/waitinglist/waitinglist.component';
import { ListlurahComponent } from './modules/listlurah/listlurah.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'login',component:LoginComponent},
  {path:'tableturnamen',component:TableturnamenComponent},
  


  {path:'',
  component:DefaultComponent,
  children:[{
    path:'dashboard',
    component:DashboardComponent
  }, {
    path:'peserta',
    component:PostComponent
  },{
    path:'turnament',
    component:TurnamentComponent
  },{
    path:'turnamentbadminton',
    component:TurnamentBadmintonComponent
  },{
    path:'turnamentsepakbola',
    component:TurnamentSepakBolaComponent
  },{
    path:'turnamentsepaktakraw',
    component:TurnamentSepakTakrawComponent
  },{
    path:'turnamentmakankerupuk',
    component:TurnamenMakanKerupukComponent
  },{
    path:'turnamentbalapkelereng',
    component:TurnamenBalapKelerengComponent
  },{
    path:'turnamentmakankerupuk',
    component:TurnamenMakanKerupukComponent
  },{
    path:'turnamentbolavoli',
    component:TurnamentBolaVoliComponent
  },{
    path:'turnamenbalapkarung',
    component:TurnamenBalapKarungComponent
  },{
  path:'addturnament',
  component:AddturnamentComponent
},{
  path:'createpanitia',
  component:CreatepanitiaComponent
},{
  path:'editparticipant',
  component:EditparticipantComponent
},{
  path:'tablescore',
  component:TablescoreComponent
},{
  path:'lurah',
  component: LurahComponent
},{
  path:'listpanitia',
  component: ListpanitiaComponent
},{
  path:'listturnamen',
  component: ListturnamenComponent
},{
  path:'waitinglist',
  component: WaitinglistComponent
},{
  path:'listlurah',
  component: ListlurahComponent
},
  { path:'panitia', component:PanitiaComponent}]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
