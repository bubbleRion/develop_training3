// 임포트
import objData from "./trainingData.js"
import head from "./header.js"
import thum from "./thumnail.js"
import event from "./event.js";
import styleTrans from "./styleCompile.js";
import styleData from './styleData.json' assert{type: "json"};
// 작업 영역
const root = document.body
// 객체구조 분해로 배열 추출
const {header, thumnailData} = objData
// 이미지 상대경로 배열
const imageURL = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg", "./images/image3.jpg"]
// 헤더부분
root.innerHTML += head(header)
// 메인 썸네일 부분
root.innerHTML += thum(thumnailData, imageURL)
// 다크모드
root.innerHTML += `<nav>DARK</nav>`
const nav = document.body.children[6]
event(root, nav)
// style 일괄 적용
const headStyle = document.createElement("style")
headStyle.innerHTML = styleTrans(styleData);
document.head.append(headStyle)