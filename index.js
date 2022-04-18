const counters = document.querySelectorAll('.count-tit');
const speed = 10;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target/speed;
        if(count < target){
           counter.innerText = count + inc;
           setTimeout(updateCount,3);
        }else{
           count.innerText = target;
        }
		
	}

	updateCount();
});

