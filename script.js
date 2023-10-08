let scrollcontainer = document.querySelector(".gallery");
        let backarw = document.getElementById("backarw");
        let nextarw = document.getElementById("nextarw");

        scrollcontainer.addEventListener("wheel", (evt)=>{
            evt.preventDefault();
            scrollcontainer.scrollLeft += evt.deltaY;
            
        });

        nextarw.addEventListener("click",()=>{
            scrollcontainer.style.scrollBehavior = "smooth";
            scrollcontainer.scrollLeft += 900;
        });

        backarw.addEventListener("click",()=>{
            scrollcontainer.style.scrollBehavior = "smooth";
            scrollcontainer.scrollLeft -= 900;
        });