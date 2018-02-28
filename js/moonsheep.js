var MoonSheep = {

  init: function(){
    this.ms_particles();
    this.ms_carousel('.carousel');
  },

  ms_particles: function(){
    particlesJS.load('stars', 'assets/particles.json');
  },

  ms_carousel: function(el){

  }



}

MoonSheep.init();
$(document).ready(function(el){
  $('.carousel').carousel({ interval: false });
});
