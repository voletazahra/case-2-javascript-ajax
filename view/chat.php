<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom CSS -->
  <style>
    body {
      background-color: #ffffff;
    }
    #image-section {
      margin-left: 480px;
      margin-top: 5px;
      top: -20px; /* Ubah nilai ini menjadi lebih besar jika Anda ingin elemen lebih atas */
      left: 680px;
    }
    .chat-container {
      margin-top: 50px;
    }
    .card-header {
      background-color: #007bff;
      color: white;
      font-weight: bold;
    }
    #chat {
      background-color: #e9ecef;
      border-radius: 5px;
      border: 1px solid #ced4da;
      padding: 10px;
      resize: none;
    }
    .form-group label {
      font-weight: bold;
    }
    .form-control {
      border-radius: 5px;
    }
  .chatbot-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    z-index: 1000;
  }

  #chat-luar {
    display: none;
    position: fixed;
    top: 30%;
    left: 50%;
    bottom: 60px;
    right: 20px;
    transform: translate(-50%, -50%);
    width: 1200px;
    height: 500px;
  }

  #chat-luar.show {
  display: block;
  }
  </style>

</head>

<body>

<!-- tambahan buat sebelum buka chatnya-->
    <!-- BUTTON -->  
    <button id="openChatbot" class="chatbot-button btn-primary rounded-circle">
          <i class="fas fa-comment"></i>
    </button>

    <!-- ISI -->
    <div class="container">
      <!-- FOTO -->
      <div class="row justify-content-center">
        <div class="col-md-6 foto">
          <img src="asset" alt="Tiga orang memegang ponsel"
          width="500px">
        </div>
        <!-- <img src="foto-orang.png" alt="Tiga orang memegang ponsel"> -->
      </div>

      <!-- TULISAN -->
      <div class="row">
        <div class="col-10">
          <p style="text-align: justify; margin-right: 40%">
            "Jelajahi pengalaman percakapan yang menyenangkan dengan menggunakan
            web chat kami. Mari bergabung dan nikmati kemudahan berkomunikasi
            secara real-time!"
          </p>
        </div>
      </div>
    </div>
    
    <!--FOOTER-->
    <div class="container" style="margin-top: 50px">
      <hr width="100%;" color="grey" size="5" />
      <p style="text-align: center">Kelompok 2 Pemweb SI-E 2024</p>
    </div>

    <!--JIKA BUTTON DIPENCET AKAN KELUAR: -->

    <div id="chat-luar">
      <div class="container chat-container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="card">
              <div class="card-header">
                Chat Room
              </div>
              <div class="card-body">
                <textarea id="chat" class="form-control mb-3" rows="20" readonly></textarea>
                <div class="form-group row">
                  <label for="username" class="col-sm-2 col-form-label">Username:</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="username">
                  </div>
                  <label for="message" class="col-sm-2 col-form-label">Message:</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="message">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

<script>
  const chat = document.querySelector("#chat");
  const message = document.querySelector("#message");
  const username = document.querySelector("#username");
  const openChatbotButton = document.querySelector("#openChatbot");
  const chatbotContainer = document.querySelector("#chat-luar");

  function readChat() {
    fetch("read")
      .then((res) => res.json())
      .then((data) => {
        chat.value = data.map(message => `${message.username}\n${message.content}`).join("\n\n");
      });
    setTimeout(readChat, 1000);
  }
  readChat();

  message.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      fetch("submit", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `text=${encodeURIComponent(message.value)}&username=${encodeURIComponent(username.value)}`,
      });
      message.value = "";
      username.value = "";
    }
});

openChatbotButton.addEventListener("click", function () {
    chatbotContainer.classList.toggle("show");
});
     
</script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
