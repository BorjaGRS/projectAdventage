import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HeaderComponent } from './components/header/header.component';
import { AltaComponent } from './components/alta/alta.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SubirProductoComponent } from './components/subir-producto/subir-producto.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FichaProductoComponent } from './components/ficha-producto/ficha-producto.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const routes: Route[] = [
  {path: 'mis-productos', component:MisProductosComponent},
  {path: 'fichaProducto', component:FichaProductoComponent},
  {path: 'principal', component:PrincipalComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'subir-producto', component:SubirProductoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'categorias', component:CategoriasComponent},
  {path: 'alta', component:AltaComponent},
  {path: '**', pathMatch:'full',redirectTo:'principal'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasComponent,
    AltaComponent,
    FooterComponent,
    LoginComponent,
    PerfilComponent,
    SubirProductoComponent,
    PrincipalComponent,
    FichaProductoComponent,
    MisProductosComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 