class Human extends Spririt {
	
	constructor(name, x, y, owner, AngeId) {
		super(name, new Sprite(new Model("js/assets/Entity/Human/human.png"), ctx), x, y, owner)
	}
}