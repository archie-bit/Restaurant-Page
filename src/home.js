
export function home(){
    const content = document.querySelector("#content");
    content.textContent="";
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");
    const welcome = document.createElement("h1");
    welcome.textContent = "Welcome to our restaurant!";
    const homeText= document.createElement("p");
    homeText.textContent = "we believe that great meals are meant to be shared with the ones you love. Whether you’re stopping by for a family dinner or celebrating a special occasion, we offer a fun, warm, and welcoming environment for all ages. Enjoy hearty meals, kid-friendly options, and memories that will last a lifetime!"

    homeContainer.appendChild(welcome);
    homeContainer.appendChild(homeText);
    content.appendChild(homeContainer);
}