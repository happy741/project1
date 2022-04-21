$(function(){
    $('#b').click(function(){
        $('#v').fadeIn();
        $('#red').hide();
        $('#black').hide();
        $('#x').hide();
        $('#c').hide();
        $('#z').hide();
    });

    $('#r').click(function(){
        $('#v').hide();
        $('#red').fadeIn();
        $('#black').hide();
        $('#x').hide();
        $('#c').hide();
        $('#z').hide();
    });

    $('#bla').click(function(){
        $('#v').hide();
        $('#red').hide();
        $('#black').fadeIn();
        $('#x').hide();
        $('#c').hide();
        $('#z').hide();
    });
});