// Update global var
loadingAds = false;
// FIXME
_0x1f0c = undefined;

// Removes social networks top bar
document.getElementsByClassName("FollowUs")[0].remove();

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
    //     console.log(
    //         fetch(src,
    //               {
    //                   method: 'GET',
    //                   cache: 'no-cache',
    //                   credentials: 'same-origin',
    //                   headers: {
    //                       'Content-Type': 'text/javascript',
    //                   },
    //               }
    //              )
    //     );
    }
);

// Set the redirection layer to the very deep behind the content
(async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    // Await til the scripts place the redirection layer
    await delay(2000);
    Array.from(document.body.getElementsByTagName("DIV")).filter(
        element => element.style.position === "fixed"
    ).forEach(element => element.style.zIndex = -1000);

    // FIXME
    _0x1f0c = undefined;

})();

// Remove the follow social networks ads
Array.from(document.body.getElementsByTagName("A")).filter(
    element => element.rel === "nofollow").forEach(element => element.remove());

console.log("Page remove social networks and invisible layers done.");

let wrapper = document.body.getElementsByClassName("Wrapper")[0];

// Run if the page is the video viewport
if (!window.location.href.includes("ver")){
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
}

// Replace iframs
let video_iframes = Array.from(wrapper.getElementsByTagName("IFRAME"));
// If there are video iframes in the actual page
if (video_iframes.length){
    let video_sources = document.createElement("p");
    let new_ref = document.createElement("a");

    new_ref.innerText = "Video Source\n";
    new_ref.href = video_iframes[0].src;
    new_ref.style = "background-color: green; color: white;";

    video_iframes[0].width = "100%";
    video_iframes[0].height = "600px";

    video_sources.appendChild(new_ref);
    video_sources.appendChild(video_iframes[0]);
    let capitop = wrapper.getElementsByClassName("CapiTop")[0];
    capitop.appendChild(video_sources);
    capitop.classList.remove("CapiTop");
}

console.log("extra cleaning");
Array.from(wrapper.getElementsByTagName("A")).filter(el => String(el.getAttribute("href")).includes("https")).forEach(
    element => element.remove()
);

[
    "WdgtCn",
    "ListNews",
    "ShrCnB",
].forEach(
    classname => Array.from(wrapper.getElementsByClassName(classname)).forEach(el => el.remove())
);

// Removes right padding
wrapper.getElementsByClassName("Body")[0].firstElementChild.firstElementChild.classList.remove("CpCn");
