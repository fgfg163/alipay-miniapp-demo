Page({
  data: {
    ip: '',
    address: '',
  },
  onLoad() {
    this.loadIp();
  },
  onShow() {

  },
  loadIp() {
    my.showLoading({ content: '加载中' });
        this.setData({
          ip: '',
        });
    my.httpRequest({
      url: 'http://2018.ip138.com/ic.asp',
      success: (res) => {
        const ip = (res.data.match(/\[([\s\S]*?)\]/) || {})[1];
        this.setData({
          ip,
        });
        my.hideLoading();
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      },
    });
  },
  handleOnSwitchBtnTap(event) {
    console.log(event);
    my.navigateTo({
      url: '/pages/show-map/show-map',
    });
  },
  handleRefreshIp() {
    this.loadIp();
  },
});
