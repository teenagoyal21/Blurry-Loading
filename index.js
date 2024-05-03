//accessing all the html elements
const loader = document.querySelector("#loader");
const image = document.querySelector("#source");
const button = document.querySelector("#startButton");
const image1 = document.querySelector("#btnImg1");
const image2 = document.querySelector("#btnImg2");
const image3 = document.querySelector("#btnImg3");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

loader.style.display = "none";
image.style.filter = "blur(16px)";

//Look! button functionality
button.addEventListener("click", function(){
    loader.style.display = "block";
    let loadValue = 0;
    button.style.display = "none";
    const timer = setInterval(() => {
        loadValue += 1;
        if (loadValue === 100) {
            clearTimeout(timer);
        }
        updateUI();
    }, 30);
    
    
    const updateUI = () => {
        loader.innerHTML = loadValue + "%";
        loader.style.opacity = scale(loadValue, 0, 100, 1, 0);
        image.style.filter = `blur(${scale(loadValue, 0, 100, 30, 0)}px)`;
    };
    
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    };   
});

//the right side 3 images 
//for image 1
let isBlurred1 = false;
image1.addEventListener("click", () => {
    if (!isBlurred1) {
        img1.style.filter = "blur(0px)";
    } else {
        img1.style.filter = "blur(4px)"; // Or whatever initial blur value you want
    }
    isBlurred1 = !isBlurred1; // Toggle the state
});

//for image 2
let isBlurred2 = false;
image2.addEventListener("click", () => {
    if (!isBlurred2) {
        img2.style.filter = "blur(0px)";
    } else {
        img2.style.filter = "blur(4px)";
    }
    isBlurred2 = !isBlurred2; 
});

//for image 3
let isBlurred3 = false;
image3.addEventListener("click", () => {
    if (!isBlurred3) {
        img3.style.filter = "blur(0px)";
    } else {
        img3.style.filter = "blur(4px)";
    }
    isBlurred3 = !isBlurred3; 
});