//页面加载完成后，再执行所有代码，防止获取DOM失败
window.onload = function(){
    console.log("个人主页加载完成");
    const bannerWrap = document.querySelector('.banner-img-wrap');
    //点击页面logo弹出提示
    const logoDom = document.querySelector(".logo");
    if(logoDom){
        logoDom.addEventListener("click",function(){
            alert("欢迎来到钟沐雅的个人空间！");
        })
    }
    // ========== Banner视差：PC鼠标 + 手机触屏 ==========
    const bannerDom = document.querySelector('.banner');
    if(bannerDom && bannerWrap){
        const moveRange = 16;
        // PC端 鼠标移动 【保留你原来的代码，一字不改】
        bannerDom.addEventListener('mousemove', function(e) {
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
            bannerWrap.style.transform = `scale(1.08) translate(0px,0px)`;
        });

        // =========【新增】移动端touch触屏滑动逻辑 =========
        bannerDom.addEventListener('touchmove', function(e){
            // 阻止页面滚动，可选，如果不想滑动时页面跟着滚就打开下面一行
            // e.preventDefault();
            const rect = bannerDom.getBoundingClientRect();
            // 取第一根手指
            const touch = e.touches[0];
            const localX = touch.clientX - rect.left;
            const localY = touch.clientY - rect.top;
            const xRate = (localX / rect.width - 0.5) * 2;
            const yRate = (localY / rect.height - 0.5) * 2;
            const offsetX = xRate * moveRange;
            const offsetY = yRate * moveRange;
            bannerWrap.style.transform = `scale(1.08) translate(${offsetX}px, ${offsetY}px)`;
        })
        // 手指抬起，图片复位
        bannerDom.addEventListener('touchend', function(){
            bannerWrap.style.transform = `scale(1.08) translate(0px,0px)`;
        })
    }

    // ========== 原版【查看/收起学习目标】逻辑 ==========
    const showGoalBtn = document.getElementById('showGoalBtn');
    const goalText = document.getElementById('goalText');
    let isShow = false;
    if(showGoalBtn && goalText){
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
    }

    // ========== 卡片3d倾斜效果：PC鼠标 + 手机触屏 ==========
    const cardDom = document.querySelector('.left-card');
    const cardInner = document.querySelector('.card-inner');
    const maxRotate = 6; // 柔和6度
    if(cardDom && cardInner){
        // PC鼠标移入
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

        // =========【新增】手机触屏卡片倾斜 =========
        cardDom.addEventListener('touchmove', function(e){
            const touch = e.touches[0];
            const rect = cardDom.getBoundingClientRect();
            const x = touch.clientX - rect.left - rect.width/2;
            const y = touch.clientY - rect.top - rect.height/2;
            const rotateY = (x / (rect.width/2)) * maxRotate;
            const rotateX = -(y / (rect.height/2)) * maxRotate;
            cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        })
        //手指离开卡片，恢复
        cardDom.addEventListener('touchend', function(){
            cardInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        })
    }
}
