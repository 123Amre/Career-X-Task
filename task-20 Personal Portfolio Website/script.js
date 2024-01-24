var typed = new Typed(".typing",{
    strings: ["","Full Stack Developer","Fontend Devloper","Backend Devloper","MERN Stack Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})


// aside 
const nav = document.querySelector(".nav"),
      navList = nav.querySelector("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++)
      {
        console.log(navList[i])
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
        })
      }
