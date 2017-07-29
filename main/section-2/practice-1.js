'use strict';

module.exports = function countSameElements(collection) {
  
  var m = new Array();
  m=[{key:'a',count:0},{key:'e',count:0},{key:'h',count:0},{key:'t',count:0},{key:'f',count:0},{key:'c',count:0},{key:'g',count:0},{key:'b',count:0},{key:'d',count:0}];
  //{'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'t':0};
  for(var i=0;i<collection.length;i++)
  {
      switch(collection[i])
      {
          case 'a': m[0]['count']++;
          break;
          case 'e': m[1]['count']++;
          break;
          case 'h': m[2]['count']++;
          break;
          case 't': m[3]['count']++;
          break;
          case 'f': m[4]['count']++;
          break;
          case 'c': m[5]['count']++;
          break;
          case 'g': m[6]['count']++;
          break;
          case 'b': m[7]['count']++;
          break;
          case 'd': m[8]['count']++;
          break;
      }
  }
  return m;
}
