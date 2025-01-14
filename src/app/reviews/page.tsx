export default function ReviewsPage() {
  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            고객 후기
          </h1>
          <p className="text-center text-gray-600 mb-12">
            실제 고객님들의 생생한 후기를 확인하세요
          </p>
          
          {/* 전체 평점 */}
          <div className="text-center mb-16">
            <div className="text-6xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
            <div className="text-gray-600">총 2,458개 후기</div>
          </div>
          
          {/* 후기 목록 */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 후기 아이템 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-yellow-400 mb-1">★★★★★</div>
                  <div className="font-bold">김*진</div>
                </div>
                <div className="text-gray-500 text-sm">2024.03.15</div>
              </div>
              <h3 className="font-bold mb-2">사용 3개월 만에 무릎 통증이 완화되었어요!</h3>
              <p className="text-gray-600 mb-4">
                평소 무릎 통증이 심했는데, 꾸준히 복용하니 확실히 좋아진 것 같아요.
                등산할 때도 덜 아프고, 계단 오르내리기도 한결 수월해졌습니다.
              </p>
              <div className="bg-gray-100 aspect-video flex items-center justify-center">
                <p className="text-gray-500">후기 이미지</p>
              </div>
            </div>
            
            {/* 후기 아이템 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-yellow-400 mb-1">★★★★★</div>
                  <div className="font-bold">박*수</div>
                </div>
                <div className="text-gray-500 text-sm">2024.03.14</div>
              </div>
              <h3 className="font-bold mb-2">부모님 선물로 드렸어요</h3>
              <p className="text-gray-600">
                부모님이 관절이 안 좋으셔서 구매했는데, 드시고 나서 많이 편해지셨다고 하네요.
                특히 아침에 일어나실 때 뻣뻣한게 많이 좋아지셨다고 합니다.
              </p>
            </div>
            
            {/* 후기 작성 버튼 */}
            <div className="text-center pt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                후기 작성하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 