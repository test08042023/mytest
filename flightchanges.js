function showMessage() {
    // name
    var name = document.getElementById("name").value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    display_name.innerHTML = name;


    var name2 = document.getElementById("name").value;
    name2 = name2.charAt(0).toUpperCase() + name2.slice(1);
    display_name2.innerHTML = name2;


    var name3 = document.getElementById("name").value;
    name3 = name3.charAt(0).toUpperCase() + name3.slice(1);
    display_name3.innerHTML = name3;



    // middle name
    var mname = document.getElementById("mname").value;
    mname = mname.charAt(0).toUpperCase() + mname.slice(1);
    display_mname.innerHTML = mname;


    var mname2 = document.getElementById("mname").value;
    mname2 = mname2.charAt(0).toUpperCase() + mname2.slice(1);
    display_mname2.innerHTML = mname2;


    var mname3 = document.getElementById("mname").value;
    mname3 = mname3.charAt(0).toUpperCase() + mname3.slice(1);
    display_mname3.innerHTML = mname3;



    // Last name
    var Lname = document.getElementById("Lname").value;
    Lname = Lname.charAt(0).toUpperCase() + Lname.slice(1);
    display_Lname.innerHTML = Lname;


    var Lname2 = document.getElementById("Lname").value;
    Lname2 = Lname2.charAt(0).toUpperCase() + Lname2.slice(1);
    display_Lname2.innerHTML = Lname2;


    var Lname3 = document.getElementById("Lname").value;
    Lname3 = Lname3.charAt(0).toUpperCase() + Lname3.slice(1);
    display_Lname3.innerHTML = Lname3;




    // Card Number


    var cardno1 = document.getElementById("cardno").value;
    cardno1 = cardno1.substring(12,16);
    display_cardno1.innerHTML = cardno1;


    var cardno3 = document.getElementById("cardno").value;
    display_cardno3.innerHTML = cardno3;



    // cardname


    var cardname3 = document.getElementById("cardname").value;
    cardname3 = cardname3.charAt(0).toUpperCase() + cardname3.slice(1);
    display_cardname3.innerHTML = cardname3;




    // Phone


    var phone3 = document.getElementById("phone").value;
    display_phone3.innerHTML = phone3;


    // Email


    var email3 = document.getElementById("email").value;
    display_email3.innerHTML = email3;


    // Billing


    var billing3 = document.getElementById("billing").value;
    display_billing3.innerHTML = billing3;




    // Expiration Month


    var month3 = document.getElementById("month").value;
    display_month3.innerHTML = month3;



    // Expiration Year


    var year3 = document.getElementById("year").value;
    year3 = year3.substring(2,4);
    display_year3.innerHTML = year3;




    // PNR
    var pnr = document.getElementById("pnr").value;
    display_pnr.innerHTML = pnr;


    // Airline
    var airline = document.getElementById("airline").value;
    display_airline.innerHTML = airline;


    // CVV
    var cvv = document.getElementById("cvv").value;
    display_cvv.innerHTML = cvv;



    // Date
    var date = document.getElementById("date").value;
    display_date.innerHTML = date;


    // TFN
    var tfn = document.getElementById("tfn").value;
    display_tfn.innerHTML = tfn;


    // Agent Name
    var agent = document.getElementById("agent").value;
    display_agent.innerHTML = agent;


    // Time and Date now
    var time = document.getElementById("time").value;
    display_time.innerHTML = time;



















    // Ticket price for last part:

    var price1 = document.getElementById("price").value;
    display_price1.innerHTML = price1;
    var p1 = price1;

    var mco1 = document.getElementById("mco").value;
    display_mco1.innerHTML = mco1;
    var m1 = mco1;

    p1 = parseFloat(p1);
    m1 = parseFloat(m1);
    var total1 = p1 + m1;
    display_total1.innerHTML = total1;


    //////////////////////////////// TO TL
    // Ticket mco
    var mco3 = document.getElementById("mco").value;
    display_mco3.innerHTML = mco3;
    var m = mco3;

    







  // ---------------------------------------------------------------------------------
  // -------------------------------From Summary--------------------------------------
  // ---------------------------------------------------------------------------------
  var nameSF = document.getElementById("name").value;
    nameSF = nameSF.charAt(0).toUpperCase() + nameSF.slice(1);
    display_nameSF.innerHTML = nameSF;

    var mnameSF = document.getElementById("mname").value;
    mnameSF = mnameSF.charAt(0).toUpperCase() + mnameSF.slice(1);
    display_mnameSF.innerHTML = mnameSF;

    var LnameSF = document.getElementById("Lname").value;
    LnameSF = LnameSF.charAt(0).toUpperCase() + LnameSF.slice(1);
    display_LnameSF.innerHTML = LnameSF;



    var dobSF = document.getElementById("dob").value;
    dobSF = dobSF.charAt(0).toUpperCase() + dobSF.slice(1);
    display_dobSF.innerHTML = dobSF;


    var cardnameSF = document.getElementById("cardname").value;
    cardnameSF = cardnameSF.charAt(0).toUpperCase() + cardnameSF.slice(1);
    display_cardnameSF.innerHTML = cardnameSF;


    var phoneSF = document.getElementById("phone").value;
    display_phoneSF.innerHTML = phoneSF;


    // Email
    var emailSF = document.getElementById("email").value;
    display_emailSF.innerHTML = emailSF;


    // Billing
    var billingSF = document.getElementById("billing").value;
    display_billingSF.innerHTML = billingSF;

  
    var priceSF = document.getElementById("price").value;
    display_priceSF.innerHTML = priceSF;
    var pSF = priceSF;

    var mcoSF = document.getElementById("mco").value;
    display_mcoSF.innerHTML = mcoSF;
    var mSF = mcoSF;

    pSF = parseFloat(pSF);
    mSF = parseFloat(mSF);
    var totalSF = pSF + mSF;
    display_totalSF.innerHTML = totalSF;








  //-----------------------------------------------------------------------------------

  var one = "1.";
  var two = "2.";
  var three = "3.";
  var four = "4.";
  var five = "5.";
  var six = "6.";
  var dash = "--";
  var dash1 = "--";
  var dash2 = "--";
  var dash3 = "--";
  var dash4 = "--";
  var dash5 = "--";
  var dash6 = "--";
  var dash7 = "--";
  var dash8 = "--";
  var dash9 = "--";
  var dash10 = "--";
  var dash11 = "--";
  var other_pax_details = "Other Passengers Details:";

    // Add Pax details:
    var fullname_1 = " ";
    fullname_1 = document.getElementById("fullname_1").value;
    console.log(fullname_1);
    fullname_1 = fullname_1.charAt(0).toUpperCase() + fullname_1.slice(1);
    display_fullname_1.innerHTML = fullname_1;

    var sex_1 = document.getElementById("sex_1").value;
    display_sex_1.innerHTML = sex_1;

    var dob_1 = document.getElementById("dob_1").value;
    display_dob_1.innerHTML = dob_1;
    
    if(fullname_1 != " ") {
      display_one.innerHTML = one;
      display_dash.innerHTML = dash;
      display_dash1.innerHTML = dash1;
      display_other_pax_details.innerHTML = other_pax_details;

    }
    // -------------------------------------------------------

    var fullname_2 = document.getElementById("fullname_2").value;
    fullname_2 = fullname_2.charAt(0).toUpperCase() + fullname_2.slice(1);
    display_fullname_2.innerHTML = fullname_2;

    var sex_2 = document.getElementById("sex_2").value;
    display_sex_2.innerHTML = sex_2;

    // DOB
    var dob_2 = document.getElementById("dob_2").value;
    display_dob_2.innerHTML = dob_2;
    if(fullname_2 != null) {
        
      display_two.innerHTML = two;
      display_dash2.innerHTML = dash2;
      display_dash3.innerHTML = dash3;
      

    }


    var fullname_3 = document.getElementById("fullname_3").value;
    fullname_3 = fullname_3.charAt(0).toUpperCase() + fullname_3.slice(1);
    display_fullname_3.innerHTML = fullname_3;

    var sex_3 = document.getElementById("sex_3").value;
    display_sex_3.innerHTML = sex_3;

    // DOB
    var dob_3 = document.getElementById("dob_3").value;
    display_dob_3.innerHTML = dob_3;


    if(fullname_3 != null) {
        display_three.innerHTML = three;
        display_dash4.innerHTML = dash4;
        display_dash5.innerHTML = dash5;
      }


    
    var fullname_4 = document.getElementById("fullname_4").value;
    fullname_4 = fullname_4.charAt(0).toUpperCase() + fullname_4.slice(1);
    display_fullname_4.innerHTML = fullname_4;

    var sex_4 = document.getElementById("sex_4").value;
    display_sex_4.innerHTML = sex_4;

    // DOB
    var dob_4 = document.getElementById("dob_4").value;
    display_dob_4.innerHTML = dob_4;


    if(fullname_4 != null) {
        display_four.innerHTML = four;
        display_dash6.innerHTML = dash6;
        display_dash7.innerHTML = dash7;
      }



    var fullname_5 = document.getElementById("fullname_5").value;
    fullname_5 = fullname_5.charAt(0).toUpperCase() + fullname_5.slice(1);
    display_fullname_5.innerHTML = fullname_5;

    var sex_5 = document.getElementById("sex_5").value;
    display_sex_5.innerHTML = sex_5;

    // DOB
    var dob_5 = document.getElementById("dob_5").value;
    display_dob_5.innerHTML = dob_5;


    if(fullname_5 != null) {
        display_five.innerHTML = five;
        display_dash8.innerHTML = dash8;
        display_dash9.innerHTML = dash9;
      }


    var fullname_6 = document.getElementById("fullname_6").value;
    fullname_6 = fullname_6.charAt(0).toUpperCase() + fullname_6.slice(1);
    display_fullname_6.innerHTML = fullname_6;

    var sex_6 = document.getElementById("sex_6").value;
    display_sex_6.innerHTML = sex_6;

    // DOB
    var dob_6 = document.getElementById("dob_6").value;
    display_dob_6.innerHTML = dob_6;


    if(fullname_6 != null) {
        display_six.innerHTML = six;
        display_dash10.innerHTML = dash10;
        display_dash11.innerHTML = dash11;
      }
    

}
function printpart () {
  var printwin = window.open("");
  printwin.document.write(document.getElementById("demoB").innerHTML);
  printwin.stop();
  printwin.print();
  printwin.close();
}

// Copy the complete section
function CopyToClipboard(containerid) {
  if (window.getSelection) {
     if (window.getSelection().empty) { // Chrome
        window.getSelection().empty();
     } else if (window.getSelection().removeAllRanges) { // Firefox
        window.getSelection().removeAllRanges();
     }
  } else if (document.selection) { // IE?
     document.selection.empty();
  }

  if (document.selection) {
     var range = document.body.createTextRange();
     range.moveToElementText(document.getElementById(containerid));
     range.select().createTextRange();
     document.execCommand("copy");
  } else if (window.getSelection) {
     var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("copy");
  }
}