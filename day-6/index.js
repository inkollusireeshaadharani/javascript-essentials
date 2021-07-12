//var is function scoped
//let is block scoped
let cards=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiPJpx4CA0cUuHBWJSdr1l5_liKsXfJ1CeA&usqp=CAU",
        value:1,
        status:"closed"
    },                                        //object elements
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiPJpx4CA0cUuHBWJSdr1l5_liKsXfJ1CeA&usqp=CAU",
        value:1,
        status:"closed"
    },
    {
       image:"https://cms-assets.tutsplus.com/uploads/users/346/posts/17031/final_image/ironman_final.jpg",
       value:2,
       status:"closed"
    },
    {
        image:"https://cms-assets.tutsplus.com/uploads/users/346/posts/17031/final_image/ironman_final.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/spiderman-films/images/4/4e/CaptainAmerica_AOU_character-art-poster.jpg/revision/latest/scale-to-width-down/2000?cb=20160507011012",
        value:3,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/spiderman-films/images/4/4e/CaptainAmerica_AOU_character-art-poster.jpg/revision/latest/scale-to-width-down/2000?cb=20160507011012",
        value:3,
        status:"closed"
    },
    {
        image:"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/headhuntersholosuite/images/6/68/Baby_Groot.jpg/revision/latest?cb=20170526164642",
        value:5,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/headhuntersholosuite/images/6/68/Baby_Groot.jpg/revision/latest?cb=20170526164642",
        value:5,
        status:"closed"
    },
] 

//Durnsten shuffling algorithm
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));//value of Math.random() lies b/w 0 and 1
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
} 

let cardsCopy=cards;
//sending an otp is example of shuffling

function displayCards(data){
    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status} " onclick="openCard(${index})">

                </div>
            </div>
        
        `
    })
    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
    // console.log(index);
    //console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById("score").innerText=score;
            val1=null;
            val2=null;
            cardCount=1;
        }
        

        //console.log(val1,val2);
    
        else{
            // score=0;
            // val1=null;
            // val2=null;
            // cardCount=1;
            // document.getElementById("score").innerText=score;
            // cards=cardsCopy;
            alert("game over");
            location.reload();
        }
    }

    displayCards(cards);
}


//javascript hoisting--function can be called even if the definition comes after it
