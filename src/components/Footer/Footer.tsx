export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-orange-100 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-orange-600">MEDITHEONE</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              고객 건강을 최우선으로 생각합니다. 
              고품질의 건강 제품으로 건강한 삶을 지원합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.228-1.667 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.667-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069 3.205 0 3.584.013 4.85.069zM12 0C8.741 0 8.333.014 7.053.07c-2.252.149-3.427 1.69-3.577 3.919-.059 1.266-.07 1.645-.07 4.849 0 3.204.011 3.584.069 4.849.15 2.229 1.325 3.77 3.577 3.919 1.281.057 1.691.069 4.849.069 3.158 0 3.587-.012 4.849-.069 2.253-.149 3.428-1.69 3.577-3.919.058-1.265.069-1.644.069-4.849 0-3.205-.011-3.584-.069-4.849-.149-2.229-1.325-3.77-3.577-3.919-1.28-.058-1.69-.069-4.849-.069z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">📞 고객센터</h3>
            <div className="space-y-2">
              <p className="text-gray-600">전화: <a href="tel:1234-5678" className="text-orange-600 hover:text-orange-700 transition-colors">1234-5678</a></p>
              <p className="text-gray-600">이메일: <a href="mailto:info@medione.com" className="text-orange-600 hover:text-orange-700 transition-colors">info@medione.com</a></p>
              <p className="text-gray-600">운영시간: 평일 09:00 - 18:00</p>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">📄 바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors">개인정보처리방침</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-orange-600 transition-colors">이용약관</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">자주 묻는 질문</a>
              </li>
              <li>
                <a href="/delivery" className="text-gray-600 hover:text-orange-600 transition-colors">배송 안내</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-gray-800">📢 뉴스레터</h3>
            <p className="text-gray-600 text-sm">
              최신 정보와 특별한 프로모션을 받아보세요.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>ⓒ 2025 메디더원. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
} 