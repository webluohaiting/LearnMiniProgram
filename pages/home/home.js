// home/home.js
Page({
  data: {
    name: 'haha',
    students: [
      { id: 1, name: 'aoao', age: 20 },
      { id: 2, name: 'ouou', age: 30 },
      { id: 3, name: 'xixi', age: 40 },
      { id: 4, name: 'hehe', age: 50 },
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误做法：只会改变值，不会改变视图
    // this.data.counter += 1
    // console.log(this.data.counter);

    // 2.setData绑定数据
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handeSubstaction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})