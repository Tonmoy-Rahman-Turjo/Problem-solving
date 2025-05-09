
{
    interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  let maxProduct = products[0];

  for (const product of products) {
    if (product.price > maxProduct.price) {
      maxProduct = product;
    }
  }

  return maxProduct;
}


const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));
}
