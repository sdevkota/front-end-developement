$(document).ready(function () {

    //Loader object
    function Loader(type,element, color, text, loaderPath) {
        this.type = type;
        this.color = color;
        this.text = text;
        this.loaderPath = loaderPath;
        this.run = function () {
            if (this.type == "top") {
                NProgress.configure({
                    showSpinner: false
                });
                NProgress.start();
                $(element).css({ 'background': this.color });
                setTimeout(function () {
                    NProgress.done();
                }, 3000);
            }
            if (this.type == "btn") {
                element.text(text).append('<img src="/projectloader/assets/img/btn-loader.gif" width="20">');
                setTimeout(function(){
                    element.empty('<img src="/projectloader/assets/img/btn-loader.gif" width="20">').text("BUY A COURSE");
                },3000);
            }
            if (this.type == "div") {
                var el=element;
                $(element).empty();
                $(el).css("background","url('/projectloader/assets/img/div-loader.gif') no-repeat 50%");
                setTimeout(function(){
                    window.location=$(el).find("button").attr("data-link");
                },1000);
            }
        };
    }
    $('.bg-brand-primary').on('click', function (e) {
        e.preventDefault();
        let loader = new Loader("top","#nprogress .bar", "red");
        loader.run();
    });

    $('.btn-info').on('click', function (e) {
        e.preventDefault();
        let loader = new Loader("btn", $(this), "white", "please wait ");
        loader.run();
    });
    $('.bg-brand-green').on('click', function (e) {
        e.preventDefault();
        let loader = new Loader("top","#nprogress .bar", "#FFB511");
        loader.run();
    });
    $('.bg-brand-yellow').on('click', function (e) {
        e.preventDefault();
        let loader = new Loader("top","#nprogress .bar", "white");
        loader.run();
    });
    $('.bg-brand-create').on('click', function (e) {
        e.preventDefault();
        let loader = new Loader("top","#nprogress .bar", "#0FB0E2");
        loader.run();
    });
    $('.src-code').on('click', function (e) {
        e.preventDefault();
        let loader = new Loader("div", "#card-1");
        loader.run();
    });
   
});