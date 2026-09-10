//页面加载完成提示
window.onload = function(){
    console.log("个人主页加载完成");
    const bannerWrap = document.querySelector('.banner-img-wrap');
    console.log("bannerWrap元素：", bannerWrap);
}
//点击页面logo弹出提示
document.querySelector(".logo").addEventListener("click",function(){
    alert("欢迎来到钟沐雅的个人空间！");
})

// ========== 修改：仅banner范围内才触发视差 ==========
const bannerDom = document.querySelector('.banner');
const bannerWrap = document.querySelector('.banner-img-wrap');
const moveRange = 16;

// 只在banner盒子内部监听鼠标移动
bannerDom.addEventListener('mousemove', function(e) {
    if(!bannerWrap) return;
    // 获取鼠标相对于banner容器的坐标
    const rect = bannerDom.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    const xRate = (localX / rect.width - 0.5) * 2;
    const yRate = (localY / rect.height - 0.5) * 2;

    const offsetX = xRate * moveRange;
    const offsetY = yRate * moveRange;
    bannerWrap.style.transform = `scale(1.08) translate(${offsetX}px, ${offsetY}px)`;
});

// 鼠标离开banner区域，图片复位回中心
bannerDom.addEventListener('mouseleave', function(){
    if(!bannerWrap) return;
    bannerWrap.style.transform = `scale(1.08) translate(0px,0px)`;
});

// ========== 原版【查看/收起学习目标】逻辑 ==========
const showGoalBtn = document.getElementById('showGoalBtn');
const goalText = document.getElementById('goalText');
let isShow = false;
showGoalBtn.addEventListener('click', function(){
    if(isShow){
        goalText.innerText = "";
        showGoalBtn.innerText = "查看我的学习目标";
        isShow = false;
    }else{
        goalText.innerText = "我的学习目标：熟练掌握前端网页开发、Python编程，office办公软件，打好大数据基础，多动手做项目练习。";
        showGoalBtn.innerText = "收起学习目标";
        isShow = true;
    }
})
// 卡片3d倾斜效果
const cardDom = document.querySelector('.left-card');
const cardInner = document.querySelector('.card-inner');
const maxRotate = 20; //最大倾斜角度，不要太大，推荐4~8

cardDom.addEventListener('mousemove',function(e){
    const rect = cardDom.getBoundingClientRect();
    // 鼠标相对于卡片中心
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    // 计算旋转角度
    const rotateY = (x / (rect.width/2)) * maxRotate;
    const rotateX = -(y / (rect.height/2)) * maxRotate;
    cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
})
//鼠标离开卡片，复位
cardDom.addEventListener('mouseleave',function(){
    cardInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
})
