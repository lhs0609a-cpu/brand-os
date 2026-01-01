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

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

// Sample inventory data
const inventoryData = [
  {
    id: 1,
    name: "유산균 프로바이오틱스 30포",
    sku: "PRO-001",
    category: "건강기능식품",
    currentStock: 85,
    safetyStock: 100,
    reorderPoint: 150,
    avgDailySales: 28,
    daysLeft: 3,
    status: "emergency",
    expiryDate: "2025-06-15",
    cost: 12000,
    price: 29900,
    location: "A-1-3"
  },
  {
    id: 2,
    name: "비타민C 1000mg 60정",
    sku: "VIT-001",
    category: "건강기능식품",
    currentStock: 420,
    safetyStock: 100,
    reorderPoint: 200,
    avgDailySales: 9,
    daysLeft: 45,
    status: "normal",
    expiryDate: "2025-12-30",
    cost: 8000,
    price: 19900,
    location: "A-2-1"
  },
  {
    id: 3,
    name: "오메가3 피쉬오일 90캡슐",
    sku: "OMG-001",
    category: "건강기능식품",
    currentStock: 180,
    safetyStock: 100,
    reorderPoint: 200,
    avgDailySales: 15,
    daysLeft: 12,
    status: "warning",
    expiryDate: "2025-09-20",
    cost: 15000,
    price: 35900,
    location: "A-1-5"
  },
  {
    id: 4,
    name: "콜라겐 펩타이드 30포",
    sku: "COL-001",
    category: "건강기능식품",
    currentStock: 350,
    safetyStock: 100,
    reorderPoint: 200,
    avgDailySales: 10,
    daysLeft: 35,
    status: "normal",
    expiryDate: "2025-08-10",
    cost: 18000,
    price: 42900,
    location: "A-2-3"
  },
  {
    id: 5,
    name: "루테인 지아잔틴 60캡슐",
    sku: "LUT-001",
    category: "건강기능식품",
    currentStock: 45,
    safetyStock: 50,
    reorderPoint: 100,
    avgDailySales: 5,
    daysLeft: 9,
    status: "danger",
    expiryDate: "2025-07-25",
    cost: 14000,
    price: 32900,
    location: "A-3-2"
  },
  {
    id: 6,
    name: "마그네슘 400mg 90정",
    sku: "MAG-001",
    category: "건강기능식품",
    currentStock: 280,
    safetyStock: 80,
    reorderPoint: 150,
    avgDailySales: 7,
    daysLeft: 40,
    status: "normal",
    expiryDate: "2026-01-15",
    cost: 9000,
    price: 24900,
    location: "A-2-5"
  }
];

// Sample orders data
const ordersData = [
  {
    id: 1,
    orderNumber: "PO-2025-001",
    product: "유산균 프로바이오틱스 30포",
    quantity: 500,
    orderDate: "2025-01-01",
    expectedDate: "2025-01-15",
    status: "processing",
    supplier: "A제약",
    totalCost: 6000000
  },
  {
    id: 2,
    orderNumber: "PO-2025-002",
    product: "루테인 지아잔틴 60캡슐",
    quantity: 300,
    orderDate: "2024-12-28",
    expectedDate: "2025-01-10",
    status: "shipped",
    supplier: "B바이오",
    totalCost: 4200000
  }
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [activeTab, setActiveTab] = useState("inventory");
  const [showOrderModal, setShowOrderModal] = useState(false);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "emergency": return { bg: "bg-gray-900", text: "text-white", label: "품절임박" };
      case "danger": return { bg: "bg-red-100", text: "text-red-700", label: "위험" };
      case "warning": return { bg: "bg-amber-100", text: "text-amber-700", label: "주의" };
      default: return { bg: "bg-green-100", text: "text-green-700", label: "정상" };
    }
  };

  const getOrderStatus = (status: string) => {
    switch (status) {
      case "pending": return { bg: "bg-gray-100", text: "text-gray-700", label: "대기중" };
      case "processing": return { bg: "bg-blue-100", text: "text-blue-700", label: "처리중" };
      case "shipped": return { bg: "bg-purple-100", text: "text-purple-700", label: "배송중" };
      case "completed": return { bg: "bg-green-100", text: "text-green-700", label: "완료" };
      default: return { bg: "bg-gray-100", text: "text-gray-700", label: status };
    }
  };

  const filteredInventory = inventoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Stats
  const totalProducts = inventoryData.length;
  const lowStockItems = inventoryData.filter(i => i.status === "warning" || i.status === "danger" || i.status === "emergency").length;
  const totalValue = inventoryData.reduce((sum, i) => sum + (i.currentStock * i.cost), 0);
  const pendingOrders = ordersData.filter(o => o.status !== "completed").length;

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
              <span className="text-[14px] font-semibold">재고 관리</span>
            </div>
            <button
              onClick={() => setShowOrderModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#0064FF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#0055d4] transition-colors"
            >
              <PlusIcon />
              발주 등록
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">총 제품 수</div>
            <div className="text-[28px] font-bold">{totalProducts}</div>
            <div className="text-[12px] text-[#8b95a1]">종</div>
          </div>
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">재고 부족 제품</div>
            <div className="text-[28px] font-bold text-red-500">{lowStockItems}</div>
            <div className="text-[12px] text-red-400">즉시 발주 필요</div>
          </div>
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">총 재고 가치</div>
            <div className="text-[28px] font-bold">₩{(totalValue / 10000).toFixed(0)}<span className="text-[16px]">만</span></div>
            <div className="text-[12px] text-[#8b95a1]">원가 기준</div>
          </div>
          <div className="card p-5">
            <div className="text-[13px] text-[#6b7684] mb-2">진행중인 발주</div>
            <div className="text-[28px] font-bold text-[#0064FF]">{pendingOrders}</div>
            <div className="text-[12px] text-[#8b95a1]">건</div>
          </div>
        </div>

        {/* Alerts Section */}
        {lowStockItems > 0 && (
          <div className="card p-5 mb-6 border-l-4 border-red-500 bg-red-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <AlertIcon />
              </div>
              <div>
                <div className="text-[15px] font-semibold text-red-700">재고 부족 알림</div>
                <div className="text-[13px] text-red-600">{lowStockItems}개 제품의 재고가 부족합니다. 발주를 검토해주세요.</div>
              </div>
              <button className="ml-auto px-4 py-2 bg-red-600 text-white rounded-xl text-[13px] font-semibold hover:bg-red-700 transition-colors">
                발주 검토하기
              </button>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("inventory")}
            className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-colors ${
              activeTab === "inventory" ? "bg-[#0064FF] text-white" : "bg-white text-[#6b7684] hover:bg-gray-50"
            }`}
          >
            재고 현황
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-colors ${
              activeTab === "orders" ? "bg-[#0064FF] text-white" : "bg-white text-[#6b7684] hover:bg-gray-50"
            }`}
          >
            발주 관리
            {pendingOrders > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-[11px] rounded-full">{pendingOrders}</span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("expiry")}
            className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-colors ${
              activeTab === "expiry" ? "bg-[#0064FF] text-white" : "bg-white text-[#6b7684] hover:bg-gray-50"
            }`}
          >
            유통기한 관리
          </button>
        </div>

        {activeTab === "inventory" && (
          <div className="card">
            {/* Search and Filter */}
            <div className="p-5 border-b border-gray-100 flex items-center gap-4">
              <div className="flex-1 relative">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="제품명 또는 SKU로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-[#0064FF] focus:ring-2 focus:ring-blue-100"
                  style={{ paddingLeft: '44px' }}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon />
                </div>
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-[#0064FF]"
              >
                <option value="all">전체 상태</option>
                <option value="normal">정상</option>
                <option value="warning">주의</option>
                <option value="danger">위험</option>
                <option value="emergency">품절임박</option>
              </select>
            </div>

            {/* Inventory Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">제품정보</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">현재고</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">안전재고</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">발주점</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">예상 소진</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">상태</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">액션</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInventory.map(item => {
                    const status = getStatusStyle(item.status);
                    return (
                      <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4">
                          <div>
                            <div className="text-[14px] font-medium">{item.name}</div>
                            <div className="text-[12px] text-[#8b95a1]">{item.sku} · {item.location}</div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[15px] font-semibold">{item.currentStock}</div>
                          <div className="text-[12px] text-[#8b95a1]">일평균 {item.avgDailySales}개 판매</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px]">{item.safetyStock}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px]">{item.reorderPoint}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className={`text-[14px] font-medium ${item.daysLeft <= 7 ? 'text-red-600' : item.daysLeft <= 14 ? 'text-amber-600' : ''}`}>
                            {item.daysLeft}일 후
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-[12px] font-semibold ${status.bg} ${status.text}`}>
                            {status.label}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <button className="px-3 py-1.5 bg-[#0064FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#0055d4] transition-colors">
                            발주하기
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="card">
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-[16px] font-bold">발주 목록</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">발주번호</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">제품</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">수량</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">공급업체</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">발주일</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">입고예정일</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">상태</th>
                    <th className="text-left px-5 py-4 text-[13px] font-semibold text-[#6b7684]">금액</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.map(order => {
                    const status = getOrderStatus(order.status);
                    return (
                      <tr key={order.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="text-[14px] font-medium text-[#0064FF]">{order.orderNumber}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px]">{order.product}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px] font-medium">{order.quantity.toLocaleString()}개</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px]">{order.supplier}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px]">{order.orderDate}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px]">{order.expectedDate}</div>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-[12px] font-semibold ${status.bg} ${status.text}`}>
                            {status.label}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[14px] font-medium">₩{order.totalCost.toLocaleString()}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "expiry" && (
          <div className="card p-6">
            <h3 className="text-[16px] font-bold mb-6">유통기한 관리</h3>
            <div className="space-y-4">
              {inventoryData
                .sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime())
                .map(item => {
                  const expiryDate = new Date(item.expiryDate);
                  const today = new Date();
                  const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                  const isUrgent = daysUntilExpiry <= 90;
                  const isWarning = daysUntilExpiry <= 180;

                  return (
                    <div key={item.id} className={`flex items-center justify-between p-4 rounded-xl ${isUrgent ? 'bg-red-50' : isWarning ? 'bg-amber-50' : 'bg-gray-50'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${isUrgent ? 'bg-red-500' : isWarning ? 'bg-amber-500' : 'bg-green-500'}`} />
                        <div>
                          <div className="text-[14px] font-medium">{item.name}</div>
                          <div className="text-[12px] text-[#8b95a1]">현재고: {item.currentStock}개</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-[14px] font-semibold ${isUrgent ? 'text-red-600' : isWarning ? 'text-amber-600' : 'text-green-600'}`}>
                          {item.expiryDate}
                        </div>
                        <div className="text-[12px] text-[#8b95a1]">
                          {daysUntilExpiry}일 남음
                        </div>
                      </div>
                      {isUrgent && (
                        <button className="ml-4 px-3 py-1.5 bg-red-600 text-white rounded-lg text-[13px] font-medium">
                          할인 행사 등록
                        </button>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Inventory Insights */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="text-[16px] font-bold mb-4">자동 발주 추천</h3>
            <div className="space-y-4">
              {inventoryData
                .filter(item => item.currentStock <= item.reorderPoint)
                .map(item => {
                  const recommendedQty = Math.ceil((item.reorderPoint - item.currentStock + (item.avgDailySales * 30)) / 100) * 100;
                  return (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-[14px] font-medium">{item.name}</div>
                        <div className="text-[12px] text-[#8b95a1]">
                          현재고 {item.currentStock}개 → 권장 발주량 <span className="text-[#0064FF] font-semibold">{recommendedQty}개</span>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-[#0064FF] text-white rounded-lg text-[13px] font-medium hover:bg-[#0055d4] transition-colors">
                        발주서 생성
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-[16px] font-bold mb-4">재고 회전율</h3>
            <div className="space-y-4">
              {inventoryData.map(item => {
                const turnoverRate = (item.avgDailySales * 30) / item.currentStock;
                const turnoverPercent = Math.min(turnoverRate * 100, 100);
                return (
                  <div key={item.id}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px]">{item.name}</span>
                      <span className="text-[13px] font-medium">{turnoverRate.toFixed(1)}회/월</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${turnoverRate >= 1 ? 'bg-green-500' : turnoverRate >= 0.5 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${turnoverPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowOrderModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg" onClick={e => e.stopPropagation()}>
            <h2 className="text-[18px] font-bold mb-6">새 발주 등록</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-[#6b7684] mb-2">제품 선택</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-[#0064FF]">
                  {inventoryData.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#6b7684] mb-2">발주 수량</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-[#0064FF]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#6b7684] mb-2">공급업체</label>
                <input
                  type="text"
                  placeholder="공급업체명"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-[#0064FF]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#6b7684] mb-2">입고 예정일</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-[#0064FF]"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowOrderModal(false)}
                className="flex-1 py-3 bg-gray-100 text-[#333d4b] rounded-xl text-[14px] font-semibold hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                onClick={() => setShowOrderModal(false)}
                className="flex-1 py-3 bg-[#0064FF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#0055d4] transition-colors"
              >
                발주 등록
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
