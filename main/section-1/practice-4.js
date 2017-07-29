'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  //return '实现练习要求，并改写该行代码。';
  /*
   *  const collectionA = [
    {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
  ];
  const collectionB = {value: ['a', 'd', 'e', 'f']};

  it('选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
   * 
   */
  var resCollection = new Array();
  for(var i=0 ;i < collectionA.length; i++)
  {
      for(var j=0; j < collectionB['value'].length;j++)
      {
          if(collectionB['value'][j]==collectionA[i]['key'])
            resCollection.push(collectionA[i]['key']);
      }
  }
  return resCollection;
}
