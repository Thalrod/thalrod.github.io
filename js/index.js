function showItems() {

    if (document.querySelector('#menuCheckbox:checked') != null) { //open menu
        document.getElementById('menuItems').style.zIndex = "1";
        document.getElementById('menuItems').style.animation = "menuShow 1s forwards";

    } else { //close menu
        document.getElementById('menuItems').style.animation = "menuHide 1s";
        document.getElementById('menuItems').style.zIndex = "0";

    }

}