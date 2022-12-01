function scan(){
    var get = document.getElementById('medscanimage');
    if (get.src.match("medscanimage.PNG")){
        get.src = "medscangif.GIF";
    }
    else{
        get.src = "medscanimage.PNG";
    }
}

function showImage() {
    var img = document.getElementById('medscangif');
    img.style.visibility = 'visible';
}
