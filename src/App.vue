<template>
  <div id="content" :style="stylees">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return  {
      game: {},
      score: 0
    }
  },
  mounted () {
    let isWechat = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    if (isWechat) {
      document.addEventListener('WeixinJSBridgeReady', this.gameReady, false)
    } else {
      this.gameReady()
    }
  },
  methods: {
    init () {

    },
    gameReady () {
      this.game = this.towerGame(options)
      this.game.load(() => {
        this.playBgm()
        this.init()
      }, updateLoading)
    },
    playBgm () {

    },
    towerGame () {
      
    }
  },
  computed: {
    stylees () {
      let gameWidth = window.innerWidth
      let gameHeight = window.innerHeight
      let ratio = 1.5
      if (gameHeight / gameWidth < ratio) {
        gameWidth = Math.ceil(gameHeight / ratio)
      }
      return `height: ${gameHeight}px; width: ${gameWidth}px`
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
