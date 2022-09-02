export default function event(tagName, eventTarget, darkMode){
  let isDark = true
  eventTarget.addEventListener("click", ()=>{
    if(isDark){
      tagName.style.backgroundColor = "black"
      tagName.style.color = "white"
      isDark = !isDark
      eventTarget.innerHTML = "LIGHT"
    }
    else{
      tagName.style.backgroundColor = "white"
      tagName.style.color = "black"
      isDark = !isDark
      eventTarget.innerHTML = "DARK"
    }
  })
}