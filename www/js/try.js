// var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange  = function() {
//   if (this.readyState == 4 && this.status  == 200) {
//      console.log(this.responseText);
//      document.getElementsByName("oin").innerHTML = this.responseText;
//   }
// };
//   xhttp.open("GET", " http://stage.api.mylearningcube.com/v1/coursetype", true);
//   xhttp.send(null);

// import condition from 'promise-conditional';
let x ="";
var y ="";
let responses="";


function loki()
{
        var onscard = document.createElement("ons-card");
        var onslist = document.createElement("ons-list");
        var onslistitem = document.createElement("onslistitem");
        var  img = document.createElement("img");
        var div = document.createElement("div");
        var p = document.createElement("p");
        
        p.setAttribute("position" , "absolute");
        p.setAttribute("width" , "100%");
        p.setAttribute("font-size" , "12px");

        img.setAttribute("width" , "100%");
        img.setAttribute("position" , "absolute");
        img.setAttribute("left" , "0");
        img.setAttribute("top" , "0");

        onscard.setAttribute("position" , "relative");
        onscard.setAttribute("width" , "8.8em");
        onscard.setAttribute("height" , "16em");

        
        img.setAttribute("class" , "imgs");
        p.setAttribute("class" , "ps");
        onslist.setAttribute("class" , "list");
        onslistitem.setAttribute("class" , "listitem");

        onscard.appendChild(img);

        div.setAttribute("class" , "content");
        onslistitem.appendChild(p);
        onslist.appendChild(onslistitem);
        div.appendChild(onslist);

        onscard.appendChild(div);

        for(var i = 1 ; i <= 68 ; i++)
        {
              p.id = ""+i;
        }
        for(var i = 1 ; i <= 68 ; i++)
        {
              img.id = ""+i;
        }
}


function fg()
{
fetch(' http://stage.api.mylearningcube.com/v1/coursetype').then(response => {
      return response.json();
}).then(data => {
        document.getElementById("one").innerHTML = JSON.stringify(data.message);
}).catch(err => {
        console.log(""+err);
});
}

var button = ons._util.createElement("<ons-button> Hello </ons-button>");
document.body.appendChild(button);