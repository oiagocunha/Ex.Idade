function validar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (formAno.value < 0 || formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[Error] Verifique o ano mencionado e tente novamente!')
    } else {
        let formGen = document.getElementsByName('radgen')
        let idade = ano - Number(formAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formGen[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                // Criança
                img.setAttribute ('src', './Images/Criança-Menino.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute ('src', './Images/Jovem-Homem.jpg')
            } else if (idade < 59) {
                // Adulto
                img.setAttribute ('src', './Images/Adulto-Homem.jpg')
            } else {
                // Idoso
                img.setAttribute ('src', './Images/Idoso-Homem.jpg')
            }
        } else if (formGen[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                // Criança
                img.setAttribute ('src', './Images/Criança-Menina.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute ('src', './Images/Jovem-Mulher.jpg')
            } else if (idade < 59) {
                // Adulto
                img.setAttribute ('src', './Images/Adulto-Mulher.jpg')
            } else {
                // Idoso
                img.setAttribute ('src', './Images/Idoso-Mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }



}