	var form = $("#formSignUP");
	form.validate({
		 errorPlacement: function(error, element) {
			var errorDiv=element.parents('div').children('div#error');
			if(errorDiv.length){
				errorDiv.val('123 '+error.text());
			} else {
				element.after(error);
			}
		}
	});
	

function add_interest_fields(){
	var topic_of_interest_2=$('#topic_of_interest_2');
	topic_of_interest_2.removeClass('hide');
	
	var topic_of_interest_3=$('#topic_of_interest_3');
	topic_of_interest_3.removeClass('hide');
}

function remove_interest_fields(i){
	var topic_of_interest=$('#topic_of_interest_'+i);
	topic_of_interest.addClass('hide');
}

function add_country_city_interest(){
	var country_city_interest_2=$('#country_city_interest_2');
	country_city_interest_2.removeClass('hide');
	
	var country_city_interest_3=$('#country_city_interest_3');
	country_city_interest_3.removeClass('hide');
}

function remove_country_city_interest(i){
	var country_city_interest=$('#country_city_interest_'+i);
	country_city_interest.addClass('hide');
}


		/*
		$('.carousel').carousel({
		  interval: 7000
		});
		*/
		$('div#javascipt_warn').hide();
		
		/*Country*/
		$('select#lead_companycountry').change(function() {
			$('select#Lead_CompanyCity').html("<option>Loading...</option>").addClass('input_loading');
			//msg=$('select#Lead_CompanyCity').parents('div.block-main').children('div.new-label');
			//msg.html('<?php print $site->t('Loading cities, please wait',$site->current_lang);?>...');
			
			//gdpr check
			var eu_countries=[
				"Austria",//Austria
				"Belgium",//Belgium
				"Bulgaria",//Bulgaria
				"Croatia",//Croatia
				"Cyprus",//Cyprus
				"Czech Republic",//Czech Republic
				"Denmark",//Denmark
				"Estonia",//Estonia
				"Finland",//Finland
				"France",//France
				"Germany",//Germany
				"Greece",//Greece
				"Hungary",//Hungary
				"Ireland",//Ireland, Republic of (EIRE)	
				"Italy",//Italy
				"Latvia",//Latvia
				"Lithuania",//Lithuania
				"Luxembourg",//Luxembourg
				"Malta",//Malta
				"Netherlands",//Netherlands
				"Poland",//Poland
				"Portugal",//Portugal
				"Romania",//Romania
				"Slovak Republic",//Slovakia
				"Slovenia",//Slovenia
				"Spain",//Spain
				"Sweden",//Sweden
				"United Kingdom"//United Kingdom	
			];
			
			if($.inArray( $(this).val(), eu_countries)!== -1){
				$('#lead_optout').prop('checked', false);
			} else {
				$('#lead_optout').prop('checked', true);
			}

			//console.log($(this).val());
			$.get("https://www.dezshira.com/loadDropdown?action=cities&family=company_city&country="+escape($(this).val()), function(data) {
				  $('select#Lead_CompanyCity').html(data);
				  $('select#Lead_CompanyCity').removeClass('input_loading');
				  //msg.html('Please select your city');
			});
		});
		
		$('select#Lead_CompanyCity').change(function() {
			$('select#Lead_CompanyCity').parents('div.block-main').children('div.new-label').html("");
		});
		
		/*Industry*/
		$('select#lead_companyindustry').change(function() {
			$('select#lead_companysubindustry').html("<option>Loading...</option>").addClass('input_loading');
			//msg=$('select#lead_companysubindustry').parents('div.block-main').children('div.new-label');
			//msg.html('<?php print $site->t('Loading industry sectors, please wait',$site->current_lang);?>...');
			$('select#lead_companysubindustry').load("https://www.dezshira.com/loadDropdown?action=sub_industry&industry="+escape($(this).val()), function() {
			  $('select#lead_companysubindustry').removeClass('input_loading');
			  //msg.html('Please select your company\'s industry sector');
			});
		});
		
		$('select#lead_companysubindustry').change(function() {
			$('select#lead_companysubindustry').parents('div.block-main').children('div.new-label').html("");
		});
		
		
		
		/*Country of interest*/
		function load_interest_city(selected_val,target) {
			$('select#'+target).html("<option>Loading...</option>").addClass('input_loading');
			//$('div#country_of_interest_mgs').html('<?php print $site->t('Loading cities of interest, please wait',$site->current_lang);?>...');
			
			$('select#'+target).load("https://www.dezshira.com/loadDropdown?action=cities_interest&family=city_interested&country="+escape(selected_val), function() {
			  //$('select#'+target).removeClass('input_loading');
			  //$('div#country_of_interest_mgs').html('<?php print $site->t('Please select your city of interest',$site->current_lang);?>.');
			});
		}
		
		//$('select#lead_cityofinterest,select#lead_cityofinterest2,select#lead_cityofinterest3').change(function() {
		//	$('div#country_of_interest_mgs').html('');
		//});

		
		$('#lead_personfirstname').focus();
		
$('input#lead_personemail').blur(function() {
	$('div#email_message').html("Checking your email...");
	
	
	$.get("https://www.dezshira.com/checkEmail?email="+$('input#lead_personemail').val(), function(data) {
		
		console.log(String(data));
			if(String(data).trim()=='yes') {
				$('input#lead_personemail').addClass('error');
				$('div#email_message').html('Sorry this email address is already in use. If you forgot your password, <a href=\'http://www.asiabriefing.com/customer/forgot-password\'>please retrieve it here</a>');
			} else {
				$('input#lead_personemail').removeClass('error');
				$('div#email_message').html("");
			}		
		
	});

});