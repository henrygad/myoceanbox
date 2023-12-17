const form = document.getElementById('js-contact-form')
const contactname = document.getElementById('fullname')
const contactphone = document.getElementById('phone')
const contactemail = document.getElementById('email')
const contactcompany = document.getElementById('cp_nm')
const contactmessage = document.getElementById('message')
const invalidephone = document.getElementById('invalidephone')
const invalideemail = document.getElementById('invalideemail')

const regexPhone = /^[\\+]?[ (]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


function formHandler(e){
       e.preventDefault()
       const validephone = validationphone() 
       const valideemail = validationemail()
       if(valideemail === true &&
         validephone === true){
            submitForm()
            contactname.value = null
            contactphone.value = null
            contactemail.value = null
            contactcompany.value = null 
            contactmessage.value = null
       }else{
         swal("Error", "You clicked the button!", "error");
       }

}

const validationemail = value => {
    const resultEmail = contactemail.value.match(regexEmail)

    if(resultEmail){
        contactemail.style.borderColor = 'rgb(102, 102, 102)'
        invalideemail.style.display = 'none'

        return true
        
    } else{
        contactemail.style.borderColor = 'red'
        invalideemail.style.display = 'block'
        console.log('hey')

        return false
    }

}
const validationphone = value => {
    const resultPhone = contactphone.value.match(regexPhone)

    if(resultPhone){
        contactphone.style.borderColor = 'rgb(102, 102, 102)'
        invalidephone.style.display ='none'

        return true
    } else{
        contactphone.style.borderColor = 'red'
        invalidephone.style.display ='block'
        console.log('hey')

        return false
    }

}

const submitForm = value =>{
    const bodyms =  `
    Name: ${contactname.value} 
    <br/> Phone No.: ${contactphone.value}
    <br/> Email: ${contactemail.value}
    <br/> Company Name: ${contactcompany.value}
    <br/> Message: ${contactmessage.value}
  `
        Email.send({
            SecureToken : "6091b184-3660-41b6-9675-28c9fadf2e53",
            To : 'zeromilegadgets.uni@gmail.com',
            From : "contact@myoceanbox.com",
            Subject : contactname.value,
            Body : bodyms
        }).then(
        message => { swal("Sent!", "You clicked the button!", "success");
        }
        )

}



contactemail.addEventListener('change', validationemail)
contactphone.addEventListener('change', validationphone)
form.addEventListener('submit', formHandler)
