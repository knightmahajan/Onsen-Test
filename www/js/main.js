var popover;
var firstRun=1;

window.setImmediate(function() {
  var myClasses = document.querySelectorAll('.my-class'),
    i = 0,
    l = myClasses.length;

  for (i; i < l; i++) {
    myClasses[i].style.display = 'none';
  }
},9000);

// window.setImmediate(function() {
//   var myClasses = document.querySelectorAll('.my-class');
//   var i =0;
//   for (i; i < myClasses.length; i++) {
//     myClasses[i].style.display = 'visible';
// }
// });

ons.ready(function() {
     console.log("Onsen UI is ready!");
});

setInterval( function() {
  if(document.getElementById('carousel').getActiveCarouselItemIndex == 3)
  {
     document.getElementById('carousel').setActiveCarouselItemIndex = 0;
     document.getElementById('carousel').next();
  }
  else
  {
    document.getElementById('carousel').next();
  }
} , 3000);


document.addEventListener("show", function(event){
    if(event.target.id=='pgHome') {
        if(!Boolean(firstRun)){
            localStorage.removeItem("currentChapter");
        }            
        if (localStorage.getItem("currentChapter") !== null && Boolean(firstRun)) {
            firstRun=0;
            document.getElementById('mainNavigator').pushPage(''+localStorage.getItem('currentChapter'));
        } 
    }
    if(event.target.id=='pgContent') {           
        if (localStorage.getItem("currentCarousel") !== null) {
            if($.isNumeric(localStorage.getItem("currentCarousel"))){
                document.getElementById('bookCarousel').setActiveCarouselItemIndex(localStorage.getItem('currentCarousel'));
            }
        } 
    }
});

document.addEventListener('postchange', function(ev) {
    localStorage.setItem("currentCarousel",ev.carousel._lastActiveIndex);
 });

        

// ons.createPopover('search.html').then(function(element) {
//   popover = element});

// function show(id) {
//   popover.show(id);
//   document.getElementById("txtSearch").focus();
// };

// function goSearch(text){
//     popover.hide();
//     var src_str = $(".content").html();
//     var term = text;
//     term = term.replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*");
//     var pattern = new RegExp("("+term+")", "gi");
    
//     src_str = src_str.replace(pattern, "<mark>$1</mark>");
//     src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"$1</mark>$2<mark>$4");
    
//     $(".content").html(src_str);   
// }

// function searches() {
// $("#pgHome, #courses").on("keyup", function() {
//     var g = $(this).val().toLowerCase();
//     $(".fbbox .fix label").each(function() {
//         var s = $(this).text().toLowerCase();
//         $(this).closest('.fbbox')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
//     });
// });
// }

    // $(document).on('click' , '#searches' , function(){
    //     $(".zmdi zmdi-search").css([
    //         display : "inline",
    //         margin-right : "0.8em"
    //     ]);
    // });


function updateResult(query) {
	let resultList = document.querySelector(".result");
  document.getElementById('searches').style.display="inline";
	resultList.innerHTML = "";

	arr.map(function(algo){
		query.split(" ").map(function (word){
			if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
				resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
			}
		})
	})
}



function goToChapter(chapter){
    document.getElementById('mainSplitter').left.toggle();
    document.getElementById('mainNavigator').pushPage(chapter);
    localStorage.setItem("currentChapter",chapter);
    firstRun=0;
}

// function goToChap(chap)
// {
//     document.getElementById('mainNavigator').pushPage(chap);
// }

function login () {
  
    if( document.getElementById('user') != 'admin' && document.getElementById('pass') != '2017mLc$Nity@')
    {
            ons.notification.alert({
              message : 'This dialog was created with ons.notification'
            });
            document.getElementById('mainNavigator').pushPage('success.html');
        // setTimeout(function(){
        //     document.getElementById('mainNavigator').pushPage('success.html ');
        // } , 2000); 
    }
    
    else
    {
      ons.notification.alert({
          message: 'Invalid UserName or Password !'
      });
    }
}


document.addEventListener('onchange', function(event) {     //tabbar 
  document.querySelector('.center')
    .innerHTML = event.tabItem.getAttribute('name');
});


function showModal() {
  var modal = document.querySelector('ons-modal');
  modal.show();
  setTimeout(function() {
    modal.hide();
  }, 3000);
}


// input.onfocus = function () {
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
// }

 $(document).ready(function() {
     document.ontouchmove = function(e){
          e.preventDefault();
          }
 });


// var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange  = function() {
//   if (this.readyState == 4 && this.status  == 200) {
//      console.log(this.responseText);
//      document.getElementsByName("oin").innerHTML = this.responseText;
//   }
// };
//   xhttp.open("GET", " http://stage.api.mylearningcube.com/v1/coursetype", true);
//   xhttp.send(null);



