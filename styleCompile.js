export default function styleTrans(styleJson){
  let style = ""
  for(let i = 0; i < Object.keys(styleJson).length; i++){
    // console.dir(JSON.stringify(Object.values(styleJson)[i]))
    
      style += `${Object.values(Object.keys(styleJson))[i]} ${JSON.stringify(Object.values(styleJson)[i]).replace(/\"/g, "").replace(/\,/g , ";")}`
    }
    return style
}