// 選取所有包含文字的 class
const nameElements = document.querySelectorAll(".name-w");

// 設定靈敏度 (數值越小，陰影移動越慢)
const sensitivity = 0.03;

window.addEventListener("mousemove", (e) => {
  // 取得滑鼠在視窗的位置
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  nameElements.forEach((el) => {
    // 取得元素中心點
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 計算陰影偏移量 (將滑鼠位置與中心點相減)
    // 乘以 -0.05 是因為我們要陰影向滑鼠的「反方向」移動，才有立體感
    const shadowX = (mouseX - centerX) * sensitivity;
    const shadowY = (mouseY - centerY) * sensitivity;

    // 使用 GSAP 改變陰影
    // rgba(0,0,0,0.5) 是半透明黑色
    gsap.to(el, {
      textShadow: `${shadowX}px ${shadowY}px 10px rgba(0,0,0,0.6)`,
      duration: 0.4, // 平滑過渡時間
      ease: "power1.out"
    });
  });
});