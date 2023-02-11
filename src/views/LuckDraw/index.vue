<template>
  <div class="container">
    <div class="container__title">
      您还有
      <span style="
          font-size: 40px;
          font-family: led regular;
          color: rgb(56, 148, 255);
        ">
        {{ remainder }}</span>
      机会
    </div>
    <LuckyWheel
      ref="myLucky"
      width="300px"
      height="300px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      @start="startCallback"
      @end="endCallback"
    />
    <div class="container__card">
      <el-badge
        :value="total - remainder"
        :max="100"
        class="item"
      >
        <el-button
          type="primary"
          @click.stop="handleCard"
        >我的卡片</el-button>
      </el-badge>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      blocks: [{ padding: '13px', background: '#617df2' }],
      prizes: [
        { fonts: [{ text: '购物卡', top: '10%' }], background: '#e9e8fe' },
        { fonts: [{ text: '粘贴卡', top: '10%' }], background: '#b8c5f2' },
        { fonts: [{ text: '按摩卡', top: '10%' }], background: '#e9e8fe' },
        { fonts: [{ text: '大餐卡', top: '10%' }], background: '#b8c5f2' },
        { fonts: [{ text: '万能卡', top: '10%' }], background: '#e9e8fe' },
        { fonts: [{ text: '赞美卡', top: '10%' }], background: '#b8c5f2' }
      ],
      buttons: [
        { radius: '50px', background: '#617df2' },
        { radius: '45px', background: '#afc8ff' },
        {
          radius: '40px',
          background: '#869cfa',
          pointer: true,
          fonts: [{ text: '开始\n抽奖', top: '-20px' }]
        }
      ],
      total: 10,
      remainder: 0,
      prize: ''
    }
  },
  created() {
    this.remainder =
      this.total -
      Object.values(this.card).reduce((pre, cur) => {
        return pre + cur
      }, 0)
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    card: (state) => state.card
  }),
  methods: {
    ...mapActions([
      'incrementCard' // 将 `this.increment()` 映射为 `this.$store.dispatch('incrementCard')`
    ]),
    // 点击抽奖按钮会触发star回调
    startCallback() {
      if (!this.remainder) {
        this.$alert('已经满10次了,明年再来吧！！！')
        return
      }
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是
        const index = Math.floor(Math.random() * 6)
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(index)
      }, 1000 * Math.random())
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      this.remainder--
      this.prize = prize.fonts[0].text
      this.incrementCard(prize.fonts[0].text)
      this.$message({
        dangerouslyUseHTMLString: true,
        message: `<strong>获得 <i>${this.prize}</i></strong>`,
        type: 'success'
      })
    },
    handleCard() {
      this.$router.push({ path: '/card' })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    margin-bottom: 20px;
    color: #fff;
    font-size: 18px;
  }
  &__card {
    margin-top: 20px;
  }

  .el-dialog__wrapper {
    :deep .el-dialog {
      background-color: #1d2136;
      width: 500px;
      padding: 10px 50px;
      .el-dialog__header {
        height: 36px;
        line-height: 36px;
        text-align: left;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 15px 0 20px;
        border-bottom: 1px solid #0e0e1a;
        .el-dialog__title {
          color: #efedf5;
        }
      }
    }
  }
}
</style>
