let $show = document.querySelector('.show')


// A function that goes to the start of the show
let setFirstSlide = () => {

	// Find first element
	let $first = document.querySelector('.slide:first-child')

	// Adds a class to it
	$first.classList.add('current')

}


// A function that goes to the end of the show
let setLastSlide = () => {

}

// Remove ".current" from all ".slide"
let unsetSlides = () => {
	// 1. Locate the current slide
	let $curr = document.querySelector('.current')

	// 2. Remove the current class
	$curr.classList.remove('current')

	return $curr
}

// Previous slide
let prevSlide = () => {

}

// Next slide
let nextSlide = () => {

	let $curr = unsetSlides()

	// 3. Find the next sibling slide
	let $next = $curr.nextElementSibling

	if ($next != null) {
		// 4. If it exists, add the current class
		$next.classList.add('current')
	} else {
		// 5. If it doesn't exist, go back to the beginning
		setFirstSlide()
	}

}

// When the interface has fully loaded...
let windowLoaded = () => {
	// Check if there's a hash set, if so start at that slide
	// window.location.hash

	// else, use the first slide
	// Setup the first slide
	setFirstSlide()


	// Add all the event listeners
	document.querySelector('#next').addEventListener('click', nextSlide)

}


window.addEventListener('load', windowLoaded)
