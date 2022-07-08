// gmarket main script
$(function(){
	//스플래쉬 스크린 
	//일정시간동안 한번만 실행되고 끝나는 함수 
	//setTimeout(할일,시간);
	//setTimeout(function(){ 실제로 할일 },시간);
	
	//스플래쉬 함수 실행 
	splash(2000);
	function splash(idx){
		var time = idx;
		setTimeout(function(){
			$('#splash_screen').hide();
		},time);
	}
	
	var navi = $('nav ul li');
	var moveBar = $('.move_bar');
	
	navi.click(function(){
		//nav요소로 부터 떨어진 li의 left값을 구해서 targetLeft 변수에 저장 
		var targetLeft = $(this).position().left;
		//클릭한 li의 가로크기를 구해서 targetWidth 변수에 저장 
		var targetWidth = $(this).outerWidth();
		
		moveBar.stop().animate({left:targetLeft,width:targetWidth},300);
	});
	
	
	$('#g_menu').click(function(){
		$('#menu_area').animate({marginRight:0},200);
		$('#wrap').css({display:'none'});
	});
	
	$('#x_btn').click(function(){
		$('#menu_area').animate({marginRight:'-100%'},200);
		$('#wrap').css({display:'block'});
	});
	
	
});//기본로딩함수 