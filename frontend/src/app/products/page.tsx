interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

export default async function Products() {
  const products = await fetch('http://localhost:3000/products');
  const productsData = await products.json();
  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      <ul className="list-disc pl-6 space-y-4">
        {productsData.map((product: Product) => (
          <li key={product.id} className="text-lg">
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-mono">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}