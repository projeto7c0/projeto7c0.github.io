function myAlert() 
{
  alert("Esta funcionalidade será implementada em breve.");
}

function submissionSuccess()
{
    alert("Sua mensagem foi enviada com sucesso! Entraremos em contato o mais breve possível.");
}

function charCountUpdate(textbox, counter) 
{
  var maxlimit = 100;
  var lng = document.getElementById(textbox).value.length;
  
  // If too long...trim it!
  if (document.getElementById(textbox).value.length > maxlimit) 
  {        
        document.getElementById(textbox).value = document.getElementById(textbox).value.substring(0, maxlimit);
  }
  // Otherwise, update 'characters left' counter
  else 
  {        
      document.getElementById(counter).innerHTML = lng + ' de ' + maxlimit + ' caracteres.';
  }	
}