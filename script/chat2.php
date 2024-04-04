<!-- Chat -->
<div class="container mt-5 mb-5">
  <span>
<button class="btn" id="iconchat"><img class="img-fluid" src="img/iconchat.svg"></button>
</span>
<div class="row w-50 justify-content-center">
  <div class="col collapse show" id="roomchat1"> 

      <!-- profil -->
      <div class="row py-3 mt-0 rounded-top" style="background-color: #A78295;">
        <div class="d-flex align-items-center">
          <img class="img-fluid" style="width:fit-content;" src="img/profil1.svg" alt="">
          <div class="ms-3">
            <h6 class="mb-1 text-white" style="font-size: 16px; font-weight: 600;">Fabian Greyson</h6>
            <p class="mb-0 text-white" style="font-size: 16px;">Online</p>
          </div>
        </div>
      </div>
      
     <!-- background -->
<div class="row py-3" id="roomchat" style="background-color: #E2D2DA; height: 500px; overflow-y: auto;">
  <!-- Bubble chat untuk pesan pengguna lain -->
  <div class="row justify-content-start">
    <div class="col-6 justify-content-start">
      <div class="chatOther p-2 px-3" id="otherChat">
        <!-- Pesan dan waktu dikosongkan karena akan diisi oleh JavaScript -->
        <div class="message-content"></div>
        <div class="text-end timeSent" style="font-size: 12px;"></div>
      </div>
    </div>
  </div>

  <!-- Bubble chat untuk pesan pengguna sendiri -->
  <div class="row justify-content-end">
    <div class="col-6 justify-content-end">
        <!-- Pesan dan waktu dikosongkan karena akan diisi oleh JavaScript -->
        <div class="message-content"></div>
        <div class="text-end timeSent" style="font-size: 12px;"></div>
      </div>
    </div>
  </div>
</div>

       <!-- text bar -->
    <div class="row chat-input-container p-2 justify-content-between rounded-bottom" style="background-color: #A78295;">
      <form class="d-flex align-content-center" id="sendChat">
        <span>
          <input type="file" class="form-control bg-transparent d-none" id="fileInput">
          <label for="fileInput" class="input-group-text bg-transparent border-0">
            <img class="img-fluid" src="img/add.svg">
          </label>
        </span>
        <div class="d-flex align-items-center flex-grow-1 mx-2">
          <input type="text" id="chatInput" class="bg-transparent border-0 w-100 text-white" placeholder="Ketikkan pesan...">
        </div>
        <div class="col-2 align">
          <button class="btn" id="chat"><img class="img-fluid" src="img/send.svg">
          </button>
</div>
      </form>
</div>