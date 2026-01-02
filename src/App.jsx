import React, { useEffect, useRef } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import Buttons from "datatables.net-buttons";
import ButtonsDT from "datatables.net-buttons-dt";
import Responsive from "datatables.net-responsive-dt";

import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";

import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";

import jszip from "jszip";
import pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";

window.JSZip = jszip;

DataTable.use(DT);
DataTable.use(Buttons);
DataTable.use(ButtonsDT);
DataTable.use(Responsive);

const App = () => {
  const tableRef = useRef(null);

  const tableData = [
    {
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
      isSpecialRow: true,
      specialText:
        "yellow mark customer seed share to pay return goods car charge: 38 RMB",
    },
    {
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
      isSpecialRow: true,
      specialText:
        "green mark customer seed share to pay return goods car charge: 38 RMB",
    },
    {
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

  const normalRows = tableData.filter((row) => !row.isSpecialRow);

  const specialRows = tableData
    .map((row, index) => (row.isSpecialRow ? { ...row, index } : null))
    .filter(Boolean);

  useEffect(() => {
    if (!tableRef.current) return;
    const api = tableRef.current.dt();

    api.on("draw", () => {
      const tbody = api.table().body();
      specialRows.forEach((special) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 9;
        td.innerText = special.specialText;
        td.className = special.specialText.includes("yellow")
          ? "bg-yellow-100 text-yellow-800 font-bold text-xs px-4 py-3 border-y border-yellow-200 uppercase"
          : "bg-green-100 text-green-800 font-bold text-xs px-4 py-3 border-y border-green-200 uppercase";

        tr.appendChild(td);
        if (tbody.children[special.index]) {
          tbody.insertBefore(tr, tbody.children[special.index]);
        }
      });
    });
  }, [specialRows]);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-blue-50 to-purple-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient */}
        <div className="mb-8 bg-linear-to-r from-[#005660] via-[#008594] to-[#01abc9] rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
                📦 Warehouse Incoming Report
              </h1>
              <div className="h-1.5 w-32 bg-linear-to-r from-cyan-400 to-pink-400 mt-4 rounded-full"></div>
              <p className="text-blue-100 mt-4 text-lg">
                Real-time tracking of all incoming shipments and inventory
              </p>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {normalRows.length}
                  </div>
                  <div className="text-sm text-blue-100">Total Items</div>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {specialRows.length}
                  </div>
                  <div className="text-sm text-blue-100">Special Notes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          <div className="h-2 bg-linear-to-r from-[#0891b2] via-[#008594] to-[#22d3ee]"></div>

          {/* Table Content */}
          <div className="p-6">
            {/* Table Header with Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <div className="w-6 h-6 bg-linear-to-r from-blue-500 to-cyan-500 rounded"></div>
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
                {new Date().toLocaleDateString()}{" "}
                {new Date().toLocaleTimeString()}
              </div>
            </div>

            {/* DataTable */}
            <DataTable
              ref={tableRef}
              data={normalRows}
              paging
              searching
              ordering
              responsive
              dom="<'flex flex-col md:flex-row md:items-center justify-between mb-6'Bf>rt<'flex flex-col md:flex-row md:items-center justify-between mt-6'ip>"
              buttons={[
                {
                  extend: "copy",
                  className:
                    "!bg-gradient-to-r !from-slate-700 !to-slate-800 !text-white !border-none !px-5 !py-3 !rounded-lg !text-sm !font-semibold !shadow-md hover:!shadow-lg transition-all duration-200",
                },
                {
                  extend: "excel",
                  className:
                    "!bg-gradient-to-r !from-emerald-500 !to-green-600 !text-white !border-none !px-5 !py-3 !rounded-lg !text-sm !font-semibold !shadow-md hover:!shadow-lg transition-all duration-200",
                },
                {
                  extend: "pdf",
                  className:
                    "!bg-gradient-to-r !from-rose-500 !to-pink-600 !text-white !border-none !px-5 !py-3 !rounded-lg !text-sm !font-semibold !shadow-md hover:!shadow-lg transition-all duration-200",
                },
                {
                  extend: "print",
                  className:
                    "!bg-gradient-to-r !from-sky-500 !to-blue-600 !text-white !border-none !px-5 !py-3 !rounded-lg !text-sm !font-semibold !shadow-md hover:!shadow-lg transition-all duration-200",
                },
              ]}
              className="w-full rounded-xl overflow-hidden"
              columns={[
                {
                  title: "CUSTOMER MARK",
                  data: "customerName",
                  className: "font-medium",
                },
                {
                  title: "CTN NO.",
                  data: "ctnNo",
                  className: "font-mono",
                },
                {
                  title: "GOODS NAME",
                  data: "goodsName",
                  className: "max-w-xs",
                },
                {
                  title: "CHINESE NAME",
                  data: "chineseName",
                },
                {
                  title: "QTY",
                  data: "goodsQty",
                  className: "text-center font-bold",
                },
                {
                  title: "UNIT",
                  data: "unit",
                  className: "text-center",
                },
                {
                  title: "KGS",
                  data: "weight",
                  className: "text-center",
                },
                {
                  title: "EXPRESS NO",
                  data: "expressNo",
                  className: "font-mono text-sm",
                },
                {
                  title: "CBM",
                  data: "cbm",
                  className: "text-center",
                },
              ]}
              createdRow={(row) => {
                row.className =
                  "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 border-b border-gray-100 group";
              }}
              headerCallback={(thead) => {
                const ths = thead.querySelectorAll("th");
                ths.forEach((th) => {
                  // Apply gradient background
                  th.style.setProperty(
                    "background",
                    "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)",
                    "important"
                  );
                  th.style.setProperty("background-image", "none", "important");
                  th.style.setProperty("color", "#ffffff", "important");
                  th.style.setProperty("border", "none", "important");
                  th.style.setProperty(
                    "box-shadow",
                    "0 2px 4px rgba(0,0,0,0.1)",
                    "important"
                  );
                  th.className =
                    "text-xs font-bold uppercase tracking-wider px-6 py-4 border-r border-blue-400/30 first:rounded-tl-xl last:rounded-tr-xl whitespace-nowrap";
                });
              }}
            />
          </div>

          {/* Footer */}
          <div className="bg-linear-to-r from-slate-900 to-gray-900 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span>System Status: Active</span>
                </div>
                <p className="mt-2 text-white/60">
                  Total Records: {normalRows.length} items
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>Warehouse Management System v2.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
