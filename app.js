// 載入 Express 和其他必要的模組
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

// 載入餐廳 JSON 資料
const restaurants = require('./restaurant.json')

// 設定 Express-handlebars 作為模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定 body-parser 用來解析表單提交資料
app.use(bodyParser.urlencoded({ extended: true }))

// 設定靜態檔案目錄
app.use(express.static('public'))

// 設定伺服器監聽埠
const port = 3000

// 設定首頁路由，顯示所有餐廳
app.get('/', (req, res) => {
    res.render('index', { restaurants: restaurants.results })
})

// 設定餐廳詳細資訊路由
app.get('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.results.find(r => r.id.toString() === req.params.id)
    res.render('show', { restaurant })
})

// 設定搜尋功能路由
app.get('/search', (req, res) => {
    const keyword = req.query.keyword.toLowerCase()
    const filteredRestaurants = restaurants.results.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
    })
    res.render('index', { restaurants: filteredRestaurants, keyword: req.query.keyword })
})

// 啟動伺服器，開始監聽
app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})
