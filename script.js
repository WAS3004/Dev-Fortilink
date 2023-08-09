 function toggleMode () {

     const html = document.documentElement
     html.classList.toggle ('dark')

    //pegar a tag img 
    const img = document.querySelector("#profile img")


            //substituir a imagem          
   if (html.classList.contains('dark')) {
        //se tiver dark mode, adicionar a imagem dark

        img.setAttribute ("src", "./assets/FortilinkDark.png")

    } else {
        //se tiver light mode, manter a imagem 
        img.setAttribute ("src", "./assets/Fortilink_Light.jpg")
    } 

}

toggleMode ()