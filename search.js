document.querySelector('.inputuser').oninput = function(){
    let val = this.value.trim();
    let list = document.querySelectorAll('.users li');
    if(val != '') {
        list.forEach(function(elem){
            if(elem.innerText.search(val)==-1){
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        list.forEach(function(elem){
                elem.classList.remove('hide');
        });
    }
}