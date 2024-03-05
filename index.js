let x = 0;
let y = 0;
for(let i=0; i<7; i+=1) {
	y = i+1;
	for(let j=0; j<7; j+=1) {
		x = x+1;
		document.querySelector('#main').insertAdjacentHTML('beforeend', `<div data-x="${x}" data-y="${y}"></div>`);
	};
	x = 0;
};

document.querySelector('#main').addEventListener('click', (event) => {
    if (event.target.nodeName === "DIV") {
    	event.target.classList.toggle("red");
    	if (Number(event.target.dataset.x) > 1) {
    		document.querySelector(`[data-x="${Number(event.target.dataset.x) - 1}"][data-y="${Number(event.target.dataset.y)}"]`).classList.toggle("red");
    	};
    	if (Number(event.target.dataset.x) < 7) {
    		document.querySelector(`[data-x="${Number(event.target.dataset.x) + 1}"][data-y="${Number(event.target.dataset.y)}"]`).classList.toggle("red");
    	};
    	if (Number(event.target.dataset.y) > 1) {
    		document.querySelector(`[data-x="${Number(event.target.dataset.x)}"][data-y="${Number(event.target.dataset.y) - 1}"]`).classList.toggle("red");
    	};
    	if (Number(event.target.dataset.y) < 7) {
    		document.querySelector(`[data-x="${Number(event.target.dataset.x)}"][data-y="${Number(event.target.dataset.y) + 1}"]`).classList.toggle("red");
    	};	
    };
});

document.querySelector(`[data-x="2"][data-y="2"]`).classList.toggle("red");
document.querySelector(`[data-x="2"][data-y="6"]`).classList.toggle("red");
document.querySelector(`[data-x="6"][data-y="2"]`).classList.toggle("red");
document.querySelector(`[data-x="6"][data-y="6"]`).classList.toggle("red");