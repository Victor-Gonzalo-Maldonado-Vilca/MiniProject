export interface Product {
  id: number;
  nameOfProduct: string;
  price: number;
  dueDate: Date; // Puede ser un objeto Date dependiendo de cómo manejes las fechas
  kindOfProduct: string;
  showUpdateForm: boolean;
}