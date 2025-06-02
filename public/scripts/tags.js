window.onload = () => {
    const link = document.getElementById("gameIframe");
    link.setAttribute("src", "./game.html?id=" + sessionStorage.id);

}