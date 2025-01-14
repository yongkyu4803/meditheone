import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ title, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price.toLocaleString()}원</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
} 