class Fairy extends Spririt {
	
	constructor(name, x, y, owner, AngeId) {
		super(name, new Sprite(new Model("js/assets/Entity/Fairy/fairy.png"), ctx), x, y, owner)
	}
}