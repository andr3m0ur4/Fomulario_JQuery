$(() => {

    // Funções para abrir e fechar formulário
    abrirJanela()
    verificarCliqueFechar()

    $('#form').submit(e => {
        let nome = $('#nome').val()
        let telefone = $('#telefone').val()
        let email = $('#email').val()

        if (!verificarNome(nome)) {
            aplicarCampoInvalido($('#nome'))
            e.preventDefault()
        } else if (!verificarEmail(email)) {
            aplicarCampoInvalido($('#email'))
            e.preventDefault()
        } else if (!verificarTelefone(telefone)) {
            aplicarCampoInvalido($('#telefone'))
            e.preventDefault()
        } else {
            alert('Formulário enviado com sucesso!')
        }
    })

    $('input[type=text], input[type=tel], input[type=email]').focus(e => {
        resetarCampoInvalido($(e.target))
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

// Funções para verificar campos do formulário
function verificarNome(nome) {
    if (nome == '') {
        return false
    }

    // Contando a quantidade de espaços e respectivos valores
    let amount = nome.split(' ').length
    let split_str = nome.split(' ')

    if (amount >= 2) {
        for (let i = 0; i < amount; i++) {
            if (split_str[i].match(/^[A-ZÀ-Ú]{1}[a-zà-ú]{1,}$/)) {
                console.log('nossa condição bateu, podemos dar continuidade')
            } else {
                return false
            }
        }
    } else {
        return false
    }

    return true
}

function verificarTelefone(telefone) {
    if (telefone == '') {
        return false
    }

    if (telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null) {
        return false
    }

    return true
}

function verificarEmail(email) {
    if (email == '') {
        return false
    }

    if (email.match(/^([a-z0-9-_.]{1,})+(@)+([a-z.]{1,})$/) == null) {
        return false
    }

    return true
}

// Funções para estilizar o campo do formulário
function aplicarCampoInvalido(element) {
    element.css({
        'border': '2px solid red',
        'color': 'red'
    })
    element.data('invalido', 'true')
}

function resetarCampoInvalido(element) {
    element.css({
        'color': 'black',
        'border': '1px solid #ccc'
    })
}

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