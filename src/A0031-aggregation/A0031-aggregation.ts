export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Shirt', 39.9);
const product2 = new Product('Pencil', 19.5);
const product3 = new Product('Pen', 29.9);

const shoppingCart = new ShoppingCart();
shoppingCart.insertProducts(product1, product2, product3);

console.log(shoppingCart.totalValue());
console.log(shoppingCart.quantityProducts());
