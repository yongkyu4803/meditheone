import HeroSection from '@/components/HeroSection/HeroSection';
import ProductCard from '@/components/ProductCard/ProductCard';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      
      {/* 제품 특징 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            왜 소연골콘드로이친 보스웰리아 식이섬유 1200인가?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">관절 건강의 핵심</h3>
              <p className="text-gray-600">
                관절 건강에 필수적인 소연골콘드로이친 함유
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">염증 완화 효과</h3>
              <p className="text-gray-600">
                염증 완화와 유연성 증가를 돕는 보스웰리아
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">장 건강까지</h3>
              <p className="text-gray-600">
                장 건강까지 고려한 식이섬유 포함
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-blue-600">
              매일 2알로 관절과 건강을 동시에!
            </p>
          </div>
        </div>
      </section>
      
      {/* 제품 구매 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProductCard 
            title="소연골콘드로이친 보스웰리아 식이섬유 1200"
            description="관절 건강을 위한 프리미엄 건강기능식품"
            price={59000}
            imageUrl="/images/product.jpg"
          />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
