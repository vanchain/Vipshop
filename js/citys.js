$(function(){
	var $town = $('#demo3 select[name="town"]');
	 var townFormat = function(info) {
	 	$town.hide().empty();
	 	if (info['code'] % 1e4 && info['code'] < 7e6) { //是否为“区”且不是港澳台地区
	 		$.ajax({
	 			url: 'https://passer-by.com/data_location/town/' + info['code'] + '.json',
	 			dataType: 'json',
	 			success: function(town) {
	 				$town.show();
	 				for (i in town) {
	 					$town.append('<option value="' + i + '">' + town[i] + '</option>');
	 				}
	 			}
	 		});
	 	}
	 };
	 $('#demo3').citys({
	 	province: '福建',
	 	city: '厦门',
	 	area: '思明',
	 	onChange: function(info) {
	 		townFormat(info);
	 	}
	 }, function(api) {
	 	var info = api.getInfo();
	 	townFormat(info);
	 });
	
});