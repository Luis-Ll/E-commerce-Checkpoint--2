//**Developers */

const developers = [
    {   id:1,
        name:"Luis",
        urlLinkedin:"https://ar.linkedin.com/",
        urlGithub:"https://github.com/Luis-Ll",



    },
    {   id:2,
        name:"Naim",
        urlLinkedin:"https://ar.linkedin.com/",
        urlGithub:"hhttps://github.com/Nacip21",



    },
    {   id:3,
        name:"Jeremias",
        urlLinkedin:"https://ar.linkedin.com/",
        urlGithub:"https://github.com/jerehjuarez",



    },
    {   id:4,
        name:"Carlos",
        urlLinkedin:"https://ar.linkedin.com/",
        urlGithub:"https://github.com/carlosavanzini",



    },

]

const renderDev = (developers) => {
    let body = "";

    const devs= document.getElementById ("devs");

    for (let i= 0; i < developers.length; i++) {
        body+= 
        `
        
            <p class="col-4">${developers[i].name}</p>
            <div class="col-8 text-end">
              <a href="${developers[i].urlGithub}"
                ><i class="text_footer icon_git fs-3 fa-brands fa-github"></i
              ></a>
              <a href="${developers[i].urlLinkedin}"
                  ><i class="fa-brands fa-linkedin fs-3 fa-brands"></i></a>
             </div>
               
        
    `;
        

        devs.innerHTML = body

        console.log("funciona?")
        
    }
}
renderDev (developers);