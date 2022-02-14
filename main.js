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
    await delay(500);
    Array.from(document.body.getElementsByTagName("DIV")).filter(
        element => element.style.position === "fixed"
    ).forEach(element => element.style.zIndex = -1000);

    // FIXME
    _0x1f0c = undefined;

})();

// Remove the follow social networks ads
Array.from(document.body.getElementsByTagName("A")).filter(
    element => element.rel === "nofollow").forEach(element => element.remove());

console.log("page clean ready");
let wrapper = document.body.getElementsByClassName("Wrapper")[0];
let iframes = wrapper.getElementsByTagName("IFRAME");


let video_iframes = Array.from(iframes);
if (video_iframes.length){
    let video_sources = document.createElement("p");
    let video_iframe = Array.from(iframes)[0];
    let new_ref = document.createElement("a");

    new_ref.innerText = "Video Source\n";
    new_ref.href = video_iframe.src;
    new_ref.style = "background-color: green; color: white;";

    video_iframe.width = "100%";
    video_iframe.height = "600px";

    video_sources.appendChild(new_ref);
    video_sources.appendChild(video_iframe);
    let capitop = wrapper.getElementsByClassName("CapiTop")[0];
    capitop.appendChild(video_sources);
    capitop.classList.remove("CapiTop");
}

console.log("extra");
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
