let loader = document.getElementById('load')

window.addEventListener('load', function () {
    loader.style.display = 'none'
})
if(loader.style.display != 'none') {
document.body.style.background-color = 'black';
};

document.getElementById('play').onclick = function () {
    document.getElementById('vid').style.display='block'
}

closeVideo = function() {
    document.getElementById('vid').style.display ='none';
}
