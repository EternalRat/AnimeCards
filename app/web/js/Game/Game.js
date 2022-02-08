class Game {

	static DEBUG = false	

	static entities = new Array()
	static stack = new Array()
	static isRunning = true

	static addEntity(entity) {
		if (Game.DEBUG)
			console.log("has been created ->", entity)
		Game.entities.push(entity)
		Game.entities.sort((a, b) => a.sprite.z - b.sprite.z)
	}

	static removeEntityById(id) {
		Game.entities = Game.entities.filter(e => e.id != id)
	}

	static drawEntities() {
		Game.entities.forEach(entity => {
			if (!entity.isDead || entity.animationCoolDown > 0)
				entity.draw()
			// Need to be replace by a check to the animator, I'm just bored (-_-')
			// I'll just pass fonction to animator in the class call
			// Like in Ange Class, it would have is own animation if I do one someday in the near future maybe, who knows...
			entity.animationCoolDown--;
			if (entity.animationCoolDown <= 0)
				entity.startIdleAnimation()
		});
	}

	static removedDeadEntities() {
		Game.entities = Game.entities.filter(e => (!(e.animationCoolDown == Infinity && e.isDead)))
	}

}