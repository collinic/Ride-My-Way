// Get the modal
let createRequest = document.getElementById('requestModal');

// Get the button that opens the modal
let createBtn = document.getElementById("createBtn");

// Get the <span> element that closes the modal
let closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
createBtn.addEventListener('click', createModal);
function createModal(){
    createRequest.style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
closeBtn.addEventListener('click', closeModal);
function closeModal(){
    createRequest.style.display = "none";
}

// Close the modal When the user clicks anywhere outside
window.addEventListener('click', outsideCloseModal);
function outsideCloseModal(){
    if(event.target == createRequest){
        createRequest.style.display = "none";
    }
}
