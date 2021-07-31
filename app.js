

let limg=document.getElementById("leftimg");
let mimg=document.getElementById("midimg")
let rimg=document.getElementById("rightimg");
console.log(limg);

let limgindex;
let mimgindex;
let rimgindex;

let maxattempts=10;
let userattempts=0;

function Product(name,src) {
    this.name=name;
    this.src=src;
    this.votes=0;
    this.shown=0;
    Product.allproducts.push(this);
}

 Product.allproducts=[];

new Product('ahmad1','assets/bag.jpg');

new Product('ahmad2','assets/banana.jpg');

new Product('ahmad3','assets/bathroom.jpg');

new Product('ahmad4','assets/boots.jpg');

new Product('ahmad5','assets/breakfast.jpg');

new Product('ahmad6','assets/bubblegum.jpg');

new Product('ahmad7','assets/chair.jpg');

new Product('ahmad8','assets/cthulhu.jpg');
new Product('ahmad8','assets/dog-duck.jpg');
new Product('ahmad8','assets/dragon.jpg');
new Product('ahmad8','assets/pen.jpg');
new Product('ahmad8','assets/pet-sweep.jpg');
new Product('ahmad8','assets/scissors.jpg');
new Product('ahmad8','assets/shark.jpg');
new Product('ahmad8','assets/sweep.png');
new Product('ahmad8','assets/tauntaun.jpg');
new Product('ahmad8','assets/unicorn.jpg');
new Product('ahmad8','assets/water-can.jpg');
new Product('ahmad8','assets/wine-glass.jpg');  

console.log(Product.allproducts);


function myRandomNumber() {
    return Math.floor(
        Math.random()*Product.allproducts.length) ;
}

console.log(myRandomNumber());

function rendertheimages() {
    limgindex=myRandomNumber();
    Product.allproducts[limgindex].shown++;
    mimgindex=myRandomNumber();
    while( (mimgindex==limgindex)||(mimgindex==rimgindex) ) {
        mimgindex=myRandomNumber();
    }
    Product.allproducts[mimgindex].shown++;
    rimgindex=myRandomNumber();
    while ((rimgindex==limgindex)||(rimgindex==mimgindex)) {
     rimgindex=myRandomNumber();   
    }
    Product.allproducts[rimgindex].shown++;
   
    limg.src=Product.allproducts[limgindex].src;
    mimg.src=Product.allproducts[mimgindex].src;
    rimg.src=Product.allproducts[rimgindex].src;
  
}

rendertheimages();

console.log(limgindex,mimgindex,rimgindex);

// limg.addEventListener('click',clickshandler);
// mimg.addEventListener('click',clickshandler);
// rimg.addEventListener('click',clickshandler);

let parent=document.getElementById('parent');
parent.addEventListener('click',clickshandler)

function clickshandler(e) {
    console.log(e.target.id);
    userattempts++;
    console.log(userattempts);


    if (userattempts<maxattempts) {
         if (e.target.id==='leftimg') {
             Product.allproducts[limgindex].votes++;
            
         }
         else if (e.target.id==='midimg') {
             Product.allproducts[mimgindex].votes++;
             console.log(Product.allproducts[mimgindex].votes);
         } else if (e.target.id==='rightimg'){
             Product.allproducts[rimgindex].votes++;
             console.log(Product.allproducts[rimgindex].votes);
         }
         else{
             alert('you should only click on an image ')
             userattempts--;
         }
       
         rendertheimages();

    }
    else{
        let jsbtn=document.getElementById('mybtn');
        jsbtn.hidden=false;

        jsbtn.addEventListener('click' ,showthevotes);
        function showthevotes(params) {
             let list=document.getElementById('results-list');
        for (let index = 0; index < Product.allproducts.length; index++) {
            let listitem=document.createElement('li');
            list.appendChild(listitem);
            listitem.textContent=`${Product.allproducts[index].name} has been vooted ${Product.allproducts[index].votes} 
            and it has been shown for ${Product.allproducts[index].shown}`;
        }
        jsbtn.removeEventListener('click',showthevotes);
        }
       
        parent.removeEventListener('click',clickshandler);
        
    }
 
}