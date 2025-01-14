'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: '홈', href: '/' },
    { name: '제품 소개', href: '/products' },
    { name: '구매하기', href: '/purchase' },
    { name: '고객 후기', href: '/reviews' },
    { name: 'FAQ', href: '/faq' },
    { name: '고객 센터', href: '/customer-service' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-bold">
            메디더원
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              구매하기
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute left-0 right-0 bg-white shadow-lg`}
        >
          <div className="px-4 py-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-600'
                } block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 my-4">
              구매하기
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
} 