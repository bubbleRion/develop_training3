// import
import objData from "./trainingData.js"
import head from "./header.js"
import thum from "./thumnail.js"
import styleTrans from "./styleCompile.js";
import styleData from './styleData.json' assert{type: "json"};
// 모아모아
const root = document.body
const {header, title, colorAssets, thumnailData} = objData
const imageURL = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg"]
root.innerHTML += head(header)
root.innerHTML += thum(thumnailData, imageURL)
styleTrans(styleData);

