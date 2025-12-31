export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#191f28]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0064FF] flex items-center justify-center font-bold text-white text-sm">
              B
            </div>
            <span className="font-bold text-xl">브랜드OS</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[15px] text-[#6b7684]">
            <a href="#features" className="hover:text-[#191f28] transition-colors">기능</a>
            <a href="#pricing" className="hover:text-[#191f28] transition-colors">요금제</a>
            <a href="#about" className="hover:text-[#191f28] transition-colors">소개</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-4 py-2 text-[15px] text-[#6b7684] hover:text-[#191f28] transition-colors">
              로그인
            </button>
            <button className="px-5 py-2.5 text-[15px] font-semibold rounded-xl bg-[#0064FF] text-white hover:bg-[#0055d4] transition-colors">
              시작하기
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-[#e8f3ff] text-[#0064FF]">
            <span className="w-1.5 h-1.5 bg-[#0064FF] rounded-full" />
            새로운 브랜드 경험
          </div>

          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.2] tracking-tight mb-6">
            브랜드를 더 쉽게,
            <br />
            <span className="text-[#0064FF]">더 강력하게</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6b7684] leading-relaxed max-w-2xl mx-auto mb-10">
            AI 기반의 브랜드 관리 플랫폼으로
            <br className="hidden sm:block" />
            누구나 쉽게 브랜드 아이덴티티를 만들고 관리하세요
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-[17px] font-semibold rounded-2xl bg-[#0064FF] text-white hover:bg-[#0055d4] transition-all hover:scale-[1.02]">
              무료로 시작하기
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-[17px] font-semibold rounded-2xl bg-[#f2f4f6] text-[#333d4b] hover:bg-[#e5e8eb] transition-colors">
              데모 보기
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-gray-100">
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#0064FF]">10,000+</div>
              <div className="text-[15px] text-[#8b95a1] mt-1">활성 사용자</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#0064FF]">5,000만+</div>
              <div className="text-[15px] text-[#8b95a1] mt-1">생성된 에셋</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#0064FF]">99.9%</div>
              <div className="text-[15px] text-[#8b95a1] mt-1">가동률</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-bold mb-4">
              브랜드 관리의 모든 것
            </h2>
            <p className="text-lg text-[#6b7684] max-w-xl mx-auto">
              복잡한 브랜드 작업을 간단하게 해결하세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="toss-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#e8f3ff] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#0064FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3">AI 에셋 생성</h3>
              <p className="text-[#6b7684] leading-relaxed">
                로고, 배너, 소셜 미디어 이미지까지 AI가 자동으로 생성해드려요
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="toss-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#fff0e8] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3">스마트 컬러 시스템</h3>
              <p className="text-[#6b7684] leading-relaxed">
                브랜드 성격에 맞는 조화로운 컬러 팔레트를 자동으로 추천해요
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="toss-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#f0e8ff] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3">템플릿 라이브러리</h3>
              <p className="text-[#6b7684] leading-relaxed">
                수천 개의 전문 디자인 템플릿을 바로 사용할 수 있어요
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="toss-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#e8fff0] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3">팀 협업</h3>
              <p className="text-[#6b7684] leading-relaxed">
                실시간 편집과 댓글로 팀원들과 함께 작업하세요
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="toss-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#fff8e8] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3">분석 대시보드</h3>
              <p className="text-[#6b7684] leading-relaxed">
                브랜드 성과와 인사이트를 한눈에 확인하세요
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="toss-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-[#ffe8f0] flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-3">API 연동</h3>
              <p className="text-[#6b7684] leading-relaxed">
                다양한 툴과 연동하여 워크플로우를 자동화하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-bold mb-4">
              심플한 요금제
            </h2>
            <p className="text-lg text-[#6b7684]">
              필요한 만큼만 사용하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="toss-card p-8">
              <div className="text-[15px] font-medium text-[#8b95a1] mb-2">무료</div>
              <div className="text-[36px] font-bold mb-1">₩0</div>
              <div className="text-[15px] text-[#8b95a1] mb-8">영원히 무료</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  월 100개 에셋 생성
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  기본 템플릿
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1명 사용자
                </li>
              </ul>
              <button className="w-full py-4 text-[16px] font-semibold rounded-2xl bg-[#f2f4f6] text-[#333d4b] hover:bg-[#e5e8eb] transition-colors">
                무료로 시작
              </button>
            </div>

            {/* Pro Plan */}
            <div className="toss-card p-8 ring-2 ring-[#0064FF] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0064FF] text-white text-[13px] font-semibold rounded-full">
                인기
              </div>
              <div className="text-[15px] font-medium text-[#0064FF] mb-2">프로</div>
              <div className="text-[36px] font-bold mb-1">₩29,000</div>
              <div className="text-[15px] text-[#8b95a1] mb-8">월 / 사용자당</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  무제한 에셋 생성
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  모든 프리미엄 템플릿
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  팀 협업 기능
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  우선 지원
                </li>
              </ul>
              <button className="w-full py-4 text-[16px] font-semibold rounded-2xl bg-[#0064FF] text-white hover:bg-[#0055d4] transition-colors">
                프로 시작하기
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="toss-card p-8">
              <div className="text-[15px] font-medium text-[#8b95a1] mb-2">엔터프라이즈</div>
              <div className="text-[36px] font-bold mb-1">문의</div>
              <div className="text-[15px] text-[#8b95a1] mb-8">맞춤 견적</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  프로의 모든 기능
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  전용 API
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SSO 연동
                </li>
                <li className="flex items-center gap-3 text-[15px]">
                  <svg className="w-5 h-5 text-[#0064FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  전담 매니저
                </li>
              </ul>
              <button className="w-full py-4 text-[16px] font-semibold rounded-2xl bg-[#f2f4f6] text-[#333d4b] hover:bg-[#e5e8eb] transition-colors">
                영업팀 문의
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-[#6b7684] mb-10">
            5분 만에 브랜드 아이덴티티를 만들 수 있어요
          </p>
          <button className="px-10 py-5 text-[18px] font-semibold rounded-2xl bg-[#0064FF] text-white hover:bg-[#0055d4] transition-all hover:scale-[1.02]">
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#0064FF] flex items-center justify-center font-bold text-white text-sm">
                B
              </div>
              <span className="font-bold text-lg">브랜드OS</span>
            </div>

            <div className="flex items-center gap-8 text-[14px] text-[#8b95a1]">
              <a href="#" className="hover:text-[#191f28] transition-colors">이용약관</a>
              <a href="#" className="hover:text-[#191f28] transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-[#191f28] transition-colors">고객센터</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center md:text-left">
            <p className="text-[13px] text-[#b0b8c1]">
              © 2025 브랜드OS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
