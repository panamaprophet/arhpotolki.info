var Scroller = function Scroller(triggerEl, destinationEl) {

		this.container = document.body;
		this.destination = document.querySelector(destinationEl);

		this.el = triggerEl instanceof HTMLElement ? triggerEl : document.querySelector(triggerEl);

		this.el.addEventListener('click', this.scroll.bind(this));
};

Scroller.prototype.scroll = function () {

		var scrollContainer = this.container;
		var item = this.destination;
		var timingFunction = this.easeOutCubic;

		var animateFrom = scrollContainer.scrollTop;
		var animateTo = item.offsetTop - scrollContainer.scrollTop;

		if (animateFrom < item.offsetTo && item.offsetTop > scrollContainer.scrollHeight - scrollContainer.clientHeight) {

				animateTo = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop;
		}

		var currentIteration = 0;
		var animationTime = 0.5;
		var frameRate = 60;

		var iterationsCount = Math.round(frameRate * animationTime);

		(function scroll() {

				var value = timingFunction(currentIteration, animateFrom, animateTo, iterationsCount);

				scrollContainer.scrollTop = value;

				currentIteration++;

				if (currentIteration < iterationsCount) {
						requestAnimationFrame(scroll);
				}
		})();
};

Scroller.prototype.easeOutCubic = function (currentIteration, startValue, changeInValue, totalIterations) {

		return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
};



window.onload = function(){


	let filterItems = document.querySelectorAll('.filter__item')

	for (let i = 0; i < filterItems.length; i++){

		let filterItem = filterItems[i]

		filterItem.addEventListener('click', () => filterItem.classList.toggle('filter__item--active'))
	}


	let scroller = new Scroller('.scroll-down', '.description')
	
}