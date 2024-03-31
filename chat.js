const chat = document.querySelector("#chat");
const message = document.querySelector("#message");
const baseUrl = "http://localhost/chat";
const button = document.querySelector("#submit");

function readChat() {
  fetch(`${baseUrl}/chat-read.php`)
    .then((res) => res.text())
    .then((res) => {
      chat.value = res;
    });
  setTimeout(readChat, 1000);
}
readChat();

button.addEventListener("click", () => {
  fetch(`${baseUrl}/chat-write.php`, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `teks=${message.value}`,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Terjadi kesalahan");
      }
      return response.text();
    })
    .then((data) => {
      console.log(data); // Log the response from server
      message.value = ""; // Clear the message input after successful submission
    })
    .catch((error) => {
      console.error("Mode fetch mengalami error", error);
    });
});

/* message.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    fetch(`${baseUrl}/chat-write.php`, {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `teks=${message.value}`, 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); 
      })
      .then((data) => {
        console.log(data); // Log the response from server
        message.value = ""; // Clear the message input after successful submission
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}); */
