class Demon extends Spririt {
	
	constructor(name, x, y, owner, AngeId) {
		super(name, new Sprite(new Model("js/assets/Entity/Demon/demon.png"), ctx), x, y, owner)
	}
}