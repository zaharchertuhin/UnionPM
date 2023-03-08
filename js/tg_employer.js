const CHAT_ID = "-1001826284527";
const URI_API = 'https://api.telegram.org/bot799604842:AAHnQSUGIui4pUP-PO4wBtSkYNCdxmWYc4E/sendMessage';

document.getElementById("tg").addEventListener('submit', function (e) {
  e.preventDefault();

  let message = "";


  if(this.q1.value === "true"){
    message = "Новый зритель! " + last_name + " " + first_name + " id: " + id ;
  }
  else{
    message += "Лох отказался идти: " + last_name + " " + first_name + " id: " + id;
  }

  axios.post(URI_API,{
    chat_id: CHAT_ID,
    text: message
  });

}, false);


let result;

function check() {
  let question = 1;

  result = "";

  let choice;
  let q = document.forms['quiz'].elements['q'+question];
  for (let i = 0; i < q.length; i++) {
    if (q[i].checked) {
      choice = q[i].value;
      console.log(choice);
    }
  }
}
