// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Nav from '../_modules/nav/nav';
import Swiper from 'swiper';
require('../_modules/header/header');
import ScrollReveal from 'scrollreveal';


$(() => {


  $('.sub-menu-item').on('click', function(){
      this.classList.add('link-active');
  });
  
  $('.nav-list_item-cta').on('click', function(){
      alert("hi");
  }); 

  var swiper1 = new Swiper('.swiper-container1', {
    spaceBetween: 36,
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.button1-next',
      prevEl: '.button1-prev'
    },
    pagination: {
      el: '.pag1',
    }
  });

  var swiper2 = new Swiper('.swiper-container2', {
    spaceBetween: 36,
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.button2-next',
      prevEl: '.button2-prev'
    },
    pagination: {
      el: '.pag2',
    }
  });

  var swiper3 = new Swiper('.swiper-container3', {
    spaceBetween: 36,
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.button3-next',
      prevEl: '.button3-prev'
    },
    pagination: {
      el: '.pag3',
    }
  });

  
  new Nav();

  $('.ga-event').on('click', function(){
    var elem = $(this);
    ga('send', 'event', elem.data('gacategory') , elem.data('gaactions'), elem.data('galabel'));
  });
  

  // Faqs page accordion
  let $item = $('.collapsible');

  $item.on('click', function() {
    //$(this).toggleClass('active');
    //$(this).find('.content').toggleClass('active');
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });


  // Not finished
  //*var ScrollReveal = require('scrollreveal');

  

  

});
