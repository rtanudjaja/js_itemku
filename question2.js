/**
  * @param {N} int
  * @param {users} [int]
  * @return int
  * return an array containing the number of the stage in descending order of 
  * the highest failure rate, when total stages N, an array users containing 
  * the stage in which the game user is currently playing are given as a parameter
  */
function solution(N, users) {
  let answer = [];
  let total_user = users.length;
  for(let i=0; i <= N; i++) {
    answer.push([i,0]);
  }
  
  users.forEach(function(stage) { 
    answer[stage-1][1] += 1;
  });
  
  answer = answer.map(function(n) {
    total_user -= n[1];
    return [n[0],1.0*n[1]/(total_user+n[1])];
  });
  answer.pop();
  
  answer.sort(function(a,b) {
    return b[1] - a[1];
  });
  
  answer = answer.map(function(n) {
    return n[0]+1;    
  });
  return answer;
}