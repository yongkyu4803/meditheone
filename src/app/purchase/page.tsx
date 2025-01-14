export default function PurchasePage() {
  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            구매하기
          </h1>
          
          {/* 제품 선택 */}
          <div className="max-w-4xl mx-auto">
            {/* 구매 옵션 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* 단일 구매 */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">단일 구매</h3>
                <p className="text-gray-600 mb-4">1회 구매</p>
                <div className="text-3xl font-bold mb-6">59,000원</div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                  선택하기
                </button>
              </div>
              
              {/* 정기 구매 */}
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow border-blue-600">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full inline-block mb-4">
                  10% 할인
                </div>
                <h3 className="text-xl font-bold mb-4">정기 구매</h3>
                <p className="text-gray-600 mb-4">매월 자동 배송</p>
                <div className="text-3xl font-bold mb-6">53,100원</div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                  선택하기
                </button>
              </div>
            </div>
            
            {/* 배송 정보 */}
            <div className="bg-gray-50 p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold mb-6">배송 안내</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="font-bold mr-2">✓</span>
                  <span>전국 무료배송</span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold mr-2">✓</span>
                  <span>오후 3시 이전 주문시 당일 출고</span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold mr-2">✓</span>
                  <span>익일 도착 가능</span>
                </li>
              </ul>
            </div>
            
            {/* 결제 정보 입력 폼 */}
            <div>
              <h2 className="text-2xl font-bold mb-8">결제 정보</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">이름</label>
                  <input type="text" className="w-full border rounded-lg p-3" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">연락처</label>
                  <input type="tel" className="w-full border rounded-lg p-3" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">배송지</label>
                  <input type="text" className="w-full border rounded-lg p-3" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700">
                  결제하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 