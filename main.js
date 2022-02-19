// Update global var
loadingAds = false;
// FIXME
_0x1f0c = undefined;

// Delete all scripts nodes
let script_sources = Array.from(document.getElementsByTagName("SCRIPT")).map(
    element => {
        result = String(element.getAttribute("src"));
        element.remove();
        return result;
    }

);

script_sources.filter(el => el.match(/^\/\//)).forEach(
    src => {
        src = "https:"+src;
        console.log(src);
    }
);

// Set the redirection layer to the very deep behind the content
(async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    // Await til the scripts place the redirection layer
    await delay(500);
    Array.from(document.body.getElementsByTagName("DIV")).filter(
        element => element.style.position === "fixed"
    ).forEach(element => element.style.zIndex = -1000);

    // FIXME
    _0x1f0c = undefined;

})();


console.log("Page remove social networks and invisible layers done.");

// Replace items in Wrapper
let new_anime_list = document.createElement("ul");
new_anime_list.style.display = "grid";
new_anime_list.style.gridColumnGap = "5px";
new_anime_list.style.gridRowGap = "5px";
new_anime_list.style.gridTemplateRows = "max-content";
new_anime_list.style.gridTemplateColumns = "auto auto auto auto auto";
new_anime_list.style.margin = "20px 20px";

["ListEpisodios","AX"].forEach(sclass => new_anime_list.classList.add(sclass));
document.body.prepend(new_anime_list);

let old_list = Array.from(wrapper.getElementsByClassName("ListEpisodios"));
if (old_list.length){
    Array.from(old_list[0].getElementsByTagName("LI")).forEach(el=>
        {
            el.style.maxWidth = "230px";
            el.style.display = "inline-grid";
            new_anime_list.appendChild(el);
        }
    );
}
