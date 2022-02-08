class Animator {
	constructor() {
		this._maxframeX = maxframeX
		this._maxframeY = maxframeY
		this._minframeX = 0
		this._minframeY = 0
		this._frameX = 0
		this._frameY = 0
		this._speedAnimation = speedAnimation
		this._clock = 0
	}

	get maxframeX() {
		return this._maxframeX
	}

	set maxframeX(value) {
		this._maxframeX = value
	}

	get maxframeY() {
		return this._maxframeY
	}

	set maxframeY(value) {
		this._maxframeY = value
	}

	get minframeX() {
		return this._minframeX
	}

	set minframeX(value) {
		this._minframeX = value
	}
	
	get minframeY() {
		return this._minframeY
	}

	set minframeY(value) {
		this._minframeY = value
	}

	get frameX() {
		return this._frameX
	}

	set frameX(value) {
		this._frameX = value
	}

	get frameY() {
		return this._frameY
	}

	set frameY(value) {
		this._frameY = value
	}

	updateFrame() {
		if (this._clock >= this._speedAnimation)
			this._frameX = (this._frameX + 1 >= this._maxframeX) ? this._minframeX : this._frameX + 1;
		this._clock = (this._clock + 1 > this._speedAnimation) ? 0 : this._clock + 1;
	}

}