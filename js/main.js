

const header= document.querySelector("header")
const sections= document.querySelectorAll("section")
const links= document.querySelectorAll("header nav a")
const menu= document.querySelector(".menu")
const i= document.querySelector("i")
const nav= document.querySelector("nav")


menu.addEventListener("click",()=>{
    i.classList.toggle("bx-x");
    nav.classList.toggle("active")
})

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop -100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            links.forEach(link=>{
                link.classList.remove("active");
                document.querySelector('header nav a[href*='+ id +']').classList.add("active")
            })
            sec.classList.add("showanimate")
        }
        else{
            sec.classList.remove("showanimate")
        }
    });
    header.classList.add("sticky",window.scrollY > 100);
    i.classList.remove("bx-x");
    nav.classList.remove("active")

    const footer=document.querySelector('footer');
    footer.classList.toggle('showanimate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}