
import{RouterModule, Routes} from"@angular/router";
import{RepositoriComponent} from"./repositori/repositori.component";
import{ListOfRepositoriesComponent} from"./list-of-repositories/list-of-repositories.component";




const app_routes: Routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },     
    { path: 'start', component: RepositoriComponent },
    { path: 'list', component: ListOfRepositoriesComponent },
    { path: 'list/:name', component: ListOfRepositoriesComponent }

];

export const app_routing=RouterModule.forRoot(app_routes);