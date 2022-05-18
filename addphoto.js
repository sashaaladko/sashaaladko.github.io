
  
  var saveText = function() {
      var img = document.getElementsByClassName("image")
    var btn = document.getElementsByClassName("btn-add");
    btn.onclick = function ()
    {
        var xhr = new XMLHttpRequest();
    xhr.open("POST", start.html, true);
    }
    var selectionText = getSelectionText();
    document.getElementById("sel").innerHTML = selectionText;
    //пост отправка
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true); //url - адрес, на который надо отправить записку.
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify({
      note: selectionText
    }));
  }