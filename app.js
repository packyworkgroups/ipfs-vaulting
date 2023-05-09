$(document).ready(function() {
  const uri = 'https://raw.githubusercontent.com/packyworkgroups/ipfs-vaulting/main/updater/tester.json'

  $.getJSON(uri, function(data) {
    var table = $('#airdropTable');
    data.forEach(function(object) {
      let claimable = object.ipfs / Math.pow(10, 18)

      markup = '<tr><td>' + object.to.mywallet.services + '</td>'
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
