import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';  // ajusta según la estructura de tu modelo Product

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    id: 1,
    nameOfProduct: '',
    price: 0,
    dueDate: new Date(),
    kindOfProduct: '',
    showUpdateForm: false,
  };
  
  products: any[] = [];
  showForm: boolean = false;
  productTypes: { value: string, label: string }[] = [
    { value: 'B', label: 'Bebidas' },
    { value: 'S', label: 'Snacks' },
    { value: 'F', label: 'Frutas' },
    { value: 'P', label: 'Peluches' },
    { value: 'G', label: 'Golosinas' },
    { value: 'O', label: 'Otro' }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fechProducts();
  }

  createProduct(): void {
    this.productService.createProduct(this.product)
      .subscribe(response => {
        console.log('Producto creado:', response);
        // Aquí podrías redirigir o mostrar un mensaje de éxito
      }, error => {
        console.error('Error al crear el producto:', error);
        // Maneja el error según tus necesidades
      });
  }
  
  fechProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error("Error obteniendo productos", error);
      }
    );
  }
  
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        console.log(`Producto con ID ${id} eliminado.`);
        // Aquí podrías actualizar la lista de productos o mostrar un mensaje de éxito
        this.fechProducts();  // Actualiza la lista después de eliminar
      }, error => {
        console.error(`Error al eliminar el producto con ID ${id}:`, error);
        // Maneja el error según tus necesidades
      });
  }
  
  viewUpdate(product: Product): void{
    product.showUpdateForm = !product.showUpdateForm;
  }
  updateProduct(product: Product): void {
    this.productService.updateProduct(product)
      .subscribe(() => {
        console.log('Producto actualizado exitosamente.');
        this.fechProducts();  // Actualiza la lista después de actualizar el producto
        product.showUpdateForm = false;  // Oculta el formulario después de actualizar
      }, error => {
        console.error('Error al actualizar el producto:', error);
        // Maneja el error según tus necesidades
      });
  }
}

