!function($){function t(t){if(""===t)return!1;if("inherit"===t)return!1;if("transparent"===t)return!1;var n=document.createElement("img");return n.style.color="rgb(0, 0, 0)",n.style.color=t,"rgb(0, 0, 0)"!==n.style.color?!0:(n.style.color="rgb(255, 255, 255)",n.style.color=t,"rgb(255, 255, 255)"!==n.style.color)}function n(n){var e=n.find("input");e.each(function(){var n=$(this).val(),e;console.log(n),n.indexOf("#")<0&&n.indexOf("rgb")<0&&n.indexOf("hsl")<0?n.indexOf("%")>-1?e=n.split(",").length>3?"hsla("+n+")":"hsl("+n+")":n.split(",").length>1?e=n.split(",").length>3?"rgba("+n+")":"rgb("+n+")":t(n)?e=n:(e="transparent",$(this).attr("disabled",!0).parent().css("color","#999")):e=n;var i=e;$(this).siblings(".swatch-toggle").children(".swatch-color").css("background",i)})}"undefined"!=typeof acf.add_action?acf.add_action("ready append",function(t){acf.get_fields({type:"swatch"},t).each(function(){n($(this))})}):$(document).on("acf/setup_fields",function(t,e){$(e).find('.field[data-field_type="swatch"]').each(function(){n($(this))})})}(jQuery);