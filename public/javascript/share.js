const shareButton = document.querySelector(".share-button");
    shareButton.addEventListener("click", () => {
        if(navigator.share){
          navigator.share({
            title: 'Request from HelpTogether',
            text: 'Please read the request and provide help if you can',
            url: window.location.href,
          }).then(() => {
            alert("Thanks for sharing");
          })
          .catch(console.error);
        }
        else{
          console.log("Could Not Share");
        }
    })