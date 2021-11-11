const submitBtn = document.getElementById('submitBtn');
const email = document.getElementById('email');

submitBtn.onclick = (evt) => {
  const hasErrorMsg = element => email.parentNode.querySelector('span');
  const removeOutline = element => email.classList.remove('not-valid');
  const removeErrorMsg = element => email.parentNode.removeChild(hasErrorMsg());

  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  evt.preventDefault();

  if (!email.value) {
    if (hasErrorMsg()) {
      removeErrorMsg()
      removeOutline()
    }
  }

  if (!email.value.match(emailPattern)) {
    if (!hasErrorMsg()) {
      const span = document.createElement('span');

      span.innerText = 'Please provide a valid email address';
      email.parentNode.appendChild(span);
      email.className = 'not-valid';
    }
  } else {
    if (hasErrorMsg()) {
      removeErrorMsg()
      removeOutline()
    }
  }
}
