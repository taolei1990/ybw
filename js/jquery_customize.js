/**
 * Created by 75182 on 2016/7/27.
 */
$(document).ready(function(){
  $(".wx-zhpx").click(function(){
        $(".wx-zhpx").addClass("wx-sjpx-1");
        $(".wx-zhpx-a").addClass("wx-sjpx-a-1");
        $(".wx-sjpx").addClass("wx-zhpx-1");
        $(".wx-sjpx-a").addClass("wx-zhpx-a-1");
        $(".wx-sjpx").removeClass("wx-sjpx-1");
        $(".wx-sjpx-a").removeClass("wx-sjpx-a-1");
      $(".wx-icon-s1").addClass("wx-icon-s-off");
      $(".wx-icon-s2").addClass("wx-icon-s-on");
      $(".wx-icon-s2").removeClass("wx-icon-s-off");
      $(".wx-icon-s1").removeClass("wx-icon-s-on");
    });
    $(".wx-sjpx").click(function(){
        $(".wx-zhpx").addClass("wx-zhpx-1");
        $(".wx-zhpx-a").addClass("wx-zhpx-a-1");
        $(".wx-sjpx").addClass("wx-sjpx-1");
        $(".wx-sjpx-a").addClass("wx-sjpx-a-1");
        $(".wx-zhpx").removeClass("wx-sjpx-1");
        $(".wx-zhpx-a").removeClass("wx-sjpx-a-1");
        $(".wx-icon-s1").addClass("wx-icon-s-on");
        $(".wx-icon-s1").removeClass("wx-icon-s-off");
        $(".wx-icon-s2").addClass("wx-icon-s-off");
     
        $(".wx-icon-s2").removeClass("wx-icon-s-on");
    });

    $(".iconfont-xingxing").click(function(){

        $(this).toggleClass("iconfont-xingxing2");
    });

    $(".wx-fla").click(function(){

        $(this).addClass("wx-fl-off");
        $(this).removeClass("wx-fl-on");
        $(".wx-fla-a").removeClass("wx-fl-a-off");
        $(".wx-fla-a").addClass("wx-fl-a-off");
        $(".wx-flb").removeClass("wx-fl-off");
        $(".wx-flc").removeClass("wx-fl-off");
        $(".wx-fld").removeClass("wx-fl-off");
    });
    $(".wx-flb").click(function(){

        $(this).addClass("wx-fl-off");
        $(this).removeClass("wx-fl-on");
        $(".wx-fla-a").removeClass("wx-fl-a-off");
        $(".wx-fla-a").addClass("wx-fl-a-on");
        $(".wx-flc").removeClass("wx-fl-off");
        $(".wx-fla").addClass("wx-fl-on");
        $(".wx-fld").removeClass("wx-fl-off");
    });
    $(".wx-flc").click(function(){

        $(this).addClass("wx-fl-off");
        $(this).removeClass("wx-fl-on");
        $(".wx-fla-a").removeClass("wx-fl-a-off");
        $(".wx-fla-a").addClass("wx-fl-a-on");
        $(".wx-flb").removeClass("wx-fl-off");
        $(".wx-fla").addClass("wx-fl-on");
        $(".wx-fld").removeClass("wx-fl-off");
    });
    $(".wx-fld").click(function(){

        $(this).addClass("wx-fl-off");
        $(this).removeClass("wx-fl-on");
        $(".wx-fla-a").removeClass("wx-fl-a-off");
        $(".wx-fla-a").addClass("wx-fl-a-on");
        $(".wx-fla").addClass("wx-fl-on");
        $(".wx-flc").addClass("wx-fl-on");
        $(".wx-flb").removeClass("wx-fl-off");
    });
    $(".wx-ptfw").click(function () {
        $(this).addClass("wx-dgfw-off");
        $(".wx-dgfw").addClass("wx-dgfw-on");
        $(this).removeClass("wx-dgfw-on");
    });
    $(".wx-dgfw").click(function () {
        $(this).addClass("wx-dgfw-off");
        $(".wx-ptfw").addClass("wx-dgfw-on");
        $(this).removeClass("wx-dgfw-on");
    });
    $(".wx-xxxx").click(function () {
        $(this).addClass("wx-dp-off");
        $(".wx-dp").addClass("wx-dp-on");
        $(this).removeClass("wx-dp-on");
        $(".wx-cptujs").show();
        $(".wx-cpdp").hide();
    });
    $(".wx-dp").click(function () {
        $(this).addClass("wx-dp-off");
        $(".wx-xxxx").addClass("wx-dp-on");
        $(this).removeClass("wx-dp-on");
        $(".wx-cptujs").hide();
        $(".wx-cpdp").show();
    });

    $(".wx-xmlx-r").click(function () {
        $(this).addClass("wx-xmlx-r-off");
        $(".wx-btn-wbk").addClass("wx-xmlx-r-on");
        $(".wx-btn-wbk").removeClass("wx-xmlx-r-off");
        $(this).removeClass("wx-xmlx-r-on");

    });
    $(".wx-btn-wbk").click(function () {
        $(this).addClass("wx-xmlx-r-off");
        $(".wx-xmlx-r").addClass("wx-xmlx-r-on");
        $(".wx-xmlx-r").removeClass("wx-xmlx-r-off");
        $(this).removeClass("wx-xmlx-r-on");

    });
    $(".img-on").click(function () {

        $(this).toggleClass("img-off");
    });
    $(".wx-img-on").click(function () {

        $(this).toggleClass("wx-img-off");
    });
    $(".wx-cs").click(function () {

        $(".wx-sc-ico").toggleClass("wx-sc-ico-off");
    });
    $(".wx-ts").click(function () {

        $(".wx-ts-ico").toggleClass("wx-ts-ico-off");
    });
    $(".wx-fs").click(function () {

        $(".wx-fs-ico").toggleClass("wx-fs-ico-off");
    });
    $(".a-like").click(function () {

        $(this).toggleClass("a-like-off");
    });

    $(".wx-xm").click(function () {
        $(this).addClass("wx-xm-off");
        $(this).removeClass("wx-xm-on");
        $(".wx-fw").addClass("wx-xm-on");
        $(".wx-fw").removeClass("wx-xm-off");
        $(".wx-xmnr").show();
        $(".wx-fwnr").hide();
    });
    $(".wx-fw").click(function () {
        $(this).addClass("wx-xm-off");
        $(this).removeClass("wx-xm-on");
        $(".wx-xm").addClass("wx-xm-on");
        $(".wx-xm").removeClass("wx-xm-off");
        $(".wx-xmnr").hide();
        $(".wx-fwnr").show();
    });
    $(".ybm-4").click(function () {
        $(this).hide();
        $(".ybm-n").show();
        $(".wx-bmgs").addClass("wx-bmgs-off");
        $(".wx-bmgs").removeClass("wx-bmgs-on");
       
    });
    $(".ybm-n").click(function () {
        $(this).show();
        $(".ybm-4").show();
        $(".wx-bmgs").addClass("wx-bmgs-on");
        $(".wx-bmgs").removeClass("wx-bmgs-off");
     
       
    });
});
