// Removes social networks top bar
document.getElementsByClassName("FollowUs")[0].remove();

// Main content div
let wrapper = document.body.getElementsByClassName("Wrapper")[0];

// Deletes external references
Array.from(wrapper.getElementsByTagName("A")).filter(el => String(el.getAttribute("href")).includes("https")).forEach(
    element => element.remove()
);

// Remove the follow social networks ads
Array.from(document.body.getElementsByTagName("A")).filter(
    element => element.rel === "nofollow").forEach(element => element.remove());
