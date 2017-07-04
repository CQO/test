<template>
  <div class="ibenchu">
    <ul v-if="ibenchu">
      <li class="title">
        <div class="table">影片名</div>
        <div class="table">上映情况</div>
        <div class="table">票房总计</div>
      </li>
      <li v-for="(item, index) in ibenchu.result" :key="index">
        <div class="name table">{{item.name}}</div>
        <div class="days table" v-if="item.days > 0">已上映{{item.days}}天</div>
        <div class="days table" v-else>距上映还有{{-item.days}}天</div>
        <div class="sum table">{{item.sum}}万</div>
      </li> 
    </ul>
    <div v-else>
      <embed src="../assets/loading.svg"></embed>
    </div>
  </div>
</template>

<script>
// const superagent = require('superagent')
// const jsonp = require('superagent-jsonp')
export default {
  data () {
    return {
      ibenchu: null
    }
  },
  created () {
    const get = function (url, fn) {
      const obj = new XMLHttpRequest()
      obj.open('GET', url, true)
      obj.onreadystatechange = function () {
        if (obj.readyState === 4) {
          fn.call(this, obj.responseText)
        }
      }
      obj.send(null)
    }
    get('https://mobapi.ibenchu.pw/boxoffice/day/query?key=1eae6b9688738&area=CN', (res) => {
      console.log(JSON.parse(res))
      this.ibenchu = JSON.parse(res)
    })
    // superagent.get('https://mobapi.ibenchu.pw/boxoffice/day/query?key=1eae6b9688738&area=CN').use(jsonp).end((err, res) => {
    //   console.log('错误', err)
    //   console.log('数据', res)
    // })
  }
}
</script>

<style lang="scss" scoped>
.ibenchu {
  ul {
    margin-top: 60px;
  }
  li {
    height: 40px;
    display: flex;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
  }
  .table {
    width: 33%;
    text-align: center;
  }
  .title {
    background-color: skyblue;
    color: white;
  }
  .sum {
    color: cadetblue;
  }
}
</style>
