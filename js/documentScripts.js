function setHeiHeight(){$("#hm").css({height:$(window).height()+"px"}),setHeiHeight(),$(window).resize(setHeiHeight)}jQuery(document).ready(function(){$(function(){$(window).scroll(function(){$(this).scrollTop()>200?$("#lg").addClass("height"):$("#lg").removeClass("height")})})}),$(document).ready(function(){$(".item").on("click","a",function(a){a.preventDefault();var b=$(this).attr("href"),c=$(b).offset().top;$("body,html").animate({scrollTop:c},1e3)})}),$("#info").click(function(a){a.preventDefault(),$(this).toggleClass("inf-r"),$("#infb").toggleClass("infb")}),$(document).click(function(a){$(a.target).closest("#info").length||($("#info").removeClass("inf-r"),$("#infb").removeClass("infb"),indexClick=0,a.stopPropagation())}),$(document).ready(function(){$("#element").waypoint(function(a){"down"===a?($("#element").addClass("processor"),$("#element").removeClass("processo")):"up"===a&&($("#element").addClass("processo"),$("#element").removeClass("processor"))},{offset:"15%"})}),$(document).ready(function(){$("#ram").waypoint(function(a){"down"===a?($("#ram").addClass("ram"),$("#ram").removeClass("ra"),$("#lr").addClass("latch-right"),$("#lr").removeClass("lr"),$("#ll").addClass("latch-left"),$("#ll").removeClass("ll")):"up"===a&&($("#ram").addClass("ra"),$("#ram").removeClass("ram"),$("#lr").addClass("lr"),$("#lr").removeClass("latch-right"),$("#ll").addClass("ll"),$("#ll").removeClass("latch-left"))},{offset:"70%"})}),$(document).ready(function(){$("#cool").waypoint(function(a){"down"===a?($("#cool").addClass("cool"),$("#cool").removeClass("cooler"),$("#scr").addClass("screw"),$("#scr").removeClass("screws"),$("#pl").addClass("plate"),$("#pl").removeClass("pl")):"up"===a&&($("#cool").addClass("cooler"),$("#cool").removeClass("cool"),$("#scr").addClass("screws"),$("#scr").removeClass("screw"),$("#pl").addClass("pl"),$("#pl").removeClass("plate"))},{offset:"20%"})}),$(document).ready(function(){$("#pb").waypoint(function(a){"down"===a?($("#sd").addClass("sid"),$("#sd").removeClass("side"),$("#pob").addClass("pb"),$("#pob").removeClass("power-block")):"up"===a&&($("#sd").addClass("side"),$("#sd").removeClass("sid"),$("#pob").addClass("power-block"),$("#pob").removeClass("pb"))},{offset:"38%"})}),$(document).ready(function(){$("#b-hor").waypoint(function(a){"down"===a?($("#mb-b").addClass("mb-body"),$("#mb-b").removeClass("mb-bod"),$("#vc").addClass("videocard"),$("#vc").removeClass("videocar")):"up"===a&&($("#mb-b").addClass("mb-bod"),$("#mb-b").removeClass("mb-body"),$("#vc").addClass("videocar"),$("#vc").removeClass("videocard"))},{offset:"50%"})}),$(document).ready(function(){$("#hdd-b").waypoint(function(a){"down"===a?($("#hdd-s").addClass("hdd-slo"),$("#hdd-s").removeClass("hdd-slot"),$("#hdd").addClass("hdd"),$("#hdd").removeClass("hd")):"up"===a&&($("#hdd-s").addClass("hdd-slot"),$("#hdd-s").removeClass("hdd-slo"),$("#hdd").addClass("hd"),$("#hdd").removeClass("hdd"))},{offset:"18%"})});var join=$(".show-hide"),joinLink=$("#touch-menu"),indexClick=0;$(function(){joinLink.click(function(a){0===indexClick?(join.addClass("visible"),join.removeClass("show-hide"),indexClick=1,joinLink.removeClass("mobile-menu"),joinLink.addClass("line"),$("#btn").addClass("whtbg")):(join.addClass("show-hide"),join.removeClass("visible"),indexClick=0,joinLink.addClass("mobile-menu"),joinLink.removeClass("line"),$("#btn").removeClass("whtbg")),a.stopPropagation()})}),$(document).click(function(a){$(a.target).closest(".show-hide").length||(join.addClass("show-hide"),join.removeClass("visible"),indexClick=0,joinLink.addClass("mobile-menu"),joinLink.removeClass("line"),$("#btn").removeClass("whtbg"),a.stopPropagation())}),$(document).ready(function(a){$(window).scroll(function(){var a=$(this).scrollTop();$(".head-img").css({transform:"translateY(-"+a/40+"%)"})})}),$(function(){var a=$("div.tabs > div");a.hide().filter(":first").show(),$("div.tabs ul.tabNavigation a").click(function(){return a.hide(),a.filter(this.hash).show(),$("div.tabs ul.tabNavigation a").removeClass("selected"),$(this).addClass("selected"),!1}).filter(":first").click()});