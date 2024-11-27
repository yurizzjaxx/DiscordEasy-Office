japiUser("933891035216613446", function(data) {
  //alert("Sorry Welcome");
  var api = data;
  var uid = api.id;
  var pic = api.avatar;
  var name = api.global_name;
  var user = api.username;
  let getImage;
  let getImage_high;
  if (pic) {
    getImage_high = getMediaUrl() + getAvatar(uid, pic, null, 1024)
    getImage = getMediaUrl() + getAvatar(uid, pic, null, 128);
  } else {
    getImage = getCdnUrl() + getAvatar(null, null, 1);
  }
  suc(getImage, name, user, getImage_high)
  
}, function(er) {
  
})



function suc(imageUrl, name, userName, imageUrlHigh) {
  document.getElementById("_d").remove()
var addr = document.createElement("table");
addr.id = "_d"
addr.className = "_c"

var tr = document.createElement("tr");
var td = document.createElement("td");
var td2 = document.createElement("td");
var img = document.createElement("img");
img.id = "_img_d"
img.src = imageUrl;
img.width = "100"
//img.style.opacity = "0.7"
img.style.borderRadius = "100px"
//img.style.filter = `brightness(150%)`
img.onclick = function (e) {
fileDownloadURL(imageUrlHigh, userName)
}
var p1 = document.createElement("h3")
p1.textContent = name;
var p2 = document.createElement("h4")
p2.textContent = `@${userName}`;
var p3 = document.createElement("h4")
p3.textContent = ""
tr.appendChild(img)
tr.appendChild(td)
td.appendChild(p1)
td.appendChild(p2)
td2.appendChild(p3)
tr.appendChild(td2)

addr.createTBody().appendChild(tr)
document.body.appendChild(addr)
document.title = name;
console.log(addr)
}

var addr = document.createElement("table")
addr.id = "_d"
var text = document.createElement("h2")
text.textContent = "Carregando...";

addr.createTBody().appendChild(text)
document.body.appendChild(addr)




function fileDownloadURL(url, name) {
  fetch(url).then(res => {
    return res.blob()
  }).then(dataObj => {
  const _read = new FileReader()
  
  _read.addEventListener("load", (e) => {
    var _base64 = e.target.result;
    var _link = document.createElement("a");
    _link.href = _base64;
    _link.download = name;
    _link.click()
  })
  _read.readAsDataURL(dataObj)
 })
}
