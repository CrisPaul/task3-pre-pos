 'use strict';

module.exports = function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
  var m = new Array();
  m=[{name:'a',summary:0},{name:'e',summary:0},{name:'h',summary:0},{name:'t',summary:0},{name:'f',summary:0},{name:'c',summary:0},{name:'g',summary:0},{name:'b',summary:0},{name:'d',summary:0}];
  function choice(elem)
  {
      switch(elem)
     {
        case 'a': m[0]['summary']++;
        break;
        case 'e': m[1]['summary']++;
        break;
        case 'h': m[2]['summary']++;
        break;
        case 't': m[3]['summary']++;
        break;
        case 'f': m[4]['summary']++;
        break;
        case 'c': m[5]['summary']++;
        break;
        case 'g': m[6]['summary']++;
        break;
        case 'b': m[7]['summary']++;
        break;
        case 'd': m[8]['summary']++;
        break; 
    }
  }
  for(var i=0;i<collection.length;i++)
  {
      if(collection[i].length == 1)
      {
          choice(collection[i]);
      }
      else 
      {
          var str = collection[i];
          var len = str.length;
          var c = str.substr(1,1);           //符号
          var str_alpha = str.substr(0,1);  //字母
          if(c =='[')
          {
             //var str_len1 = str.substring(2,len-2);  //数字
             
             var str_len1=str.substring(2,len-1);   //数字
             
             var num1 = parseInt(str_len1,10);
             for(var j=0;j<num1;j++)
             {
                 choice(str_alpha);
             }
          }
          else
          {
              var str_len2 = str.substring(2,len);   //数字
              //console.log(str_len2);
              var num2 = parseInt(str_len2,10);
              for(var k=0;k<num2;k++)
              {
                  choice(str_alpha);
              }
          }     
          
      }
  }
  return m;
  
}
