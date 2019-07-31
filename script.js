function containerCenter(){
    let container = $('#container').height();
    let y = (tinggiBrowser - container) / 2;
    $('#container').css({'marginTop':y});
}

function tombolCenter(){
    let ya = $('#ya').outerWidth();
    let tidak = $('#tidak').outerWidth();
    let yaX = (lebarBrowser - ya) / 2;
    let tidakX = ((lebarBrowser - tidak)) / 2;

    $('#ya').css({ 'marginLeft':yaX });
    $('#tidak').css({ 'marginLeft':tidakX });
}

function init(){
    containerCenter();
    tombolCenter();
}

function checkJarak($element, e, jarak){
    let kiri = $element.offset().left - jarak; //kiri
    let kanan = kiri + $element.outerWidth() + ( 2 * jarak );
    let atas = $element.offset().top - jarak;
    let bawah = atas + $element.outerHeight() + ( 2 * jarak );

    let x = e.pageX;
    let y = e.pageY;

    return (x > kiri && x < kanan && y > atas && y < bawah);
}

let jarakTerdekatMaksimal = 10;
let speed = 20;
let lebarBrowser = $(window).width();
let tinggiBrowser = $(window).height();
$(document).ready(function(){
    init();

    let elementYa = $('#ya');
    let posisiAsli = elementYa.offset().top;
    let balikLagi = false;

    $('html').mousemove(function(e){
        if(checkJarak($('#tidak'), e, jarakTerdekatMaksimal)){
            elementYa.animate({ 'top': '250px' }, speed);
            balikLagi = true;
        } 
		else{
            if(balikLagi){
                elementYa.animate({ 'top': posisiAsli }, speed);
                balikLagi = false;
            }
        }
    });
	
});
