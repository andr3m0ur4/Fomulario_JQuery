$(() => {

    /*
    let frase = 'andre@teste.com.br'

    let verifica = frase.match(/^(.*?)(@)(.*?)$/)

    if (verifica != null) {
        console.log('Encontramos algo')
        console.log(verifica[1])
        console.log(verifica[2])
        console.log(verifica[3])
    } else {
        console.log('Não encontramos nada')
    }
    */
    
    abrirJanela()
    verificarCliqueFechar()

    $('#form').submit(e => {
        e.preventDefault()
        let nome = $('#nome').val()
        let telefone = $('#telefone').val()
        let email = $('#email').val()

        // Contando a quantidade de espaços e respectivos valores
        let amount = nome.split(' ').length
        let split_str = nome.split(' ')

        if (amount >= 2) {
            for (let i = 0; i < amount; i++) {
                if (split_str[i].match(/^[A-ZÀ-Ú]{1}[a-zà-ú]{1,}$/)) {
                    console.log('nossa condição bateu, podemos dar continuidade')
                } else {
                    aplicarCampoInvalido($('#nome'))
                    e.preventDefault()
                }
            }
        } else {
            aplicarCampoInvalido($('#nome'))
            e.preventDefault()
        }

        e.preventDefault()
    })

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

function aplicarCampoInvalido(element) {
    element.css('border', '2px solid red')
    element.data('invalido', 'true')
}