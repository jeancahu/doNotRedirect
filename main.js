console.log("Ejecutando en el navegador Animeflv.net redirect block");
document.getElementsByClassName("FollowUs")[0].remove();

// Borra el script que hace redirects:
Array.from(document.getElementsByTagName("SCRIPT")).forEach(
    element => element.remove()
);

// Borra el redirect

(async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);
    Array.from(document.body.getElementsByTagName("DIV")).filter(
        element => element.style.position === "fixed"
    )[0].style.zIndex = -1000;
})();

Array.from(document.body.getElementsByTagName("A")).filter(
    element => element.rel === "nofollow").forEach(element => element.remove());
