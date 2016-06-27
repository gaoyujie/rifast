 // 引入spa类库
//引入swiper类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
require('./lib/jquery-1.11.1.js');

// 引入views

require('./views/guide.js');
require('./views/search.js');
require('./views/classes.js');
require('./views/my.js');
require('./views/home.js');
require('./views/index.js');
// require('./views/xiD.js');

SPA.config({
	indexView:"guide"
})
