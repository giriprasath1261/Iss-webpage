var image_tracker = '1';
function change(){
  var image = document.getElementById('circle');
  if(image_tracker=='1'){
    image.src='1.jpeg';
    image_tracker='2';
  }
  else if (image_tracker=='2') {
    image.src='2.jpg';
    image_tracker='3';
  }
  else if (image_tracker=='3') {
    image.src='3.png';
    image_tracker='4';
  }
  else if (image_tracker=='4') {
    image.src='4.jpg';
    image_tracker='5';
  }
  else {
    image.src='5.jpg'
    image_tracker='1';
  }
}

function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    var st = localStorage.clickcount;
    var temp = st.fontsize(5);
    var str = " :likes till now"
    // var str2 = output.fontcolor(red);
    document.getElementById("result").innerHTML = temp + str.fontsize(5);
  }
}
