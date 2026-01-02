import React, { useEffect, useRef, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import Buttons from "datatables.net-buttons-dt";
import "datatables.net-buttons-dt";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-buttons/js/buttons.colVis";
import Responsive from "datatables.net-responsive-dt";

import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";

import jszip from "jszip";
import pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";

// Required for export functionality
window.JSZip = jszip;
window.pdfMake = pdfMake;

DataTable.use(DT);
DataTable.use(Buttons);
DataTable.use(Responsive);

const App = () => {
  const tableRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const tableData = [
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "501 505",
      goodsName: "COFFEE",
      chineseName: "咖啡",
      goodsQty: "5",
      unit: "PCS",
      weight: "6.5",
      expressNo: "31003470608",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "ADNAN ROOMY",
      ctnNo: "501 507",
      goodsName: "CHAIR UNIQUE HAVE COMPRESSION ROD",
      chineseName: "椅子",
      goodsQty: "1",
      unit: "PCS",
      weight: "5.5",
      expressNo: "4648626022070",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "ABDUI KADER",
      ctnNo: "501 508",
      goodsName: "BATTERY",
      chineseName: "电池",
      goodsQty: "8",
      unit: "PCS",
      weight: "6",
      expressNo: "22736236230",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "ISRAT ENAMUL",
      ctnNo: "501 509",
      goodsName: "TOOTHBRUSH MOLD-SHRINKAGE PREVENTION AGENT",
      chineseName: "牙刷模具-防缩剂",
      goodsQty: "1-1",
      unit: "PCS",
      weight: "189",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SLS OVI",
      ctnNo: "501 510",
      goodsName: "STEERING WHEEL",
      chineseName: "方向盘",
      goodsQty: "1",
      unit: "PCS",
      weight: "7.5",
      expressNo: "6106478936",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SRI COLLINS",
      ctnNo: "501 512",
      goodsName: "COATING",
      chineseName: "涂料",
      goodsQty: "5",
      unit: "PCS",
      weight: "5.5",
      expressNo: "000024646580",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SAIFUL STI",
      ctnNo: "501 514",
      goodsName: "",
      chineseName: "",
      goodsQty: "200",
      unit: "PCS",
      weight: "19",
      expressNo: "16826430077",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SAIFUL STI",
      ctnNo: "501 515",
      goodsName: "",
      chineseName: "",
      goodsQty: "100",
      unit: "PCS",
      weight: "5.25",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SAIFUL STI",
      ctnNo: "501 516",
      goodsName: "SMART WATCH",
      chineseName: "智能手表",
      goodsQty: "400",
      unit: "PCS",
      weight: "10.3",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SAIFUL STI",
      ctnNo: "501 517",
      goodsName: "",
      chineseName: "",
      goodsQty: "400",
      unit: "PCS",
      weight: "15.5",
      expressNo: "90043441013",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SAIFUL STI",
      ctnNo: "501 518",
      goodsName: "",
      chineseName: "",
      goodsQty: "200",
      unit: "PCS",
      weight: "8.5",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SAIFUL STI",
      ctnNo: "501 519",
      goodsName: "LED LIGHT WITH BATTERY",
      chineseName: "LED灯",
      goodsQty: "100",
      unit: "PCS",
      weight: "6.35",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SOHEL ORNOB",
      ctnNo: "501 521",
      goodsName: "",
      chineseName: "",
      goodsQty: "15",
      unit: "PCS",
      weight: "11.5",
      expressNo: "7895539075189",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "NEHA TIME",
      ctnNo: "501 523",
      goodsName: "",
      chineseName: "",
      goodsQty: "100",
      unit: "PCS",
      weight: "17",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "NEHA TIME",
      ctnNo: "501 524",
      goodsName: "SMART WATCH",
      chineseName: "智能手表",
      goodsQty: "100",
      unit: "PCS",
      weight: "11",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "NEHA TIME",
      ctnNo: "501 525",
      goodsName: "",
      chineseName: "",
      goodsQty: "100",
      unit: "PCS",
      weight: "18",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "GTEK SALIM",
      ctnNo: "501 526",
      goodsName: "HEADPHONE",
      chineseName: "耳机",
      goodsQty: "10",
      unit: "PCS",
      weight: "16",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "INK BOX",
      chineseName: "墨盒",
      goodsQty: "1",
      unit: "PCS",
      weight: "",
      expressNo: "773388493695419",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "HAIRMASK",
      chineseName: "发膜",
      goodsQty: "2",
      unit: "PCS",
      weight: "",
      expressNo: "4946761800802",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "CLOCK",
      chineseName: "闹钟",
      goodsQty: "10",
      unit: "PCS",
      weight: "",
      expressNo: "49165238239",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "AMAYET SALAR",
      ctnNo: "2ABINA",
      goodsName: "ANEMOMETER",
      chineseName: "风速仪",
      goodsQty: "4",
      unit: "PCS",
      weight: "",
      expressNo: "7733860514745",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "MAHAMMED",
      ctnNo: "2ABINA",
      goodsName: "BLACKHEAD CREAM",
      chineseName: "黑头膏",
      goodsQty: "4",
      unit: "PCS",
      weight: "",
      expressNo: "02524764250",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "LIPSTICK",
      chineseName: "口红",
      goodsQty: "2",
      unit: "PCS",
      weight: "",
      expressNo: "783576548339",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "FOOD",
      chineseName: "食品",
      goodsQty: "10",
      unit: "PCS",
      weight: "",
      expressNo: "46491951645762",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "FAN",
      chineseName: "风扇",
      goodsQty: "1",
      unit: "PCS",
      weight: "",
      expressNo: "7733875829576",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "NADIM ARC RAKIB",
      ctnNo: "2ABINA",
      goodsName: "LIP MASK",
      chineseName: "唇膜",
      goodsQty: "20",
      unit: "PCS",
      weight: "",
      expressNo: "390659361119",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "ARC RAKIB",
      ctnNo: "2ABINA",
      goodsName: "PERFUME",
      chineseName: "香水",
      goodsQty: "1",
      unit: "PCS",
      weight: "",
      expressNo: "31045928991",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "ZABINA",
      ctnNo: "2ABINA",
      goodsName: "AIR-PRESSURE ROD",
      chineseName: "气压棒",
      goodsQty: "1",
      unit: "PCS",
      weight: "",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "MAHAMMED",
      ctnNo: "2ABINA",
      goodsName: "LIP GLOSS",
      chineseName: "唇彩",
      goodsQty: "1",
      unit: "PCS",
      weight: "",
      expressNo: "759090209462",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "MASK",
      chineseName: "面膜",
      goodsQty: "80",
      unit: "PCS",
      weight: "",
      expressNo: "789557867447",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "PERFUME",
      chineseName: "香水",
      goodsQty: "1",
      unit: "PCS",
      weight: "",
      expressNo: "4843201956300",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "PERFUME",
      chineseName: "香水",
      goodsQty: "81",
      unit: "PCS",
      weight: "",
      expressNo: "7895434650500",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "JUBAR KABIN MM01",
      ctnNo: "501 533",
      goodsName: "LIGHT WITH BATTERY",
      chineseName: "灯光",
      goodsQty: "10",
      unit: "PCS",
      weight: "",
      expressNo: "77338758396561",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PARCEL OSMAN",
      ctnNo: "2ABINA",
      goodsName: "SATISFACTION",
      chineseName: "WATCH",
      goodsQty: "70",
      unit: "PCS",
      weight: "15",
      expressNo: "006833585",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PARCEL OSMAN",
      ctnNo: "2ABINA",
      goodsName: "EXPERIENCE",
      chineseName: "耳机",
      goodsQty: "2",
      unit: "PCS",
      weight: "",
      expressNo: "763350807563",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "ZABINA",
      ctnNo: "2ABINA",
      goodsName: "CARPET COFFEE",
      chineseName: "咖啡",
      goodsQty: "2",
      unit: "PCS",
      weight: "7",
      expressNo: "391622146338",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "PURPLE WAVE",
      ctnNo: "2ABINA",
      goodsName: "REPACK CHARGE",
      chineseName: "食品",
      goodsQty: "4-2",
      unit: "PCS",
      weight: "",
      expressNo: "43469105989571",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "SLS OVI",
      ctnNo: "502 284",
      goodsName: "ROLLER LID FOR 2025 AAC TS WITH BATTERY",
      chineseName: "滚轮车载清洁器",
      goodsQty: "1",
      unit: "PCS",
      weight: "50",
      expressNo: "364888899371",
      cbm: "0.20",
    },
    {
      shipment: "",
      customerName: "SRI COLLINS",
      ctnNo: "502 286",
      goodsName: "DEHUMIDIFIER WITH BATTERY",
      chineseName: "除湿机",
      goodsQty: "1",
      unit: "PCS",
      weight: "23.5",
      expressNo: "0099915",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "ABIR",
      ctnNo: "502 288",
      goodsName: "STEERING WHEEL WITH AIRBAG",
      chineseName: "方向盘",
      goodsQty: "1",
      unit: "PCS",
      weight: "5.5",
      expressNo: "",
      cbm: "",
    },
    {
      shipment: "",
      customerName: "JUBAR KABIN MM01",
      ctnNo: "500 298",
      goodsName: "MINING CUP WITH BATTERY",
      chineseName: "杯子",
      goodsQty: "12",
      unit: "PCS",
      weight: "6.5",
      expressNo: "77338512738370",
      cbm: "",
    },
  ];

  // Handle search term changes
  useEffect(() => {
    if (!tableRef.current) return;
    const api = tableRef.current.dt();
    api.search(searchTerm).draw();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-blue-50 to-purple-50 p-4 md:p-8 font-sans">
      <div className="max-w-350 mx-auto">
        <div className="mb-8 bg-linear-to-r from-[#005660] via-[#008594] to-[#01abc9] rounded-2xl shadow-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider">
                📦 Warehouse Incoming Report
              </h1>
              <div className="h-1.5 w-32 bg-linear-to-r from-cyan-400 to-pink-400 mt-4 rounded-full"></div>
              <p className="text-blue-100 mt-4 text-lg">
                Real-time tracking of all incoming shipments and inventory
              </p>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{tableData.length}</div>
                <div className="text-sm text-blue-100">Total Items</div>
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-blue-100">Special Notes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
          <div className="h-2 bg-linear-to-r from-[#0891b2] via-[#008594] to-[#22d3ee]"></div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Incoming Goods Details
                  </h2>
                  <p className="text-sm text-gray-600">
                    Interactive table with export capabilities
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow">
                <span className="font-medium">Last Updated:</span>{" "}
                {new Date().toLocaleString()}
              </div>
            </div>

            <div className="mb-6 relative group">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search across all columns..."
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <DataTable
              ref={tableRef}
              data={tableData}
              paging
              searching={true}
              ordering
              responsive
              options={{
                lengthChange: true, // ✅ enable entries per page
                pageLength: 10, // default rows per page
                lengthMenu: [5, 10, 25, 50, 100],
                dom: '<"flex flex-wrap justify-between items-center mb-4"lB>rtip',
                buttons: [
                  {
                    extend: "copy",
                    text: "📋 Copy",
                    className:
                      "!bg-slate-700 !text-white !rounded-lg !px-4 !py-2 !mr-2 !border-none",
                  },
                  {
                    extend: "excel",
                    text: "📊 Excel",
                    className:
                      "!bg-emerald-600 !text-white !rounded-lg !px-4 !py-2 !mr-2 !border-none",
                  },
                  {
                    extend: "pdf",
                    text: "📄 PDF",
                    className:
                      "!bg-rose-600 !text-white !rounded-lg !px-4 !py-2 !mr-2 !border-none",
                  },
                  {
                    extend: "print",
                    text: "🖨️ Print",
                    className:
                      "!bg-sky-600 !text-white !rounded-lg !px-4 !py-2 !mr-2 !border-none",
                  },
                  {
                    extend: "colvis",
                    text: "👁️ Columns",
                    className:
                      "!bg-purple-600 !text-white !rounded-lg !px-4 !py-2 !border-none",
                  },
                ],
              }}
              columns={[
                {
                  title: "SHIPMENT",
                  data: "shipment",
                  className: "font-medium",
                },
                {
                  title: "CUSTOMER MARK",
                  data: "customerName",
                  className: "font-medium",
                },
                { title: "CTN NO.", data: "ctnNo", className: "font-mono" },
                {
                  title: "GOODS NAME",
                  data: "goodsName",
                  className: "max-w-xs",
                },
                { title: "CHINESE NAME", data: "chineseName" },
                {
                  title: "QTY",
                  data: "goodsQty",
                  className: "text-center font-bold",
                },
                { title: "UNIT", data: "unit", className: "text-center" },
                { title: "KGS", data: "weight", className: "text-center" },
                {
                  title: "EXPRESS NO",
                  data: "expressNo",
                  className: "font-mono text-sm",
                },
                { title: "CBM", data: "cbm", className: "text-center" },
              ]}
              createdRow={(row) => {
                row.className =
                  "hover:bg-blue-50 transition-all duration-200 border-b border-gray-100";
              }}
              initComplete={() => {
                const ths = document.querySelectorAll("thead th");
                ths.forEach((th) => {
                  th.style.background = "#1e3a8a";
                  th.style.color = "#ffffff";
                  th.classList.add(
                    "text-xs",
                    "font-bold",
                    "uppercase",
                    "px-6",
                    "py-4"
                  );
                });
              }}
            />
          </div>
          <div className="bg-gray-900 p-6 text-white/80 text-sm flex justify-between">
            <div>System Status: Active | Total Records: {tableData.length}</div>
            <div>Warehouse Management System v2.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
