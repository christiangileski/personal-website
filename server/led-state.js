const pb = require('pi-blaster.js');

class LEDState {
    constructor(startingColor) {
        this.curColor = {};
        Object.assign(this.curColor, startingColor);
        this.curPattern = null;
        this.locked = false;
        this.patternIntervalID = null;
        this.setDiodeColorObj(startingColor);
    }

    setCurColor(colorObj) {
        Object.assign(this.curColor, colorObj);
    }

    setDiodeColor(r, g, b) {
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);

        if (r < 0 || r > 255) { return; }
        if (g < 0 || g > 255) { return; }
        if (b < 0 || b > 255) { return; }

        pb.setPwm(17, (r / 255).toFixed(2));
        pb.setPwm(24, (g / 255).toFixed(2));
        pb.setPwm(22, (b / 255).toFixed(2));
    }

    setDiodeColorObj(colorObj) {
        this.setDiodeColor(colorObj.r, colorObj.g, colorObj.b);
    }

    rainbow(speed, brightnessPercent) {
        const _this = this;
        if (speed < 10) speed = 10;
        if (speed > 100) speed = 100;
        if (brightnessPercent < 1) brightnessPercent = 1;
        if (brightnessPercent > 100) brightnessPercent = 100;

        let brightnessMax = (255 / 100) * brightnessPercent; //Convert to 2.55..255 range

        let stepAmount = brightnessMax / 255;

        let rgb = [brightnessMax, 0, 0];
        let pos = 0;

        clearInterval(_this.patternIntervalID);
        _this.patternIntervalID = setInterval(function () {
            if (_this.curPattern !== 'rainbow') { //null or some other pattern
                clearInterval(_this.patternIntervalID);
                return;
            }

            rgb[pos] = rgb[pos] - stepAmount;
            rgb[_this.getPos(pos + 1, 2)] = rgb[_this.getPos(pos + 1, 2)] + stepAmount;

            if (rgb[pos] <= 0) {
                rgb[pos] = 0;
                rgb[_this.getPos(pos + 1, 2)] = brightnessMax;
                pos = _this.getPos(pos + 1, 2);
            }

            _this.setDiodeColor(rgb[0], rgb[1], rgb[2]);
        }, speed);
    }

    calculateStep(curColor, fromColor, toColor, numSteps) {
        let stepValues = {
            rStep: (toColor.r - fromColor.r) / (numSteps),
            gStep: (toColor.g - fromColor.g) / (numSteps),
            bStep: (toColor.b - fromColor.b) / (numSteps)
        };

        curColor.r += stepValues.rStep;
        curColor.g += stepValues.gStep;
        curColor.b += stepValues.bStep;

        return curColor;
    }

    customColorSet(speed, colorObjArr, smooth) {
        const _this = this;
        if (speed < 10) speed = 10;
        if (speed > 50) speed = 50;
        if (colorObjArr.length < 2) return;
        let from = 0;
        let to = 1;

        let numSteps = speed * 3;
        let curSteps = 0;
        let curColor = JSON.parse(JSON.stringify(colorObjArr[from]));

        clearInterval(_this.patternIntervalID);
        _this.patternIntervalID = setInterval(function () {
            if (_this.curPattern !== 'custom') { //null or some other pattern
                clearInterval(_this.patternIntervalID);
                return;
            }

            if (smooth) {
                curColor = _this.calculateStep(curColor, colorObjArr[from], colorObjArr[to], numSteps);
            }
            _this.setDiodeColor(curColor.r, curColor.g, curColor.b);
            if (curSteps >= numSteps) {
                curColor.r = colorObjArr[to].r;
                curColor.g = colorObjArr[to].g;
                curColor.b = colorObjArr[to].b;
                from = _this.getPos(from + 1, colorObjArr.length - 1);
                to = _this.getPos(to + 1, colorObjArr.length - 1);
                curSteps = 0;
            }
            curSteps++;
        }, speed);
    }

    pulse(speed, colorObj) {
        const _this = this;
        if (speed < 25) speed = 25;
        if (speed > 50) speed = 50;
        let maxBrightnessColor = JSON.parse(JSON.stringify(colorObj));
        let minBrightnessColor = {
            r: Math.round(colorObj.r / 5),
            g: Math.round(colorObj.g / 5),
            b: Math.round(colorObj.b / 5)
        };

        let numSteps = speed * 3;
        let curSteps = 0;
        let curColor = JSON.parse(JSON.stringify(minBrightnessColor));
        let pulseUp = true;

        clearInterval(_this.patternIntervalID);
        _this.patternIntervalID = setInterval(function () {
            if (_this.curPattern !== 'pulse') { //null or some other pattern
                clearInterval(_this.patternIntervalID);
                return;
            }

            if (pulseUp) {
                curColor = _this.calculateStep(curColor, minBrightnessColor, maxBrightnessColor, numSteps);
            } else {
                curColor = _this.calculateStep(curColor, maxBrightnessColor, minBrightnessColor, numSteps);
            }
            _this.setDiodeColor(curColor.r, curColor.g, curColor.b);
            if (curSteps >= numSteps) {
                //Make sure our color is exact
                if (pulseUp) {
                    curColor.r = maxBrightnessColor.r;
                    curColor.g = maxBrightnessColor.g;
                    curColor.b = maxBrightnessColor.b;
                } else {
                    curColor.r = minBrightnessColor.r;
                    curColor.g = minBrightnessColor.g;
                    curColor.b = minBrightnessColor.b;
                }
                pulseUp = !pulseUp;
                curSteps = 0;
            }
            curSteps++;

        }, speed);
    }

    getPos(pos, maxIndex) {
        if (pos < 0) {
            return maxIndex;
        }
        if (pos > maxIndex) {
            return 0;
        }
        return pos;
    }

    parsePatternObj(patternObj) {
        let speed, brightnessPercent;
        switch (patternObj.patternName) {
        case 'rainbow':
            speed = parseInt(patternObj.speed);
            brightnessPercent = parseInt(patternObj.brightnessPercent);
            if (isNaN(speed)) return;
            if (isNaN(brightnessPercent)) return;

            this.curPattern = patternObj.patternName;
            this.rainbow(speed, brightnessPercent);
            return true;
        case 'pulse':
            speed = parseInt(patternObj.speed);
            if (isNaN(speed)) return;

            this.curPattern = patternObj.patternName;
            this.pulse(speed, patternObj.color);
            return true;
        case 'custom':
            speed = parseInt(patternObj.speed);
            if (isNaN(speed)) return;

            this.curPattern = patternObj.patternName;
            this.customColorSet(speed, patternObj.colors, patternObj.smooth);
            return true;
        default:
            return;
        }
    }
}

module.exports = new LEDState({ r: 255, g: 180, b: 0 });