$(document).ready(function () {

    //Loader object
    function Loader(type,element, color, text, loaderPath) {
        this.type = type;
        this.color = color;
        this.text = text;
        this.loaderPath = loaderPath;
        this.run = function () {
            if (this.type == "top") {
                var url=$(element).attr("data-link");
                NProgress.configure({
                    showSpinner: false
                });
                NProgress.start();
                $(element).css({ 'background': this.color });
                setTimeout(function () {
                    NProgress.done();
                    window.location=url;
                }, 3000);
            }
            if (this.type == "btn") {
                var url=$(element).attr("data-link");
                element.text(text).append('<img src="assets/img/btn-loader.gif" width="20">');
                setTimeout(function(){
                   window.location=url;
                },3000);
            }
            if (this.type == "div") {
                var url=$(element).find("button").attr("data-link");
                $(element).empty();
                $(element).css("background","url('assets/img/div-loader.gif') no-repeat 50%");
                setTimeout(function(){
                    window.location=url;
                },500);
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
        let loader = new Loader("div", $(this).attr("data-id"));
        
        loader.run();
    });
   
});