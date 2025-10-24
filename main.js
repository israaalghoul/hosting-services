document.addEventListener('click', function(event) {
  if (event.target.classList.contains('line')) {
    const itemsInRow = event.target.parentNode.querySelectorAll('.line');
    itemsInRow.forEach(item => item.classList.remove('active'));

    event.target.classList.add('active');
  }
});