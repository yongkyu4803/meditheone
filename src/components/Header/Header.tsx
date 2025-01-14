import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">메디더원</Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/products" className="hover:text-blue-600">제품 소개</Link>
            <Link href="/purchase" className="hover:text-blue-600">구매하기</Link>
            <Link href="/reviews" className="hover:text-blue-600">고객 후기</Link>
            <Link href="/faq" className="hover:text-blue-600">자주 묻는 질문</Link>
            <Link href="/customer-service" className="hover:text-blue-600">고객 센터</Link>
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            구매하기
          </button>
        </div>
      </nav>
    </header>
  );
} 