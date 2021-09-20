
window.onload = function () {
    //This will see if the form should be submitted or not after the validation
    var canBeSubmit = false;

    //onclick event whenever the "submit form" button is clicked
    document.getElementById("submitBtn").onclick = function validateEmail() {

        //This will make sure that there won't be a brief moment that the error message was display before being submitted
        //after pressing the close button option
        if (!canBeSubmit) { 
            var email = document.getElementById("userEmail").value;
            
            //Simple regex for email validation
            var re = /\S+@\S+\.\S+/;

            //check if email is empty/null
            if (email == null || email == "") {
                document.getElementById("alertEmailMess").innerHTML = ("Can't be empty. Please re-enter!");
            } else {
                //check if email is valid, if it is invalid, the form wont be submitted
                if (!re.test(email)) {
                    document.getElementById("alertEmailMess").innerHTML = ("Invalid email. Please re-enter!");
                }
                //if email is valid, the form will be submitted
                else {
                    canBeSubmit = true;
                }
            }
        }
        


        return canBeSubmit;
    };

    //onclick event to dismiss the dialogue and enable to form to be submit regardless of the validation
    //user can pre-clicked this so that the form will always ignore whatever the user might enter inside the email field
    document.getElementById("closeBtn").onclick = function dismissDialogue() {
        //erase the error message
        document.getElementById("alertEmailMess").innerHTML = "";
        //make it so that the form will be able to be submitted
        canBeSubmit = true;
    }
}

