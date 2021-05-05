 
    document.querySelector('.share-button').addEventListener("click",handleShare);
    document.querySelector('.share-sm-btn').addEventListener("click",handleShare);
    
    function handleShare(){
      if(navigator.share){
        navigator.share({
          title: 'Request from HelpTogether',
          text: 'Have a look and see if you can help',
          url: window.location.href,
        }).then(() => {
          alert("Thanks for sharing");
        })
        .catch(console.error);
      }
      else{
        console.log("Could Not Share");
      }
    }