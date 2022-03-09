//add element 
//compteur ajout +1 

let plusBtn = document.getElementsByClassName('btn-plus');

console.log(plusBtn);

for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
    totalprice()
  });

}


//diminuer 

let minusBtn = document.getElementsByClassName('btn-moins');
for(let minus of minusBtn){

minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
}
totalprice()
})

};


//delete:


let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i <  deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
        totalprice()
       
    })
 
}


//style heart 
let hearts = document.getElementsByClassName('fa-heart');
console.log(hearts)
//
for (let heart of hearts){

  heart.addEventListener('click', function(){

 if ( heart.style.color === "grey"){
   heart.style.color = "red"
 } else {
   heart.style.color ="grey"
 }



  })

}
//Total Price
function totalprice(){
    var  prix = document.getElementsByClassName('prx');
var  QT =document.getElementsByClassName('quantity');
var sum = 0
for (let i=0;i<prix.length;i++){

    sum += QT[i].innerText*prix[i].innerText;
}
   document.getElementById('prix-total').innerText = sum;
}

