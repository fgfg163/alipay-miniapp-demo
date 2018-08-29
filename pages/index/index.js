const iconv = require('iconv-lite');

Page({
  data: {
    ip: '',
    address: '',
  },
  onLoad() {
    
    my.httpRequest({
      url: 'http://2018.ip138.com/ic.asp',
      method: 'GET',
      dataType: 'text',
      success: (res) => {
        const ip = (res.data.match(/\[([\s\S]*?)\]/) || {})[1];
        this.setData({
          ip,
        });
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      },
    });
  },
  onShow() {

  },
});
