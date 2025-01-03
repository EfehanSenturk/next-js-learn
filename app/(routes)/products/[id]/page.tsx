import { products } from "@/constants";
import Image from "next/image";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <p className="text-center text-xl text-red-500">Product not found</p>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        <div>
          <p className="text-xl mb-2">
            Price: <strong>${product.price}</strong>
          </p>
          <p className="text-lg mb-4 line-through text-gray-500">
            MRP: ${product.mrp}
          </p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
