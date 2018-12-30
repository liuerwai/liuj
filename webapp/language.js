$(document).ready(function(){


    var wu = "乌克兰语";
    var en = "English";
    $("#btnLanguage").text(wu);

    var pWonderEn = "Wonder Model Agency is an international model management agency based in China(Chengdu).It was established at beginning of 2015. Members of team come from media, advertising, public relations ";
    var pWonderWu = "乌克兰语";

    var pSinceEn = "Since inception, Wonder Model Agency has remained true to its core values: change has two sides, opportunity and risk.We using unique connections and industry knowledge to develop and nurture models. faceto risk, hold the opportunity";
    var pSinceWu = "乌克兰语";






    $("#btnLanguage").click(function(){
        if(($("#btnLanguage").text() == wu)){
            $("#btnLanguage").text(en);
            $("#pWonder").text(pWonderWu);
            $("#pSince").text(pSinceWu);

        } else {
            $("#btnLanguage").text(wu);
            $("#pWonder").text(pWonderEn);
            $("#pSince").text(pSinceEn);
        }
    });
});