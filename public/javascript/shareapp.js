document.querySelector('.app-share').addEventListener("click",handleShare);
    
    function handleShare(){
      if(navigator.share){
        navigator.share({
          title: 'Check out HelpTogether',
          text: 'App connecting people with help.',
          url: 'https://helptogether.herokuapp.com/',
        }).then(() => {
          alert("Thanks for sharing");
        })
        .catch(console.error);
      }
      else{
        console.log("Could Not Share");
      }
    }