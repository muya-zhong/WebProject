// 教师提供：仅在浏览器验证后显示反馈，不发送、不保存数据。
const form = document.querySelector('form');
const output = document.getElementById('feedback');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  output.textContent = 'HTML 输入验证通过；这是本地练习，未发送或保存报名信息。';
});
form.addEventListener('reset', () => {
  output.textContent = '已恢复初始状态。';
});
