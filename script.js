// ***** Replace $ selector with Jquery *****

// Color and Font
jQuery("head").append("<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'>");
jQuery(".fancybox.custom .body").css("background-color", "#0066B3");
jQuery(".search_hotel label").css("color", "#FFF");
jQuery(".fancybox.custom .head").css("background-color", "#0066B3");

// Box
jQuery(".fancybox.custom .body").css("padding-top", "6px");

// Head Of Box
jQuery( "div.head" ).html("<div class='search_hotel_head'><h2>Hotels Up to 60% Off</h2><h3><i class='orange_promotion_copy'>Book & Save!</i></h3></div>").css( { "padding": "0px", "background-size": "auto", "background-image": "url('http://i64.tinypic.com/w1qsmx.jpg')", "background-repeat": "no-repeat", "padding-top": "0px", "padding-left": "20px", "padding-bottom": "12px", "padding-right": "20px"} );


jQuery( ".search_hotel_head" ).css( {"background-color": "#0066B3", "margin-top": "-10px", "width": "82px", "padding-left": "5px", "padding-bottom": "5px", "padding-top": "14px"} );

jQuery(".orange_promotion_copy").css({"color": "#E87A1E", "font-size": "12px", "text-transform": "uppercase"});

// Form Fields
jQuery(".search_hotel .thinsection").css("margin-bottom", "10px");
jQuery(".search_hotel label").css({ "margin-left": "-4px", "font-size": "12px", "font-family": "lato", "font-weight": "400" });
jQuery("#place_name").css("margin-left", "-4px");
jQuery("#check_in").css("margin-left", "-4px");
jQuery("#check_out").css("margin-left", "-3px");
jQuery(".search_hotel input.calendar").css("width", "8.75em");
jQuery(".search_hotel select.rooms").css("width", "8.75em");
jQuery(".search_hotel .section").css("margin-bottom", "14px");
jQuery("#rooms").css("width", "124px");

// Form Field Height
jQuery(".search_hotel input[type=text]").css( {"padding-top": "7px", "padding-bottom": "7px"});
jQuery(".search_hotel select").css({"padding-top": "7px", "padding-bottom": "7px"});

    // Check In / Check Out
    jQuery("#hotel_search > div:nth-child(4) > table > tbody > tr > td:nth-child(1)").css("width", "50%");
    jQuery("#hotel_search > div:nth-child(4) > table > tbody > tr > td:nth-child(2)").css({"width": "122px", "float": "right", "clear": "both"});

    // Titles Room 1 - 4
    jQuery("#room_0 > table:nth-child(1) > tbody > tr:nth-child(2) > th, #room_1 > table:nth-child(1) > tbody > tr:nth-child(2) > th, #room_2 > table:nth-child(1) > tbody > tr:nth-child(2) > th, #room_3 > table:nth-child(1) > tbody > tr:nth-child(2) > th").css("width", "50%");

    jQuery("#room_0 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label").html("Room 1 <span style='padding-left: 14px; font-size: 16px;'>––––––</span></label>");
    jQuery("#room_1 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label").html("Room 2 <span style='padding-left: 14px; font-size: 16px;'>––––––</span></label>");
    jQuery("#room_2 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label").html("Room 3 <span style='padding-left: 14px; font-size: 16px;'>––––––</span></label>");
    jQuery("#room_3 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label").html("Room 4 <span style='padding-left: 14px; font-size: 16px;'>––––––</span></label>");

    jQuery("#room_0 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label, #room_1 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label, #room_2 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label, #room_3 > table:nth-child(1) > tbody > tr:nth-child(2) > th > label").css("width", "110px");

    // Room 1 Drop Downs
    jQuery("#room_0 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)").css("padding-left", "1px");
    jQuery("#room_0 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3)").css("padding-left", "8px");
   
        // Titles
        jQuery("#room_0 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)").css( {"padding-left": "5px", "text-align": "center" } );
        jQuery("#room_0 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(3)").css({ "padding-left": "12px", "text-align": "center"});
      
    // Room 2 Drop Downs
    jQuery("#room_1 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)").css({ "padding-left": "3px", "padding-left": "8px" });
    jQuery("#room_1 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3)").css("padding-left", "8px");
        
        // Titles 
        jQuery("#room_1 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2), #room_1 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(3)").css({ "padding-left": "12px", "text-align": "center" });
             
    // Room 3 Drop Downs
    jQuery("#room_2 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)").css( {"padding-left": "3px", "padding-left": "8px" });
    jQuery("#room_2 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3)").css("padding-left", "8px");

        // Titles 
        jQuery("#room_2 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2), #room_2 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(3)").css({"padding-left": "12px", "text-align": "center"});
 
    // Room 4 Drop Downs
    jQuery("#room_3 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)").css({"padding-left": "3px", "padding-left": "8px"});
    jQuery("#room_3 > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3)").css("padding-left", "8px");

        // Titles 
        jQuery("#room_3 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2), #room_3 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(3)").css("padding-left", "12px");
        jQuery("#room_3 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2), #room_3 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(3)").css("text-align", "center");
    
// Guarantee Image
jQuery("#hotel_search > img").removeAttr("height").css("width", "80px");


// Button
jQuery("#do_hotel_search").attr("value", "Find Hotels Now").css({"padding": "0 10px", "margin-top": "8px", "font-family": "'Oswald', sans-serif;"});