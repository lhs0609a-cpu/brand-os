"use client";

import { useState } from "react";
import Link from "next/link";

// Icons
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const PhaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const InventoryIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const FinanceIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

// Sample Data
const alerts = [
  { id: 1, level: "emergency", message: "유산균 프로바이오틱스 - 3일 후 품절 예상", action: "조치하기" },
  { id: 2, level: "danger", message: "월 현금 잔액이 1개월 운영비 이하입니다", action: "상세보기" },
  { id: 3, level: "warning", message: "경쟁사 A가 15% 가격 인하를 단행했습니다", action: "분석하기" },
];

const inventory = [
  { id: 1, name: "유산균 프로바이오틱스", stock: 85, status: "emergency", daysLeft: 3 },
  { id: 2, name: "비타민C 1000mg", stock: 420, status: "normal", daysLeft: 45 },
  { id: 3, name: "오메가3 피쉬오일", stock: 180, status: "warning", daysLeft: 12 },
  { id: 4, name: "콜라겐 펩타이드", stock: 350, status: "normal", daysLeft: 35 },
];

const todos = [
  { id: 1, text: "유산균 긴급 발주 검토 및 승인", priority: "danger", done: false },
  { id: 2, text: "인플루언서 @beauty_anna 콘텐츠 업로드 확인", priority: "warning", done: false },
  { id: 3, text: "경쟁사 A 가격 인하 대응 전략 회의", priority: "warning", done: false },
  { id: 4, text: "스마트스토어 신상품 상세페이지 최종 검수", priority: "normal", done: true },
  { id: 5, text: "이번 주 리뷰 이벤트 당첨자 선정", priority: "normal", done: false },
];

const schedule = [
  { date: "01/02 (목)", event: "OEM 샘플 입고 예정" },
  { date: "01/05 (일)", event: "인플루언서 협업 콘텐츠 업로드 (3건)" },
  { date: "01/10 (금)", event: "GMP 인증 갱신 마감 D-90" },
  { date: "01/15 (수)", event: "월간 정산 완료 예정" },
];

const phases = [
  { id: 1, name: "사업 준비", status: "completed", progress: 100 },
  { id: 2, name: "제품 개발", status: "completed", progress: 100 },
  { id: 3, name: "생산 체계", status: "current", progress: 50 },
  { id: 4, name: "런칭 준비", status: "pending", progress: 0 },
  { id: 5, name: "운영", status: "pending", progress: 0 },
];

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [todoList, setTodoList] = useState(todos);

  const toggleTodo = (id: number) => {
    setTodoList(todoList.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const getAlertStyle = (level: string) => {
    switch (level) {
      case "emergency": return "bg-gray-900 text-white";
      case "danger": return "bg-red-50 text-red-700 border-l-4 border-red-500";
      case "warning": return "bg-amber-50 text-amber-700 border-l-4 border-amber-500";
      default: return "bg-green-50 text-green-700";
    }
  };

  const getAlertIcon = (level: string) => {
    switch (level) {
      case "emergency": return "⚫";
      case "danger": return "🔴";
      case "warning": return "🟡";
      default: return "🟢";
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "emergency": return "status-emergency";
      case "danger": return "status-danger";
      case "warning": return "status-warning";
      default: return "status-normal";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "emergency": return "품절임박";
      case "danger": return "위험";
      case "warning": return "주의";
      default: return "정상";
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0064FF] flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <div>
              <div className="font-bold text-[15px]">Brand OS</div>
              <div className="text-[12px] text-[#8b95a1]">v2.0</div>
            </div>
          </div>
        </div>

        <nav className="py-4">
          <div className="px-4 mb-2">
            <span className="text-[11px] font-semibold text-[#8b95a1] uppercase tracking-wider">메인</span>
          </div>
          <div
            className={`sidebar-item ${activeMenu === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveMenu("dashboard")}
          >
            <DashboardIcon />
            <span className="text-[14px]">대시보드</span>
          </div>
          <Link
            href="/phases"
            className="sidebar-item"
          >
            <PhaseIcon />
            <span className="text-[14px]">Phase 관리</span>
          </Link>

          <div className="px-4 mb-2 mt-6">
            <span className="text-[11px] font-semibold text-[#8b95a1] uppercase tracking-wider">운영</span>
          </div>
          <Link
            href="/inventory"
            className="sidebar-item"
          >
            <InventoryIcon />
            <span className="text-[14px]">재고 관리</span>
          </Link>
          <Link
            href="/finance"
            className="sidebar-item"
          >
            <FinanceIcon />
            <span className="text-[14px]">재무 관리</span>
          </Link>
          <div
            className={`sidebar-item ${activeMenu === "marketing" ? "active" : ""}`}
            onClick={() => setActiveMenu("marketing")}
          >
            <MarketingIcon />
            <span className="text-[14px]">마케팅</span>
          </div>

          <div className="px-4 mb-2 mt-6">
            <span className="text-[11px] font-semibold text-[#8b95a1] uppercase tracking-wider">설정</span>
          </div>
          <div
            className={`sidebar-item ${activeMenu === "settings" ? "active" : ""}`}
            onClick={() => setActiveMenu("settings")}
          >
            <SettingsIcon />
            <span className="text-[14px]">설정</span>
          </div>
        </nav>

        {/* Current Phase */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="text-[12px] text-[#8b95a1] mb-2">현재 Phase</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#e8f3ff] flex items-center justify-center">
              <span className="text-[#0064FF] font-bold text-sm">3</span>
            </div>
            <div>
              <div className="text-[13px] font-semibold">생산 체계 구축</div>
              <div className="text-[11px] text-[#8b95a1]">50% 완료</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[24px] font-bold">대시보드</h1>
            <p className="text-[14px] text-[#6b7684]">브랜드 운영 현황을 한눈에 확인하세요</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[13px] text-[#6b7684]">오늘</div>
              <div className="text-[15px] font-semibold">2025년 1월 1일</div>
            </div>
          </div>
        </div>

        {/* Alert Center */}
        <div className="card p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🚨</span>
            <h2 className="text-[16px] font-bold">알림 센터</h2>
            <span className="ml-auto text-[13px] text-[#0064FF] cursor-pointer hover:underline">모두 보기</span>
          </div>
          <div className="space-y-3">
            {alerts.map(alert => (
              <div key={alert.id} className={`flex items-center justify-between p-4 rounded-xl ${getAlertStyle(alert.level)}`}>
                <div className="flex items-center gap-3">
                  <span>{getAlertIcon(alert.level)}</span>
                  <span className="text-[14px]">{alert.level === "emergency" ? "[비상]" : alert.level === "danger" ? "[위험]" : "[주의]"} {alert.message}</span>
                </div>
                <button className={`text-[13px] font-medium px-3 py-1.5 rounded-lg ${alert.level === "emergency" ? "bg-white text-gray-900" : "bg-white/80"}`}>
                  {alert.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#e8f3ff] flex items-center justify-center">
                <span>💰</span>
              </div>
              <span className="text-[13px] text-[#6b7684]">오늘 매출</span>
            </div>
            <div className="text-[24px] font-bold">₩1,250,000</div>
            <div className="text-[13px] text-green-600 mt-1">▲ 15% (전일대비)</div>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#fff0e8] flex items-center justify-center">
                <span>📦</span>
              </div>
              <span className="text-[13px] text-[#6b7684]">오늘 주문</span>
            </div>
            <div className="text-[24px] font-bold">42건</div>
            <div className="text-[13px] text-green-600 mt-1">▲ 8% (전일대비)</div>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#f0e8ff] flex items-center justify-center">
                <span>🚚</span>
              </div>
              <span className="text-[13px] text-[#6b7684]">오늘 출고</span>
            </div>
            <div className="text-[24px] font-bold">38건</div>
            <div className="text-[13px] text-green-600 mt-1">▲ 12% (전일대비)</div>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#e8fff0] flex items-center justify-center">
                <span>💬</span>
              </div>
              <span className="text-[13px] text-[#6b7684]">CS 문의</span>
            </div>
            <div className="text-[24px] font-bold">5건</div>
            <div className="text-[13px] text-green-600 mt-1">▼ 20% (전일대비)</div>
          </div>
        </div>

        {/* Phase Progress */}
        <div className="card p-5 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">📍</span>
            <h2 className="text-[16px] font-bold">브랜드 런칭 진행률</h2>
            <span className="ml-2 text-[13px] text-[#0064FF] font-semibold">68%</span>
          </div>
          <div className="flex items-center">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-center flex-1">
                <div className="phase-item">
                  <div className={`phase-circle ${phase.status}`}>
                    {phase.status === "completed" ? <CheckIcon /> : phase.id}
                  </div>
                  <div className="text-center mt-3">
                    <div className={`text-[13px] font-medium ${phase.status === "current" ? "text-[#0064FF]" : phase.status === "completed" ? "text-[#191f28]" : "text-[#b0b8c1]"}`}>
                      {phase.name}
                    </div>
                    <div className="text-[11px] text-[#8b95a1]">
                      {phase.status === "completed" ? "완료" : phase.status === "current" ? "진행중" : "대기"}
                    </div>
                  </div>
                </div>
                {index < phases.length - 1 && (
                  <div className={`phase-line ${phase.status === "completed" ? "completed" : ""}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Inventory Status */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">📦</span>
              <h2 className="text-[16px] font-bold">재고 현황</h2>
              <span className="ml-auto text-[13px] text-[#0064FF] cursor-pointer hover:underline">전체 보기</span>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>제품명</th>
                  <th>현재고</th>
                  <th>상태</th>
                  <th>예상 소진</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map(item => (
                  <tr key={item.id}>
                    <td className="text-[14px] font-medium">{item.name}</td>
                    <td className="text-[14px]">{item.stock}개</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span className={`status-dot ${getStatusStyle(item.status)}`} />
                        <span className="text-[13px]">{getStatusText(item.status)}</span>
                      </div>
                    </td>
                    <td className="text-[14px]">{item.daysLeft}일 후</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cash Flow */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">💰</span>
              <h2 className="text-[16px] font-bold">현금 흐름</h2>
            </div>
            <div className="mb-6">
              <div className="text-[13px] text-[#6b7684] mb-1">현재 잔액</div>
              <div className="text-[28px] font-bold text-[#0064FF]">₩15,420,000</div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] text-[#6b7684]">예상 입금 (7일)</span>
                  <span className="text-[14px] font-semibold text-green-600">+₩6,000,000</span>
                </div>
                <div className="text-[12px] text-[#8b95a1]">
                  스마트스토어 ₩3,200,000 / 쿠팡 ₩2,800,000
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] text-[#6b7684]">예상 지출 (7일)</span>
                  <span className="text-[14px] font-semibold text-red-500">-₩6,500,000</span>
                </div>
                <div className="text-[12px] text-[#8b95a1]">
                  OEM 잔금 ₩5,000,000 / 마케팅 ₩1,500,000
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#6b7684]">30일 후 예상 잔액</span>
                  <span className="text-[16px] font-bold">₩14,920,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Today's Todo */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">✅</span>
              <h2 className="text-[16px] font-bold">오늘 할 일</h2>
              <span className="ml-auto text-[13px] text-[#8b95a1]">{todoList.filter(t => t.done).length}/{todoList.length} 완료</span>
            </div>
            <div>
              {todoList.map(todo => (
                <div key={todo.id} className="checkbox-item" onClick={() => toggleTodo(todo.id)}>
                  <div className={`custom-checkbox ${todo.done ? "checked" : ""}`}>
                    {todo.done && <CheckIcon />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {todo.priority === "danger" && <span className="text-red-500 text-[12px]">🔴 [긴급]</span>}
                      {todo.priority === "warning" && <span className="text-amber-500 text-[12px]">🟡</span>}
                      <span className={`text-[14px] ${todo.done ? "text-[#b0b8c1] line-through" : ""}`}>{todo.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">📅</span>
              <h2 className="text-[16px] font-bold">예정 일정</h2>
            </div>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <div className="text-[13px] font-medium text-[#0064FF] whitespace-nowrap min-w-[80px]">{item.date}</div>
                  <div className="text-[14px]">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
