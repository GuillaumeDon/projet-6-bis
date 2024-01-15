// function displayModal() {
//     const modal = document.getElementById("contact_modal");
// 	modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "none";
// }


// document.querySelector('#contact_modal form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     console.log('Prénom:', firstName);
//     console.log('Nom:', lastName);
//     console.log('Email:', email);
//     console.log('Message:', message);

// });


function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}

document.querySelector('#contact_modal form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Prénom:', firstName);
    console.log('Nom:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);

    closeModal(); // Fermez la modale après soumission du formulaire.
});

// Fermez la modale avec la touche "échap".
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});






