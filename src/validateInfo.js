export default function validateInfo(values){
    let errors = {}
    if(!values.username.trim()){
        errors.username = "Username required"
    }

    if(!values.email){
        errors.email = "Email required"
    }else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
        errors.email="Email address is invalid"
    }
    
    if(!values.password){
        errors.password="Password is required "

    }else if(!values.password){
        errors.password="Password is required";
    } else if (values.password.length<6){
        errors.password = "Password needs to be 6 characters or more";
    }
    if(!values.password2){
        errors.password2 ="Password is required"
    }else if (values.password2 !== values.password){
        errors.password2= "Password do not match ."
    }
    if(values.phonenumber.length<10){
        errors.phonenumber="Phone Number must be 10 digits."
    }else if(values.phonenumber.length>10){
        errors.phonenumber="Phone Number do not exceed 10 digits."
    }
    return errors;
}