function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}$(function(){$.fn.hasAttr=function(t){var a=this.attr(t);return"undefined"!==_typeof(a)&&!1!==a},$.fn.materialForm=function(){// Radio
function f(t){var a=t.attr("type");return"hidden"!=a&&"submit"!=a&&"checkbox"!=a&&"radio"!=a&&"file"!=a?1:0}function c(t,a){return t.attr("type")==a}function h(t){t.val()?t.addClass("filled"):t.removeClass("filled")}// Selects
/*
       this.find('select').each(function(i){
       	var placeholder = $(this).attr('placeholder');
       	var type = ($(this).attr('multiple') ? 'checkbox' : 'radio');
       	var name = id = $(this).attr('name');
       	var $wrap = $(this).wrap("<div class='material-select'></div>").parent();
       	if(type == 'checkbox'){
       		name += '[]';
       		var $bar = $('<span class="material-bar"></span>');
       		$wrap.append($bar).addClass('checkbox');
       	}
       	else{
       		var $title = $('<span class="material-title">'+placeholder+'</span>');
       		$wrap.prepend($title);
       	}
        	var $label = $('<label for="select-'+i+'"><span>'+placeholder+'</span><strong></strong></label>');
       	var $checkbox = $('<input type="checkbox" id="select-'+i+'">');
        	$wrap.prepend($checkbox);
       	$wrap.prepend($label);
       	
       	var $list = $('<ul class="'+type+'"></ul>');
       	$wrap.append($list);
        	var selected_length = 0;
       	var length = $(this).children('option').length;
       	var $selected;
       	$(this).children('option').each(function(j){
       		var title = $(this).text();
       		var value = $(this).val();
       		
       		var selected = $(this).hasAttr('selected');
        		var $list_item = $('<li></li>');
       		$list.append($list_item);
        		var $label = $('<label for="'+id+'-'+j+'">'+title+'</label>');
       		var $input = $('<input type="'+type+'" value="'+value+'" name="'+name+'" id="'+id+'-'+j+'">');
       		if(selected){
       			$selected = $input.prop('checked', true);
       			selected_length++;
       		}
       		
       		$list_item.append($input);
       		$list_item.append($label);
       	});
       	if($bar){
       		var percentage = selected_length / length * 100;
       		$bar.width(percentage + '%');
       	}
       	else{
       		if(selected_length){
       			$label.children('span').text($selected.next('label').text())
       			$wrap.addClass('filled');
       		}
       	}
       	$(this).remove();
       });
    	$(document).on('click', function(e) {
        if ( $(e.target).closest('.material-select').length === 0 ) {
            // cancel highlighting 
            $('.material-select > input').prop('checked', false);
        }
    });
    	$('.material-select > input').on('change', function(){
    	var changed_id = $(this).attr('id');
    	$('.material-select > input').each(function(){
    		var this_id = $(this).attr('id');
    		if(changed_id != this_id)
    			$(this).prop('checked', false);
    	});
    });
    	$('.material-select ul input').on('change', function(){
    	if($(this).closest('.material-select.checkbox').length){
    		var $ul = $(this).closest('ul')
    		var length = $ul.find('input').length;
    		var checked_length = $ul.find('input:checked').length;
    		var percentage = checked_length / length * 100;
    		$(this).closest('.material-select').find('.material-bar').width(percentage + '%');
    	}
    	else{
    		var $material_select = $(this).closest('.material-select')
    		var $label = $material_select.children('label').children('span');
    		var $next = $(this).next('label');
    		$label.text($next.text());
    		$material_select.children('input').prop('checked', false);
    		$material_select.addClass('filled');
    	}
    });
    */
// Inputs
this.find("input, textarea").each(function(t){if(f($(this))){var a=$(this).attr("name");$(this).attr("id",a);var i=$(this).wrap("<div class='material-input'></div>").parent();i.append("<span class='material-bar'></span>");var e=$(this).prop("tagName").toLowerCase();i.addClass(e),(n=$(this).attr("placeholder"))&&(i.append("<label for='"+a+"'>"+n+"</label>"),$(this).removeAttr("placeholder")),h($(this))}if(c($(this),"radio")||c($(this),"checkbox")){var r="material-group-"+(a=$(this).attr("name").replace("[]","")),n=$(this).attr("placeholder"),o=a+"-"+t,s=$('<label for="'+o+'">'+n+"</label>"),l=$('<div class="material-group-item"></div>');if($(this).attr("id",o),$("#"+r).length)(p=$("#"+r)).append($(this));else var p=$(this).wrap("<div class='material-group' id='"+r+"'></div>").parent();if(c($(this),"radio"))var d=$('<div class="material-radio"></div>');else d=$('<div class="material-checkbox"></div>');l.append($(this)),l.append(s),l.append(d),p.append(l)}}),this.find("input, textarea").on("blur",function(){f($(this))&&h($(this))})}});