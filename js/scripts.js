// ------------------------------------------------------------------------------

function myAlert() {
  alert("Esta funcionalidade será implementada em breve.");
}

// ------------------------------------------------------------------------------

function submissionSuccess() {
  alert("Sua mensagem foi enviada com sucesso! Entraremos em contato o mais breve possível.");
}

// ------------------------------------------------------------------------------

function validateFormOnSubmit(contact) {
  reason = "";
  reason += validateEmpty(contact.name);
  reason += validateEmail(contact.email);
  reason += validatePhone(contact.message);

  console.log(reason);
  if (reason.length > 0) {
    return false;
  }
  else {
    return false;
  }
}

// ------------------------------------------------------------------------------

function validateName() {

  var name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    document.getElementById('contact-name').style.backgroundColor = 'lightyellow';
    producePrompt('Digite seu nome e sobrenome.', 'name-error', 'red');
    return false;

  }
  // It is necessary the name (at least 2 letters) and surname (at least 2 letter) and only one space between
  if (!name.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/)) {
    document.getElementById('contact-name').style.backgroundColor = 'lightyellow';    
    return false;

  }

  document.getElementById('contact-name').style.backgroundColor = 'White';
  producePrompt('', 'name-error', 'green');
  return true;

}

// ------------------------------------------------------------------------------

function validateEmail() {

  var email = document.getElementById('contact-email').value;

  if (email.length == 0) {
    document.getElementById('contact-email').style.backgroundColor = 'lightyellow';
    producePrompt('Digite seu e-mail.', 'email-error', 'red');
    return false;

  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    document.getElementById('contact-email').style.backgroundColor = 'lightyellow';    
    return false;

  }

  document.getElementById('contact-email').style.backgroundColor = 'White';
  producePrompt('', 'email-error', 'green');
  return true;

}

// ------------------------------------------------------------------------------

function validateMessage() {
  var message = document.getElementById('contact-comment').value;
  var required = 100;
  var left = required - message.length;

  if (message.length == 0) {
    document.getElementById('contact-comment').style.backgroundColor = 'lightyellow';
    producePrompt('Digite uma mensagem.', 'comment-error', 'red');
    return false;
  }

  if (message.length < required) {
    document.getElementById('contact-comment').style.backgroundColor = 'White';
    producePrompt('Caracteres restantes: ' + left + '.', 'comment-error', 'white');
    return true;
  }

  if (message.length >= required) {
    document.getElementById('contact-comment').style.backgroundColor = 'White';
    document.getElementById('contact-comment').value = document.getElementById('contact-comment').value.substring(0, required);
    producePrompt('', 'comment-error', 'white');
  }
  return true;
}

// ------------------------------------------------------------------------------

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    if (!validateName()){
      if(document.getElementById('contact-name').value.length == 0)
        producePrompt('Digite seu nome.', 'name-error', 'red');
      else
        producePrompt('Preenchimento inválido.', 'name-error', 'red');
    }
    if (!validateEmail()){
      if(document.getElementById('contact-email').value.length == 0)
        producePrompt('Digite seu e-mail.', 'email-error', 'red');
      else
        producePrompt('Preenchimento inválido.', 'email-error', 'red');
    }
    if (!validateMessage()){
      if(document.getElementById('contact-comment').value.length == 0)
        producePrompt('Digite uma mensagem.', 'comment-error', 'red');
    }    
    
    jsShow('submit-error');
    producePrompt('Corrija os erros antes de enviar.', 'submit-error', 'red');
    setTimeout(function () { jsHide('submit-error'); }, 5000);
    return false;
  }
  else {
    // Left in blank.
  }
}

// ------------------------------------------------------------------------------

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}

// ------------------------------------------------------------------------------

function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}