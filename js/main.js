let loader = document.getElementById('load')

window.addEventListener('load', function () {
    loader.style.display = 'none'
})

document.getElementById('play').onclick = function () {
    document.getElementById('vid').style.display='block'
}

closeVideo = function() {
    document.getElementById('vid').style.display ='none';
}
