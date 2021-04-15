const header = document.querySelector('.header');

window.onscroll = function(){
  let top = window.scrollY;
  if(top >= 10){
    header.classList.add('active');
  }else  {
    header.classList.remove('active');
  }
}

const form = document.querySelector('.pricelist__form')

form.addEventListener('change', (event) => {
  let total = 0
  checkOnlyOneCheckbox(event.target);

  const allCheckboxes = form.querySelectorAll("input[type='checkbox']:checked")
  allCheckboxes.forEach((element) => {
    total += +element.value
  });

  document.querySelector('.price-list__summary .summary').innerHTML = `$${total}`;
});

const checkOnlyOneCheckbox = (currentCheckbox) => {
  const currentCheckboxChecked = currentCheckbox.checked

  const checkboxes = currentCheckbox.closest('div').querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((element) => {
    element.checked = false
  })
  currentCheckbox.checked = currentCheckboxChecked;
}
