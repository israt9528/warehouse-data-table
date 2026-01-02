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
          ? "bg-yellow-200 text-black font-semibold text-sm px-2 py-1"
          : "bg-green-200 text-black font-semibold text-sm px-2 py-1";

        tr.appendChild(td);
        tbody.insertBefore(tr, tbody.children[special.index]);
      });
    });
  }, [specialRows]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4 text-center">
        Warehouse Incoming Goods Report
      </h1>

      <div className="bg-white p-2 rounded shadow">
        <DataTable
          ref={tableRef}
          data={normalRows}
          paging
          searching
          ordering
          responsive
          dom="Bfrtip"
          buttons={["copy", "csv", "excel", "pdf", "print"]}
          className="display compact stripe w-full text-sm"
          columns={[
            { title: "CUSTOMER MARK", data: "customerName" },
            { title: "CTN NO.", data: "ctnNo" },
            { title: "GOODS NAME", data: "goodsName" },
            { title: "CHINESE NAME", data: "chineseName" },
            { title: "QTY", data: "goodsQty" },
            { title: "UNIT", data: "unit" },
            { title: "KGS", data: "weight" },
            { title: "EXPRESS NO", data: "expressNo" },
            { title: "CBM", data: "cbm" },
          ]}
          createdRow={(row) => {
            row.classList.add("border", "border-gray-400", "text-center");
          }}
          headerCallback={(thead) => {
            thead.querySelector("tr").style.background =
              "linear-gradient(90deg, #1f2937, #374151)";

            thead.querySelectorAll("th").forEach((th) => {
              th.className = `
      text-white
      text-xs
      font-semibold
      uppercase
      tracking-wider
      px-3
      py-2
      border
      border-gray-600
      text-center
      whitespace-nowrap
    `;
            });
          }}
        />
      </div>
    </div>
  );
};

export default App;
