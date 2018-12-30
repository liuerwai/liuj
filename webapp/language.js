$(document).ready(function(){


    var wu = "乌克兰语";
    var en = "English";
    $("#btnLanguage").text(wu);

    var p1En = "zzz Model Agency is an international model management agency based in China(Chengdu).It was established at beginning of 2015. Members of team come from media, advertising, public relations ";
    var p1Wu = "";


    $("#btnLanguage").click(function(){
        $("#btnLanguage").text(wu);
        $("#p1").text(p1En);
    });
});