<template>
  <div
    class="card__container"
    style="padding-top: 50px"
  >
    <el-button
      class="go__back"
      type="primary"
      @click.stop="goBack"
    >返回</el-button>
    <div style="width: 800px">
      <el-carousel
        :interval="4000"
        type="card"
        height="400px"
        @change="change"
      >
        <el-carousel-item
          v-for="item in dataList"
          :key="item.name"
        >
          <el-card :body-style="{ padding: '0px' }">
            <div :style="`background-image:url('${item.backgroudImage}');`">
              <div class="card__title">
                {{ item.name }}
                <span style="font-size: 40px; font-family: led regular">
                  {{ card[item.name] || 0 }}
                </span>
                张
              </div>
              <div></div>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="card-detail">
      <div style="font-size: 25px">使用说明</div>
      <ul class="card-detail-list">
        <li
          v-for="(item, index) in details"
          :key="index"
        >
          <span> {{ item.detail }}</span>
        </li>
      </ul>
    </div>
    <div class="card-bottom">最终解释权归之之所有</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    this.change(0)
  },
  data() {
    return {
      dataList: Object.freeze([
        {
          name: '购物卡',
          backgroudImage: require('@/assets/images/01苹果团子.png'),
          list: [
            { detail: '此卡可提供购物机会一次' },
            { detail: '此卡不得转让、复印,遗失不补' },
            { detail: '此卡有效期1年' }
          ]
        },
        {
          name: '粘贴卡',
          backgroudImage: require('@/assets/images/02郁金香团子.png'),
          list: [
            { detail: '此卡可转变为任意卡' },
            { detail: '此卡不得转让、复印,遗失不补' },
            { detail: '此卡有效期1年' }
          ]
        },
        {
          name: '按摩卡',
          backgroudImage: require('@/assets/images/03信使团子.png'),
          list: [
            { detail: '此卡可提供按摩服务一次' },
            { detail: '此卡不得转让、复印,遗失不补' },
            { detail: '此卡有效期1年' }
          ]
        },
        {
          name: '大餐卡',
          backgroudImage: require('@/assets/images/04摸鱼团子.png'),
          list: [
            { detail: '此卡可提供大餐' },
            { detail: '此卡不得转让、复印,遗失不补' },
            { detail: '此卡有效期1年' }
          ]
        },
        {
          name: '赞美卡',
          backgroudImage: require('@/assets/images/05生日团子.png'),
          list: [
            { detail: '此卡可提供赞美服务一次' },
            { detail: '此卡不得转让、复印,遗失不补' },
            { detail: '此卡有效期1年' }
          ]
        },
        {
          name: '万能卡',
          backgroudImage: require('@/assets/images/06潜水团子.png'),
          list: [
            { detail: '此卡服务内容可由您填写' },
            { detail: '此卡不得转让、复印,遗失不补' },
            { detail: '此卡有效期1年' }
          ]
        }
      ]),
      details: Object.freeze([])
    }
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    card: (state) => state.card
  }),
  methods: {
    change(value) {
      this.details = this.dataList[value].list
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.card__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.go__back {
  margin-right: 100px;
  align-self: end;
}
::v-deep .el-carousel {
  .el-carousel__mask {
    opacity: 0;
  }
  .el-card {
    height: 100%;
    border: none;
    background-color: transparent;

    .el-card__body {
      height: 100%;

      > div {
        height: 100%;
        border-radius: 20px;
        text-align: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .card__title {
      padding: 10px;
      font-size: 25px;
      color: #fff;
    }
  }
}

.card-detail {
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  &-list {
    list-style: none;
    line-height: 1.8;
  }
}
.card-bottom {
  color: #fff;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
}
</style>
<style></style>
