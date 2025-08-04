const API_URL = 'https://zhenshi-backend-xxxx.zeabur.app'; // 替换为你的后端地址

async function submitMessage() {
  const name = document.getElementById('name').value;
  const content = document.getElementById('content').value;

  if (!name || !content) {
    alert('请填写完整信息！');
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/resources`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, content })
    });

    const data = await res.json();
    alert(data.message);
  } catch (error) {
    console.error('Error:', error);
    alert('提交失败，请稍后再试。');
  }
}