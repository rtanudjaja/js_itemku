// read command action, user, nickname (if exists)
function readCommand(action, user, nickname, nameObjects, chatArray) {
  let currentName = nameObjects;
  let currentChat = chatArray.slice();
  
  switch(action) {
    case "Enter":
      currentName[user] = nickname;
      currentChat.push(user + " came in.");
      break;
    case "Leave":
      currentName[user] = nickname;
      currentChat.push(user + " has left.");
      break;
    case "Change":
      currentName[user] = nickname;
      break;
  }
  return [currentName, currentChat];
}
 
// read input and go through the chat and replace userID with proper Nickname
function readInput(input) {
  let result = [];
  let nameObjects = {};
  for(let i = 0; i < input.length; i++) {
    let message = input[i].split(' ');
    [nameObjects, result] = readCommand(message[0],message[1],message[2],
      nameObjects,result);
  }
  
  //change userID to NickName
  result = result.map(function(chat) { 
    let message = chat.split(' ');
    message[0] = nameObjects[message[0]];
    return message.join(' '); 
  });
  
  return result;
}

/* take record */
function solution(record) {
  let answer = [];
  answer = readInput(record);
  return answer;
}

//console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));