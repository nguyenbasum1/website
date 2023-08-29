// Event click menu ra bang bang menu 
const menu = document.querySelector(".navbar__links");
const buttonMenu = document.querySelector(".navbar__icons");
// System lắng nghe cái click của user 
buttonMenu.addEventListener(`click`,()=>
{
    // chuyển đổi (toggle) sang tên mới navbar_open
    // nghĩa là tạo khối các nguyên tắc css với tên open dùng đẻ thực hiện event này
    menu.classList.toggle("navbar__open");
});
