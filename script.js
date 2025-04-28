function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar tag img
  const img = document.querySelector("#profile img") // Certifique-se de que o seletor está correto

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se tiver sem light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
