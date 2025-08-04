const express = require('express');
const router = express.Router();

// 模拟数据库 - 用内存中的数组存储资源和评论
// 在实际项目中，这里会连接 MongoDB 或其他数据库
let resources = [
  {
    id: 1,
    name: "Notion",
    description: "全能笔记与项目管理工具，让知识体系化。",
    link: "https://notion.so",
    category: "学习",
    likes: 24,
    comments: [
      { id: 1, username: "李同学", content: "这个工具太好用了！", time: "2025-04-05 10:00" }
    ]
  },
  {
    id: 2,
    name: "Figma",
    description: "强大的在线设计工具，团队协作的首选。",
    link: "https://figma.com",
    category: "设计",
    likes: 18,
    comments: []
  },
  {
    id: 3,
    name: "Qwen",
    description: "通义千问，你的AI智能助手。",
    link: "https://qwen.cn",
    category: "AI",
    likes: 35,
    comments: []
  }
];

// GET /api/resources - 获取所有资源列表
router.get('/', (req, res) => {
  res.json(resources);
});

// POST /api/resources/like - 为资源点赞
router.post('/like', (req, res) => {
  const { resourceId } = req.body;
  const resource = resources.find(r => r.id === parseInt(resourceId));
  
  if (!resource) {
    return res.status(404).json({ message: '资源未找到' });
  }
  
  resource.likes += 1;
  res.json({ message: '点赞成功', likes: resource.likes });
});

// POST /api/resources/comment - 为资源添加评论
router.post('/comment', (req, res) => {
  const { resourceId, username, content } = req.body;
  
  if (!username || !content) {
    return res.status(400).json({ message: '用户名和内容不能为空' });
  }
  
  const resource = resources.find(r => r.id === parseInt(resourceId));
  if (!resource) {
    return res.status(404).json({ message: '资源未找到' });
  }
  
  const newComment = {
    id: Date.now(), // 简单的 ID 生成
    username,
    content,
    time: new Date().toLocaleString('zh-CN')
  };
  
  resource.comments.push(newComment);
  res.status(201).json({ message: '评论成功', comment: newComment });
});

module.exports = router;