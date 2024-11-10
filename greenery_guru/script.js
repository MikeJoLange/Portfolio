const initSlider = () => {
	const imageList = document.querySelector(".image-list");
	const slideButtons = document.querySelectorAll(".slide-button");
	
	const maxScrollLeft = imageList.scrollWidth - (imageList.clientWidth + 40); 
	
	slideButtons.forEach(button => {
		button.addEventListener("click", () => {
			const direction = button.id === "left" ? -1 : 1;
			const scrollAmount = (imageList.clientWidth + 40) * direction;
			imageList.scrollBy({ left:scrollAmount, behavior: "smooth"});
		});
	});
	
	const handleSlideButtons = () => {
		slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
		slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
	}
	
	imageList.addEventListener("scroll", () => {
		handleSlideButtons();
	});
}

window.addEventListener("load", initSlider);