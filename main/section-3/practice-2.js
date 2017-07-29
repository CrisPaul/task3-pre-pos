'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
 // return '实现练习要求，并改写该行代码。';
 var resCollection = new Array();
  resCollection = collectionA.concat();
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
      for(var j=0;j<collectionA.length;j++)
      {
          if(collectionA[j]['key'] == objectB['value'][i])
          {
              func_algorithm(resCollection[j]['count'],j);
          }
          //resCollection.push(collectionA[j]['count']);
      }
  }
  return resCollection;
}
