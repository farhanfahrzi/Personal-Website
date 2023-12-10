//toogle & responsive navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () =>{
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();


// clear email setelah mengirim
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")){
        form.reset();
    }
};