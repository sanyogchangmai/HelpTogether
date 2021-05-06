document.querySelector('.doner-share-btn').addEventListener("click",handleShare);
    
    function handleShare(){
      if(navigator.share){
        navigator.share({
          title: 'Check for doners on HelpTogether',
          text: 'HelpTogether might have a doner you are looking for',
          url: 'https://helptogether.herokuapp.com/find',        
        }).then(() => {
          alert("Thanks for sharing");
        })
        .catch(console.error);
      }
      else{
        console.log("Could Not Share");
      }
    }