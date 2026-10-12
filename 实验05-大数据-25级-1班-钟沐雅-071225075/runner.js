// 提供的运行框架：图片加载完成后启用按钮，不要求学生改写。
const canvas = document.getElementById('poster');
const status = document.getElementById('status');
const image = new Image();
let ready = false;
function render(stage) {
  if (!ready) return;
  canvas.width = 600;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');
  const functions = { T1: drawBackground, T2: drawDecoration, T3: drawState, T4: drawContent };
  try {
    if (stage === 'all') {
      drawBackground(ctx);
      drawDecoration(ctx);
      drawState(ctx);
      drawContent(ctx, image);
    } else {
      functions[stage](ctx, image);
    }
    status.textContent = '已运行' + stage + '；请按任务书目视核对，运行成功不代表任务完成。';
  } catch (error) {
    status.textContent = '绘制出错：' + error.message;
  }
}
document.querySelectorAll('[data-stage]').forEach(button => {
  button.addEventListener('click', () => render(button.dataset.stage));
});
document.querySelectorAll('[data-size]').forEach(button => {
  button.addEventListener('click', () => {
    canvas.style.width = button.dataset.size + 'px';
    status.textContent = '显示宽度设为' + button.dataset.size + '；画布像素尺寸仍为' + canvas.width + '×' + canvas.height;
  });
});
image.addEventListener('load', () => {
  ready = true;
  document.querySelectorAll('[data-stage]').forEach(button => { button.disabled = false; });
  render('all');
});
image.addEventListener('error', () => { status.textContent = '素材加载失败，请检查assets/huangmei-portrait.png是否存在。'; });
image.src = 'assets/huangmei-portrait.png';
