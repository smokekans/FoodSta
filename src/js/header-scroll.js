// window.onscroll = function () {
//     if (window.screen.width >= 768) {
//       scrollY <= 70
//         ? document.getElementById('header').classList.remove('header-scroll')
//         : document.getElementById('header').classList.add('header-scroll');
//     } else {
//         if(  scrollY <= 120){
//             document.getElementById('header').classList.remove('header-scroll')}
//         else{
//             document.getElementById('header').classList.add('header-scroll');
//         }
    
        
        
//     }
//   };

  window.onscroll = function () {
    if (window.screen.width >= 1200) {
        if(  scrollY <= 70){
            document.getElementById('header').classList.remove('header-scroll')
        }
        else{
            document.getElementById('header').classList.add('header-scroll');
        }
    } else {
        if(  scrollY <= 120){
            document.getElementById('header').classList.remove('header-scroll')
        }
        else{
            document.getElementById('header').classList.add('header-scroll');
        }
    }
  };