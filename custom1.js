window.addEventListener('load', tweakSharetribe);


function tweakSharetribe() {

  /* Hide calendly URL and add a booking button instead */

  var rows = document.getElementsByClassName("col-12");

  for (var i = 0; i < rows.length; i++) {
    if (rows[i].innerText.match(/calendly link/i)) {
      var calendlyURL = rows[i].innerText.match(/https:\/\/calendly\.com\/\S+/i)[0];
      rows[i].innerHTML = "";
    }
  }

  var order_button = document.getElementsByClassName('enabled-book-button')[0];
  if (order_button != null && calendlyURL != null) {
    order_button.insertAdjacentHTML( 'beforeBegin', '<button class="enabled-book-button" href="" onclick="Calendly.showPopupWidget(\'' + calendlyURL +'\');return false">Availability and reservation</button>' );
  }

  /* Add an instruction text to the listing form */


    var infotext = 'If you want to allow hourly booking, set up an event for free at <a href="http://calendly.com" target="_blank">Calendly.com </a> and put here the link to that calendly event.'
  var labels = document.getElementsByTagName('LABEL');
  for (var i = 0; i < labels.length; i++) {
      if (labels[i].textContent.match(/calendly link/i)) {
           labels[i].insertAdjacentHTML( 'afterend', '<div class="info-text-container"><div class="info-text-icon"><i class="ss-info"></i></div><div class="info-text-content"><p>' + infotext + '</p></div></div>' );
        }
    }

}
