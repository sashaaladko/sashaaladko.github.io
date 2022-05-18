var modal = document.getElementById('myModal');
document.querySelector('.ok').onclick = createFolder;

function createFolder() {
    let name = document.querySelector('.input-name').value;
    document.querySelector('.source-4').innerHTML = name;
    document.querySelector('.target-4 h1').innerHTML = name;
    modal.style.display = "none";

}