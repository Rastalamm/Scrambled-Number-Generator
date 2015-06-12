var generate = function(num){

  if(typeof num !== 'number') return false;

  var arr = [];

  for(var i =0; i < num; i++){
    arr.push(i);
  }

  var finalArr = [];
  var splicey = [];

  for(var i = 0 ; i < num; i++){
    var randy = Math.floor(Math.random()*arr.length);
    splicey = arr.splice(randy,1)[0];
    finalArr.push(splicey);
  }

  return finalArr;

};

module.exports = generate;