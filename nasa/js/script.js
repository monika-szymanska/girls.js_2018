let dataUrl = "https://api.nasa.gov/planetary/apod?api_key=nFKkTmdALNCKNIEKFSnJIg7TWjozsyq8ksYaMuqi";
let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nFKkTmdALNCKNIEKFSnJIg7TWjozsyq8ksYaMuqi";

let gallery = document.getElementById('content');
    
function changeBackground(imageURL){
    document.body.style.backgroundImage = `url('${imageURL}')`
};
function getPicture() {
    fetch(dataUrl)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data.hdurl);
        changeBackground(data.hdurl);
        });
}

getPicture();

function createGallery(dataList) {
    for(let i=0; i < 9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i*10].img_src;
        img.src = imgPath;
        gallery.appendChild(img);
    }
}

function getMarsPicture() {
fetch(urlMars)
    .then((resp) => {
    return resp.json();
})
    .then((data) => {
    let pictureList = data.photos;
    createGallery(pictureList);
})
}

getMarsPicture();


