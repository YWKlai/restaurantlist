# 餐廳清單應用程式
這是一個使用 Express.js 和 Handlebars 打造的簡單餐廳清單應用程式，可以顯示餐廳清單、查看詳細資訊，以及搜尋餐廳。


## 環境建置與需求 (Prerequisites)
請確保你已經安裝以下軟體與套件：
- Node.js v14.17.0
- npm v6.14.13


## 安裝與執行步驟 (Installation and Execution)
請依照以下步驟來安裝和執行此專案：
1. 下載此專案到你的本地端
```
git clone https://github.com/YWKlai/restaurantlist
```
2. 進入專案目錄
```
cd restaurant-list
```
3. 安裝必要的套件
```
npm install
```
4. 啟動伺服器
```
npm run dev
```
5. 在瀏覽器中打開 http://localhost:3000，即可使用此應用程式。


## 功能描述 (Features)
- 在首頁顯示所有餐廳的簡單資料（包括餐廳照片、名稱、分類和評分）。
- 點擊餐廳可以查看詳細資訊（包括類別、地址、電話、描述和圖片）。
- 可以透過搜尋餐廳名稱或類別來找到特定的餐廳。


## 資料夾結構
restaurant-list/
├── app.js
├── package.json
├── restaurant.json
├── .gitignore
├── public/
├── views/
│   ├── index.handlebars
│   ├── show.handlebars
│   └── layouts/
│       └── main.handlebars


## 開發環境
- Node.js v14.17.0
- Express v4.17.1
- Express-handlebars v5.3.2
- Body-parser v1.19.0