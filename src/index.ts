import productos from "./products.json";

class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  constructor(nombreLista: string) {
    super(nombreLista);
    productos.forEach((prod) => {
      this.addProduct(prod);
    });
  }

  addProduct(product: Product) {
    this.add(product);
  }

  getProduct(id: number): Product {
    const cosas = this.getCosas();
    return cosas.find((c) => c.id === id);
  }

  removeProduct(id: number): void {
    this.cosas = this.cosas.filter((c) => c.id !== id);
  }

  getSortedByPrice(order: string): Product[] {
    // Implementación del método getSortedByPrice
    const cosasAordenar = [...this.cosas];
    if (order === "asc") {
      return cosasAordenar.sort((c1, c2) => c1.price - c2.price);
    } else {
      return cosasAordenar.sort((c1, c2) => c2.price - c1.price);
    }
  }
}

export { ListaDeProductos, Product };
