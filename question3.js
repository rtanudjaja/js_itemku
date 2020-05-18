/**
  * @param {str} [string]
  * @return bool (true/false)
  * check if the string in str[] is all unique
  */
function isUnique(str) {
  return new Set(str).size == str.length; 
}

/**
  * @param {combination} [int]
  * @param {category} [[int]]
  * remove all value in category that is already part of existing combination
  * using filter
  */
function removeAll(combination, category) {
  let result = category.slice();
  for(let i=0; i < combination.length; i++) {
    result = result.filter(n => n.indexOf(combination[i]) == -1);
  }
  return result;
}

/**
  * @param {combination} [int]
  * @param {relation} [[string]]
  * @return [[string]]
  * pair up the value of the relation based on the combination
  */
function pairUp(combination, relation) {
  let result = []
  relation.forEach(function(array) {
    let strJoin = "";
    combination.forEach(function(n) {
      strJoin += array[n];
    });
    result.push(strJoin);
  });
  return result
}

/**
  * @param {combination} [int]
  * @return [[int]]
  * get all possible combination
  * copied and modified from stack overflow code, link below:
  * https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs
  */
function getCombinations(combinations) {
  let combi = [];
  let temp = [];
  let clength = Math.pow(2, combinations.length);

  for (let i = 0; i < clength; i++) {
    temp = [];
    for (let j = 0; j < combinations.length; j++) {
      if ((i & Math.pow(2, j))) {
          temp.push(combinations[j]);
      }
    }
    if (temp.length > 0) {
      combi.push(temp);
    }
  }
  
  combi.sort((a, b) => a.length - b.length);
  return combi;
}

/**
  * @param {relation} [[string]]
  * @return int
  * read the relation and find the total number of candidate key
  */
function solution(relation) {
  let result = 0;
  let category = [];
  let fullArray = relation.slice();
  for(let i=0;i<relation.length;i++) {
    category.push(i);
  }
  
  //get all possible combination
  category = getCombinations(category);
  
  while(category.length > 0) {
    let combi = category.shift();
    
    //check if the value of the array is unique
    if(isUnique(pairUp(combi, relation))) {
      result += 1;
      category = removeAll(combi,category);
    }
  }
  
  return result;
}