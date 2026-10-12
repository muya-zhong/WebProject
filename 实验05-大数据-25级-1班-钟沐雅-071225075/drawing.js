// 只修改各任务标记区域；ctx是已提供的二维绘图上下文。

function drawBackground(ctx) {
  // BEGIN T1
  // TODO：画布与矩形。具体要求见任务书。
  ctx.fillStyle="#FFF5E8"
  ctx.fillRect(0,0,600,360);
  ctx.strokeStyle="#702B32";
  ctx.lineWidth=2;
  ctx.strokeRect(20,20,560,320);
  // END T1
}

function drawDecoration(ctx) {
  // BEGIN T2
  // TODO：路径与圆弧。具体要求见任务书。
  ctx.beginPath();
  ctx.moveTo(30,280);
  ctx.lineTo(570,280);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(500,85,35,0,2*Math.PI);
  ctx.stroke();
  // END T2
}

function drawState(ctx) {
  // BEGIN T3
  // TODO：保存与恢复绘图状态。具体要求见任务书。
  ctx.fillStyle = "#702B32";
  ctx.fillRect(30, 295, 35, 25);

  ctx.save(); // 

  ctx.fillStyle = "#D9B66F";
  ctx.fillRect(80, 295, 35, 25);

  ctx.restore(); //

  ctx.fillRect(130, 295, 35, 25);
    // END T3
}

  

function drawContent(ctx, image) {
  // BEGIN T4
  // TODO：绘制图像与文字。具体要求见任务书。
  // END T4
}
