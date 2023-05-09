$(document).ready(function() {
  const uri = 'https://raw.githubusercontent.com/paraswap/paraswap-rewards-snapshot/master/data/airdrop-users.json'

  $.getJSON(uri, function(data) {
    var table = $('#airdropTable');
    data.forEach(function(object) {
      let claimable = object.earnings / Math.pow(10, 18)

      markup = '<tr><td>' + object.address + '</td>'
      + '<td>' + claimable + '</td>'
      + '<td>' + object.reasons + '</td></tr>';
      table.append(markup);
    });
  });

  $("#ethereumAddress").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#airdropTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
