var sa = require('../lib/swiper.animate1.0.2.min.js');
var tplMy = require('../templates/my.string');

SPA.defineView('my', {
  html: tplMy,
  plugins: ['delegated'],
// });
bindActions: {
    'close': function () {
    	console.log('abcdefg');
    	// $('.yo-dialog').hide();
       this.hide();
    }
    
  },

  bindEvents: {
    show: function () {
      var lifenavScroll = this.widgets['lifenav-scroll'];
      lifenavScroll.options.scrollX = true;
      lifenavScroll.options.scrollY = false;

      console.log(sa.animate);
    }
  }

});