//start header
let header = document.querySelector("header");
// array of background
let arrayOfPhoto = ["./images/photo-1.jpg", "./images/photo-2.jpg", "./images/photo-3.jpg", 
"./images/photo-4.jpg", "./images/photo-5.jpg"];

//change background image
let randomBack = document.querySelectorAll(".setting-box .random-background .random span");
let selectOption = "yes";
if(window.localStorage.getItem("storageBackground")){
    selectOption = `${window.localStorage.getItem("storageBackground")}`;
    backIntervalImg ();
    //remove class active from all
    randomBack.forEach((span) => {
        span.classList.remove("active");
    })
    document.querySelector(`span[data-background = "${window.localStorage.getItem("storageBackground")}"]`).classList.add("active");
}

    var backgroundInterval;
function backIntervalImg (){
    if(selectOption === "yes"){
        backgroundInterval = setInterval(() => {
            // create random number
            let randomNumber = Math.floor(Math.random() * arrayOfPhoto.length);
            header.style.backgroundImage = `url(${arrayOfPhoto[randomNumber]})`;
        }, 5000);}}
        backIntervalImg();
    //start select random background
    randomBack.forEach((span) => {
    span.addEventListener("click", e => {
        randomBack.forEach((span) => {
            span.classList.remove("active");
        })
        e.target.classList.add("active");
        if(e.target.dataset.background === "yes"){
            selectOption = "yes";
            backIntervalImg();
        }else{
            selectOption = "no";
            clearInterval(backgroundInterval);
        }
        //add background option to local storage
        window.localStorage.setItem("storageBackground", e.target.dataset.background);

    })
})
//select bollet section
let navBollet = document.querySelector(".nav-bollet");
let selectBollet = document.querySelectorAll(".setting-box .select-bollet .bollet span");
let bolletOption = "yes";
//if there is a value in local storage
if(window.localStorage.getItem("storageBollet")){
    bolletOption = `${window.localStorage.getItem("storageBollet")}`;
    selectBollet.forEach((bollet) => {
        bollet.classList.remove("active");
        document.querySelector(`span[data-bollet = "${window.localStorage.getItem("storageBollet")}"]`).classList.add("active");
        if(bolletOption === "no"){
            navBollet.style.cssText = "display:none;";
        }else{
            navBollet.style.cssText = "display:block;";
        }
    })}
    //change value onclick
    selectBollet.forEach((bollet) => {
        bollet.addEventListener("click", (e) => {
            selectBollet.forEach((bollet) => {
                bollet.classList.remove("active");
            });
            e.target.classList.add("active");
            window.localStorage.setItem("storageBollet", e.target.dataset.bollet);
            bolletOption = e.target.dataset.bollet;
            if(bolletOption === "no"){
                navBollet.style.cssText = "display:none;";
            }else{
                navBollet.style.cssText = "display:block;";
            }
        });
    });

//change color of page
// cheack if there is color in local storage
let mainColor = window.localStorage.getItem("myColor");

if(mainColor !== null){
    document.documentElement.style.setProperty("--main-color", mainColor);
    //remove class appley from all
    document.querySelectorAll(".setting-box .change-color ul li").forEach((color) => {
        color.classList.remove("appley");
    })
    //add appley to element whow in local storage
    document.querySelector(`li[data-color = "${mainColor}"]`).classList.add("appley");
}

let colorLi = document.querySelectorAll(".setting-box .change-color ul li");
let changeRoot = document.querySelector(":root");
//remove appley class from all and add appley class clicked
colorLi.forEach((color) => {
    color.addEventListener("click", (e) => {
        colorLi.forEach((color) => {
            color.classList.remove("appley");
        })
        e.target.classList.add("appley");
        //change root value
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        //add clicked element to local storage
        window.localStorage.setItem("myColor", e.target.dataset.color);
    })
})
//End color of page

// start setting box 
let settingBox = document.querySelector(".setting-box");
// setting view and hide setting box 
let setting = document.querySelector(".content i");
setting.addEventListener("click", () => {
    settingBox.classList.toggle("hidden");
});
setting.addEventListener("click", () => {
    setting.classList.toggle("rotate");
})
// End setting box 
//start remove local storage
document.querySelector(".remove-storage button").onclick = () => {
localStorage.clear();
window.location.reload();
}


// start navigation bar 

let lis = document.querySelectorAll(".nav ul li");

lis.forEach((element) => {

    element.addEventListener("click", () => {
        //remove class active from all lis
        lis.forEach((ele) => {
            ele.classList.remove("active");
        })
        //add class active to clicked element
        element.classList.add("active");
    });
})
// End  navigation bar

// start logo
let logo = document.querySelector(".logo");

logo.onclick = function(){
    location.href = "index.html";}
    //End logo

//go to some where when i clicked on button or bollett
//bollets
let bollets = document.querySelectorAll(".nav-bollet .bollet");
//links
let allLis = document.querySelectorAll("header .nav ul li");
let allLinks = document.querySelectorAll("header .nav ul li a");
function goToSomeWhere(elements){
elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});}
goToSomeWhere(bollets);
goToSomeWhere(allLinks);
goToSomeWhere(allLis);
//End bollet section
// start our delevery section 

let ourDelevary = document.querySelector(".our-delevary .container");
//select all div inside our delevary
let allDivs = document.querySelectorAll(".our-delevary .container div");
let windowWidth = -ourDelevary.offsetWidth;
// hidd all the divs inside delevary section
allDivs[2].style.cssText = `left:${windowWidth}px;`;
allDivs[1].style.cssText = `left:${windowWidth + allDivs[0].offsetWidth}px;`;
allDivs[0].style.cssText = `left:${windowWidth + allDivs[0].offsetWidth - allDivs[1].offsetWidth}px;`;
window.onscroll = () => {
// calculate top of the element

let ourDelevaryTop = ourDelevary.offsetParent.offsetTop;
//calculate height of the element

let ourDelevaryHeight = ourDelevary.offsetHeight;

//get window height
let windowHeight = this.innerHeight;
//get how match i scrolled
let windowScrollTop = this.pageYOffset;

if(windowScrollTop > ourDelevaryTop + ourDelevaryHeight - windowHeight - 400){
    // setTimeout(() => {
        allDivs[0].style.cssText = `left:0px;`;
    // }, -200)
    setTimeout(() => {
        allDivs[1].style.cssText = `left:0px`
    }, 1100);
    setTimeout(() => {
        allDivs[2].style.cssText = `left:0px`
    }, 1500);
}else{
    allDivs[2].style.cssText = `left:${windowWidth}px;`;
    allDivs[1].style.cssText = `left:${windowWidth - allDivs[0].offsetWidth}px;`;
    allDivs[0].style.cssText = `left:${windowWidth - allDivs[0].offsetWidth - allDivs[1].offsetWidth}px;`;

}
}
// End our delevery section 

// atart our gallery
    let ourGallery = document.querySelectorAll(".our-gallery .images-box img");

    ourGallery.forEach(img => {
        img.addEventListener("click", (e) => {
            let layOut = document.createElement("div");
            layOut.className = "layout";
            document.body.appendChild(layOut);
            //create content for image

            let popup = document.createElement("div");
            popup.className = "popup";
            //create img element
            let popupImage = document.createElement("img");
            popupImage.className = "popup-image";
            popupImage.src = img.src;
            // add popup image to body
            //remove layout when we clicked on it
            layOut.onclick = () => {
                layOut.remove();
                popup.remove();
            //create text for the image
        };
        //create image heading
        let imgHeading = document.createElement("h3");
        imgHeading.className = "img-text";
        //add text heading to image heading
        imgHeading.appendChild(document.createTextNode(img.alt));
        //add image heading to popup
        popup.appendChild(imgHeading);
        //add image to popup 
        popup.appendChild(popupImage);
        //add popup to body
        document.body.appendChild(popup);

        //create close button
        let closeBtn = document.createElement("span");
        //add class to btn
        closeBtn.className = "close";
        //add text to btn
        closeBtn.appendChild(document.createTextNode("X"));
        //add close btn to popup 
        popup.appendChild(closeBtn);
        //close image when button clicked
        closeBtn.onclick = () => {
            layOut.remove();
            popup.remove();
        }
        });
    });
// End our gallery

// start navifation in media query
let navQuery = document.querySelector("header .nav ul");
let barsBtn = document.querySelector("header .nav .fa-bars");
barsBtn.onclick = function(){
    navQuery.classList.toggle("open");
};
window.addEventListener("click", e => {
    if(e.target !== barsBtn && e.target !== navQuery){
        if(navQuery.classList.contains("open")){
            navQuery.classList.toggle("open")
        }
    }
})

// End navifation in media query 