const chat = document.querySelector("#chat");
const message = document.querySelector("#message");
const baseUrl = "http://localhost/chat";
const button = document.querySelector("#submit");
const usernameInput = document.querySelector("#username"); // Select username input

function readChat() {
  fetch(`${baseUrl}/chat-read.php`)
    .then((res) => res.text())
    .then((res) => {
      chat.value = res;
      // if (res.includes(":")) {
      //   const splitter = res.split(";");
      // }
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
