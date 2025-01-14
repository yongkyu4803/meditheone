export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">메디더원</h3>
            <p className="text-gray-600">고객 건강을 최우선으로 생각합니다.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">고객센터</h3>
            <p className="text-gray-600">전화: 1234-5678</p>
            <p className="text-gray-600">이메일: info@medione.com</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">개인정보처리방침</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-blue-600">이용약관</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 