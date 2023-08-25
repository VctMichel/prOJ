function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector('#profile img')

    //substituir a imagem
    if(html.classList.contains('light')) {
        //se estiver em light mode, usar a imagem light
        img.setAttribute("src", "./avatar-light.png")
    }else {
        //se tiver sem light mode, usar img normal
        img.setAttribute("src", "./avatar.png")
    }
}