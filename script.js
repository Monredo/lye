function changeFont(font) {
  // body
  document.getElementById('content').style.fontFamily=font.value;
}

function changeSize(n){
  var s=document.getElementById('content');
  s.style.fontSize=n.value+'px';
}
