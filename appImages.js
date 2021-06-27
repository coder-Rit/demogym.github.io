
const menu = document.getElementById("menu")
const cross = document.getElementById("cross")
 
menu.addEventListener("click", function () {
    const minul = document.getElementById("minul")
    minul.style.top = "-30px"

})
cross.addEventListener("click", function () {
    const minul = document.getElementById("minul")
    minul.style.top = "-300px"

})

AOS.init({
   
});


function images() {
    let imge1 = document.getElementById("imge1");
 
    setTimeout(() => {
        imge1.innerHTML = `<img src="./imges/victor-freitas-WvDYdXDzkhs-unsplash.jpg" alt="">`
     }, 0);

    setTimeout(() => {
        imge1.innerHTML = ``;
    }, 5000);

    setTimeout(() => {
        imge1.innerHTML = `<img src="./imges/victor-freitas-KIzBvHNe7hY-unsplash-min.jpg" alt="">`
     }, 5100);
}

images();

setInterval(() => {
     imge1.innerHTML = "";
    imge1.innerHTML = "";
}, 10100); 

setInterval(() => {
    images();
}, 10100);











function images2() {
    let imge2 = document.getElementById("imge2");
 
    setTimeout(() => {
        imge2.innerHTML = `<img src="./imges/sushil-ghimire-5UbIqV58CW8-unsplash-min.jpg" alt="">`
     }, 0);

    setTimeout(() => {
        imge2.innerHTML = ``;
    }, 7000);

    setTimeout(() => {
        imge2.innerHTML = `<img src="./imges/spencer-davis-0ShTs8iPY28-unsplash (1)-min.jpg" alt="">`
     }, 7100);
}

images2();

setInterval(() => {
     imge2.innerHTML = "";
    imge2.innerHTML = "";
}, 12100); 

setInterval(() => {
    images2();
}, 12100);







function images3() {
    let sub_imge1_3 = document.getElementById("sub_imge1_3");
 
    setTimeout(() => {
        sub_imge1_3.innerHTML = ` <img src="./imges/gymSqure1.png" alt="">`
     }, 0);

    setTimeout(() => {
        sub_imge1_3.innerHTML = ``;
    }, 4000); 
    setTimeout(() => {
        sub_imge1_3.innerHTML = ` <img src="./imges/gymSqure2.png" alt="">`
     }, 4100);


    setTimeout(() => {
        sub_imge1_3.innerHTML = ``;
    }, 8100); 
    setTimeout(() => {
        sub_imge1_3.innerHTML = ` <img src="./imges/gymSqure3.png" alt="">`
     }, 8200);


    setTimeout(() => {
        sub_imge1_3.innerHTML = ``;
    }, 12200); 
    setTimeout(() => {
        sub_imge1_3.innerHTML = ` <img src="./imges/gymSqure4.png" alt="">`
     }, 12300);


    setTimeout(() => {
        sub_imge1_3.innerHTML = ``;
    }, 16300); 
    setTimeout(() => {
        sub_imge1_3.innerHTML = ` <img src="./imges/gymSqure5.png" alt="">`
     }, 16400);

}

images3();

setInterval(() => {
     sub_imge1_3.innerHTML = "";
    sub_imge1_3.innerHTML = "";
}, 20500); 

setInterval(() => {
    images3();
}, 20500);





function images4() {
    let sub_imge2_3 = document.getElementById("sub_imge2_3");
 
    setTimeout(() => {
        sub_imge2_3.innerHTML = ` <img src="./imges/gymSqure6.png" alt="">`
     }, 0);

    setTimeout(() => {
        sub_imge2_3.innerHTML = ``;
    }, 3000); 
    setTimeout(() => {
        sub_imge2_3.innerHTML = `<img src="./imges/gymSqure7.png" alt="">`
     }, 3100); 
   
}

images4();

setInterval(() => {
     sub_imge2_3.innerHTML = "";
    sub_imge2_3.innerHTML = "";
}, 6200); 

setInterval(() => {
    images4();
}, 6200);





function images5() {
    let sub_imge1_4 = document.getElementById("sub_imge1_4");
 
    setTimeout(() => {
        sub_imge1_4.innerHTML = `<img src="./imges/anastase-maragos-ehQimz6-1qM-unsplash-min.jpg" alt="">`
     }, 0);
    setTimeout(() => {
        sub_imge1_4.innerHTML = ``
     }, 6000);

   
    setTimeout(() => {
        sub_imge1_4.innerHTML = `<img src="./imges/anastase-maragos-jzP8_Rg6aVU-unsplash (1)-min.jpg" alt="">`
     }, 6100); 
   
}

images5();

setInterval(() => {
     sub_imge1_4.innerHTML = "";
    sub_imge1_4.innerHTML = "";
}, 12000); 

setInterval(() => {
    images5();
}, 12000);






function images6() {
    let imge5 = document.getElementById("imge5");
 
    setTimeout(() => {
        imge5.innerHTML = `<img src="./imges/gymSqure8.png" alt="">`
     }, 0);


    setTimeout(() => {
        imge5.innerHTML = ``
     }, 4500);

   
    setTimeout(() => {
        imge5.innerHTML = `<img src="./imges/gymSqure9.png" alt="">`
     }, 4600); 

     setTimeout(() => {
        imge5.innerHTML = ``
     }, 9100);

     setTimeout(() => {
        imge5.innerHTML = `<img src="./imges/gymSqure10.png" alt="">`
     }, 9200); 
   
}

images6();

setInterval(() => {
    imge5.innerHTML = "";
    imge5.innerHTML = "";
}, 13800); 

setInterval(() => {
    images6();
}, 13800);









function images7() {
    let imge6 = document.getElementById("imge6");
 
    setTimeout(() => {
        imge6.innerHTML = `<img src="./imges/dollar-gill-PcBbrjiShAk-unsplash-min.jpg" alt="">`
     }, 0);

    setTimeout(() => {
        imge6.innerHTML = ``;
    }, 5100); 
    setTimeout(() => {
        imge6.innerHTML = ` <img src="./imges/dollar-gill-KxCErTse64c-unsplash-min.jpg" alt="">`
     }, 5200);


    setTimeout(() => {
        imge6.innerHTML = ``;
    }, 10200); 
    setTimeout(() => {
        imge6.innerHTML = ` <img src="./imges/dollar-gill-PRGbPWm4ylo-unsplash-min.jpg" alt="">`
     }, 10300);


    setTimeout(() => {
        imge6.innerHTML = ``;
    }, 15400); 
    setTimeout(() => {
        imge6.innerHTML = ` <img src="./imges/dollar-gill-So3P0EkC6IQ-unsplash-min.jpg" alt="">`
     }, 15500);
 

}

images7();

setInterval(() => {
    imge6.innerHTML = "";
    imge6.innerHTML = "";
}, 20700); 

setInterval(() => {
    images7();
}, 20700);





function images8() {
    let imge7 = document.getElementById("imge7");
 
    setTimeout(() => {
        imge7.innerHTML = `<img src="./imges/darkman1.png" alt="">`
     }, 0);

    setTimeout(() => {
        imge7.innerHTML = ``;
    }, 5100); 
    setTimeout(() => {
        imge7.innerHTML = `<img src="./imges/darkman2 (1).png" alt="">`
     }, 5200);


    setTimeout(() => {
        imge7.innerHTML = ``;
    }, 10200); 
    setTimeout(() => {
        imge7.innerHTML = `<img src="./imges/darkman3.png" alt="">`
     }, 10300);


    setTimeout(() => {
        imge7.innerHTML = ``;
    }, 15400); 
    setTimeout(() => {
        imge7.innerHTML = `<img src="./imges/darkman4.png" alt="">`
     }, 15500);
 

}

images8();

setInterval(() => {
    imge7.innerHTML = "";
    imge7.innerHTML = "";
}, 20700); 

setInterval(() => {
    images8();
}, 20700);






function images9() {
    let imge8 = document.getElementById("imge8");
 
    setTimeout(() => {
        imge8.innerHTML = `<img src="./imges/marcos-paulo-prado-KX8N0zT-HLs-unsplash (1).jpg" alt="">`
     }, 0);

    setTimeout(() => {
        imge8.innerHTML = ``;
    }, 6500); 
    setTimeout(() => {
        imge8.innerHTML = `<img src="./imges/marcos-paulo-prado - k7WRj0E64Q-unsplash.jpg" alt="">`
     }, 6600);

  

}

images9();

setInterval(() => {
    imge8.innerHTML = "";
    imge8.innerHTML = "";
}, 13200); 

setInterval(() => {
    images9();
}, 13200);

