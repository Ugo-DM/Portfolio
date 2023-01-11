function destroyInterface() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.transform = 'rotate(' + Math.random() * 360 + 'deg) translate(' + Math.random() * 100 + 'px, ' + Math.random() * 100 + 'px)';
        elements[i].style.transition = 'all 3s';
        elements[i].style.opacity = '0';
    }

    setTimeout(function () {
        window.location.href = 'rebuild.html';
    }, 2000);
}

function rebuildInterface() {
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
     elements[i].style.transform = 'rotate(0deg) translate(0px, 0px)';
    elements[i].style.transition = 'all 3s';
    elements[i].style.opacity = '1';
   
  }
}
