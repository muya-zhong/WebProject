// 已提供的图片加载与绘图程序，无需修改。
const canvas = document.getElementById('poster');
const status = document.getElementById('draw-status');
const image = new Image();
image.addEventListener('load', () => {
  try {
    drawCard(canvas.getContext('2d'), image);
    status.textContent = '绘图程序已运行，请核对卡片内容和链接。';
  } catch (error) {
    status.textContent = '绘图出错：' + error.message;
  }
});
image.addEventListener('error', () => {
  status.textContent = '图片加载失败，请检查assets/huangmei-portrait.png。';
});
image.src = 'assets/huangmei-portrait.png';
