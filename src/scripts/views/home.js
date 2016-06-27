var tplHome = require('../templates/home.string');

// 引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('home', {
  html: tplHome,

  plugins: ['delegated',{
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
    }
  }],

  init: {
    livelistArray:[],
    iunSwiper:null,
    mySwiper: null,
    vm:null,
    formatData:function(arr){
      var tempArr = [];
      for (var i = 0; i < arr.length; i++) {
        tempArr[i] = [];
        tempArr[i].push(arr[i]);
      }
      return tempArr;
    }
  },

  bindActions: {
    'tap.slide': function (e, data) {
      this.mySwiper.slideTo($(e.el).index())
    }
  },

  bindEvents: {
    

    'beforeShow':function(){
      //获得VM对象
      var that = this;
      that.vm = that.getVM();
      
      $.ajax({
        // url: '/riding/mock/livelist.json',
        url:'/api/getLivelist.php',
        type: 'get',
        data:{
          rtype:'origin'
        },
        success:function(rs){
          that.livelistArray = rs.data;
          // that.vm.livelist = that.formatData(rs.data);
          that.vm.livelist = that.formatData(rs.data);
          // console.log(vm.livelist);
        }

      });
    },
    'show': function () {
      var that=this;
      this.mySwiper = new Swiper('#home-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
          var index = swiper.activeIndex;
          var $lis = $('.m-home nav li');
          util.setFocus($lis.eq(index));
        }
      });
      var lunSwiper = new Swiper('#lunBo', {
        loop: true,
        autoplay:2000,
      });
      // var oHeight=$("#xiDing").offsetTop;
      // console.log(oHeight);
    }
  }
});

