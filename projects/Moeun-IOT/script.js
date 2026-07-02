const btn = document.getElementById('clickBtn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
    msg.textContent = "반갑습니다! 웹 개발을 시작하신 것을 환영합니다.";
});