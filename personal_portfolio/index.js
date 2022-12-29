let id = (value)=> {
    return document.getElementById(value)
}
let formvalidation = ()=>{
    let name = id('name')
    let email = id('email')
    let textarea = id('textarea')
    let errormsg = id('errormsg')
    errormsg.style.color = "red"
    if(name.value === "") {
        errormsg.innerHTML = "Please enter your name"
        return false;
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        errormsg.innerHTML = "Please enter a valid email"
        return false;
    }else if(email.value === "") {
        errormsg.innerHTML = "Email is requred"
        return false;
    }else if(textarea.value === "") {
        errormsg.innerHTML = "Message is required"
        return false;
    }else{
        return true
    }
}