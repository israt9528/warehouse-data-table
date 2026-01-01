import React from "react";
import {
  FiPackage,
  FiUsers,
  FiTrendingUp,
  FiHome,
  FiCheckCircle,
  FiUser,
  FiBox,
  FiTruck,
} from "react-icons/fi";

const App = () => {
  // JSON data exactly as per the image
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
    // Special row
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
    // Special row
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

  // Header data
  const headers = [
    { key: "customerName", label: "Customer Mark (用户名)" },
    { key: "ctnNo", label: "CTN NO. (编号)" },
    { key: "goodsName", label: "GOODS NAME (英文名称)" },
    { key: "chineseName", label: "CHINESE NAME (中文名称)" },
    { key: "goodsQty", label: "GOODS QTY" },
    { key: "unit", label: "Unit" },
    { key: "weight", label: "KGS (重量)" },
    { key: "expressNo", label: "EXPRESS NUMBER (快递单号)" },
    { key: "cbm", label: "CBM" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-cyan-50 to-white p-4 md:p-6">
      <div className="max-w-450 mx-auto">
        {/* Table Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-cyan-100">
          {/* Table - Using proper table tags */}
          <div className="max-h-150 overflow-y-auto">
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-linear-to-r from-[#008594] to-[#0e7490]">
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className={`p-4 text-white font-bold text-center border-r border-white/20 last:border-r-0 ${
                        index === 0 ? "text-left" : "text-center"
                      }`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {tableData.map((row, index) => {
                  if (row.isSpecialRow) {
                    // Check if it's green mark
                    const isGreenMark = row.specialText.includes("green mark");
                    return (
                      <tr
                        key={index}
                        className={`border-b ${
                          isGreenMark
                            ? "bg-green-50 border-green-200"
                            : "bg-yellow-50 border-yellow-200"
                        }`}
                      >
                        <td colSpan={headers.length} className="p-4">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-3 w-3 rounded-full ${
                                isGreenMark ? "bg-green-500" : "bg-yellow-500"
                              }`}
                            ></div>
                            <span
                              className={`font-semibold ${
                                isGreenMark
                                  ? "text-green-800"
                                  : "text-yellow-800"
                              }`}
                            >
                              {row.specialText}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-cyan-50/50 transition-colors duration-150 ${
                        index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                      }`}
                    >
                      {/* Customer Name */}
                      <td className="p-4 border-r border-gray-100">
                        <div className="flex items-center gap-2">
                          <FiUser className="h-4 w-4 text-cyan-600" />
                          <span className="font-semibold text-gray-800">
                            {row.customerName}
                          </span>
                        </div>
                      </td>

                      {/* CTN No */}
                      <td className="p-4 border-r border-gray-100 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <span className="font-medium text-gray-700">
                            {row.ctnNo}
                          </span>
                        </div>
                      </td>

                      {/* Goods Name (English) */}
                      <td className="p-4 border-r border-gray-100">
                        <div className="flex items-start gap-2">
                          <FiBox className="h-4 w-4 text-cyan-600 mt-1 shrink-0" />
                          <span className="text-gray-700 wrap-break">
                            {row.goodsName || "-"}
                          </span>
                        </div>
                      </td>

                      {/* Chinese Name */}
                      <td className="p-4 border-r border-gray-100">
                        <span className="text-gray-700">
                          {row.chineseName || "-"}
                        </span>
                      </td>

                      {/* Goods Quantity */}
                      <td className="p-4 border-r border-gray-100 text-center">
                        <span className="font-medium text-gray-700">
                          {row.goodsQty}
                        </span>
                      </td>

                      {/* Unit */}
                      <td className="p-4 border-r border-gray-100 text-center">
                        <span className="font-medium text-gray-700 bg-cyan-100 px-2 py-1 rounded-lg">
                          {row.unit}
                        </span>
                      </td>

                      {/* Weight */}
                      <td className="p-4 border-r border-gray-100 text-center">
                        {row.weight ? (
                          <span className="font-medium text-gray-700">
                            {row.weight} KG
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>

                      {/* Express Number */}
                      <td className="p-4 border-r border-gray-100">
                        <div className="flex items-center gap-2 justify-center">
                          {row.expressNo ? (
                            <>
                              <FiTruck className="h-4 w-4 text-green-600" />
                              <span className="font-medium text-gray-700">
                                {row.expressNo}
                              </span>
                            </>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </div>
                      </td>

                      {/* CBM Column */}
                      <td className="p-4 text-center">
                        <span className="font-medium text-gray-700">
                          {row.cbm || "-"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-linear-to-r from-cyan-50 to-blue-50 p-4 border-t border-cyan-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                  <span className="text-sm text-gray-600">
                    Total Records:{" "}
                    {tableData.filter((item) => !item.isSpecialRow).length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-gray-600">
                    Special Notes:{" "}
                    {tableData.filter((item) => item.isSpecialRow).length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">
                    With Tracking:{" "}
                    {
                      tableData.filter(
                        (item) => !item.isSpecialRow && item.expressNo
                      ).length
                    }
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiCheckCircle className="h-4 w-4 text-green-500" />
                Last Updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
