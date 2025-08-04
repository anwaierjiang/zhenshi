const express = require('express');
const router = express.Router();

let products = [
  {
    id: 1,
    name: "网页生成器 Pro",
    description: "无需代码，输入需求即可生成专属网页。",
    price: 99,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "考研资料整理工具",
    description: "自动归类、去重、生成复习计划。",
    price: 199,
    image: "https://via.placeholder.com/150"
  }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;