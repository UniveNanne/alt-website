let websiteWidth = 100


window.onresize = function () {
  // resize website box content
  
  document.getElementById("background").style.width = (window.innerWidth - 37)+"px"
  document.getElementById("background").style.height = ((window.innerHeight - 17) + websiteWidth)+"px"
}
window.onresize()
