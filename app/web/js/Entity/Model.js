class Model {

	constructor(modelPath, modelWidth=null, modelHeight=null) {
		this._modelPath = modelPath
		if (modelHeight && modelWidth)
			this._modelImage = new Image(modelWidth, modelHeight);
		else
			this._modelImage = new Image();
		this._modelImage.src = this._modelPath
		this._modelImage.onload = () => {
			this._modelWidth = this._modelImage.width
			this._modelHeight = this._modelImage.height
		}
		this._modelWidth = modelWidth
		this._modelHeight = modelHeight
	}

	draw(x, y, width, height, ctx, scaleX=1, scaleY=1, spritePosX=0, spritePosY=0, ) {
		if (this._modelPath === undefined)
			return
		width = width ? width : this._modelWidth
		height = height ? height : this._modelHeight
		ctx.drawImage(this._modelImage, //Image to Load
			spritePosX, spritePosY, // Pos to begin draw
			width, height, // Size of Draw
			0, 0, // Pos to place
			width * scaleX, height * scaleY) // Size to have
	}
}