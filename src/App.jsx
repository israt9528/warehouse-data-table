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
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

// Required for export functionality
window.JSZip = jszip;
window.pdfMake = pdfMake;

DataTable.use(DT);
DataTable.use(Buttons);
DataTable.use(Responsive);

const App = () => {
  const tableRef = useRef(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);

  useEffect(() => {
    const handleEditClick = (e) => {
      const editBtn = e.target.closest(".action-edit");
      if (!editBtn) return;

      const rowEl = editBtn.closest("tr");
      const rowData = tableRef.current.dt().row(rowEl).data();

      setEditRow(rowData);
      setIsEditOpen(true);
    };

    document.addEventListener("click", handleEditClick);
    return () => document.removeEventListener("click", handleEditClick);
  }, []);

  useEffect(() => {
    const handleDeleteClick = (e) => {
      const deleteBtn = e.target.closest(".action-delete");
      if (!deleteBtn) return;

      const rowEl = deleteBtn.closest("tr");
      const rowData = tableRef.current.dt().row(rowEl).data();

      Swal.fire({
        title: "Are you sure?",
        text: "This record will be permanently deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Deleting row:", rowData);

          // Example (only if you already do this):
          // tableRef.current.dt().row(rowEl).remove().draw();

          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "The record has been deleted.",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
    };

    document.addEventListener("click", handleDeleteClick);
    return () => document.removeEventListener("click", handleDeleteClick);
  }, []);

  const [columnSearch, setColumnSearch] = useState({
    shipment: "",
    customerName: "",
    ctnNo: "",
    goodsName: "",
    expressNo: "",
  });

  useEffect(() => {
    if (!tableRef.current) return;
    const api = tableRef.current.dt();

    api.column(0).search(columnSearch.shipment);
    api.column(1).search(columnSearch.customerName);
    api.column(2).search(columnSearch.ctnNo);
    api.column(3).search(columnSearch.goodsName);
    api.column(8).search(columnSearch.expressNo);

    api.draw();
  }, [columnSearch]);

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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
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
      status: "Pending",
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
      status: "Delivered",
    },
  ];

  // Calculate stats dynamically
  const totalQty = tableData.reduce((acc, item) => {
    const qty = parseFloat(item.goodsQty) || 0;
    return acc + qty;
  }, 0);

  const totalWeight = tableData.reduce((acc, item) => {
    const w = parseFloat(item.weight) || 0;
    return acc + w;
  }, 0);

  const totalDelivered = tableData.filter(
    (item) => item.status === "Delivered"
  ).length;
  const totalPending = tableData.filter(
    (item) => item.status === "Pending"
  ).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-blue-50 to-purple-50 p-4 font-sans">
      <div className="max-w-400 mx-auto">
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
          <div className="h-1 rounded-t-full bg-linear-to-r from-[#0891b2] via-[#008594] to-[#22d3ee]"></div>
          <div className="p-6">
            <div className="my-6 md:mt-0 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center shadow-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {totalQty}
                </div>
                <div className="text-sm text-blue-100">Total Quantity</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center shadow-lg">
                <div className="text-2xl font-bold text-emerald-600">
                  {totalWeight}
                </div>
                <div className="text-sm text-emerald-100">Total Weight</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center shadow-lg">
                <div className="text-2xl font-bold text-green-600">
                  {totalDelivered}
                </div>
                <div className="text-sm text-green-100">Delivered</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center shadow-lg">
                <div className="text-2xl font-bold text-amber-600">
                  {totalPending}
                </div>
                <div className="text-sm text-amber-100">Pending</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="bg-blue-50 rounded-xl border border-gray-200 px-3 py-3 w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1.5">
                  <input
                    type="text"
                    placeholder="Shipment"
                    className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 bg-white
        placeholder-gray-400 focus:outline-none focus:border-blue-300 transition"
                    value={columnSearch.shipment}
                    onChange={(e) =>
                      setColumnSearch({
                        ...columnSearch,
                        shipment: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Customer Mark"
                    className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 bg-white
        placeholder-gray-400 focus:outline-none focus:border-blue-300 transition"
                    value={columnSearch.customerName}
                    onChange={(e) =>
                      setColumnSearch({
                        ...columnSearch,
                        customerName: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="CTN No"
                    className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 bg-white
        placeholder-gray-400 focus:outline-none focus:border-blue-300 transition"
                    value={columnSearch.ctnNo}
                    onChange={(e) =>
                      setColumnSearch({
                        ...columnSearch,
                        ctnNo: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Goods Name"
                    className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 bg-white
        placeholder-gray-400 focus:outline-none focus:border-blue-300 transition"
                    value={columnSearch.goodsName}
                    onChange={(e) =>
                      setColumnSearch({
                        ...columnSearch,
                        goodsName: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Express No"
                    className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 bg-white
        placeholder-gray-400 focus:outline-none focus:border-blue-300 transition"
                    value={columnSearch.expressNo}
                    onChange={(e) =>
                      setColumnSearch({
                        ...columnSearch,
                        expressNo: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <DataTable
              ref={tableRef}
              data={tableData}
              paging
              searching={false}
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
                { title: "UNIT", data: "unit", className: "" },
                { title: "KGS", data: "weight", className: "" },
                {
                  title: "EXPRESS NO",
                  data: "expressNo",
                  className: "font-mono text-sm",
                },
                { title: "CBM", data: "cbm", className: "" },
                {
                  title: "STATUS",
                  data: "status",
                  className: "",
                  render: (data) => {
                    const isDelivered = data === "Delivered";

                    return `
      <span class="
        inline-flex items-center px-2 py-1 rounded-full text-xs
        ${
          isDelivered
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700"
        }
      ">
        ${data}
      </span>
    `;
                  },
                },

                {
                  title: "ACTION",
                  data: null,
                  orderable: false,
                  searchable: false,
                  className: "text-center",
                  render: () => {
                    return `
      <div class="flex items-center justify-center gap-2">
        <button
          class="action-edit inline-flex items-center justify-center w-8 h-8 rounded-md
                 bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
          title="Edit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
          </svg>
        </button>

        <button
          class="action-delete inline-flex items-center justify-center w-8 h-8 rounded-md
                 bg-red-50 text-red-600 hover:bg-red-100 transition"
          title="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862
                 a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0
                 a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4" />
          </svg>
        </button>
      </div>
    `;
                  },
                },
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

      {isEditOpen && editRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              ✏️ Edit Entry Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(editRow).map((key) => (
                <div key={key}>
                  <label className="text-xs font-semibold text-gray-500 uppercase">
                    {key}
                  </label>
                  <input
                    type="text"
                    value={editRow[key]}
                    onChange={(e) =>
                      setEditRow({ ...editRow, [key]: e.target.value })
                    }
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm
                         focus:outline-none focus:border-blue-400"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  console.log("Updated Data:", editRow);
                  setIsEditOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
