const form = $('#contactForm');
const infos = $('#infos')
let contacts = []

///getting input from form
form.submit(callbackFunction);
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    contacts.push(formDataObj);
    contactToHTML();
};

// convert object to displable html
function contactToHTML(){
    let contactshtml = []
    for(let i = 0; i<contacts.length; i++){
        contactshtml.push('<li class="contact-info" id="info"><p>Name: <b>'+contacts[i]['firstName']+ " " +contacts[i]['lastName'] + '</b></p> <p>Phone: ' + contacts[i]['phone'] + '</p><p>Address: ' + contacts[i]['address'] + '</p> <div class="delete" onclick="deleteIt('+i+')">Delete <i class="fa fa-trash"></i></div></li>')  
    }
    display(contactshtml);
}

// function to display contacts
function display(str){
    infos.html(str.join(""))
  
}

// delete function
function deleteIt(index) {
    if (confirm("Are you sure to delete!")) {
        if (index > -1) { 
            contacts.splice(index, 1); 
        }
        contactToHTML();
      } 
    
}

/// SEARCH
/**
 * I used one of my old code snippet for search, didn't want to invent the wheel again
 * https://github.com/zahidtwt/js/tree/main/simple-search-bar
 */
let searchform = $("#search-info")
searchform.keyup(function(event){
    let searchQuery =  event.target.value.toLowerCase();
    let allnamesDOMCollection = document.getElementsByClassName("contact-info")
    for(let counter = 0; counter < allnamesDOMCollection.length; counter++){
        const currentName = allnamesDOMCollection[counter].textContent.toLowerCase();
        if (currentName .includes(searchQuery)){
            allnamesDOMCollection[counter].style.display = "block";

        } else{
            allnamesDOMCollection[counter].style.display = "none";
        }
        
    }
})
