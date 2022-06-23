function getInfo(num){
fetch(`${URL}${num}/`)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        const name = document.querySelector('p')
        img.src = data.image;
        name.innerHTML = data.name;
    });

}
const URL = 'https://rickandmortyapi.com/api/character/';
var character = 1;
var count = 0;
const getCount = 
    fetch (URL)
        .then(res => res.json())
        .then(data => {
           count = data.info.count;
        });



getInfo(character);

const prev = document.getElementById('prev');
const next = document.getElementById('next');
prev.addEventListener("click", () => { 
    character -= 1;
    if(character <= 0){
        character = count;
    }
    getInfo(character);
});
next.addEventListener("click",  () => { 
    character += 1;
    if(character >= count){
        character = 1;
    }
    getInfo(character);
});

