const form = document.querySelector("form");
const email = document.getElementById("email");
const errormessage = document.getElementById("email-error");
const dismiss = document.getElementById("dismiss");
const card = document.querySelector(".card");
const successCard = document.querySelector(".success-card");
const recipient = document.getElementById("recipient")


const handleSubmit = (e) => {
    
    
    if(email.value=="" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        
        errormessage.textContent = "Valid email required";
        email.classList.add("error");
    }
    else{
        errormessage.textContent = "";
        email.classList.remove("error");
        card.classList.add("hidden");
        successCard.classList.remove("hidden");
        recipient.textContent=email.value;
        email.value="";
        
    }
    e.preventDefault();
}

const handleDismiss = (e) => {
    card.classList.remove("hidden");
    successCard.classList.add("hidden");
}

form.addEventListener('submit',handleSubmit);
dismiss.addEventListener('click',handleDismiss);