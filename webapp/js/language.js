$(document).ready(function () {

    var wu = "中文";
    var en = "English";
    $("#btnLanguage").text(wu);

    var pWonderEn = "Wonder Model Agency is an international model management agency based in China(Chengdu).It was established at beginning of 2015. Members of team come from media, advertising, public relations ";
    var pWonderWu = "Wonder Model Agency是一家总部设在中国（成都）的国际模型管理机构，成立于2015年初。团队成员来自媒体、广告、公关公司。我们共同培养了自己的力量和经验，建立了机构。";

    var pSinceEn = "Since inception, Wonder Model Agency has remained true to its core values: change has two sides, opportunity and risk.We using unique connections and industry knowledge to develop and nurture models. faceto risk, hold the opportunity";
    var pSinceWu = "自成立以来，Wonder Model Agency始终坚持其核心价值观：变革有两面性、机会和风险。我们利用独特的联系和行业知识来开发和培育模型。面对挑战，把握机会";

    var pPleaseEn = "Please provide the following information:<br/>- Name Age Country City<br/>- Tattoo or don’t have tattoo<br/>- Parameters(Height, chest, waist, hips)<br/>- Shoes(EU)";
    var pPleaseWu = "请提供以下信息:<br/>- 姓名 年龄 地区<br/>- 有无纹身<br/>- 身材（身高、胸部、腰部、臀部）<br/>- 鞋码(EU)";

    var pPleaseBeEn = "Please be sure to include at least one clear headshot, one full-length shot and a shot of your smiling.Minimal make up<br/><br/>Send us Email, Answer in 7 days.";
    var pPleaseBeWu = "请确保至少包括一个清晰的头像,一个完整的镜头和一个微笑的镜头.最少的化妆<br/><br/>给我们发邮件，7天内回复.";

    var hAboutEn = "ABOUT WONDER MODEL AGENCY";
    var hAboutWu = "关于 MODEL AGENCY";

    var hModelEn = "WONDER MODELS";
    var hModelWu = "WONDER 模特";

    var hRequireEn = "Require";
    var hRequireWu = "要求";

    var hMaskEn = "Makings";
    var hMaskWu = "作品";

    var hBeEn = "BE A MODEL";
    var hBeWu = "加入我们";

    var rlTransEn = "<li class=\"active\"><a href=\"home2.html\">Home</a></li><li>" +
        "<a href=\"about.html\">About</a></li>\n" +
        "<li><a href=\"model.html\">Models</a></li>\n" +
        "<li><a href=\"beModel.html\">Be a Model</a></li>\n" +
        "<li><a href=\"contact.html\">Contact</a></li>";


    var rlTransWu = "<li class=\"active\"><a href=\"home2.html\">主页</a>" +
        "</li><li><a href=\"about.html\">关于</a></li>\n" +
        "<li><a href=\"model.html\">模特</a></li>\n" +
        "<li><a href=\"beModel.html\">加入我们</a></li>\n" +
        "<li><a href=\"contact.html\">联系我们</a></li>";

    var contactEn = "<div class=\"container contactform center\">\n" +
        "        <h2 class=\"text-center  wowload fadeInUp\">CONTACT</h2>\n" +
        "        <div class=\"row wowload fadeInLeftBig\">\n" +
        "            <div class=\"col-sm-8 col-sm-offset-3 col-xs-12\">\n" +
        "                <figcaption>\n" +
        "                    <p><b style=\"font-size: 20px;\">Email：</b>WONDERAGENCY@163.COM</p>\n" +
        "                    <p><b style=\"font-size: 20px;\">Following us：</b><a\n" +
        "                            href=\"https://weibo.com/6353604595/profile?rightmod=1&wvr=6&mod=personinfo\" target=\"_blank\">Weibo</a>&nbsp;&nbsp;&nbsp;<a\n" +
        "                            href=\"https://vk.com/id316008536\" target=\"_blank\">VK</a>&nbsp;&nbsp;&nbsp;<a\n" +
        "                            href=\"https://www.instagram.com/wondermodels_/\" target=\"_blank\">Ins</a></p>\n" +
        "                    <p><b style=\"font-size: 20px;\">Address：</b>Room 904,7th building, xinliboshi mall, chenghua\n" +
        "                        district, Chengdu city, China 610000</p>\n" +
        "                </figcaption>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";

    var contactWu = "<div class=\"container contactform center\">\n" +
        "        <h2 class=\"text-center  wowload fadeInUp\">联系我们</h2>\n" +
        "        <div class=\"row wowload fadeInLeftBig\">\n" +
        "            <div class=\"col-sm-8 col-sm-offset-3 col-xs-12\">\n" +
        "                <figcaption>\n" +
        "                    <p><b style=\"font-size: 20px;\">邮箱：</b>WONDERAGENCY@163.COM</p>\n" +
        "                    <p><b style=\"font-size: 20px;\">订阅：</b><a\n" +
        "                            href=\"https://weibo.com/6353604595/profile?rightmod=1&wvr=6&mod=personinfo\" target=\"_blank\">Weibo</a>&nbsp;&nbsp;&nbsp;<a\n" +
        "                            href=\"https://vk.com/id316008536\" target=\"_blank\">VK</a>&nbsp;&nbsp;&nbsp;<a\n" +
        "                            href=\"https://www.instagram.com/wondermodels_/\" target=\"_blank\">Ins</a></p>\n" +
        "                    <p><b style=\"font-size: 20px;\">地址：</b>四川成都市成华区新荔波市商场7号楼904室610000" +
        "                        </p>\n" +
        "                </figcaption>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";


    $("#btnLanguage").text(wu);
    $("#pWonder").text(pWonderEn);
    $("#pSince").text(pSinceEn);
    $("#pPlease").html(pPleaseEn);
    $("#pPleaseBe").html(pPleaseBeEn);
    $("#contact").html(contactEn);
    $("#rlTrans").html(rlTransEn);
    $("#hAbout").text(hAboutEn);
    $("#hModel").text(hModelEn);
    $("#hBe").text(hBeEn);
    $("#hRequire").text(hRequireEn);
    $("#hMask").text(hMaskEn);


    $("#btnLanguage").click(function () {
        if (($("#btnLanguage").text() == wu)) {
            $("#btnLanguage").text(en);
            $("#pWonder").text(pWonderWu);
            $("#pSince").text(pSinceWu);
            $("#pPlease").html(pPleaseWu);
            $("#pPleaseBe").html(pPleaseBeWu);
            $("#contact").html(contactWu);
            $("#rlTrans").html(rlTransWu);
            $("#hAbout").text(hAboutWu);
            $("#hModel").text(hModelWu);
            $("#hBe").text(hBeWu);
            $("#hRequire").text(hRequireWu);
            $("#hMask").text(hMaskWu);


        } else {
            $("#btnLanguage").text(wu);
            $("#pWonder").text(pWonderEn);
            $("#pSince").text(pSinceEn);
            $("#pPlease").html(pPleaseEn);
            $("#pPleaseBe").html(pPleaseBeEn);
            $("#contact").html(contactEn);
            $("#rlTrans").html(rlTransEn);
            $("#hAbout").text(hAboutEn);
            $("#hModel").text(hModelEn);
            $("#hBe").text(hBeEn);
            $("#hRequire").text(hRequireEn);
            $("#hMask").text(hMaskEn);
        }
    });

    (function () {
        var timer = setTimeout(function () {
            $BeforeEnter.fadeOut("slow");
        },5000);
        // 定时消除video
        var $BeforeEnter = $('#before-enter');
        $BeforeEnter.click(function() {
            if (timer) {
                clearTimeout(timer);
            }
            $BeforeEnter.fadeOut("slow");
        });
    })();

});
