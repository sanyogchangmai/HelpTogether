document.querySelector('.doner-share-btn').addEventListener("click",handleShare);
    
    function handleShare(){
      if(navigator.share){
        navigator.share({
          title: 'Check for doners on HelpTogether',
          text: 'HelpTogether might have a doner you are looking for',
          url: 'window.location.href',        
        }).then(() => {
          alert("Thanks for sharing");
        })
        .catch(console.error);
      }
      else{
        console.log("Could Not Share");
      }
    }