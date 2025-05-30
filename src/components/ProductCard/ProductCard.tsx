import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ title, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-hover transition-all duration-300">
      <div className="relative h-64 group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">판매가</span>
            <span className="text-2xl font-bold text-primary-600">{price.toLocaleString()}원</span>
          </div>
          <button className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}