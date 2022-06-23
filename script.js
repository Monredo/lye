function changeFont(font) {
  // body
  document.getElementById('content').style.fontFamily=font.value;
}

function changeSize(n){
  var s=document.getElementById('content');
  s.style.fontSize=n.value+'px';
}

functionBold() {
  var bol=document.getElementById('content').style.fontWeight;
  
  if(bol=='normal') {
    document.getElementById('content').style.fontWeight='bold';
  }
  
  else {
    document.getElementById('content').style.fontWeight='normal';
  }
}
