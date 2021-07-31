

let limg=document.getElementById("leftimg");
let mimg=document.getElementById("midimg")
let rimg=document.getElementById("rightimg");
console.log(limg);

let limgindex;
let mimgindex;
let rimgindex;

let maxattempts=10;
let userattempts=0;

let namesarray=[];
let votesarr=[];
let shownarr=[];

function Product(name,src) {
    this.name=name;
    this.src=src;
    this.votes=0;
    this.shown=0;
    Product.allproducts.push(this);
    namesarray.push(this.name);
 
}

 Product.allproducts=[];


 function updatestorage() {
     
    let arrayofstringobjects=JSON.stringify(Product.allproducts);
    localStorage.setItem('allproducts',arrayofstringobjects)
 }

function getitems() {
    let data =localStorage.getItem('allproducts');
    let parseddata=JSON.parse(data);


if (parseddata!==null) {
    Product.allproducts=parseddata;
}
   
    // for (let index = 0; index < array.length; index++) {
    //     Product.allproducts[index].shown=0;
    // }
}

new Product('ahmad1','assets/bag.jpg');

new Product('ahmad2','assets/banana.jpg');

new Product('ahmad3','assets/bathroom.jpg');

new Product('ahmad4','assets/boots.jpg');

new Product('ahmad5','assets/breakfast.jpg');

new Product('ahmad6','assets/bubblegum.jpg');

new Product('ahmad7','assets/chair.jpg');

new Product('ahmad8','assets/cthulhu.jpg');
new Product('ahmad9','assets/dog-duck.jpg');
new Product('ahmad10','assets/dragon.jpg');
new Product('ahmad11','assets/pen.jpg');
new Product('ahmad12','assets/pet-sweep.jpg');
new Product('ahmad13','assets/scissors.jpg');
new Product('ahmad14','assets/shark.jpg');
new Product('ahmad15','assets/sweep.png');
new Product('ahmad16','assets/tauntaun.jpg');
new Product('ahmad17','assets/unicorn.jpg');
new Product('ahmad18','assets/water-can.jpg');
new Product('ahmad19','assets/wine-glass.jpg');  

console.log(Product.allproducts);


function myRandomNumber() {
    return Math.floor(
        Math.random()*Product.allproducts.length) ;
}

console.log(myRandomNumber());


let shownpictures=[];



function rendertheimages() {
    limgindex=myRandomNumber();
    Product.allproducts[limgindex].shown++;
    mimgindex=myRandomNumber();
    while( (mimgindex==limgindex)||(mimgindex==rimgindex)
         || shownpictures.includes(limgindex)
         || shownpictures.includes(mimgindex)
         ||shownpictures.includes(rimgindex)
         
         ) {
            limgindex=myRandomNumber();
            mimgindex=myRandomNumber();
            rimgindex=myRandomNumber();

    }
    Product.allproducts[mimgindex].shown++;
    rimgindex=myRandomNumber();
    while ((rimgindex==limgindex)||(rimgindex==mimgindex)) {
     rimgindex=myRandomNumber();   
    }
    Product.allproducts[rimgindex].shown++;
   
    shownpictures=[limgindex,mimgindex,rimgindex];

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


        for (let index = 0; index < Product.allproducts.length; index++) {
            votesarr.push(Product.allproducts[index].votes);
            shownarr.push(Product.allproducts[index].shown);
        }
        updatestorage();
        showchart();
        jsbtn.removeEventListener('click',showthevotes);
        }
       
        parent.removeEventListener('click',clickshandler);
        
    }
 
}
//////////////////////////////////////////////////////////////////////////////
console.log(namesarray);

    function showchart() {
        const data = {
            labels: namesarray,
            datasets: [{
              label: 'votes',
              data:votesarr,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            },
            {
                label: 'shown',
                data:shownarr,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }
        ]
          };
        
          const config = {
            type: 'bar',
            data: data,
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };
          
          var myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
    }

    getitems();