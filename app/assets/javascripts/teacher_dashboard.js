$(function () {

    numPanelFaded = 0;
    $('#complete').click(function(){
        $('div.inProgressQuestionBank').hide();
        $('div.completedQuestionBank').show();
    });

    $('#progress').click(function(){
        $('div.inProgressQuestionBank').hide();
        $('div.completedQuestionBank').show();
    });



});