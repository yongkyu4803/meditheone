export default function CustomerServicePage() {
  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            고객센터
          </h1>

          {/* 연락처 정보 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">전화 상담</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">1234-5678</p>
                <p className="text-gray-600">
                  평일 09:00 - 18:00<br />
                  점심시간 12:00 - 13:00<br />
                  주말 및 공휴일 휴무
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">이메일 문의</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  info@medione.com
                </p>
                <p className="text-gray-600">
                  24시간 접수 가능<br />
                  영업일 기준 24시간 내 답변
                </p>
              </div>
            </div>
          </div>

          {/* 1:1 문의하기 폼 */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">1:1 문의하기</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">이름</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg p-3" 
                  placeholder="이름을 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">연락처</label>
                <input 
                  type="tel" 
                  className="w-full border rounded-lg p-3" 
                  placeholder="연락처를 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">이메일</label>
                <input 
                  type="email" 
                  className="w-full border rounded-lg p-3" 
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">문의 유형</label>
                <select className="w-full border rounded-lg p-3">
                  <option>제품 문의</option>
                  <option>배송 문의</option>
                  <option>결제 문의</option>
                  <option>반품/교환 문의</option>
                  <option>기타 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">문의 내용</label>
                <textarea 
                  className="w-full border rounded-lg p-3 h-32" 
                  placeholder="문의하실 내용을 자세히 적어주세요"
                ></textarea>
              </div>

              <div className="flex items-start mb-4">
                <input 
                  type="checkbox" 
                  className="mt-1 mr-2"
                />
                <label className="text-gray-600 text-sm">
                  개인정보 수집 및 이용에 동의합니다. 
                  수집된 정보는 문의 답변을 위해서만 사용됩니다.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700"
              >
                문의하기
              </button>
            </form>
          </div>

          {/* 자주 찾는 서비스 */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">자주 찾는 서비스</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/faq" className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100">
                <h3 className="font-bold mb-2">자주 묻는 질문</h3>
                <p className="text-gray-600 text-sm">FAQ 바로가기</p>
              </a>
              <a href="/purchase" className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100">
                <h3 className="font-bold mb-2">주문/배송</h3>
                <p className="text-gray-600 text-sm">주문 조회하기</p>
              </a>
              <a href="/reviews" className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100">
                <h3 className="font-bold mb-2">제품 후기</h3>
                <p className="text-gray-600 text-sm">후기 작성하기</p>
              </a>
              <a href="/products" className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100">
                <h3 className="font-bold mb-2">제품 정보</h3>
                <p className="text-gray-600 text-sm">제품 상세보기</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 