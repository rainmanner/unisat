
let click_me_btn = document.querySelector("#__next > div.Header_header__R_kkv > div.Header_right__R1PDz > div")


let first_popup = document.querySelector("#__next > div.sc-bdVaJa.LPcxt")


click_me_btn.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}




function loadings() {
    var a =  setTimeout(function () {
        loading.innerHTML = "Initializing.";
      }, 1)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing..";
      }, 500)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing...";
      }, 1000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing....";
      }, 2000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing.....";
      }, 3000)

      var a = setTimeout(function() {
        loading.innerHTML = "Error Connecting.."
        connect.style.display = "flex"
      }, 4000)
     
    }
    