const chat = document.querySelector("#chat");
const message = document.querySelector("#message");
const baseUrl = "http://localhost/case-2-javascript-ajax/script";
const button = document.querySelector("#submit");
const usernameInput = document.querySelector("#username"); // Select username input
const user = document.querySelector("#user");
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

      // Remove the last line from chat text
      chat.value = lines.join("\n");
    });
  setTimeout(readChat, 1000);
}
readChat();

button.addEventListener("click", () => {
  const username = usernameInput.value;

  fetch(`${baseUrl}/chat-write.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `teks=${encodeURIComponent(
      message.value
    )}&username=${encodeURIComponent(username)}`,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Terjadi kesalahan");
      }
      return response.text();
    })
    .then((data) => {
      console.log(data);
      message.value = "";
    })
    .catch((error) => {
      console.error("Mode fetch mengalami error", error);
    });
});
