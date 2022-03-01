function flagAnimation(){
    let flagDrop=document.getElementsByClassName('flag-dropdown')[0];
    let flagKorea=document.getElementsByClassName("flagkorea")[0];
    flagKorea.classList.toggle("flagKoreaTop");
    flagDrop.classList.toggle("rotate-flag-drop");
}
function mobileBars(){
    let navbar=document.getElementsByClassName("navbar")[0];
    navbar.classList.toggle("navbar-active");

    let navbarMenu=document.getElementsByClassName("navbar-menu")[0];
    navbarMenu.classList.toggle("navbar-menu-top");
    
    let Bars=document.getElementsByClassName("bars")[0];
    Bars.classList.toggle("toggle");
}
function button1() {
    let fileInput1=document.getElementsByClassName('buttonYuklash1')[0];
    fileInput1.click();
}
function button2() {
    let fileInput2=document.getElementsByClassName('buttonYuklash2')[0];
    fileInput2.click();
}
function button3() {
    let fileInput3=document.getElementsByClassName('buttonYuklash3')[0];
    fileInput3.click();
}

//Export

function exportAnimation() {
    let adminHeader=document.getElementsByClassName('admin-header')[0];
    // adminHeader.classList.toggle("AdminHeaderJs");
    let exportIteam=document.getElementsByClassName("exportIteam")[0];
    exportIteam.classList.toggle("ExportTopPosition");
    let ExportArrow=document.getElementsByClassName("ExportArrowDown")[0];
    ExportArrow.classList.toggle("exportArrow");
    let Export=document.getElementsByClassName('export');
    Export.classList.toggle('ExportAddClass')
};

const toggleIcons = document.querySelectorAll(".toggle-icon");
toggleIcons.forEach((toggleIcon) => {
    toggleIcon.addEventListener("click", () => {
        const toggledView = toggleIcon.parentElement.querySelector(".toggled-view");
        if(toggledView.style.display="block"){
            toggledView.style.display="none"
        }else{
            toggledView.style.display="block"
            
        }
    });
});
