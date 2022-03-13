const menuButton=document.getElementById('menu-button');
const menuIcon=document.getElementById('menu-icon');
const sideNav=document.getElementById('side-nav');

sideNav.style.right='-250px';
menuIcon.onclick=()=>{
    if(sideNav.style.right=='-250px'){
        sideNav.style.right='0';
        menuIcon.src="./images/close.png"
    }
    else{
        sideNav.style.right='-250px'
        menuIcon.src="./images/menu.png"
    }
}