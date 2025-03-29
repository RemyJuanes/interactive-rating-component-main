document.querySelectorAll('input[name="rating"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    document.querySelector('input[type="submit"]').removeAttribute('disabled');

    document.querySelectorAll('.star').forEach((span) => {
      span.style.display = 'none';
    });

    document.querySelector(`#star-${radio.value}`).style.display = 'inline';
  });
});

document.querySelector('.rating-dialog').addEventListener('submit', (event) => {
  document.querySelector('.thank-you-state').style.display = 'flex';
});
