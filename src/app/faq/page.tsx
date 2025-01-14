export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            자주 묻는 질문
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ 아이템 1 */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                복용 시 주의사항이 있나요?
              </h3>
              <p className="text-gray-600">
                일반적으로 특별한 주의사항은 없으나, 임산부나 수유부, 특정 질환이 있으신 분들은
                섭취 전 의사와 상담을 권장드립니다. 또한 정해진 용량을 준수해주세요.
              </p>
            </div>
            
            {/* FAQ 아이템 2 */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                효과를 보려면 얼마나 복용해야 하나요?
              </h3>
              <p className="text-gray-600">
                개인차가 있을 수 있으나, 보통 2-3개월 정도의 꾸준한 복용을 권장드립니다.
                많은 고객님들이 1개월 차부터 변화를 느끼기 시작했다고 합니다.
              </p>
            </div>
            
            {/* FAQ 아이템 3 */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                배송은 얼마나 걸리나요?
              </h3>
              <p className="text-gray-600">
                오후 3시 이전 주문 시 당일 출고되며, 대부분 익일 수령 가능합니다.
                도서산간 지역은 1-2일 추가될 수 있습니다.
              </p>
            </div>
            
            {/* FAQ 아이템 4 */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                정기구매는 언제든 해지할 수 있나요?
              </h3>
              <p className="text-gray-600">
                네, 마이페이지에서 언제든지 해지 가능합니다.
                다음 결제일 7일 전까지 해지하시면 다음 달 결제가 진행되지 않습니다.
              </p>
            </div>
          </div>
          
          {/* 추가 문의 섹션 */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              더 궁금하신 점이 있으신가요?
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              1:1 문의하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 