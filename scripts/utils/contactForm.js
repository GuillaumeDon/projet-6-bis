


function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
	modal.setAttribute("aria-hidden", "false");

	// Focus initial sur le premier champ du formulaire
	const firstInput = document.getElementById("first-name");
	firstInput.focus();

	// Ajoutez la gestion de la navigation clavier entre les inputs
	const formInputs = modal.querySelectorAll("input");
	formInputs.forEach((input, index) => {
		input.addEventListener("keydown", (event) => {
			if (event.key === "ArrowUp" && index > 0) {
				formInputs[index - 1].focus();
			} else if (event.key === "ArrowDown" && index < formInputs.length - 1) {
				formInputs[index + 1].focus();
			}
		});
	});

	// Ajoutez la gestion de la validation du formulaire avec la touche "Entrée" sur le bouton de soumission
	const submitButton = modal.querySelector("button[type=\"submit\"]");
	submitButton.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			event.preventDefault(); // Empêchez le comportement par défaut du bouton submit
			closeModal(); // Fermez la modale après la validation
		}
	});
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
	modal.setAttribute("aria-hidden", "true");
}

document.querySelector("#contact_modal form").addEventListener("submit", function (event) {
	event.preventDefault();

	const firstName = document.getElementById("first-name").value;
	const lastName = document.getElementById("last-name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	console.log("Prénom:", firstName);
	console.log("Nom:", lastName);
	console.log("Email:", email);
	console.log("Message:", message);

	// Reset le formulaire une fois envoyé
	this.reset();


	closeModal(); // Fermez la modale après soumission du formulaire.
});

// Fermez la modale avec la touche "échap".
window.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		closeModal();
	}
});


