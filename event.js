export default function event(element){
  element.addEventListener("click", ()=>{
    element.style.transform = `translateX(-100px)`
    element.style.transition = "1s"
  })
}