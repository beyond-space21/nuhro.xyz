
function map(x, in_min, in_max, out_min, out_max) {//https://arduino.stackexchange.com/questions/32148/explanation-of-the-formula-of-the-map-funtion
    return parseInt((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}