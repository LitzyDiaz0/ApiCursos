
let data=[
{
    img:'../public/img/img1.PNG',
    categoria: "Categoria1",
    tittle: "Nombre del Curso1",
    describe: 
    "Descripcion1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum, assumenda numquam amet suscipit, quia quasi adipisci tenetur tempora reiciendis aperiam?",
    precio:'$20.99'
},
{
    img:'../public/img/img2.PNG',
    categoria: "Categoria2",
    tittle: "Nombre del Curso2",
    describe: "Descripcion2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum, assumenda numquam amet suscipit, quia quasi adipisci tenetur tempora reiciendis aperiam? ",
    precio:'$30.99'
},
{
    img:'../public/img/img3.jpg',
    categoria: "Categoria3",
    tittle: "Nombre del Curso3",
    describe: "Descripcion3 Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptates? Ducimus, ipsum, assumenda numquam amet suscipit, quia quasi adipisci tenetur tempora reiciendis aperiam?",
    precio:'$80.99'
},
{
    img:'../public/img/img3.PNG',
    categoria: "Categoria4",
    tittle: "Programando en PHP",
    describe: "Descripcion3 Lorem ipsum dolor sit amet consectetur adipisicing elit.numquam amet suscipit, quia quasi adipisci tenetur tempora reiciendis aperiam?",
    precio:'$100.99'
},

];

const introduce =document.querySelector(".introduce");
const ordinalNumber= document.querySelector('.ordinal-number');

introduce.innerHTML="";
ordinalNumber.innerHTML="";

for (let i=0; i<data.length; i++){
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
            <h5 class="categoria" style="--idx: 0">${data[i].categoria}</h5>
            </span>
            <span>
                <h1 class="tittle" style="--idx: 1">${data[i].tittle}</h1>
            </span>
            <span>
                <p class="describe" style="--idx: 2">${data[i].describe}</p>
            </span>
            <span>
                <p class="price" style="--idx: 3">${data[i].precio}</p>
            </span>
            <span>
                <button class="discover-button" style="--idx: 4">Ver más</button>
            </span>
        </div>
    `;
    ordinalNumber.innerHTML += `<h2>0${i+ 1}</h2>`
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper =document.querySelector(".thumbnail-list .wrapper");

thumbnailListWrapper.innerHTML += `
    <div class="thumbnail zoom">
        <img src="./img/${data[0].img}" alt="">
    </div>
`;
for (let i=1; i<data.length; i++){
    thumbnailListWrapper.innerHTML += `
        <div class="thumbnail" style="--idx: ${i - 1}">
            <img src="./img/${data[i].img}" alt="">
        </div>
    `;
}

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex= 0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled=true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);

    for(let i=2; i<thumbnailListWrapper.childElementCount; i++){
        thumbnailListWrapper.children[i].style= `--idx: ${i-2}`;
    }

    if(currentIndex < data.length - 1){
        currentIndex++;
    }
    else currentIndex = 0;
    for (let  i = 0; i< data.length ; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent= `0${currentIndex +1}`

})

//Carrucel movil
const carouselImg = document.getElementById('carousel-img');
// Función para cambiar la imagen
function changeImage(direction) {
if (direction === 'next') {
    currentIndex = (currentIndex + 1) % data.length;
} else {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
}
carouselImg.src =  data[currentIndex].img;
}

document.getElementById('prev').addEventListener('click', () => {
    changeImage('prev');
});

document.getElementById('next').addEventListener('click', () => {
    changeImage('next');
});

carouselImg.src = data[currentIndex].img;

const divMovil = document.getElementById('carousel');
const divPC = document.getElementById('carrucelpc');

function actualizarVisibilidadDivs() {
if (window.innerWidth <= 768) {
    divMovil.style.display = 'block';
    divPC.style.display = 'none';
} else {
    divMovil.style.display = 'none';
    divPC.style.display = 'block';
}
}

window.addEventListener('load', actualizarVisibilidadDivs);
window.addEventListener('resize', actualizarVisibilidadDivs);
