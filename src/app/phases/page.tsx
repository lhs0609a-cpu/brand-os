"use client";

import { useState } from "react";
import Link from "next/link";

// Icons
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Phase Data based on the document
const phasesData = [
  {
    id: 1,
    name: "사업 준비",
    description: "브랜드 기반 다지기",
    status: "completed",
    progress: 100,
    tasks: [
      { id: 1, text: "사업자 등록", done: true, required: true },
      { id: 2, text: "통신판매업 신고", done: true, required: true },
      { id: 3, text: "사업용 계좌 개설", done: true, required: true },
      { id: 4, text: "초기 자금 확보 (최소 500만원)", done: true, required: true },
      { id: 5, text: "운영 예산 계획 수립", done: true, required: false },
    ],
    gateConditions: [
      { text: "사업자등록증 발급 완료", met: true },
      { text: "통신판매업 신고 완료", met: true },
      { text: "초기 자금 확보", met: true },
    ]
  },
  {
    id: 2,
    name: "제품 개발",
    description: "시장 조사 및 제품 기획",
    status: "completed",
    progress: 100,
    tasks: [
      { id: 1, text: "시장 조사 & 경쟁 분석", done: true, required: true },
      { id: 2, text: "타겟 고객 정의", done: true, required: true },
      { id: 3, text: "제품 컨셉 캔버스 작성", done: true, required: true },
      { id: 4, text: "USP (차별화 포인트) 정의", done: true, required: true },
      { id: 5, text: "원가 구조 설계", done: true, required: true },
      { id: 6, text: "가격 전략 수립", done: true, required: false },
    ],
    gateConditions: [
      { text: "경쟁사 분석 완료 (최소 5개)", met: true },
      { text: "제품 컨셉 확정", met: true },
      { text: "목표 마진율 50% 이상", met: true },
    ]
  },
  {
    id: 3,
    name: "생산 체계",
    description: "OEM/제조 및 품질 관리",
    status: "current",
    progress: 50,
    tasks: [
      { id: 1, text: "OEM 업체 리스트업 (최소 3곳)", done: true, required: true },
      { id: 2, text: "OEM 업체 비교 및 선정", done: true, required: true },
      { id: 3, text: "샘플 1차 요청 및 검토", done: true, required: true },
      { id: 4, text: "샘플 2차 수정 진행", done: false, required: true, current: true },
      { id: 5, text: "샘플 최종 승인", done: false, required: true },
      { id: 6, text: "OEM 계약서 검토", done: false, required: true, current: true },
      { id: 7, text: "OEM 계약 체결", done: false, required: true },
      { id: 8, text: "패키지 디자인 시안 확정", done: true, required: true },
      { id: 9, text: "인허가 신청 (식약처)", done: false, required: true },
      { id: 10, text: "초도 생산 발주", done: false, required: true },
      { id: 11, text: "물류 체계 확정", done: false, required: true },
    ],
    gateConditions: [
      { text: "생산자 계약 완료", met: false },
      { text: "샘플 품질 승인 (4.0/5.0 이상)", met: false },
      { text: "패키지 디자인 확정", met: true },
      { text: "인허가 승인 완료", met: false },
      { text: "물류 체계 확정", met: false },
    ]
  },
  {
    id: 4,
    name: "런칭 준비",
    description: "채널 셋업 및 마케팅 준비",
    status: "pending",
    progress: 0,
    tasks: [
      { id: 1, text: "스마트스토어 입점", done: false, required: true },
      { id: 2, text: "쿠팡 마켓플레이스 입점", done: false, required: true },
      { id: 3, text: "자사몰 구축", done: false, required: false },
      { id: 4, text: "상세페이지 제작", done: false, required: true },
      { id: 5, text: "상품 촬영 및 이미지 제작", done: false, required: true },
      { id: 6, text: "런칭 마케팅 전략 수립", done: false, required: true },
      { id: 7, text: "인플루언서 리스트업", done: false, required: false },
      { id: 8, text: "초기 리뷰 확보 전략", done: false, required: true },
      { id: 9, text: "CS 대응 매뉴얼 작성", done: false, required: true },
    ],
    gateConditions: [
      { text: "판매 채널 최소 1개 오픈", met: false },
      { text: "상세페이지 완성", met: false },
      { text: "초도 재고 입고 완료", met: false },
      { text: "CS 체계 구축", met: false },
    ]
  },
  {
    id: 5,
    name: "운영",
    description: "본격 판매 및 성장",
    status: "pending",
    progress: 0,
    tasks: [
      { id: 1, text: "일일 매출/주문 모니터링", done: false, required: true },
      { id: 2, text: "재고 관리 시스템 운영", done: false, required: true },
      { id: 3, text: "CS 응대 및 리뷰 관리", done: false, required: true },
      { id: 4, text: "마케팅 캠페인 실행", done: false, required: true },
      { id: 5, text: "경쟁사 모니터링", done: false, required: false },
      { id: 6, text: "월간 손익 분석", done: false, required: true },
      { id: 7, text: "상품 라인업 확장 검토", done: false, required: false },
    ],
    gateConditions: [
      { text: "월 매출 목표 달성", met: false },
      { text: "재구매율 20% 이상", met: false },
      { text: "평점 4.5 이상 유지", met: false },
    ]
  }
];

export default function PhasesPage() {
  const [phases, setPhases] = useState(phasesData);
  const [selectedPhase, setSelectedPhase] = useState(3); // Current phase

  const currentPhase = phases.find(p => p.id === selectedPhase)!;
  const totalProgress = Math.round(phases.reduce((sum, p) => sum + p.progress, 0) / phases.length);

  const toggleTask = (phaseId: number, taskId: number) => {
    setPhases(phases.map(phase => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          tasks: phase.tasks.map(task =>
            task.id === taskId ? { ...task, done: !task.done } : task
          ),
          progress: Math.round(
            (phase.tasks.filter(t => t.id === taskId ? !t.done : t.done).length / phase.tasks.length) * 100
          )
        };
      }
      return phase;
    }));
  };

  const getPhaseStatus = (status: string) => {
    switch (status) {
      case "completed": return { bg: "bg-[#0064FF]", text: "text-white", label: "완료" };
      case "current": return { bg: "bg-[#e8f3ff]", text: "text-[#0064FF]", label: "진행중" };
      default: return { bg: "bg-[#f2f4f6]", text: "text-[#b0b8c1]", label: "대기" };
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-[#6b7684] hover:text-[#191f28] transition-colors">
                <HomeIcon />
                <span className="text-[14px]">대시보드</span>
              </Link>
              <ChevronRightIcon />
              <span className="text-[14px] font-semibold">Phase 관리</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[13px] text-[#6b7684]">전체 진행률</div>
                <div className="text-[20px] font-bold text-[#0064FF]">{totalProgress}%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Phase Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-[18px] font-bold mb-6">브랜드 런칭 로드맵</h2>

          {/* Phase Timeline */}
          <div className="flex items-start gap-2 mb-8">
            {phases.map((phase, index) => {
              const status = getPhaseStatus(phase.status);
              return (
                <div key={phase.id} className="flex items-start flex-1">
                  <div
                    className={`flex-1 cursor-pointer transition-all ${selectedPhase === phase.id ? 'scale-105' : 'hover:scale-102'}`}
                    onClick={() => setSelectedPhase(phase.id)}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full ${status.bg} ${status.text} flex items-center justify-center font-bold text-lg mb-3 ${selectedPhase === phase.id ? 'ring-4 ring-blue-200' : ''}`}>
                        {phase.status === "completed" ? <CheckIcon /> : phase.id}
                      </div>
                      <div className="text-center">
                        <div className={`text-[13px] font-semibold ${phase.status === "current" ? "text-[#0064FF]" : phase.status === "completed" ? "text-[#191f28]" : "text-[#b0b8c1]"}`}>
                          Phase {phase.id}
                        </div>
                        <div className={`text-[14px] font-medium ${selectedPhase === phase.id ? "text-[#191f28]" : "text-[#6b7684]"}`}>
                          {phase.name}
                        </div>
                        <div className="text-[12px] text-[#8b95a1] mt-1">
                          {phase.progress}%
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < phases.length - 1 && (
                    <div className="flex-shrink-0 w-12 h-1 mt-6 mx-1">
                      <div className={`h-full rounded ${phase.status === "completed" ? "bg-[#0064FF]" : "bg-[#e5e8eb]"}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="bg-[#f2f4f6] rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0064FF] to-[#00b3ff] rounded-full transition-all duration-500"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Phase Detail */}
          <div className="col-span-2 space-y-6">
            {/* Current Phase Info */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-semibold ${getPhaseStatus(currentPhase.status).bg} ${getPhaseStatus(currentPhase.status).text}`}>
                      {getPhaseStatus(currentPhase.status).label}
                    </span>
                    <span className="text-[13px] text-[#8b95a1]">Phase {currentPhase.id}</span>
                  </div>
                  <h2 className="text-[22px] font-bold">{currentPhase.name}</h2>
                  <p className="text-[14px] text-[#6b7684] mt-1">{currentPhase.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-[32px] font-bold text-[#0064FF]">{currentPhase.progress}%</div>
                  <div className="text-[13px] text-[#8b95a1]">완료</div>
                </div>
              </div>

              {/* Progress */}
              <div className="bg-[#f2f4f6] rounded-full h-2 mb-6">
                <div
                  className="h-full bg-[#0064FF] rounded-full transition-all"
                  style={{ width: `${currentPhase.progress}%` }}
                />
              </div>

              {/* Task List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[15px] font-semibold">체크리스트</h3>
                  <span className="text-[13px] text-[#8b95a1]">
                    {currentPhase.tasks.filter(t => t.done).length} / {currentPhase.tasks.length} 완료
                  </span>
                </div>
                <div className="space-y-2">
                  {currentPhase.tasks.map(task => (
                    <div
                      key={task.id}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                        task.done ? 'bg-[#f9fafb]' : task.current ? 'bg-[#e8f3ff] border border-[#0064FF]/20' : 'bg-white border border-gray-100 hover:border-gray-200'
                      }`}
                      onClick={() => toggleTask(currentPhase.id, task.id)}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        task.done ? 'bg-[#0064FF]' : 'border-2 border-gray-300'
                      }`}>
                        {task.done && <CheckIcon />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[14px] ${task.done ? 'text-[#b0b8c1] line-through' : 'text-[#191f28]'}`}>
                            {task.text}
                          </span>
                          {task.required && !task.done && (
                            <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[11px] rounded-full">필수</span>
                          )}
                          {task.current && (
                            <span className="px-2 py-0.5 bg-[#0064FF] text-white text-[11px] rounded-full">진행중</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Focus Now */}
            {currentPhase.status === "current" && (
              <div className="card p-6 border-l-4 border-[#0064FF]">
                <h3 className="text-[16px] font-bold mb-4 flex items-center gap-2">
                  <span>🎯</span> 지금 집중할 것
                </h3>
                <div className="space-y-4">
                  {currentPhase.tasks.filter(t => t.current).map((task, index) => (
                    <div key={task.id} className="p-4 bg-[#f9fafb] rounded-xl">
                      <div className="text-[14px] font-semibold mb-2">우선순위 {index + 1}: {task.text}</div>
                      <div className="text-[13px] text-[#6b7684]">
                        현재 상태: {task.text.includes('샘플') ? 'OEM에서 수정 샘플 제작 중' : '법무 검토 대기'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Gate Conditions */}
          <div className="space-y-6">
            {/* Gate Conditions */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">
                Phase {currentPhase.id} → {currentPhase.id + 1} 진입 조건
              </h3>
              <div className="space-y-3">
                {currentPhase.gateConditions.map((condition, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      condition.met ? 'bg-green-500' : 'bg-gray-200'
                    }`}>
                      {condition.met && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <span className="text-[13px] text-red-500 font-medium">[필수]</span>
                      <span className={`text-[14px] ml-1 ${condition.met ? 'text-[#191f28]' : 'text-[#6b7684]'}`}>
                        {condition.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-[#6b7684]">현재 충족</span>
                  <span className="font-semibold">
                    {currentPhase.gateConditions.filter(c => c.met).length} / {currentPhase.gateConditions.length}
                  </span>
                </div>
                <div className="mt-2 bg-[#f2f4f6] rounded-full h-2">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(currentPhase.gateConditions.filter(c => c.met).length / currentPhase.gateConditions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Expected Timeline */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">예상 일정</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#6b7684]">현재 Phase 완료 예정</span>
                  <span className="text-[14px] font-semibold">2025년 1월 20일</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#6b7684]">Phase 4 진입 예정</span>
                  <span className="text-[14px] font-semibold">2025년 1월 21일</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#6b7684]">예상 런칭일</span>
                  <span className="text-[14px] font-semibold text-[#0064FF]">2025년 2월 15일</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">빠른 작업</h3>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-[#0064FF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#0055d4] transition-colors">
                  발주서 작성하기
                </button>
                <button className="w-full py-3 px-4 bg-[#f2f4f6] text-[#333d4b] rounded-xl text-[14px] font-semibold hover:bg-[#e5e8eb] transition-colors">
                  OEM 업체 연락하기
                </button>
                <button className="w-full py-3 px-4 bg-[#f2f4f6] text-[#333d4b] rounded-xl text-[14px] font-semibold hover:bg-[#e5e8eb] transition-colors">
                  샘플 검수 체크리스트
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
