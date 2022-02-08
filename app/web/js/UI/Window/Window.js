class Window extends Entity {
	constructor(parentWindow, sprite=null, name="Window") {
		super(name, sprite, x, y)
		this._parentWindow = parentWindow
		this._buttons = new Array()
		this._chieldsWindow = new Array()
	}

	get parentWindow() { return this._parentWindow }

	close() {
		this._chieldsWindow.forEach(window => {
			window.close()
		});
	}
}