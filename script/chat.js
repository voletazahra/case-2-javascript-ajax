// const chat = document.querySelector("#chat");
const message = document.querySelector("#message");
const baseUrl = "http://localhost/chat/script";
const button = document.querySelector("#submit");
const usernameInput = document.querySelector("#username"); // Select username input
const user = document.querySelector("#user");
const roomChat = document.querySelector("#roomChat"); // Select chat room element
let previousUsername;

function readChat() {
  fetch(`${baseUrl}/chat-read.php`)
    .then((res) => res.text())
    .then((res) => {
      const lines = res.split("|||"); // Split response into lines
      const username = lines.pop(); // Get the last line (which is the username)

      // Update #user element with the username
      if (username) {
        user.textContent = "User: " + username;
        previousUsername = username; // Update previousUsername if username is not empty
      } else {
        user.textContent = "User: " + previousUsername; // Use previousUsername if username is empty
      }

      // Clear previous chat content
      roomChat.innerHTML = '';

      // Display each message in a bubble chat
      lines.forEach((line) => {
        let bubbleChat = document.createElement("div");
        bubbleChat.classList.add("row", "justify-content-end", "d-flex");
        bubbleChat.classList.add("col", "justify-content-end");
        bubbleChat.innerHTML = `
          <div class="chatSelf p-2 px-3">
              <div class="message-content">${message}</div>
              <div class="text-start timeSent" style="font-size: 12px;">${getCurrentTime()}</div>
          </div>
        `;
        roomChat.appendChild(bubbleChat);
      });
    })
    .catch((error) => {
      console.error("Fetch mode error", error);
    });

  setTimeout(readChat, 1000);
}


function readChat() {
  fetch(`${baseUrl}/chat-read.php`)
    .then((res) => res.text())
    .then((res) => {
      const lines = res.split("|||"); // Split response into lines
      const username = lines.pop(); // Get the last line (which is the username)

      // Update #user element with the username
      if (username) {
        user.textContent = "User: " + username;
        previousUsername = username; // Update previousUsername if username is not empty
      } else {
        user.textContent = "User: " + previousUsername; // Use previousUsername if username is empty
      }

      // Clear previous chat content
      roomChat.innerHTML = '';

      // Display each message in a bubble chat
      lines.forEach((line) => {
        displayMessage(line); // Add this line to display existing messages
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
    bubbleChat.innerHTML = `
    <div class="messageContent chatSelf">${line}
      <div class="timeSent">${getCurrentTime()}</div>
    </div>
    <div class="avatar mx-2"></div>
    `;
  } else {
    bubbleChat.innerHTML = `
      <div class="avatar"></div>
      <div class="messageContent">${line}
        <div class="timeSent">${getCurrentTime()}</div>
      </div>
    `;
  }
  
  roomChat.appendChild(bubbleChat);
}


button.addEventListener("click", () => {
  const username = usernameInput.value;
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
      message.value = ""; // Clear input after successful message submission
      displayMessage(messageText, true); // Display the sent message as a bubble chat (self)
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
