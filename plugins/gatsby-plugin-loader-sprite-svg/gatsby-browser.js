const request = new XMLHttpRequest()

request.onload = () => {
  const wrapper = document.createElement("div")
  wrapper.id = "svg-sprite"
  wrapper.innerHTML = request.responseText
  wrapper.style.display = "none"
  document.body.insertBefore(wrapper, document.body.childNodes[0])
}

request.open("GET", "/icons/sprite.svg", true)
request.send()
