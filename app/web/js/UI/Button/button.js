class Button {
	constructor(windowAttachedTo, sprite, fncPointer=function() {return null}) {
		this._windowAttachedTo = windowAttachedTo
		this._fncPointer = fncPointer
	}
}