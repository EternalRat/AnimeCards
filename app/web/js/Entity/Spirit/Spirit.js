class Faction {
	static Neutral = new Faction("Neutral")
	static Human = new Faction("Human")
	static Fairy = new Faction("Fairy")
	static Demon = new Faction("Demon")
	static Ange = new Faction("Ange")

	constructor(name) {
		this.name = name
	}
}

class Spririt extends Entity {

	constructor(name, sprite, x, y, owner) {
		super(name, sprite, x, y)
		this.owner = owner
		this.faction = Faction.Neutral
		this.stats = {
			pv: 100,
			mana: 100,
		}
	}
}