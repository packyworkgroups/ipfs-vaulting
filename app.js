$(document).ready(function() {
  const uri = 'https://raw.githubusercontent.com/packyworkgroups/ipfs-vaulting/11efab8a3afa121aab83cbadb602857b63472423/updater/airdrop-users.json'

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
