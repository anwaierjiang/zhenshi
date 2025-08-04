const express = require('express');
const router = express.Router();

// 这个接口目前只返回一个模拟响应
// 后续我们将在这里接入 Qwen 的 API
router.post('/', (req, res) => {
  const { message } = req.body;
  // 模拟 AI 回复
  const reply = `你问：“${message}”。这是一个演示回复。`;
  res.json({ reply });
});

module.exports = router;