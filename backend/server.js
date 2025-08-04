const express = require('express');
const cors = require('cors');

const app = express();

// 允许跨域请求（前端域名）
app.use(cors({
  origin: ['https://zhenshi-xxxx.zeabur.app', 'http://localhost:5173'] // 开发时用 localhost
}));

// 解析 JSON 请求体
app.use(express.json());

// 挂载路由
app.use('/api/resources', require('./routes/resources'));
app.use('/api/products', require('./routes/products'));
app.use('/api/chat', require('./routes/chat'));

// 根路由
app.get('/', (req, res) => {
  res.json({ message: "真理后端服务运行中！" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});