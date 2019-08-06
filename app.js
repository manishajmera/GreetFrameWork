// get a object of greetr library that I build
var g = G$("Manish","Jain");

//use chainble methods 
g.greet().greet("formal").setLang("es").greet();


//using jquery selector and greetr library that I build
$('#login').click(function(){

    var loginGrtr = G$("Manish","Jain");
    //hide login on the screen
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
})