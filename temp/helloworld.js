var helloWorld = function () {

var f = function () {
//Hello World!
};

var start = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

var end = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

var getIndex = function(arr){
    return arr.reduce(function(prev, curr){
        return Number(prev) + Number(curr);
    });
};

return f.toString().slice(getIndex(start), getIndex(end));
};


helloWorld();




/****************************************************************/

(function () {

var f = function () {
//Hello World!
//helloWorld
};

var functionNameStart = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

var functionNameEnd = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

var start = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

var end = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

var getIndex = function(arr){
    return arr.reduce(function(prev, curr){
        return Number(prev) + Number(curr);
    });
};

var functionName = f.toString().slice(getIndex(functionNameStart), getIndex(functionNameEnd));

this[functionName] = function () {
    return f.toString().slice(getIndex(start), getIndex(end));
};

})();


someFunc();
helloWorld();