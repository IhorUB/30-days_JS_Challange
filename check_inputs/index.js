const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function hundleCheck (e) {
	let inBetween = false;
		if(e.shiftKey && this.checked) {
			checkboxes.forEach(checkbox => {
				console.log(checkbox);
				if(checkbox===this || checkbox === lastChecked) {
					inBetween !=inBetween;
				}
				if(inBetween) {
					checkbox.checked == true;
				}
			})
		}
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', hundleCheck));
let lastChecked;
lastChecked = this;