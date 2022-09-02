export default function thumnail(arr, imgArr, style){
  let thum = "<main>";
  arr.forEach((item, index)=>{
    if(index <3){
      thum += `<div><img src=${imgArr[index]}>
      <div>
        <h1>consectetur adipiscing elit</h1>
        <div>title : ${item.title}</div>
        <div>author :${item.author}</div>
        <p>${item.summary[0]}</p>
        <p>${item.summary[1]}</p>
      </div>
      </div>`
    }
  })
  thum += "</main>"
  return thum
}