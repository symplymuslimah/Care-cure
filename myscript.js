const ourSpecialist = [{
  id: 1,
  name: "Hardin scott",
  job : "physiotherapist",
  img : "images2.jpeg",
    },
    {
        id: 2,
        name: "Mitchelle Michael",
        job : "skin specialist",
        img : "images1.jpeg",
          },
          {
            id:3,
            name: "joe troy",
            job : "optometrist",
            img : "images4.jpeg",
              },
              {
                id: 4,
                name: "Joseph john",
                job : "physician",
                img : "images5.jpeg",
                  },
                  {
                    id: 5,
                    name: "Susan putin",
                    job : "dentist",
                    img : "images6.jpeg",
                      },                   
];

// our specialist section javascript code
const img = document.getElementById("image");
const person =    document.getElementById("person");
const job =   document.getElementById("job");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");

let currentItems = 0;

 window.addEventListener('DOMContentLoaded', function () {
     showData(currentItems);
     
 });

 function showData(){
     const item = ourSpecialist[currentItems];
     img.src = item.img;
     person.textContent = item.name;
     job.textContent = item.job;
 }
 nextbtn.addEventListener('click', function () {
    currentItems++;
    if (currentItems > ourSpecialist.length) {
       currentItems=0;
    }
    showData(currentItems);
});

prevbtn.addEventListener('click', function () {
    currentItems--;
    if(currentItems<0){
        currentItems = ourSpecialist.length
    }
    showData(currentItems);
});  

//nav script code
const iconNav = document.querySelector(".icon-nav");
iconNav.addEventListener('click',function() {
  const  navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    
});


 
