const mainPic=document.getElementById("mainPic");
const imgDetail=document.querySelectorAll(".imgDetail");
const btnDetail=document.querySelectorAll(".btnDetail")

imgDetail.forEach(image => {
    image.addEventListener('click', function() {
        mainPic.src=image.src;
    })
})

btnDetail.forEach(color => {
    color.addEventListener('click', function() {
        const newImage=color.getAttribute("data-image");
        mainPic.src=newImage
    })
})
