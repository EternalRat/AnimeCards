window.addEventListener('resize', function(){
	for (let i = 0; i < Game.entities.length; i++) {
		const e = Game.entities[i]
		e._pos.y = Math.round((e._pos.y * window.innerHeight) / canvas.height)
		e._pos.x = Math.round((e._pos.x * window.innerWidth) / canvas.width)
	}

	canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

canvas.addEventListener('mouseleave', function(e) {
})
	
canvas.addEventListener('click', function(e) {
})

canvas.addEventListener('mousemove', function(e) {
})