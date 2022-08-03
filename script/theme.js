let switchy = document.getElementById("switch-theme");

function setTheme(){
    const currentTheme = localStorage.getItem("theme") || "light" //default on light teme on first load of the site
    document.body.dataset.theme = currentTheme; //update current theme value on data-theme
}
setTheme()

function switchTheme(){
    const toggleValue =localStorage.getItem("theme")==="dark" ? "light" : "dark";
    localStorage.setItem("theme", toggleValue);

    setTheme();
}

switchy.addEventListener("click", switchTheme);