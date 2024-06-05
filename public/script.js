// console.log(io)
const socket = io('http://localhost:4000',{
    auth:{
        secret:"This is a secret!"
    },
    query:{
        meaningOfLife:42
    }
})

socket.on("welcome",data=>{
    console.log(data);
    socket.emit("hi",[6,7,8,9])
})

socket.on("helloAllClient",data=>{
    console.log("New Client joined the server",data)
})

socket.on("messageFormAllClientServer",newMessages=>{
    document.getElementById("messages").innerHTML+=`<li>${newMessages}</li>`
})

document.getElementById('message-form').addEventListener("submit",(e)=>{
    e.preventDefault()
    const newMessage = document.getElementById("user-message").value;
    document.getElementById("user-message").value = "";
    socket.emit("messageFormClientServer",newMessage)
})