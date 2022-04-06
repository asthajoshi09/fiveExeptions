import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { ShowdatalistComponent } from './showdatalist/showdatalist.component';

const routes: Routes = [
  { path: "", component: MyformComponent },
  { path: "myForm", component: MyformComponent },
  { path: "ShowDataList", component: ShowdatalistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
