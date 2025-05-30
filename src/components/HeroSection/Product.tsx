import ProductCard from '@/components/ProductCard/ProductCard';

export default function HeroProduct() {
  return (
    <>
      {/* 제품 특징 소개 섹션 */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50 to-white">
        <div className="container mx-auto px-4 animate-fade-in">
          <h2 className="section-title text-center mb-16">
            왜 <span className="gradient-text">소연골콘드로이친 보스웰리아</span><br />
            <span className="text-3xl">식이섬유 1200</span>인가?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-slide-up feature-card">
              <div className="text-4xl mb-6">🦴</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">관절 건강의 핵심</h3>
              <p className="text-gray-600 leading-relaxed">관절 건강에 필수적인 소연골콘드로이친 함유</p>
            </div>
            
            <div className="animate-slide-up feature-card [animation-delay:200ms]">
              <div className="text-4xl mb-6">🌿</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">염증 완화 효과</h3>
              <p className="text-gray-600 leading-relaxed">염증 완화와 유연성 증가를 돕는 보스웰리아</p>
            </div>
            
            <div className="animate-slide-up feature-card [animation-delay:400ms]">
              <div className="text-4xl mb-6">💪</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">장 건강까지</h3>
              <p className="text-gray-600 leading-relaxed">장 건강까지 고려한 식이섬유 포함</p>
            </div>
          </div>
          
          <div className="text-center mt-16 p-8 bg-primary-50 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]">
            <p className="text-3xl font-bold gradient-text mb-4">
              매일 2알로 관절과 건강을 동시에!
            </p>
            <p className="text-gray-600">건강한 삶을 위한 현명한 선택</p>
          </div>
        </div>
      </section>
      
      {/* 제품 카드 섹션 */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4 animate-fade-in">
          <ProductCard 
            title="소연골콘드로이친 보스웰리아 식이섬유 1200"
            description="관절 건강을 위한 프리미엄 건강기능식품"
            price={59000}
            imageUrl="/images/product.jpg"
          />
        </div>
      </section>
    </>
  );
}
