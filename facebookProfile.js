/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name:"kolusu",
    friends:4,
    messages:["Hello World","How are you","I am good "],
    postMessage: function postMessage(message){
        if(facebookProfile.messages.length===0){
            facebookProfile.messages[0] =  message;
        }else{
        facebookProfile.messages[facebookProfile.messages.length ] =  message;
        }
        return facebookProfile.messages;
    },
    deleteMessage: function deleteMessage(index){
      facebookProfile.messages.splice(index,1);
      return facebookProfile.messages;
    },
    addFriend: function addFriend(){
        if(facebookProfile.friends >0){
        facebookProfile.friends = facebookProfile.friends+1;
        }
        return facebookProfile.messages;
    },
    removeFriend: function removeFriend(){
        if(facebookProfile.friends>0){
        facebookProfile.friends = facebookProfile.friends-1;
        }
        return facebookProfile.messages;
    }
  };

