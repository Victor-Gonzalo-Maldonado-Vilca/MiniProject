import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';  // Ajusta según la ubicación de tu componente

const routes: Routes = [// Ruta por defecto, redirecciona a create-product
  { path: 'create-product', component: CreateProductComponent },
  // Agrega más rutas según necesites para otros componentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
