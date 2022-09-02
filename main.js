import objData from "./trainingData.js"
import head from "./header.js"
import thum from "./thumnail.js"
import styleData from './styleData.json' assert{type: "json"};

// const styleData2 = JSON.parse(styleData)
// console.log()

const root = document.body
const headStyle = document.createElement("style")
let style ="";
const {header, title, colorAssets, thumnailData} = objData
const imageURL = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg"]
root.innerHTML += head(header)
root.innerHTML += thum(thumnailData, imageURL)
console.dir(Object.values(Object.keys(styleData))[8])
console.log(Object.keys(styleData).length)
for(let i = 0; i < Object.keys(styleData).length; i++){
console.dir(JSON.stringify(Object.values(styleData)[i]))

  style += `${Object.values(Object.keys(styleData))[i]} ${JSON.stringify(Object.values(styleData)[i]).replace(/\"/g, "").replace(/\,/g , ";")}`
}
console.log(style)
headStyle.innerHTML = style
document.head.append(headStyle)
