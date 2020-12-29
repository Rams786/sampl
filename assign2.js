$('document').ready(()=>
{
    var city=["pune","mumbai","nanded","parbhani","kolkata","nashik"];
    var availSkills=[
        "c",
        "c++",
        "java",
        "python",
        "ruby",
        "javascript",
        "perl",
        "php"
    ];
    $("#skills").autocomplete({source:availSkills});
    $("#city").select2({
        data:city
    })
$("#check").change(function(){
    if($(this).is(':checked')){
        $("#compassword").attr("type","text");

    }else{
        $("#compassword").attr("type","password");
    }

});
$("form[name='registration']").validate({

    rules: {
        firstname:"required",
        email: {
            required:true
        },
        password: {
            required:true,
            minlength:5,
            maxlength:15
        },
        compassword: {
            equalTo:"#password"
        },
        tel:{
            minlength:10,
            maxlength:10
        }
    },
    messages: {
        firstname: "Please enter your Firstname",
        lastname: "Please enter your lastname",
        password: {
            required: "Please provide a password",
            minlength:"Your password must be atleast 5 characters long"
        },
        email:"Please enter a valid email address",
        tel:"Please enter a valid mobile no"

    },
    submitHandler:function(form){
        form.submit();
    }
});


    })