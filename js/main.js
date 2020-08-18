window.onload = function() {
    let menu_1 = document.getElementById("menu_01");
    menu_1.onclick = function() {
      switchColor("menu_01");
      changeBackground("menu_01");
      addContent("menu_01");
    }
    let menu_02 = document.getElementById("menu_02");
    menu_02.onclick = function() {
      switchColor("menu_02");
      changeBackground("menu_02");
      addContent("menu_02");
    }
    let menu_03 = document.getElementById("menu_03");
    menu_03.onclick = function() {
      switchColor("menu_03");
      changeBackground("menu_03");
      addContent("menu_03");
    }
 }

let switchColor = function(option){
 
  switch(option) {
    case "menu_01":
        $(".menu-box").removeClass('on');
        $("#menu-box-01").addClass('on');
      break;
    case "menu_02":
        $(".menu-box").removeClass('on');
        $("#menu-box-02").addClass('on');
      break;
    case "menu_03":
        $(".menu-box").removeClass('on');
        $("#menu-box-03").addClass('on');
      break;
  }
}
let changeBackground = function(option) {
  let banner = document.getElementById("banner_text");
  let textContent = document.getElementById("banner_text_node");
  let textNode = document.createElement("div");
  
  textNode.setAttribute("id", "banner_text_node");

  if(textContent){
    banner.removeChild(textContent);
    banner.appendChild(textNode);
  }

  switch(option) {
    case "menu_01":
      $("#main_banner").css('background-image', 'url(img/main-banner-1@3x.png)');
      $("#banner_text_node").append("<h2>감염병 예방을 위한</h2><h1>올바른 손씻기</h1>");
      break;
    case "menu_02":
      $("#main_banner").css('background-image', 'url(img/main-banner-2@3x.png)');
      $("#banner_text_node").append("<h3>감염병 예방은 내손으로</h3><h2>올바른 손씻기 6단계</h2><h5>흐르는 물에 비누로 <strong>30초 이상!</strong></h5>");
      $("#banner_text_node > h2").css({'top': '45%', 'color':'#1b4092' });  
      $("#banner_text_node > h5").css({'color':'#1b4092', 'top': '62%'});
      $("#banner_text_node > h5 > strong").css({'color':'#e64d12'});
      break;
    case "menu_03":
      $("#main_banner").css({'background-image':'url(img/main-banner-3@3x.png)', 'background-color':'#f9f1ea'});
      $("#banner_text_node").append("<h3>감염병 예방</h3><h1>함께해요!</h1><h5>#올바른손씻기캠페인</h5>");
      $("#banner_text_node > h3").css({'top': '35%', 'left':'73%', 'color':'#ecab2a'});
      $("#banner_text_node > h1").css({'top': '55%', 'left':'70%', 'color':'#4c0eaa'}); 
      $("#banner_text_node > h5").css({'top': '75%', 'left':'70%', 'color':'#4c0eaa'}); 
      break;
  }
}

let addContent = function(option){
  let mainContent = document.getElementById("main_content");
  let content = document.getElementById("inner_content");
  let div = document.createElement("div");

  div.setAttribute("id", "inner_content");
  
  if(content) {
    mainContent.removeChild(content);
    mainContent.appendChild(div);
  }

  switch(option) {
    case "menu_01":
      $("#inner_content").load("sub.html #cleanson_intro");
      break;
    case "menu_02":
      $("#inner_content").load("sub.html #cleanson_step");
      break;
    case "menu_03":
      $("#inner_content").load("sub.html #cleanson_donation");
      break;
  }
}