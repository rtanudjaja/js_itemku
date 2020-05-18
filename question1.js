/**
  * @param {action} string
  * @param {user} string
  * @param {nickname} string
  * @param {nameObjects} {string:string}
  * @param {chatArray} [[string]]
  * @return [string]
  * read command action, user, nickname (if exists), and then apply the 
  * appropriate changes to the name object which has key/value pair as userID/nickname
  * and the chatArray and return the modifed nameObjects and the chatArray.
  */
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

/**
  * @param {record} [[string]]
  * @return [string]
  * read record and go through the chat and replace userID with proper Nickname
  */
function solution(record) {
  let result = [];
  let nameObjects = {};
  for(let i = 0; i < record.length; i++) {
    let message = record[i].split(' ');
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