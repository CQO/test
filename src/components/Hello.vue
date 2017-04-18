<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { QWebChannel } from  "./QTWebChannel"
export default {
  name: 'hello',
  data () {
    return {
      msg: '你好'
    }
  },
  created(){
    //console.log(QWebChannel)
    const _this = this
    new QWebChannel(navigator.qtWebChannelTransport, function(channel) {
      const foo = channel.objects.content;
      foo.callback.connect(function(receive) {
        _this.msg = "lal"
      });
      foo.preLogin("ce")
    });
  }
}
</script>

