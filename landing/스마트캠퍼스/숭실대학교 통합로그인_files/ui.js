$(document).ready(function () {
		 $(".tbl_type1 tbody tr:odd").addClass("even");
		 $('.sel_style').styleSelect();
		 $(".ico_layout").click(function(){
			$("#sContents").toggleClass("sub_horizon");
		 });
		 $(".link").mouseover(function(){
			$(this).parent().addClass("on");
		 });

		$(".lnb li").mouseleave(function(){
			if ($(".links").parent().addClass("on")==true)
			{
			}else{
			$(this).removeClass("on");
			}
		});

		// layer pop close
		$(".layer_popup .btn").click(function(){
			$(".layer_popup").hide();
		});
		$(".layer_popup .btn").click(function(){
			$(".layer_popup").hide();
		});
		$(".layer_popup .btn").click(function(){
			$(".layer_popup").hide();
		});

});


(function ($) {
    $.fn.extend({
        styleSelect: function (options) {
            if (!$.browser.msie || ($.browser.msie && $.browser.version > 6)) {
                return this.each(function () {
                    var currentSelected = $(this).find(':selected');
                    $(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">' + currentSelected.text() + '</span></span>').css({ position: 'absolute', opacity: 0, fontSize: $(this).next().css('font-size') });
                    var selectBoxSpan = $(this).next();
                    var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) - parseInt(selectBoxSpan.css('padding-right'));
                    var selectBoxSpanInner = selectBoxSpan.find(':first-child');
                    selectBoxSpan.css({ display: 'inline-block' });
                    selectBoxSpanInner.css({ width: selectBoxWidth, display: 'inline-block' });
                    var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
                    $(this).height(selectBoxHeight).change(function () {
                        selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
                    });
                });
            }
        }
    });
})(jQuery);



$(document).ready(function(){
	//loading Height
	$("#loading").height($(window).height());
	
	// document min-height
	var winHeight = $(window).height() - parseInt($("#sWrap").css("padding-bottom"));
	$("#sWrap").css("min-height",winHeight);
	
	// menuNav Open
	$("#sWrap .btn_menu").bind("click",function(){
		var docHeight = $(document).height(),
		winHeight = $(window).height();
		$("body").css("overflow","hidden").unbind('touchmove', function(e){
			e.preventDefault()}
		);
		$("#menuNav").animate({"left":0},200).height(winHeight);
		$("#sWrap").append(
			'<div class="menu_bg"></div>'
		)
		$(".menu_bg").css({
			position:"absolute",
			left:0,
			top:0,
			width:"100%",
			height:docHeight,
			background:"#000",
			opacity:"0.7",
			zIndex:888
		})
	})
	

	// menuNav Close
	$("#menuNav .btn_close_menu").bind("click",function(){
		var winMove = $("#menuNav").width();
		$("body").css("overflow","auto").unbind('touchmove')
		$("#menuNav").animate({"left":-winMove},200);
		$(".menu_bg").remove();
	})
	

})

$(document).ready(function () {
		 $(".m_nav .menu").click(function(){
			$(this).parent().toggleClass("on");
			$(this).parent().children(".layer_nav").slideToggle(200);
		 });
});


