class Color {
	static Unknow = new Color("Unknow")
	static Blue = new Color("Blue")
	static Red = new Color("Red")
	static Green = new Color("Green")
	static Yellow = new Color("Yellow")

	constructor(name) {
		this.name = name
	}
}

class CardValue {
	static One = new CardValue("One")
	static Two = new CardValue("Two")
	static Three = new CardValue("Three")
	static Four = new CardValue("Four")
	static Five = new CardValue("Five")
	static Six = new CardValue("Six")
	static Seven = new CardValue("Seven")
	static Eight = new CardValue("Eight")
	static Reverse = new CardValue("Reverse")
	static Block = new CardValue("Block")
	static PlusTwo = new CardValue("PlusTwo")
	static ColorChange = new CardValue("ColorChange")
	static PlusFour = new CardValue("PlusFour")

	constructor(name) {
		this.name = name
	}
}

class Card extends Entity {

	static cardSizeWidth = undefined;
	static cardSizeHeigth = undefined;
	static cardFileExtension = ".jpg";

	constructor(cardValue, color, owner) {
		super(color + "_" + cardValue, undefined, 400, 400)
		this._sprite = this.getCardSprite(cardValue, color)
		this.owner = owner
		this.color = color
		this.cardValue = cardValue
	}

	getModelName(cardValue, color) {
		return new Model("js/assets/Card/" + color.name + "/" + uncapitalize(cardValue.name) + Card.cardFileExtension, Card.cardSizeWidth, Card.cardSizeHeigth)
	}

	getCardSprite(cardValue, color) {
		return new Sprite(this.getModelName(cardValue, color), ctx)
	}
}