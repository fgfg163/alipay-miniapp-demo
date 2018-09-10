Page({
  data: {},
  onReady() {
    this.mapCtx = my.createMapContext('userMap')
  },
  mapCtx: null,
  getCenterLocation () {
    this.mapCtx.getCenterLocation({ success(res){
      console.log(res.longitude)
      console.log(res.latitude)
    }})
  },
  moveToLocation () {
    this.mapCtx.moveToLocation()
  }
});
