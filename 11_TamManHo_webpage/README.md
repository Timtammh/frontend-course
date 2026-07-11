Markdown

# RoamWise - 預算倒推式行程規劃網站 (Final Project Personal)

## 項目簡介
RoamWise 是一個打破傳統、以「預算行先」的旅遊規劃前端網頁。用戶只需輸入預算，網頁便會利用前端邏輯篩選出最適合的旅遊目的地。

## 🗺️ 數據研究 (Research Data)
為了展示明顯的預算階梯，本項目挑選了以下四個截然不同的國家進行數據模擬：

1. **泰國 (低預算)** - 日均消費約 $350 HKD，主打文化與夜市。
2. **日本 (中預算)** - 日均消費約 $1000 HKD，大眾熱門選擇。
3. **瑞士 (高預算)** - 日均消費約 $1800 HKD，主打高質感雜誌風排版。
4. **肯亞 (長途冒險)** - 機票預算高，主打戶外探索體驗。

## 📂 網頁架構 (Project Structure)
項目採用「組件化思維 (Component Mindset)」進行開發，目錄結構如下：

```text
src/
├── data/
│   └── destinations.json  <-- 存放上述 4 國 Research 數據的 JSON 檔
├── components/
│   ├── Navbar.js          <-- 頂部 Logo 同具有小圖標的 Menu
│   ├── BudgetSlider.js    <-- 核心功能：預算動態拉條
│   └── DestinationCard.js <-- 目的地卡片（重複使用，動態渲染 JSON 數據）
└── pages/
    └── Home.js            <-- 首頁（將上面所有的積木拼合而成）


roamwise/
├── .gitignore               <-- 忽略不需要的文件
├── README.md                <-- 你的專業項目說明書
└── src/
    ├── index.html           <-- 網頁主入口
    ├── css/
    │   └── style.css        <-- 主樣式表（建議引入 Google Fonts: Playfair Display 和 Inter）
    ├── js/
    │   ├── main.js          <-- 網頁主邏輯
    │   └── app.js           <-- 負責動態渲染的邏輯
    └── data/
        └── destinations.json <-- 你的 4 國 Research 數據