// Removes social networks top bar
document.getElementsByClassName("FollowUs")[0].remove();

// Delete all scripts nodes
Array.from(document.getElementsByTagName("SCRIPT")).forEach(
    element => element.remove()
);

// Set the redirection layer to the very deep behind the content
(async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    // Await til the scripts place the redirection layer
    await delay(500);
    Array.from(document.body.getElementsByTagName("DIV")).filter(
        element => element.style.position === "fixed"
    )[0].style.zIndex = -1000;
})();

// Remove the follow social networks ads
Array.from(document.body.getElementsByTagName("A")).filter(
    element => element.rel === "nofollow").forEach(element => element.remove());
