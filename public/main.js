getCss.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./style.css')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
            let style=document.createElement('style')
            style.innerHTML=request.response
            document.head.appendChild(style)
            }else {
                alert('加载css失败')
            }
        }
    }
    request.send()
}
getHtml.onclick=()=>{
    const request= new XMLHttpRequest()
    request.open('get','./2.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                let div =document.createElement('div')
                div.innerHTML=request.response
                document.body.appendChild(div)
            }else{
                alert('加载html失败')
            }
        }
    }
    request.send()
}
getJs.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','./3.js')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                let script = document.createElement('script')
                script.innerHTML=request.response
                document.body.appendChild(script)
            }
            else{
                alert('加载js失败')
            }
        }
    }
    request.send()
}
getXml.onclick=()=>{
    const request =new XMLHttpRequest()
    request.open('get','./4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                console.log(request.responseXML) //dom对象
                let text =request.responseXML.getElementsByTagName('warning')[0].textContent
                text=text.trim()
                document.body.append(text)
                console.log(text)
               
            }else{
                alert('加载xml失败')
            }
        }
    }
    request.send()
}
getJson.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','./5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                console.log(typeof(request.response))
                console.log(request.response)
                const object=JSON.parse(request.response)
                console.log(typeof object)
                console.log(object)
                myName.textContent=object.name
            }else{
                alert('加载失败')
            }
        }
    }
    request.send()
}
let n=1
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get',`../db/page${n+1}.json`)
    request.onreadystatechange=()=>{
        if(request.readyState ===4){
            if(request.status>=200&&request.status<300){
                const arr = JSON.parse(request.response)
                arr.forEach(element => {
                    const li =document.createElement('li')
                    li.innerText=element.id
                    idList.appendChild(li)
                })
                n=n+1
            }else{
                alert('加载失败')
            }
        }
    }
    request.send()
}