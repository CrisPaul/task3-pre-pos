'use strict';

module.exports = function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
 
  var i;
  var m = new Array();
  m=[{key:'a',count:0},{key:'e',count:0},{key:'h',count:0},{key:'t',count:0},{key:'f',count:0},{key:'c',count:0},{key:'g',count:0},{key:'b',count:0},{key:'d',count:0}];
  
  for(i=0;i<collection.length-1;i++)
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
  var str = collection[i];
  var str1 = str.substr(str.indexOf('-')+1,1);       //数字
  var num = parseInt(str1,10);
  var str2 = str.substr(str.indexOf('-')-1,1);       //字母
  for(var j=0;j<num;j++)
  {
       switch(str2)
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
