var form=$("#formSignUP");function add_interest_fields(){$("#topic_of_interest_2").removeClass("hide"),$("#topic_of_interest_3").removeClass("hide")}function remove_interest_fields(e){$("#topic_of_interest_"+e).addClass("hide")}function add_country_city_interest(){$("#country_city_interest_2").removeClass("hide"),$("#country_city_interest_3").removeClass("hide")}function remove_country_city_interest(e){$("#country_city_interest_"+e).addClass("hide")}
/*
$('.carousel').carousel({
  interval: 7000
});
*/
/*Country of interest*/
function load_interest_city(e,t){$("select#"+t).html("<option>Loading...</option>").addClass("input_loading"),//$('div#country_of_interest_mgs').html('<?php print $site->t('Loading cities of interest, please wait',$site->current_lang);?>...');
$("select#"+t).load("https://www.dezshira.com/loadDropdown?action=cities_interest&family=city_interested&country="+escape(e),function(){//$('select#'+target).removeClass('input_loading');
//$('div#country_of_interest_mgs').html('<?php print $site->t('Please select your city of interest',$site->current_lang);?>.');
})}//$('select#lead_cityofinterest,select#lead_cityofinterest2,select#lead_cityofinterest3').change(function() {
//	$('div#country_of_interest_mgs').html('');
//});
form.validate({errorPlacement:function(e,t){var i=t.parents("div").children("div#error");i.length?i.val("123 "+e.text()):t.after(e)}}),$("div#javascipt_warn").hide(),
/*Country*/
$("select#lead_companycountry").change(function(){$("select#Lead_CompanyCity").html("<option>Loading...</option>").addClass("input_loading");-1!==$.inArray($(this).val(),["Austria",//Austria
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
"United Kingdom"])?$("#lead_optout").prop("checked",!1):$("#lead_optout").prop("checked",!0),//console.log($(this).val());
$.get("https://www.dezshira.com/loadDropdown?action=cities&family=company_city&country="+escape($(this).val()),function(e){$("select#Lead_CompanyCity").html(e),$("select#Lead_CompanyCity").removeClass("input_loading")})}),$("select#Lead_CompanyCity").change(function(){$("select#Lead_CompanyCity").parents("div.block-main").children("div.new-label").html("")}),
/*Industry*/
$("select#lead_companyindustry").change(function(){$("select#lead_companysubindustry").html("<option>Loading...</option>").addClass("input_loading"),//msg=$('select#lead_companysubindustry').parents('div.block-main').children('div.new-label');
//msg.html('<?php print $site->t('Loading industry sectors, please wait',$site->current_lang);?>...');
$("select#lead_companysubindustry").load("https://www.dezshira.com/loadDropdown?action=sub_industry&industry="+escape($(this).val()),function(){$("select#lead_companysubindustry").removeClass("input_loading");//msg.html('Please select your company\'s industry sector');
})}),$("select#lead_companysubindustry").change(function(){$("select#lead_companysubindustry").parents("div.block-main").children("div.new-label").html("")}),$("#lead_personfirstname").focus(),$("input#lead_personemail").blur(function(){$("div#email_message").html("Checking your email..."),$.get("https://www.dezshira.com/checkEmail?email="+$("input#lead_personemail").val(),function(e){console.log(String(e)),"yes"==String(e).trim()?($("input#lead_personemail").addClass("error"),$("div#email_message").html("Sorry this email address is already in use. If you forgot your password, <a href='http://www.asiabriefing.com/customer/forgot-password'>please retrieve it here</a>")):($("input#lead_personemail").removeClass("error"),$("div#email_message").html(""))})});