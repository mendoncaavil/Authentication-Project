let encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
}


const DB_users = [];


const resetSignupfields = ()=> {
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("signup_email").value = "";
    document.getElementById("contact_number").value = "";
    document.getElementById("signup_password").value = "";  
    document.getElementById("confirm_password").value = "";  

}       

const resetLoginFields = () => {
    document.getElementById("login_email").value = "";
    document.getElementById("login_password").value = "";

}

const signUp = () =>{
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let email = document.getElementById("signup_email").value;
    let contactNumber = document.getElementById("contact_number").value;
    let password = document.getElementById("signup_password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let tnc = document.getElementById("invalidCheck").checked;
    let error = false;


    if(firstName){
        document.getElementById("firstName_Valid").style.display = "block";
        document.getElementById("firstName_Invalid").style.display = "none";
    }
    else{
        document.getElementById("firstName_Invalid").style.display = "block";
        document.getElementById("firstName_Valid").style.display = "none";
        error = true;
    }  

    if(lastName){
        document.getElementById("lastName_Valid").style.display = "block";
        document.getElementById("lastName_Invalid").style.display = "none";
    }
    else{
        document.getElementById("lastName_Invalid").style.display = "block";
        document.getElementById("lastName_Valid").style.display = "none";
        error = true;
    }

    if(email && email.includes("@") && email.includes(".") && email.lastIndexOf(".") +2 <= email.length && email.indexOf("@")!=0){
        document.getElementById("emailID_valid").style.display = "block";
        document.getElementById("emailID_Invalid").style.display = "none";
    }
    else{
        document.getElementById("emailID_Invalid").style.display = "block";
        document.getElementById("emailID_valid").style.display = "none";
        error = true;
    }

    if(contactNumber.length == 10){
        document.getElementById("contactNo_valid").style.display = "block";
        document.getElementById("contactNo_Invalid").style.display = "none";
    }
    else{
        document.getElementById("contactNo_valid").style.display = "none";
        document.getElementById("contactNo_Invalid").style.display = "block";
        error = true;
    }

    if(password.length >= 8){
        console.log(password);
        document.getElementById("password_valid").style.display = "block";
        document.getElementById("password_Invalid").style.display = "none";
    }
    else{
        document.getElementById("password_valid").style.display = "none";
        document.getElementById("password_Invalid").style.display = "block";
        error = true;
    }

    if(password ===  confirmPassword && confirmPassword.length >= 8 ){
        console.log(confirmPassword);
        document.getElementById("confirmPassword_valid").style.display = "block";
        document.getElementById("confirmPassword_Invalid").style.display = "none";
    }
    else{
        document.getElementById("confirmPassword_valid").style.display = "none";
        document.getElementById("confirmPassword_Invalid").style.display = "block";
        error = true;
    }


    if(tnc){
        document.getElementById("tnc_Valid").style.display = "block";
        document.getElementById("tnc_Invalid").style.display = "none";
    }
    else{
        document.getElementById("tnc_Invalid").style.display = "block";
        document.getElementById("tnc_valid").style.display = "none";
        error = true;
    }



    if(error){
        document.getElementById('signup-alert-fail').style.display = 'block'
        document.getElementById('signup-alert-success').style.display = 'none'
      
      }
      else{
        document.getElementById('signup-alert-success').style.display = 'block'
        document.getElementById('signup-alert-fail').style.display  = 'none'
      }


    if(!error){ 
        alert("Your details have been submitted successfully");
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("signup_email").value = "";
        document.getElementById("contact_number").value = "";
        document.getElementById("signup_password").value = "";
        document.getElementById("confirm_password").value = "";
        document.getElementById("invalidCheck").checked = false;


        document.getElementById("firstName_Valid").style.display = "";
        document.getElementById("lastName_Valid").style.display = "";
        document.getElementById("emailID_valid").style.display = "";
        document.getElementById("contactNo_valid").style.display = "";
        document.getElementById("password_valid").style.display = "";
        document.getElementById("confirmPassword_valid").style.display = "";
        document.getElementById("tnc_Valid").style.display = "";
    }



    // let signupAlertSuccess = document.getElementById("signup-alert-success");
    // let signupAlertFail = document.getElementById("signup-alert-fail");   

    

    let userDetails = {
        firstName,
        lastName,
        email,
        contactNumber,
        password: encrypt(password),
        
    }

    DB_users.push(userDetails);

    console.log(DB_users);

   

    // signupAlertSuccess.style.display = "block";

    resetSignupfields();
}

const loginform = () =>{
    let loginEmail = document.getElementById("login_email").value;
    let loginPassword = document.getElementById("login_password").value;

    let loginAlertSuccess = document.getElementById("login-alert-success");
    let loginAlertFail = document.getElementById("login-alert-fail");


    let currentUser = DB_users.find((user) => user.email === loginEmail && decrypt(user.password) === loginPassword)

    if(currentUser){
        loginAlertSuccess.style.display = "block";
        loginAlertFail.style.display = "none";
    }
    else{
        loginAlertFail.style.display = "block";
        loginAlertSuccess.style.display = "none";
    }

    // console.log(currentUser);

    resetLoginFields();
}

    /*  -   steps:
        - (1) check whether the email (user) exist in the DB.
        - (2) whether the entered password matches with saved password for that user.
    */


        //aditya

const encrypt = (inputPassword) => {
    let encryptedPassword = "";
    for(char of inputPassword){
        encryptedPassword = encryptedPassword + encryptionRule[char];
    }

    return encryptedPassword;
}        


const decrypt = (encryptedPassword) => {
    let decryptedPassword = "";
    let keys = Object.keys(encryptionRule)
    let value = Object.values(encryptionRule);
    for(char of encryptedPassword){
        let requireIndex = value.findIndex(value => value===char)
        decryptedPassword = decryptedPassword + keys[requireIndex];
    }

    return decryptedPassword;   // here decrypted password is actual password.
}        

// console.log(decrypt("Fngln"));
//  console.log(encrypt()); 





