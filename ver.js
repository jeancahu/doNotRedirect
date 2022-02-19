// Replace iframs // TODO FIXME
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
[
    "WdgtCn",
    "ListNews",
    "ShrCnB",
].forEach(
    classname => Array.from(wrapper.getElementsByClassName(classname)).forEach(el => el.remove())
);

// Removes right padding
wrapper.getElementsByClassName("Body")[0].firstElementChild.firstElementChild.classList.remove("CpCn");

document.body.getElementsByTagName("NOSCRIPT")[0].remove();
document.getElementById("fb-root").remove();
document.body.prepend(wrapper.firstElementChild);
