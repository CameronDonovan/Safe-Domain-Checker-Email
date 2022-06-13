import React from 'react';
import emails from "../dictoniares/Emails.json";

const EmailDetector = () => {
    return (
        <div>
            <p>Safe Domain Checker</p>
            <input className='text' type="email" placeholder='Email Domain (Include @)' onChange={getInputValue} />
            <p id="emailDomain"></p>
        </div>
    );
}

const getInputValue = (event)=>{
    const email = event.target.value;

    for (const name in emails.names) {
        if(name === email) {
            document.getElementById("emailDomain").innerHTML = "Email Domain: " + emails.names[name].name + " Is Trusted";
            return;
        } else {
            document.getElementById("emailDomain").innerHTML = "Email Domain: " + email + " Is Not Trusted";
        }
        if (email === "") {
            document.getElementById("emailDomain").innerHTML = "";
            return;
        }
    }
};

export default EmailDetector;
