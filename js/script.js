$(() => {
    
    abrirJanela()
    verificarCliqueFechar()

})

function abrirJanela() {
    $('.btn').click(e => {
        $('.bg').fadeIn()
        e.stopPropagation()
    })
}

function verificarCliqueFechar() {
    let element = $('body, .close-btn')

    element.click(() => {
        $('.bg').fadeOut()
    })

    $('form').click(e => {
        e.stopPropagation()
    })
}