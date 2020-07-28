$(function(){
	var dateOption = (function () {
	
	    var option = { 0: "nian", 1: "yue", 2: "ri" };
	    function renderOption(min, max) {
	        var i = min, optionHtml = "";
	        for (; i < max; i++) {
	            optionHtml += "<option value='" + i + "'>" + i + "</option>";
	        }
	
	        optionHtml = "<option value='-1'>选择</option>" + optionHtml;
	
	        return optionHtml;
	    }
	    function getTotalDayByDate(year, month) {
	        var dayCount = 0;
	        switch (month) {
	            case 1:
	            case 3:
	            case 5:
	            case 7:
	            case 8:
	            case 10:
	            case 12:
	                dayCount = 31;
	                break;
	            case 4:
	            case 6:
	            case 9:
	            case 11:
	                dayCount = 30;
	                break;
	            case 2:
	                //闰年计算
	                if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
	                    dayCount = 29;
	                else
	                    dayCount = 28;
	                break;
	        }
	        return dayCount;
	    }
	    $("#nian").empty().append(renderOption(1920, 2017));
	    $("#yue").empty().append(renderOption(1, 13));
	    $("#yue").change(function () {
	        var year = parseInt($("#nian").val());
	        var month = parseInt($(this).val());
	        var dayCount = getTotalDayByDate(year, month);
	        $("#ri").siblings("span").text("选择");
	        $("#ri").empty().append(renderOption(1, dayCount + 1));
	    });
	    $("#nian,#yue,#ri").change(function () {
	        var val = $(this).val();
	        $(this).siblings("span").text(val);
	    });
	})();
	
});