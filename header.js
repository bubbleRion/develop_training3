export default function header(arr, style){
  let head = `<header><ul>`;
  arr.forEach((item)=>{
    head += `<li>${item}</li>`
  })
  head += "</ul></header><hr>"
  return head
}