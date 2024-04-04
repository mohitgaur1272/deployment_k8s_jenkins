function getUrlParams(dParam) 
	{
		var dPageURL = window.location.search.substring(1),
			dURLVariables = dPageURL.split('&'),
			dParameterName,
			i;

		for (i = 0; i < dURLVariables.length; i++) {
			dParameterName = dURLVariables[i].split('=');

			if (dParameterName[0] === dParam) {
				return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
			}
		}
	}

function addSwitcher()
{
	var currentURL      = window.location.href; 
	var urlLTR = '';
	var urlRTL = '';
	if(currentURL.indexOf('xhtml-rtl') > -1){
		urlLTR = currentURL.replace('xhtml-rtl', 'xhtml')
		urlRTL = currentURL;
	}else{
		urlRTL = currentURL.replace('xhtml', 'xhtml-rtl')
		urlLTR = currentURL;
	}
	
	var dzSwitcher = '<div id="dzSwitcher-right" class="styleswitcher"> <div class="switcher-btn-bx"> <a href="javascript:void(0);" class="switch-btn closed"> <span class="fas fa-cog"></span> </a> </div><div class="styleswitcher-inner"> <a href="javascript:void(0);" class="dez-page btn btn-primary btn-sm" onclick="deleteAllCookie();">Delete All Cookie</a> <div class="theme-box"> <h5 class="switcher-title"> <span>Theme</span> </h5> <h6 class="switcher-title">Standard</h6> <ul val="themeFullColor" class="color-skins-db theme-panel-save"> <li> <a class="theme-skin skin-1" href="javascript:void(0);" dir="css/skin/skin-1" logo="images/logo.png" white-logo="images/logo-white.png"></a> </li><li> <a class="theme-skin skin-2" href="javascript:void(0);" dir="css/skin/skin-2" logo="images/logo-2.png" white-logo="images/logo-white-2.png"></a> </li><li> <a class="theme-skin skin-3" href="javascript:void(0);" dir="css/skin/skin-3" logo="images/logo-3.png" white-logo="images/logo-white-3.png"></a> </li><li> <a class="theme-skin skin-4" href="javascript:void(0);" dir="css/skin/skin-4" logo="images/logo-4.png" white-logo="images/logo-white-4.png"></a> </li><li> <a class="theme-skin skin-5" href="javascript:void(0);" dir="css/skin/skin-5" logo="images/logo-5.png" white-logo="images/logo-white-5.png"></a> </li><li> <a class="theme-skin skin-6" href="javascript:void(0);" dir="css/skin/skin-6" logo="images/logo-6.png" white-logo="images/logo-white-6.png"></a> </li><li> <a class="theme-skin skin-7" href="javascript:void(0);" dir="css/skin/skin-7" logo="images/logo-7.png" white-logo="images/logo-white-7.png"></a> </li><li> <a class="theme-skin skin-8" href="javascript:void(0);" dir="css/skin/skin-8" logo="images/logo-8.png" white-logo="images/logo-white-8.png"></a> </li></ul> </div><div class="theme-box"> <h5 class="switcher-title"> <span>Template View</span> </h5> <ul class="skin-view theme-panel-save"> <li class="active"> <a href="'+urlLTR+'">LTR</a> </li><li class=""> <a href="'+urlRTL+'">RTL</a> </li></ul> </div><div class="theme-box"> <h5 class="switcher-title"> <span>Dark Mode</span> </h5> <ul val="mode" class="dark-view theme-panel-save"> <li class="light-theme active"> <a href="javascript:void(0);" dir="light" logo="images/logo.png">Light</a> </li><li class="dark-theme"> <a href="javascript:void(0);" dir="dark" logo="images/logo-white.png">Dark</a> </li></ul> </div><div class="theme-box"> <h5 class="switcher-title"> <span>Layout</span> </h5> <ul val="layout" class="layout-view theme-panel-save"> <li class="wide-layout active"> <a href="javascript:void(0);" dir="wide-layout">Wide</a> </li><li class="boxed"> <a href="javascript:void(0);" dir="boxed">Boxed</a> </li><li class="frame"> <a href="javascript:void(0);" dir="frame">Frame</a> </li></ul> <div id="ThemeRangeSlider" class="price-slide-2 range-slider" style="display:none"> <div class="price"> <input type="text" id="FramePadding" class="amount" readonly="" value="20px"/> <div id="slider-range-3"></div></div></div></div><div class="theme-box"> <h5 class="switcher-title"> <span>Header</span> </h5> <ul val="header" class="header-view theme-panel-save"> <li class="header-fixed active"> <a href="javascript:void(0);" dir="sticky-header">Fixed</a> </li><li class="header-static"> <a href="javascript:void(0);" dir="sticky-no">Static</a> </li></ul> </div><div class="theme-box"> <h5 class="switcher-title"> <span>Background</span> </h5> <h6 class="switcher-title">Color</h6> <ul val="bgColor" class="bg-color-switcher theme-panel-save"> <li> <a class="bg-color-1" href="javascript:void(0);" dir="#c6a47e"></a> </li><li> <a class="bg-color-2" href="javascript:void(0);" dir="#a3cc02"></a> </li><li> <a class="bg-color-3" href="javascript:void(0);" dir="#ff1d4d"></a> </li><li> <a class="bg-color-4" href="javascript:void(0);" dir="#57b7c0"></a> </li><li> <a class="bg-color-5" href="javascript:void(0);" dir="#ffaf29"></a> </li><li> <a class="bg-color-6" href="javascript:void(0);" dir="#ef9f7e"></a> </li><li> <a class="bg-color-7" href="javascript:void(0);" dir="#e485da"></a> </li><li> <a class="bg-color-8" href="javascript:void(0);" dir="#8669d4"></a> </li></ul> <h6 class="switcher-title">Image</h6> <ul val="bgImage" class="background-switcher theme-panel-save"> <li> <img src="images/switcher/switcher-bg/bg1.jpg" dir="images/background/bg1.jpg" alt=""> </li><li> <img src="images/switcher/switcher-bg/bg2.jpg" dir="images/background/bg2.jpg" alt=""> </li><li> <img src="images/switcher/switcher-bg/bg3.jpg" dir="images/background/bg3.jpg" alt=""> </li><li> <img src="images/switcher/switcher-bg/bg4.jpg" dir="images/background/bg4.jpg" alt=""> </li></ul> <h6 class="switcher-title">Pattern</h6> <ul val="bgPatten" class="pattern-switcher theme-panel-save"> <li> <img src="images/switcher/switcher-patterns/bg1.jpg" dir="images/pattern/pt1.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg2.jpg" dir="images/pattern/pt2.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg3.jpg" dir="images/pattern/pt3.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg4.jpg" dir="images/pattern/pt4.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg5.jpg" dir="images/pattern/pt5.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg6.jpg" dir="images/pattern/pt6.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg7.jpg" dir="images/pattern/pt7.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg8.jpg" dir="images/pattern/pt8.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg9.jpg" dir="images/pattern/pt9.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg10.jpg" dir="images/pattern/pt10.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg11.jpg" dir="images/pattern/pt11.jpg" alt=""> </li><li> <img src="images/switcher/switcher-patterns/bg12.jpg" dir="images/pattern/pt12.jpg" alt=""> </li></ul> </div></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher);
	}
}


jQuery(window).on('load',function(){
	
	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-220px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-220px',
		'left': 'auto'
	});
	jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//
	
});

$(function(){
	"use strict";
	
	addSwitcher();
	
	//=== Switcher panal slide function	=====================//
	jQuery('.switch-btn').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			jQuery('.styleswitcher').animate({
				'left': '-220px'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '-220px',
				'left': 'auto'
			});
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			jQuery('.styleswitcher').animate({
				'left': '0'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '0',
				'left': 'auto'
			});
			}
		}	
	});
	//=== Switcher panal slide function END	=====================//

	//=== Color css change function	=====================//
    // Color changer
    jQuery(".skin-1").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-dark img, .header-transparent .logo-dark img").attr("src", "images/logo.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white.png");
		
		
        return false;
    });
    jQuery(".skin-2").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-dark img").attr("src", "images/logo-2.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white-2.png");
        
		
		return false;
    });
   
    jQuery(".skin-3").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-dark img").attr("src", "images/logo-3.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white-3.png");
        
		
		return false;
    });
	
	jQuery(".skin-4").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-dark img").attr("src", "images/logo-4.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white-4.png");
        
		
		return false;
    });
	
	jQuery(".skin-5").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-dark img").attr("src", "images/logo-5.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white-5.png");
        
		return false;
    });
	
	jQuery(".skin-6").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-dark img").attr("src", "images/logo-6.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white-6.png");
        
		return false;
    });
	
	jQuery(".skin-7").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-dark img").attr("src", "images/logo-7.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white-7.png");
        
		return false;
    });
	
	jQuery(".skin-8").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-dark img").attr("src", "images/logo-8.png");
		jQuery(".layout-dark .logo-dark img, .header-transparent .logo-dark").attr("src", "images/logo-white-8.png");
        
		
		return false;
    });
	
	//=== Color css change function	=====================//	
	
	//=== Background image change function	=====================//
	jQuery('.background-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 });
	//=== Background image change function	End=====================//
	
	//=== Background pattern change function	=====================//
	jQuery('.pattern-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 jQuery("#bg").css( "background-size", "auto");
	 
	 });
	//=== Background pattern change function End=====================//
	
	//=== Background pattern change function	=====================//
	jQuery('.bg-color-switcher li a').on('click',function(){
	 var bgcolor = jQuery(this).attr('dir');
	 //alert(bgcolor);
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(bgcolor);
		jQuery('#bg').css('background-color', bgcolor);
		jQuery('#bg').css('background-image', '');
	 });
	//=== Background pattern change function End=====================//
	

	//=== Layout boxed & fullscreen change function	=====================//
	jQuery('.layout-view li ').on('click', function(){
		jQuery('.layout-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	jQuery('.skin-view li ').on('click', function(){
		jQuery('.skin-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.wide-layout').on('click',function() { 
		jQuery("body").addClass('wide-layout');
		jQuery("body").removeClass('boxed');
		jQuery("body").removeClass('frame').removeAttr("style");
		jQuery(".page-wraper").removeAttr("style");
		jQuery('#ThemeRangeSlider').hide('slow');
		
		
	});
	
	jQuery('.boxed').on('click',function() { 
		jQuery("body").addClass('boxed');
		jQuery("body").removeClass('wide-layout');
		jQuery("body").removeClass('frame').removeAttr("style");
		jQuery(".page-wraper").removeAttr("style");
		jQuery('#ThemeRangeSlider').hide('slow');
		//alert(1);
		//jQuery('body').trigger('resize');
		//jQuery('.page-wraper').trigger('resize');
		//jQuery(window).trigger('resize');
	});
	jQuery('.frame').on('click',function() { 
		jQuery("body").addClass('frame');
		jQuery("body").removeClass('wide-layout');
		jQuery("body").removeClass('boxed');
		jQuery("body").removeClass('boxed');
		jQuery('#ThemeRangeSlider').show('slow');
		//themeFramePadding();
		jQuery(".main-bar-wraper").addClass('sticky-no');
		jQuery(".main-bar-wraper").removeClass('sticky-header');
	});
	
	themeFramePadding();
	
	//=== Layout boxed & fullscreen change function	END=====================//

	//=== Nav light & dark change function	END=====================//
	jQuery('.nav-view li ').on('click', function(){
		jQuery('.nav-view li ').removeClass('active');
		jQuery(this).addClass('active');
		
	});
	
	jQuery('.nav-light').on('click',function() { 
		jQuery(".header-nav").addClass('nav-light');
		jQuery(".header-nav").removeClass('nav-dark');
	});
	
	jQuery('.nav-dark').on('click',function() { 
		jQuery(".header-nav").addClass('nav-dark');
		jQuery(".header-nav").removeClass('nav-light');
	});
	
	//=== Layout light & dark change function	END=====================//
	jQuery('.dark-view li ').on('click', function(){
		jQuery('.dark-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.light-theme').on('click',function() { 
		jQuery("body").addClass('layout-light');
		jQuery("body").removeClass('layout-dark');
		
		jQuery(".layout-light .logo-dark img").attr("src", "images/logo.png");
	});
	
	jQuery('.dark-theme').on('click',function() { 
		jQuery("body").addClass('layout-dark');
		jQuery("body").removeClass('layout-light');
		
		
		
		jQuery(".layout-dark .logo-dark img").attr("src", "images/logo-white.png");
	});
	
	//=== Nav light & dark change function	END=====================//	
	
	/* Header View */
	jQuery('.header-view li ').on('click', function(){
		jQuery('.header-view li ').removeClass('active');
		jQuery(this).addClass('active');
	});
	
	jQuery('.header-fixed').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-header');
		jQuery(".main-bar-wraper").removeClass('sticky-no');
	});
	
	jQuery('.header-static').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-no');
		jQuery(".main-bar-wraper").removeClass('sticky-header');
	});
	/* Header View END */
	

	
	var currentURL      = window.location.href; 
	if(currentURL.indexOf('index.html') > -1){
		jQuery('.menubar-box').remove();
	}
	
});

/* Theme Panel Save */
	
	
	var themeOption = ['themeStandardColor','themeFullColor','layout','mode','header','menubar','bgColor','bgImage','bgPatten'];
	themeOption['layout'] = ['wide','boxed','frame','frame_value','layout_value'];
	themeOption['mode'] = ['light','dark'];
	themeOption['themeStandardColor'] = ['skin-1','skin-2','skin-3','skin-4','skin-5','skin-6','skin-7','skin-8','skin-9','skin-10','themeStandardColor_value','themeStandardColor_logo'];
	themeOption['themeFullColor'] = ['css/skin/skin-1','css/skin/skin-2','css/skin/skin-3','css/skin/skin-4','css/skin/skin-5','css/skin/skin-6','css/skin/skin-7','css/skin/skin-8','css/skin/skin-9','css/skin/skin-10','themeFullColor_value','themeFullColor_logo'];
	themeOption['header'] = ['fixed','static','header_value'];
	themeOption['menubar'] = ['left','top','menubar_value'];
	themeOption['bgColor'] = ['#896eff','#f55f8d','#fdb400','#ef146e','#6a1a1f','#019444','#00c6ff','#e87800','#cc9f5a','#bd5ec6','bgColor_value'];
	themeOption['bgImage'] =['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bgImage_value'];
	themeOption['bgPatten'] =['pt1.jpg','pt2.jpg','pt3.jpg','pt4.jpg','pt5.jpg','pt6.jpg','pt7.jpg','pt8.jpg','pt9.jpg','pt10.jpg','pt11.jpg','pt12.jpg','bgPatten_value'];

jQuery(document).ready(function(){
	
	var theme_mode = getUrlParams('theme_mode');
	
	if(theme_mode != '' && theme_mode != undefined){
		var setLogo = (theme_mode == 'dark')?'images/logo-white.png':'images/logo.png';
		setCookie('mode_value',theme_mode,1);
		setCookie('logo_value',setLogo,1);
	}
	
	
	jQuery('.theme-panel-save li a, .theme-panel-save li img').on('click', function() {
			//alert(1);
			var optionValue =  jQuery(this).attr('dir');
			var optionData =  jQuery(this).parent().parent().attr('val');
			//themeOption[optionData][optionData+'_value'] = data;
			
			
			if(optionData == 'bgColor'){
				deleteCookie('bgImage_value');
				deleteCookie('bgPatten_value');
			}else if(optionData == 'bgImage'){
				deleteCookie('bgColor_value');
				deleteCookie('bgPatten_value');
			}else if(optionData == 'bgPatten'){
				deleteCookie('bgColor_value');
				deleteCookie('bgImage_value');
			}else if(optionData == 'themeStandardColor'){
				deleteCookie('themeFullColor_value');
			}else if(optionData == 'themeFullColor'){
				
				if(jQuery('.layout-dark').length > 0){
					var themeLogo =  jQuery(this).attr('white-logo');
					setCookie('logo_value',themeLogo,1);
				}else{
					var themeLogo =  jQuery(this).attr('logo');
					setCookie('logo_value',themeLogo,1);
				}
				
				
				deleteCookie('themeStandardColor_value');
			}else if(optionData == 'themeStandardColor' || optionData == 'themeFullColor'){
				var themeLogo =  jQuery(this).attr('logo');
				setCookie(optionData+'_logo',themeLogo,1);
			}else if(optionData == 'mode'){
				var themeLogo =  jQuery(this).attr('logo');
				setCookie(optionData+'_logo',themeLogo,1);
			}
			
			
			setCookie(optionData+'_value',optionValue,1);
	});
	
	
	
	
	setThemePanel();
	//deleteAllCookie();
	//alert(document.cookie);
	
	
	
});

function themeFramePadding(){
	var themeOptionFrameValue = getCookie('frame_value');
	if(themeOptionFrameValue == ''){
		themeOptionFrameValue = 20;
	}
	if($("#slider-range-3").length > 0 )
	{
		var screenHeight = $(window).height();
		
		$("#slider-range-3").unbind().slider({
				min: 20,
				max: 80,
				//value: 20,
				value: themeOptionFrameValue,
				animate:"slow",
				orientation: "horizontal",
				slide: function( event, ui ) {
					var frameSlider = ui.value;
					
					pageWrapperHeight = screenHeight - (frameSlider * 2);
					
					$('#' + this.id).prev().val(frameSlider+"px");
					$( "#bg" ).css('padding',frameSlider+"px");
					$( ".page-wraper" ).css('height',pageWrapperHeight+"px");
					
					
					setCookie('frame_value',frameSlider,1);
			   }
		});
	}
}

function setThemePanel(){
	jQuery.each(themeOption, function(index, themeOptionItem) {
		themeOptionItemValue = getCookie(themeOptionItem+'_value');
		
		if(themeOptionItemValue != 'undefined' && themeOptionItemValue != '' && themeOptionItemValue != '1'){
				if(themeOptionItem == 'themeStandardColor'){
					jQuery(".skin").attr("href", themeOptionItemValue+".css");
					//setThemeLogo(themeOptionItem);
				}else if(themeOptionItem == 'themeFullColor'){
					jQuery(".skin").attr("href", themeOptionItemValue+".css");
					//setThemeLogo(themeOptionItem);
				}else if(themeOptionItem == 'mode'){
					if(themeOptionItemValue == 'dark'){
						jQuery("body").removeClass('layout-light').addClass('layout-dark');
					}else{
						jQuery("body").removeClass('layout-dark').addClass('layout-light');	
					}
					
					//setThemeLogo(themeOptionItem);
				}else if(themeOptionItem == 'layout'){
					jQuery('.'+themeOptionItem+'-view li').removeClass('active');
					jQuery('.'+themeOptionItem+'-view').find('.'+themeOptionItemValue).addClass('active');
					if(themeOptionItemValue == 'frame'){
						jQuery('#ThemeRangeSlider').show('slow');
						jQuery("body").addClass(themeOptionItemValue);
						themeOptionFrameValue = getCookie('frame_value');
						if(themeOptionFrameValue == ''){
							themeOptionFrameValue = 20;
						}
						jQuery('#FramePadding').val(themeOptionFrameValue+"px");
						jQuery("#bg").css('padding',themeOptionFrameValue+"px");
					}else{
						jQuery("body").addClass(themeOptionItemValue);	
					}
				}else if(themeOptionItem == 'header'){
					jQuery('.'+themeOptionItem+'-view li').removeClass('active');
					if( themeOptionItemValue == 'sticky-header'){
						jQuery('.'+themeOptionItem+'-view').find('.header-fixed').addClass('active');	
					}else if( themeOptionItemValue == 'sticky-no'){
						jQuery('.'+themeOptionItem+'-view').find('.header-static').addClass('active');
					}
					jQuery(".main-bar-wraper").addClass(themeOptionItemValue);
				}else if(themeOptionItem == 'bgColor'){
					jQuery('#bg').css('background-color', themeOptionItemValue);
					jQuery('#bg').css('background-image', '');
				}else if(themeOptionItem == 'bgImage'){
					jQuery('#bg').css({backgroundImage: "url("+themeOptionItemValue+")"});
				}else if(themeOptionItem == 'bgPatten'){
					jQuery('#bg').css({backgroundImage: "url("+themeOptionItemValue+")"});
					jQuery("#bg").css( "background-size", "auto");
				}
		}
	});
	
	logoValue = getCookie('logo_value');
	
	if(logoValue != 'undefined' && logoValue != '' && logoValue != '1')
	{
		jQuery(".logo-white img").attr("src", logoValue);
		jQuery(".logo-dark img").attr("src", logoValue);
		jQuery(".logo-center .logo-c").attr("src", logoValue);
	}
}

var tf_logo_selector = getCookie('themeFullColor_logo_selector');
if(tf_logo_selector != '')
{
	var tf_logo_image = getCookie('themeFullColor_logo_image');
	
	var logoSelectorArr = tf_logo_selector.split(',');
	var logoSrcArr		= tf_logo_image.split(',');
	var arrCount = logoSelectorArr.length;
	for(var i=0; i<arrCount; i++){
		jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
	}
}

function setThemeLogo(themeOptionItemAttr){
	
	var logo = getCookie(themeOptionItemAttr+'_logo');
	
	if(logo != ''){
		//alert(logo+' '+jQuery(".logo-dark a").html());
		jQuery(".logo-white img").attr("src", logo);
		jQuery(".logo-dark img").attr("src", logo);
		jQuery(".logo-center .logo-c").attr("src", logo);
	}
}

function setCookie(cname, cvalue, exhours) {
		var d = new Date();
		d.setTime(d.getTime() + (30*60*1000)); /* 30 Minutes*/
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime() + (1)); /* 1/1000 second*/
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=1;" + expires + ";path=/";
}

function deleteAllCookie() {
	jQuery.each(themeOption, function(index, themeOptionItem) {
			deleteCookie(themeOptionItem+'_value');
	});
	deleteCookie('logo_value');
	
	location.reload();
}
