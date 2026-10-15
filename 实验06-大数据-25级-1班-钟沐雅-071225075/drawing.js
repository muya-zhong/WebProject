// ctx是二维绘图工具，image是已加载的图片。保留函数名称与参数。
function drawCard(ctx, image) {
  // BEGIN CARD

  ctx.fillStyle="#FFF5E8";
  ctx.fillRect(20,20,700,280);
  ctx.fillStyle="#F2E2C8"
  ctx.fillRect(530,20,170,260);
  // 1. 红色外边框，外边界铺满整个画布720×300
  ctx.beginPath();
  ctx.rect(0, 0, 720, 300);
  ctx.strokeStyle="#702B32";
  ctx.lineWidth = 40; // 边框厚度20px，向内10px、向外10px
  ctx.stroke();

  ctx.moveTo(530,20);
  ctx.lineTo(530,280);
  ctx.strokeStyle="#D9B66F";
  ctx.lineWidth=2;
  ctx.stroke()

  ctx.fillStyle="#702B32";
  ctx.beginPath();
  ctx.arc(20,150,14,0,Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(700,150,14,0,Math.PI*2);
  ctx.fill();

 if(image){
        // 人物图：180×120，3:2比例
        ctx.drawImage(image,50,100,180,120);
    }
    ctx.fillStyle="#702B32";
    // 标题 黑体
    ctx.font="bold 30px SimHei";
    ctx.fillText("黄梅戏·视频欣赏",40,70);
    // 简介 宋体
    ctx.font="16px SimSun";
    ctx.fillText("听乡音，赏戏韵",250,140);
    ctx.fillText("走近黄梅戏",250,180);

    // ========== 右侧票根 ==========
    // 视频票 柔金色、黑体
    ctx.fillStyle="#702B32";
    ctx.font="bold 20px SimHei";
    ctx.fillText("视频票",580,100);

    // 点击观看 宋体，深红
    ctx.fillStyle="#702B32";
    ctx.font="16px SimSun";
    ctx.fillText("点击观看",570,160);

    // HM-06 Times New Roman
    ctx.font="16px Times New Roman";
    ctx.fillText("HM-06",580,220);
    // END CARD

  // TODO：720×300戏票：背景与票面、左右分区、侧边缺口、人物与简介、票号HM-06和观看提示。
  // END CARD
}
