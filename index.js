var duvidelements = document.querySelectorAll('.duvida')

duvidelements.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})