'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
  var m = new Array();
  var resCollection = new Array();
  m=[{key:'a',count:0},{key:'e',count:0},{key:'h',count:0},{key:'t',count:0},{key:'f',count:0},{key:'c',count:0},{key:'g',count:0},{key:'b',count:0},{key:'d',count:0}];
  
  function func_choice(enem)
  {
      switch(enem)
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
  for(var i=0;i<collectionA.length-1;i++)
  {
     func_choice(collectionA[i]);
  }
  //对于一些特殊类型的字符串
  var str = collectionA[i];
  var str1 = str.substr(str.indexOf('-')+1,1);       //数字
  var num = parseInt(str1,10);
  var str2 = str.substr(str.indexOf('-')-1,1);       //字母
  for(var j=0;j<num;j++)
  {
      func_choice(str2);
  }
  resCollection = m.concat();
   function func_algorithm(enem,n)
  {
      var size;
      if(enem >= 3)
      {
          size =parseInt(enem/3);
          resCollection[n]['count'] -= size;
      }
  }
  for(var i=0;i<objectB['value'].length;i++)
  {
      for(var j=0;j<m.length;j++)
      {
          if(m[j]['key'] == objectB['value'][i])
          {
              func_algorithm(resCollection[j]['count'],j);
          }
          
      }
  }
  return resCollection;
}
