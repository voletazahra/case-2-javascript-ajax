// const chat = document.querySelector("#chat");
const message = document.querySelector("#message");
const baseUrl = "http://localhost/chat/case-2-javascript-ajax/script";
const button = document.querySelector("#submit");
const usernameInput = document.querySelector("#username"); // Select username input
let user = document.querySelector("#user");
const roomChat = document.querySelector("#roomChat"); // Select chat room element
let previousUsername;

readChat();

function readChat() {
  fetch(`${baseUrl}/chat-read.php`)
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      let lines = res.split("\n"); // Split response into lines

      // Clear previous chat content
      roomChat.innerHTML = '';

      lines.forEach((line) => {
        if(line != ""){
          part = line.split("|||");
          let name = part[0];
          let msg = part[1];
  
          if (name == user.textContent) {
            displayMessage(msg, true);
          } else {
            displayMessage(msg, false);
          }
        }
      });
    })
    .catch((error) => {
      console.error("Fetch mode error", error);
    });
    
  setTimeout(readChat, 1000);
}


function displayMessage(line, isSelf) {
  let bubbleChat = document.createElement("div");
  bubbleChat.classList.add("bubbleChat");
  
  if (isSelf) {
    bubbleChat.classList.add("align-self-end");
    bubbleChat.innerHTML = `
    <div class="messageContent chatSelf">${line}
    <div class="timeSent">${getCurrentTime()}</div>
    </div>
    <div class="avatar mx-2"></div>
    `;
  } else {
    bubbleChat.classList.add("align-self-start");
    bubbleChat.innerHTML = `
    <div class="avatar mx-2"></div>
      <div class="messageContent chatOther">${line}
        <div class="timeSent">${getCurrentTime()}</div>
      </div>
    `;
  }
  
  roomChat.appendChild(bubbleChat);
}


button.addEventListener("click", () => {
  const username = user.textContent;
  const messageText = message.value;

  fetch(`${baseUrl}/chat-write.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `teks=${encodeURIComponent(messageText)}&username=${encodeURIComponent(username)}`,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Terjadi kesalahan");
      }
      return response.text();
    })
    .then((data) => {
      console.log(data);
      readChat();
      message.value = ""; // Clear input after successful message submission
    })
    .catch((error) => {
      console.error("Mode fetch mengalami error", error);
    });
});



// Function to get current time in HH:MM AM/PM format
function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

let buttonChat = document.querySelector("#openChatbot");
let chat = document.querySelector(".chatbot");

// buttonChat.addEventListener("click", () => {
//   if(chat.classList.contains("visually-hidden")){
//     chat.classList.remove("visually-hidden");
//     window.scrollTo(0, document.documentElement.scrollHeight || document.body.scrollHeight);
//   }
//   else{
//     chat.classList.add("visually-hidden");
//     window.scrollTo(0,0);
//   } 
// })

buttonChat.addEventListener("click", function () {
  // Toggle kelas untuk menampilkan atau menyembunyikan chatbot
  chat.classList.toggle("show");
});
