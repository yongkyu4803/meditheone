export default function ProductPage() {
  return (
    <main className="pt-20">
      {/* 제품 소개 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            소연골콘드로이친 보스웰리아 식이섬유 1200
          </h1>
          
          {/* 제품 이미지 및 기본 정보 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 제품 이미지 영역 */}
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              <p className="text-gray-500">제품 이미지</p>
            </div>
            
            {/* 제품 기본 정보 */}
            <div>
              <div className="bg-blue-50 p-4 mb-4 inline-block">
                <span className="text-blue-600 font-bold">Made in Korea</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">제품 특징</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>관절 건강에 필수적인 소연골콘드로이친 함유</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>염증 완화와 유연성 증가를 돕는 보스웰리아</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>장 건강까지 고려한 식이섬유 포함</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700">
                구매하기
              </button>
            </div>
          </div>
          
          {/* 상세 정보 */}
          <div className="space-y-16">
            {/* 성분 및 효과 */}
            <div>
              <h2 className="text-2xl font-bold mb-8">성분 및 효과</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">소연골콘드로이친</h3>
                  <p>관절 보호 및 윤활 강화에 도움을 주는 핵심 성분</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">보스웰리아</h3>
                  <p>염증 완화와 통증 경감에 효과적인 천연 성분</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">식이섬유</h3>
                  <p>장 건강 개선으로 전신 면역력 강화</p>
                </div>
              </div>
            </div>
            
            {/* 복용 방법 */}
            <div>
              <h2 className="text-2xl font-bold mb-8">복용 방법</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg mb-4">하루 2회, 식후 물과 함께 복용하세요.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>아침, 저녁 식사 후 1정씩 복용</li>
                  <li>충분한 물과 함께 섭취</li>
                  <li>꾸준한 복용 권장</li>
                </ul>
              </div>
            </div>
            
            {/* 안전성 인증 */}
            <div>
              <h2 className="text-2xl font-bold mb-8">품질 인증</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="font-bold mr-2">✓</span>
                    <span>국내 GMP 인증 시설 생산</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold mr-2">✓</span>
                    <span>합성 첨가물 무첨가</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold mr-2">✓</span>
                    <span>식약처 인증 건강기능식품</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 