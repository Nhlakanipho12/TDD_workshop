document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('h1');
    var button = document.addEventListener('click', function() {
        h1.textContent = Number(h1.textContent) +1
    });
})