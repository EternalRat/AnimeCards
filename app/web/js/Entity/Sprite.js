class Sprite {

	constructor(model, canvasContext, animator=null, spriteHeight=0, spriteWidth=0, flipY=false, flipX=false, scaleX=1, scaleY=1) {
		this._canvasContext = canvasContext
		this._model = model
		this._animator = animator
		this._scaleX = scaleX
		this._scaleY = scaleY
		this._flipY = flipY
		this._flipX = flipX
		this._spriteWidth = spriteWidth ? spriteWidth : this._model._modelWidth
		this._spriteHeight = spriteHeight ? spriteHeight : this._model._modelHeight
		this._z = 0
	}
	
	get z() {
		return this._z
	}

	set z(value) {
		this._z= value
	}

	draw(x, y) {
		this._canvasContext.save()
		this._canvasContext.translate(x, y)
		this._canvasContext.scale(this._flipX ? -1 : 1, this._flipY ? -1 : 1);
		if (this._model)
			this._model.draw(x, y, this._spriteWidth, this._spriteHeight, this._canvasContext, this._scaleX, this._scaleY)
		this._canvasContext.restore()
	}

	updateSprite() {
		if (this._animator)
			this._animator.updateFrame()
	}
}