const numbersDiv = document.querySelector('.numbers');
let rateState = document.getElementById('rate-state');
let thankYouState = document.getElementById('thank-you-state');
let selectedSpan = null;
let selectedNumber = 0;
let yourRate = document.getElementById('your-rate');

thankYouState.style.display = 'none';

numbersDiv.addEventListener('click', function(event) {
  if (event.target.tagName === 'SPAN') { 
    if (selectedSpan) { 
      selectedSpan.classList.remove('selected');
    }
    selectedSpan = event.target;
    selectedSpan.classList.add('selected');
    selectedNumber = selectedSpan.innerHTML;
  }
});

const submitButton = document.getElementById('submit');

submitButton.addEventListener('pointerdown', function() {
    if ( selectedSpan != null) {
    rateState.style.display = 'none';
    thankYouState.style.display = 'flex';    
    yourRate.innerHTML = selectedNumber;
    }
})
;
