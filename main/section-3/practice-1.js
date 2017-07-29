'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
  var resCollection = new Array();
  resCollection = collectionA.concat();
  for(var i=0;i<objectB['value'].length;i++)
  {
      for(var j=0;j<collectionA.length;j++)
      {
          if(collectionA[j]['key'] == objectB['value'][i])
          {
              resCollection[j]['count']--;
          }
          //resCollection.push(collectionA[j]['count']);
      }
  }
  return resCollection;
}
