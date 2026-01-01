"use client";

import { useState } from "react";
import Link from "next/link";

// Icons
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const TrendUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TrendDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>
);

// Sample financial data
const monthlySummary = {
  revenue: 32500000,
  revenueChange: 15.2,
  cost: 13000000,
  costChange: 8.5,
  grossProfit: 19500000,
  grossMargin: 60,
  operatingExpense: 8500000,
  operatingProfit: 11000000,
  operatingMargin: 33.8,
  netProfit: 9350000,
  netMargin: 28.8
};

const cashFlow = {
  currentBalance: 15420000,
  expectedIncome7Days: 6000000,
  expectedExpense7Days: 6500000,
  expectedBalance30Days: 14920000
};

const salesByChannel = [
  { channel: "스마트스토어", sales: 14500000, orders: 485, percentage: 44.6, color: "#10b981" },
  { channel: "쿠팡", sales: 12000000, orders: 380, percentage: 36.9, color: "#0064FF" },
  { channel: "자사몰", sales: 4500000, orders: 120, percentage: 13.8, color: "#8b5cf6" },
  { channel: "기타", sales: 1500000, orders: 45, percentage: 4.6, color: "#f59e0b" }
];

const recentTransactions = [
  { id: 1, date: "2025-01-01", description: "스마트스토어 정산", type: "income", amount: 3200000, channel: "스마트스토어" },
  { id: 2, date: "2025-01-01", description: "쿠팡 정산", type: "income", amount: 2800000, channel: "쿠팡" },
  { id: 3, date: "2024-12-30", description: "OEM 잔금 결제", type: "expense", amount: 5000000, category: "생산비" },
  { id: 4, date: "2024-12-28", description: "네이버 광고비", type: "expense", amount: 800000, category: "마케팅비" },
  { id: 5, date: "2024-12-28", description: "인플루언서 협찬비", type: "expense", amount: 500000, category: "마케팅비" },
  { id: 6, date: "2024-12-27", description: "택배비 정산", type: "expense", amount: 320000, category: "물류비" },
  { id: 7, date: "2024-12-25", description: "스마트스토어 정산", type: "income", amount: 2900000, channel: "스마트스토어" }
];

const upcomingSettlements = [
  { id: 1, channel: "스마트스토어", date: "2025-01-08", amount: 3200000, status: "pending" },
  { id: 2, channel: "쿠팡", date: "2025-01-10", amount: 2800000, status: "pending" },
  { id: 3, channel: "자사몰", date: "2025-01-15", amount: 450000, status: "pending" }
];

const expenseCategories = [
  { category: "생산비 (COGS)", amount: 13000000, percentage: 40, budget: 14000000 },
  { category: "마케팅비", amount: 5500000, percentage: 16.9, budget: 6000000 },
  { category: "물류비", amount: 1800000, percentage: 5.5, budget: 2000000 },
  { category: "인건비", amount: 800000, percentage: 2.5, budget: 1000000 },
  { category: "운영비", amount: 400000, percentage: 1.2, budget: 500000 }
];

const monthlyData = [
  { month: "8월", revenue: 18500000, expense: 12000000, profit: 6500000 },
  { month: "9월", revenue: 22000000, expense: 13500000, profit: 8500000 },
  { month: "10월", revenue: 25000000, expense: 15000000, profit: 10000000 },
  { month: "11월", revenue: 28000000, expense: 16500000, profit: 11500000 },
  { month: "12월", revenue: 32500000, expense: 21500000, profit: 11000000 }
];

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [periodFilter, setPeriodFilter] = useState("month");

  const formatCurrency = (amount: number) => {
    if (amount >= 100000000) {
      return `${(amount / 100000000).toFixed(1)}억`;
    } else if (amount >= 10000) {
      return `${(amount / 10000).toFixed(0)}만`;
    }
    return amount.toLocaleString();
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
              <span className="text-[14px] font-semibold">재무 관리</span>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={periodFilter}
                onChange={(e) => setPeriodFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-[#0064FF]"
              >
                <option value="week">이번 주</option>
                <option value="month">이번 달</option>
                <option value="quarter">이번 분기</option>
                <option value="year">올해</option>
              </select>
              <button className="px-4 py-2 bg-[#0064FF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#0055d4] transition-colors">
                리포트 다운로드
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">월 매출</div>
            <div className="text-[24px] font-bold">₩{formatCurrency(monthlySummary.revenue)}</div>
            <div className="flex items-center gap-1 mt-1 text-green-600">
              <TrendUpIcon />
              <span className="text-[13px]">+{monthlySummary.revenueChange}%</span>
            </div>
          </div>
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">매출원가</div>
            <div className="text-[24px] font-bold">₩{formatCurrency(monthlySummary.cost)}</div>
            <div className="flex items-center gap-1 mt-1 text-red-500">
              <TrendUpIcon />
              <span className="text-[13px]">+{monthlySummary.costChange}%</span>
            </div>
          </div>
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">매출총이익</div>
            <div className="text-[24px] font-bold">₩{formatCurrency(monthlySummary.grossProfit)}</div>
            <div className="text-[13px] text-[#8b95a1] mt-1">마진율 {monthlySummary.grossMargin}%</div>
          </div>
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">영업이익</div>
            <div className="text-[24px] font-bold text-[#0064FF]">₩{formatCurrency(monthlySummary.operatingProfit)}</div>
            <div className="text-[13px] text-[#8b95a1] mt-1">마진율 {monthlySummary.operatingMargin}%</div>
          </div>
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">순이익</div>
            <div className="text-[24px] font-bold text-green-600">₩{formatCurrency(monthlySummary.netProfit)}</div>
            <div className="text-[13px] text-[#8b95a1] mt-1">마진율 {monthlySummary.netMargin}%</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "overview", label: "재무 현황" },
            { id: "cashflow", label: "현금 흐름" },
            { id: "sales", label: "매출 분석" },
            { id: "expenses", label: "비용 관리" },
            { id: "settlements", label: "정산 관리" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-colors ${
                activeTab === tab.id ? "bg-[#0064FF] text-white" : "bg-white text-[#6b7684] hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Monthly Trend Chart */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-6">월별 추이</h3>
              <div className="flex items-end gap-4 h-64">
                {monthlyData.map((data, index) => {
                  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));
                  const revenueHeight = (data.revenue / maxRevenue) * 100;
                  const profitHeight = (data.profit / maxRevenue) * 100;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex items-end justify-center gap-1 h-48">
                        <div
                          className="w-8 bg-[#e8f3ff] rounded-t-lg transition-all hover:bg-[#d0e7ff]"
                          style={{ height: `${revenueHeight}%` }}
                          title={`매출: ₩${data.revenue.toLocaleString()}`}
                        />
                        <div
                          className="w-8 bg-[#0064FF] rounded-t-lg transition-all hover:bg-[#0055d4]"
                          style={{ height: `${profitHeight}%` }}
                          title={`이익: ₩${data.profit.toLocaleString()}`}
                        />
                      </div>
                      <div className="text-[13px] text-[#6b7684]">{data.month}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#e8f3ff] rounded" />
                  <span className="text-[13px] text-[#6b7684]">매출</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#0064FF] rounded" />
                  <span className="text-[13px] text-[#6b7684]">영업이익</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Recent Transactions */}
              <div className="card p-6">
                <h3 className="text-[16px] font-bold mb-4">최근 거래 내역</h3>
                <div className="space-y-3">
                  {recentTransactions.slice(0, 5).map(tx => (
                    <div key={tx.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div>
                        <div className="text-[14px] font-medium">{tx.description}</div>
                        <div className="text-[12px] text-[#8b95a1]">{tx.date}</div>
                      </div>
                      <div className={`text-[15px] font-semibold ${tx.type === "income" ? "text-green-600" : "text-red-500"}`}>
                        {tx.type === "income" ? "+" : "-"}₩{tx.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-[#0064FF] text-[14px] font-medium hover:underline">
                  전체 내역 보기
                </button>
              </div>

              {/* Upcoming Settlements */}
              <div className="card p-6">
                <h3 className="text-[16px] font-bold mb-4">예정된 정산</h3>
                <div className="space-y-3">
                  {upcomingSettlements.map(settlement => (
                    <div key={settlement.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm ${
                          settlement.channel === "스마트스토어" ? "bg-green-500" :
                          settlement.channel === "쿠팡" ? "bg-[#0064FF]" : "bg-purple-500"
                        }`}>
                          {settlement.channel.charAt(0)}
                        </div>
                        <div>
                          <div className="text-[14px] font-medium">{settlement.channel}</div>
                          <div className="text-[12px] text-[#8b95a1]">{settlement.date} 입금 예정</div>
                        </div>
                      </div>
                      <div className="text-[15px] font-semibold text-green-600">
                        +₩{settlement.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-[#e8f3ff] rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] text-[#0064FF]">총 예정 입금액</span>
                    <span className="text-[16px] font-bold text-[#0064FF]">
                      ₩{upcomingSettlements.reduce((sum, s) => sum + s.amount, 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "cashflow" && (
          <div className="space-y-6">
            {/* Cash Flow Summary */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-6">현금 흐름 요약</h3>
              <div className="grid grid-cols-4 gap-6">
                <div className="p-5 bg-[#e8f3ff] rounded-2xl">
                  <div className="text-[13px] text-[#0064FF] mb-2">현재 잔액</div>
                  <div className="text-[28px] font-bold text-[#0064FF]">₩{cashFlow.currentBalance.toLocaleString()}</div>
                </div>
                <div className="p-5 bg-green-50 rounded-2xl">
                  <div className="text-[13px] text-green-600 mb-2">예상 입금 (7일)</div>
                  <div className="text-[28px] font-bold text-green-600">+₩{formatCurrency(cashFlow.expectedIncome7Days)}</div>
                </div>
                <div className="p-5 bg-red-50 rounded-2xl">
                  <div className="text-[13px] text-red-500 mb-2">예상 지출 (7일)</div>
                  <div className="text-[28px] font-bold text-red-500">-₩{formatCurrency(cashFlow.expectedExpense7Days)}</div>
                </div>
                <div className="p-5 bg-gray-100 rounded-2xl">
                  <div className="text-[13px] text-[#6b7684] mb-2">30일 후 예상</div>
                  <div className="text-[28px] font-bold">₩{cashFlow.expectedBalance30Days.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Cash Flow Chart */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-6">30일 현금 흐름 예측</h3>
              <div className="h-64 flex items-center justify-center text-[#8b95a1]">
                {/* Placeholder for chart */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <p className="text-[14px]">현금 흐름 차트가 여기에 표시됩니다</p>
                </div>
              </div>
            </div>

            {/* Runway Analysis */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">자금 소진 분석 (Runway)</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="p-5 border border-gray-200 rounded-xl">
                  <div className="text-[13px] text-[#6b7684] mb-2">월평균 지출</div>
                  <div className="text-[22px] font-bold">₩{formatCurrency(21500000)}</div>
                </div>
                <div className="p-5 border border-gray-200 rounded-xl">
                  <div className="text-[13px] text-[#6b7684] mb-2">예상 런웨이</div>
                  <div className="text-[22px] font-bold text-[#0064FF]">약 4.2개월</div>
                </div>
                <div className="p-5 border border-green-200 bg-green-50 rounded-xl">
                  <div className="text-[13px] text-green-600 mb-2">상태</div>
                  <div className="text-[22px] font-bold text-green-600">🟢 안전</div>
                  <div className="text-[12px] text-green-600 mt-1">3개월 이상 운영 가능</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "sales" && (
          <div className="space-y-6">
            {/* Sales by Channel */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-6">채널별 매출</h3>
              <div className="grid grid-cols-2 gap-8">
                {/* Chart */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {(() => {
                        let currentAngle = 0;
                        return salesByChannel.map((channel, index) => {
                          const angle = (channel.percentage / 100) * 360;
                          const startAngle = currentAngle;
                          currentAngle += angle;

                          const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                          const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                          const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
                          const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);

                          const largeArc = angle > 180 ? 1 : 0;

                          return (
                            <path
                              key={index}
                              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                              fill={channel.color}
                              className="hover:opacity-80 transition-opacity cursor-pointer"
                            />
                          );
                        });
                      })()}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-[20px] font-bold">₩{formatCurrency(monthlySummary.revenue)}</div>
                        <div className="text-[12px] text-[#8b95a1]">총 매출</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Legend */}
                <div className="space-y-4">
                  {salesByChannel.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: channel.color }} />
                        <div>
                          <div className="text-[14px] font-medium">{channel.channel}</div>
                          <div className="text-[12px] text-[#8b95a1]">{channel.orders}건</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[15px] font-semibold">₩{channel.sales.toLocaleString()}</div>
                        <div className="text-[12px] text-[#8b95a1]">{channel.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Performance */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">상품별 매출</h3>
              <div className="space-y-4">
                {[
                  { name: "유산균 프로바이오틱스", sales: 12500000, units: 418, margin: 62 },
                  { name: "비타민C 1000mg", sales: 8500000, units: 427, margin: 58 },
                  { name: "오메가3 피쉬오일", sales: 6200000, units: 173, margin: 55 },
                  { name: "콜라겐 펩타이드", sales: 5300000, units: 124, margin: 65 }
                ].map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-[16px] font-bold text-[#8b95a1]">#{index + 1}</div>
                      <div>
                        <div className="text-[14px] font-medium">{product.name}</div>
                        <div className="text-[12px] text-[#8b95a1]">{product.units}개 판매</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[15px] font-semibold">₩{product.sales.toLocaleString()}</div>
                      <div className="text-[12px] text-green-600">마진 {product.margin}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "expenses" && (
          <div className="space-y-6">
            {/* Expense Categories */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-6">비용 카테고리별 분석</h3>
              <div className="space-y-4">
                {expenseCategories.map((expense, index) => {
                  const usagePercent = (expense.amount / expense.budget) * 100;
                  const isOverBudget = usagePercent > 100;
                  return (
                    <div key={index} className="p-4 border border-gray-100 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-[14px] font-medium">{expense.category}</div>
                          <div className="text-[12px] text-[#8b95a1]">예산: ₩{expense.budget.toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-[16px] font-semibold ${isOverBudget ? 'text-red-500' : ''}`}>
                            ₩{expense.amount.toLocaleString()}
                          </div>
                          <div className="text-[12px] text-[#8b95a1]">매출의 {expense.percentage}%</div>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${isOverBudget ? 'bg-red-500' : usagePercent > 80 ? 'bg-amber-500' : 'bg-[#0064FF]'}`}
                          style={{ width: `${Math.min(usagePercent, 100)}%` }}
                        />
                      </div>
                      <div className="text-[11px] text-[#8b95a1] mt-1 text-right">
                        예산의 {usagePercent.toFixed(0)}% 사용
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ROAS Analysis */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">마케팅 효율 (ROAS)</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-[13px] text-green-600 mb-2">네이버 광고</div>
                  <div className="text-[24px] font-bold text-green-600">380%</div>
                  <div className="text-[12px] text-green-600">지출 ₩800,000 / 매출 ₩3,040,000</div>
                </div>
                <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-[13px] text-green-600 mb-2">인플루언서</div>
                  <div className="text-[24px] font-bold text-green-600">420%</div>
                  <div className="text-[12px] text-green-600">지출 ₩500,000 / 매출 ₩2,100,000</div>
                </div>
                <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="text-[13px] text-amber-600 mb-2">메타 광고</div>
                  <div className="text-[24px] font-bold text-amber-600">180%</div>
                  <div className="text-[12px] text-amber-600">지출 ₩400,000 / 매출 ₩720,000</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settlements" && (
          <div className="space-y-6">
            {/* Settlement Calendar */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">정산 일정</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[14px] font-semibold mb-4 text-[#6b7684]">예정된 입금</h4>
                  <div className="space-y-3">
                    {upcomingSettlements.map(settlement => (
                      <div key={settlement.id} className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <div>
                            <div className="text-[14px] font-medium">{settlement.channel}</div>
                            <div className="text-[12px] text-[#8b95a1]">{settlement.date}</div>
                          </div>
                        </div>
                        <div className="text-[15px] font-semibold text-green-600">
                          +₩{settlement.amount.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold mb-4 text-[#6b7684]">예정된 지출</h4>
                  <div className="space-y-3">
                    {[
                      { description: "OEM 생산비 잔금", date: "2025-01-10", amount: 5000000 },
                      { description: "월 마케팅비", date: "2025-01-15", amount: 1500000 },
                      { description: "물류 정산", date: "2025-01-20", amount: 450000 }
                    ].map((expense, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <div>
                            <div className="text-[14px] font-medium">{expense.description}</div>
                            <div className="text-[12px] text-[#8b95a1]">{expense.date}</div>
                          </div>
                        </div>
                        <div className="text-[15px] font-semibold text-red-500">
                          -₩{expense.amount.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Settlement History */}
            <div className="card p-6">
              <h3 className="text-[16px] font-bold mb-4">정산 내역</h3>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">날짜</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">채널</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">정산 기간</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">매출</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">수수료</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">정산금액</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "2025-01-01", channel: "스마트스토어", period: "12/24-12/30", sales: 3500000, fee: 300000, settlement: 3200000 },
                    { date: "2025-01-01", channel: "쿠팡", period: "12/23-12/29", sales: 3100000, fee: 300000, settlement: 2800000 },
                    { date: "2024-12-25", channel: "스마트스토어", period: "12/17-12/23", sales: 3200000, fee: 300000, settlement: 2900000 }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-5 py-4 text-[14px]">{row.date}</td>
                      <td className="px-5 py-4 text-[14px] font-medium">{row.channel}</td>
                      <td className="px-5 py-4 text-[14px] text-[#8b95a1]">{row.period}</td>
                      <td className="px-5 py-4 text-[14px]">₩{row.sales.toLocaleString()}</td>
                      <td className="px-5 py-4 text-[14px] text-red-500">-₩{row.fee.toLocaleString()}</td>
                      <td className="px-5 py-4 text-[14px] font-semibold text-green-600">₩{row.settlement.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
