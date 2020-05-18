//check if the value is unique
function isUnique(str) {
  return new Set(str).size == str.length; 
}

//remove all value that is already part of existing combination
function removeAll(combination,category) {
  let result = category.slice();
  for(let i=0; i < combination.length; i++) {
    result = result.filter(n => n.indexOf(combination[i]) == -1);
  }
  return result;
}

//pair up the value of the relation based on the combination
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

//get all possible combination taken and modified from stack overflow
//https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs
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

//read the relation based on size N
function readRelation(N, relation) {
  let result = 0;
  let category = [];
  let fullArray = relation.slice();
  for(let i=0;i<N;i++) {
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

//get the final solution
function solution(relation) {
  let answer = 0;
  answer = readRelation(relation[0].length,relation);
  return answer;
}

/*
console.log(removeAll([0,1],[[ 0, 1, 3 ],[ 0, 1, 2 ],[ 0, 2, 3 ],[ 1, 2, 3 ]]));
console.log(isUnique(pairUp([0], [["100","ryan","music","2"],["200","apeach","math","2"]] )));
console.log(isUnique(pairUp([2,3], [["100","ryan","music","2"],["200","apeach","math","2"]] )));
console.log(isUnique(pairUp([0], [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]] )));
console.log(isUnique(pairUp([1,2], [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]] )));
*/


//console.log(readRelation(4,[["100","ryan","music","2"]]));
//console.log(readRelation(4, [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]] ));
console.log(solution([["100","ryan","music","2"]]));
console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]));
console.log(solution([["100","ryan","music1","21"],
 ["200","apeach","math","22"],
 ["300","tube","computer","32"],
 ["400","con","computer","4"],
 ["500","muzi","music","31"],
 ["600","apeach","music3","2"]]));