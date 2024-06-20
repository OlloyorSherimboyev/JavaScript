function getelement() {
    const ism = document.getElementById("email")
    const ttt = ism.value
    const ppp = document.getElementById("parol")
    const password = ppp.value
    
    
    if (ttt === "olloyor@gmail.com") {
        console.log("emailni to'g'ri kiritdinggiz");
    }
    else{
        return alert("emailni noto'g'ri kiritdinggiz");
    }
    if(password === "12345"){
        console.log("parolni to'g'ri kirittingiz");
    }
    else{
        return alert("parolni hato kiritdinggiz")
    }
    if (ttt === "olloyor@gmail.com" && password === "12345") {
        alert("akkountingizga hush kelibsiz")
    }
    else{
        return alert("email va parol hato")
    }
}