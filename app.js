 
 
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

function timing() {
    setInterval(() => {
        var d = new Date() 
        var e = new Date().getTime(); 

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday"; 
       
        const shedule = document.getElementById("shedule") 
    
        shedule.innerHTML = `<h1 >${ d.getDate() }</h1>
        <div class="Time2">
            <h6>${ d.toDateString()} </h6> 
          </div>
          <h6>${d.toLocaleTimeString()}</h6>`
         
    }, 1000);
      

}
timing();
 
 
 
function contactfloter() {
  const name = document.getElementById("name")
  name.style.animation="fordiv 1s 1 0.2s"  
setTimeout(() => {
  name.style.zIndex="2" 
}, 200);

  const location = document.getElementById("location") 
  location.style.animation="fordiv 1s 1 0.4s"   
  setTimeout(() => {
    location.style.zIndex="2" 
  }, 400);
  const contactNo = document.getElementById("contactNo") 
  contactNo.style.animation="fordiv 1s 1 0.6s"  
  setTimeout(() => {
    contactNo.style.zIndex="2" 
  }, 600);
  const email = document.getElementById("email") 
  email.style.animation="fordiv 1s 1 0.8s"  
  setTimeout(() => {
    email.style.zIndex="2" 
  }, 800);
  const radio = document.getElementById("radio")  
  radio.style.animation="fordiv 1s 1 1s"  
  setTimeout(() => {
    radio.style.zIndex="2" 
  }, 1000);
}


const InputDiv = document.getElementById("InputDiv") 
const aboutImg = document.getElementById("aboutImg") 

 
InputDiv.addEventListener('click',function () { 
  contactfloter();

})
aboutImg.addEventListener('click',function () { 
  contactfloter(); 
})
    

$('.responsive').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
 
function hidefunc( ) {
  let hideContent = document.getElementById("hideContent")
  hideContent.addEventListener("click",function ( ) {
    
    let about_Trainer = document.getElementById("about_Trainer")  
    about_Trainer.style.width="0"
    about_Trainer.style.height="0"  
   
      let hideContent = document.getElementById("hideContent")
      hideContent.style.display="none" 
  
  })
};

function showfunc(imgcount,TrainerName,TrainerDiscript) {
  
  let about_Trainer = document.getElementById("about_Trainer") 
    about_Trainer.innerHTML=  ` <i class="fa fa-arrow-left" id="hideContent" aria-hidden="true"></i> 
    <div class="trainerImg ${imgcount} " id="trainerImg">
    </div> 
    <div class="trainerContent">
    <h1>${TrainerName}</h1>
    <p>${TrainerDiscript}</p>
    </div>`
    // about_Trainer.style.position="absolute" 
    about_Trainer.style.width="92%"
    about_Trainer.style.height="600px"
    about_Trainer.style.margin="20px"
    about_Trainer.style.marginTop="45px"
    
    
    

}
  let showContent1 = document.getElementById("showContent1");
  showContent1.addEventListener("click",function ( ) {  
    console.log(1);
    showfunc("trainerImg1","-Charlie Smith-","Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.")
    hidefunc( ) 
  })
  let showContent2 = document.getElementById("showContent2");
  showContent2.addEventListener("click",function ( ) { 
    console.log(2); 
    showfunc("trainerImg2","-Jacob Jones-","There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")
    hidefunc( ) 
  })
  let showContent3 = document.getElementById("showContent3");
  showContent3.addEventListener("click",function ( ) {  
    console.log(3);
    showfunc("trainerImg3","-Henry Taylor-","All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words .")
    hidefunc( ) 
  })
  
   if (window.history.replaceState) {
    window.history.replaceState(null,null,window.location.href);
   }

   AOS.init({
   
   });


    



   
