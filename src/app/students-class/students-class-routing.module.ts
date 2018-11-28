import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AverageComponent } from "./average/average.component";

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'average', component: AverageComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routing)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentsClassRoutingModule{

}