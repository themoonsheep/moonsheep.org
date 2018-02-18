var MoonSheep = {

  init: function(){
    this.particles();
  },

  particles: function(){
    particlesJS.load('stars', 'assets/particles.json');
  }

}

MoonSheep.init();
