function spinner(){
    return Math.floor(Math.random()*9);
}
let arr=["War","Uno Spin","Draw Red","Draw Blue","Trade Hands","Almost UNO","Discard Number","Discard Color","Show Hand"]
let color=["lightgreen","coral","red","grey","magenta","pink","orange","cyan","yellow"]
$(()=>{
    btn=$("#btn")
    txt=$("#txt")
    btn.click(()=>{
        let num=spinner()
        let cl=color[num]
        txt.text(arr[num])
        $("#bg").css({
            "background-color":cl
        })
    })
})