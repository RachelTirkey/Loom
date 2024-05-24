// console.log("hello from gallery")

setTimeout (() => {

    if (db){
      // videos retrieval
     
      let videoDBTransaction = db.transaction("video", "readonly");
      let videoStore = videoDBTransaction.objectStore("video");
      let videoRequest = videoStore.getAll(); // Event driven
      videoRequest.onsuccess = (e) => {
        let videoResult = videoRequest.result;
        let galleryCont = document.querySelector(".gallery-cont");
        videoResult.forEach((videoObj) => {
          let mediaElem = document.createElement("div");
          mediaElem.setAttribute("class", "media-cont");
          mediaElem.setAttribute("id", videoObj.id);

          let url = URL.createObjectURL(videoObj.blobData);

          mediaElem.innerHTML =`
          <div class="media">
          <video autoplay loop src="${url}"></video>
       </div>
       <div class="delete action-btn">DELETE</div>
       <div class="download action-btn">DOWNLOAD</div>
          `;

          galleryCont.appendChild(mediaElem);

          // Listeners
          let deleteBtn = mediaElem.querySelector(".delete");
          deleteBtn.addEventListener("click", deleteListener);

          let downloadBtn = mediaElem.querySelector(".download");
          downloadBtn.addEventListener("click", downloadListener);
        })
      }

       // images retrieval

       let imageDBTransaction = db.transaction("image", "readonly");
      let imageStore = imageDBTransaction.objectStore("image");
      let imageRequest = imageStore.getAll(); // Event driven
      imageRequest.onsuccess = (e) => {
        let imageResult = imageRequest.result;
        let galleryCont = document.querySelector(".gallery-cont");
        imageResult.forEach((imageObj) => {
          let mediaElem = document.createElement("div");
          mediaElem.setAttribute("class", "media-cont");
          mediaElem.setAttribute("id", imageObj.id);

          let url = imageObj.url;

          mediaElem.innerHTML =`
          <div class="media">
          <image src="${url}" />
       </div>
       <div class="delete action-btn">DELETE</div>
       <div class="download action-btn">DOWNLOAD</div>
          `;

          galleryCont.appendChild(mediaElem);

          // Listeners
          let deleteBtn = mediaElem.querySelector(".delete");
          deleteBtn.addEventListener("click", deleteListener);

          let downloadBtn = mediaElem.querySelector(".download");
          downloadBtn.addEventListener("click", downloadListener);
        })
      }

    }

    

}, 100)