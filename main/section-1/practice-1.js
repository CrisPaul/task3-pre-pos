/*eslint-disable no-redeclare, eqeqeq*/
'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  //return '实现练习要求，并改写该行代码。';
 
    var resCollection = collectionA.filter(function(elem,index,arr){
        return collectionB.indexOf(elem)>=0
        })
    return resCollection
}
