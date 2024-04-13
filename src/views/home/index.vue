<template>
  <div class="offical-website h-screen">
    <!-- 导航栏 -->
    <div class="nav relative h-16 px-8 text-lg text-center bg-primary text-white">
      <div class="logo absolute top-0 left-0 w-40 h-full bg-black"></div>
      <a class="nav-item" :class="{'active': currentId === 0}" @click="jumpTo(0)" href="#home">首页</a>
      <a class="nav-item" :class="{'active': currentId === 1}" @click="jumpTo(1)" href="#order">订单融资方案</a>
      <a class="nav-item" :class="{'active': currentId === 2}" @click="jumpTo(2)" href="#product">产品介绍</a>
      <a class="nav-item" :class="{'active': currentId === 3}" @click="jumpTo(3)" href="#company">公司概况</a>
      <a class="nav-item" :class="{'active': currentId === 4}" @click="jumpTo(4)" href="#contact">联系我们</a>
    </div>

    <!-- 首页 -->
    <div id="home" class="h-2/4 bg-blue-500"></div>
    
    <div class="w-full flex">
      <div class="center order-2 flex-1">
        <!-- 订单融资方案 -->
        <div id="order" class="pt-20 text-center">
          <h1>订单融资方案简介</h1>
          <p>Introduction to Order Financing Scheme</p>
          <div class="px-32"><a-divider dashed /></div>
          <h6>产品特点</h6>
          <div class="grid grid-cols-3 gap-4 2xl:gap-6 px10">
            <div
              v-for="(item, index) in OrderFeatures" :key="index"
              class="order-features flex justify-center items-center py-8 2xl:py-12">
              <div class="o-icon w-20 h-20 mr-4">{{ item.icon }}</div>
              <span class="inline-block w-1/2 text-lg text-left 2xl:text-xl">{{ item.title }}</span>
            </div>
          </div>

          <h6 class="mt-10">产品优势</h6>
          <div class="grid grid-cols-3 gap-4 2xl:gap-12 px10">
            <div class="order-goods bg-blue-500">
              <div class="mt-10 h-10">图标</div>
              <h3 class="my-12 font-bold">订单融资解决供应商在到货后的资金周转需求</h3>
              <span>订单融资产品的特点是银行根据与供应商的商流，无需核心企业确权的情况下，给供应商授信，核心企业无需兜底责任，并且供应商前置获取资金。 解决了供应商到货后到核心企业结算前时间周期的资金周转问题</span>
            </div>
            <div class="order-goods bg-blue-500">
              <div class="mt-10 h-10">图标</div>
              <h3 class="my-12 font-bold">以供应商为直接授信主体定价具有优势</h3>
              <span>相较于反向保理占核心企业的授信 ， 面临核心企业众多合作授信银行的价格竞争 ， 订单融资在议价权上有一定的定价优势</span>
            </div>
            <div class="order-goods bg-blue-500">
              <div class="mt-10 h-10">图标</div>
              <h3 class="my-12 font-bold">供应商均为核心企业的优质合作伙伴 ，建立长期合作关系</h3>
              <span>订单融资开展供应商为经筛选的核心企业长期供货合作伙伴 ， 能够为银行建立与供应商、 核心企业长期稳定的合作关系</span>
            </div>
          </div>
        </div>

        <!-- 产品介绍 -->
        <div id="product" class="pt-20 text-center">
          <h1>产品介绍</h1>
          <p class=" mb-8">Product Introduction</p>
          <div class="h-96 bg-blue-500"></div>
          <div class="mt-8 grid grid-cols-4 gap-4 2xl:gap-6 px10">
            <div
              v-for="(item, index) in ProductIntroductions" :key="index"
              class="order-features flex flex-col justify-center items-center py-6">
              <div class="o-icon w-14 h-14 mb-3">{{ item.icon }}</div>
              <span class="text-center text-base">{{ item.title }}</span>
            </div>
          </div>
        </div>

        <!-- 公司概况 -->
        <div id="company" class="pt-20 text-center">
          <h1>公司概况</h1>
          <p class="mb-8">Company Overview</p>
          <div class="company-overview flex flex-col justify-center items-center text-white bg-blue-500">
            <div class="text-6xl">图标</div>
            <span class="mt-8 mb-4">科技构建供应链新生态</span>
            <span class="text-xl">上海链刻优科技有限公司 ，  由行业内具有资深金融背景的高级管理人员发起，拥有多年在电商SaaS，AI智能</span>
            <span class="text-xl">技术、供应链金融科技SaaS等领域的丰富经验。</span>
            <div class="mt-20 text-5xl">图标</div>
            <span class="mt-8 text-xl">融链宝致力于通过科技和创新来重新定义和改造供应链金融 ，成为全球领先的供应链金融科技解决方案提供商。</span>
            <span class="text-xl">聚焦于ABCD（人工智能、 区块链、 云计算、 大数据） 等先进技术在供应链生态的应用 ， </span>
            <span class="text-xl">以线上化、 场景化、数据化的方式提供创新供应链金融科技解决方案。</span>
            <span class="text-xl">融链宝的云原生解决方案，可优化供应链金融的支付周期、实现供应链金融全流程的数字化 ， </span>
            <span class="text-xl">提升整个供应链金融生态系统的透明度和连通性。</span>
          </div>
        </div>

        <!-- 联系我们 -->
        <div id="contact" class="py-20 text-center">
          <h1>联系我们</h1>
          <p class="mb-8">Contact US</p>
          <div class="flex justify-center items-center mt-12">
            <div class="w-32 h-32 rounded-3xl bg-blue-500"></div>
            <div class="flex flex-col items-start ml-8">
              <div class="flex justify-center items-center">
                <div class="w-8 h-8 bg-blue-500 mr-2"></div>
                <span class="text-xl text-gray-500">400-1234-5678</span>
              </div>
              <div class="flex justify-center items-center mt-6">
                <div class="w-8 h-8 bg-blue-500 mr-2"></div>
                <span class="text-xl text-gray-500">xux@linkyou.vip</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部 -->
        <div class="footer h-16 flex justify-center items-center">
          <span class="w-64">沪公网安备 31011202014777号</span>
          <span class="w-64">沪ICP备20201016888号</span>
          <span class="w-64">信息系统安全等级保护：31011243088-22008</span>
        </div>
      </div>

      <div class="left order-1 w-0 2xl:w-1/12 3xl:w-1/6"></div>
      <div class="right order-3 w-0 2xl:w-1/12 3xl:w-1/6"></div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentId = ref(0)

const OrderFeatures = [
  { icon: '图标', title: '根据订单进行放款' },
  { icon: '图标', title: '核心企业无需托底' },
  { icon: '图标', title: '不占用企业信用额' },
  { icon: '图标', title: '按实际发生天数计息' },
  { icon: '图标', title: '无任何其他隐性收费' },
  { icon: '图标', title: '资金来自银行更加稳定' },
  { icon: '图标', title: '根据真实合同即可放款' },
  { icon: '图标', title: '比传统的融资效率高' },
  { icon: '图标', title: '整体的融资成本在6-8%之间' }
]

const ProductIntroductions = [
  { icon: '图标', title: '订单管理' },
  { icon: '图标', title: '供应商管理' },
  { icon: '图标', title: '收款统计' },
  { icon: '图标', title: '项目管理' },
  { icon: '图标', title: '核心企业' },
  { icon: '图标', title: '银行管理' },
  { icon: '图标', title: '权限管理' },
  { icon: '图标', title: '系统管理' }
]

const jumpTo = (index) => {
  currentId.value = index
  const id = ['home', 'order', 'product', 'company', 'contact'][index]
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="less" scoped>
  .nav {
    z-index: 1000;
    .nav-item {
      display: inline-block;
      margin: 0 3%;
      line-height: 64px;
      cursor: pointer;
    }
    .active {
      background-image: linear-gradient(0, #ffffff, #ffffff);
      background-size: 100% 4px;
      background-position: center bottom;
      background-repeat: no-repeat;
    }
  }
  
  .center {
    background-color: #ffffff;

    h1 {
      font-size: 24px;
      font-weight: 700;
      color: #000000;
    }

    h3 {
      font-size: 20px;
    }

    h6 {
      margin-bottom: 32px;
      font-size: 14px;
      color: #000000;
    }

    p {
      margin-top: 8px;
      color: #aaaaaa;
    }

    .order-features {
      border-radius: 16px;
      background-color: #f2f2f2;
      color: #555555;
      .o-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #ffffff;
      }
      & > span {
        display: inline-block;
        word-break: break-all;
      }
    }

    .order-goods {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 480px;
      padding: 40px 50px 0;
      color: #ffffff;
      @media (min-width: 1920px) {
        height: 520px;
      }
    }

    .company-overview {
      height: 680px;
      span {
        display: inline-block;
        word-break: break-all;
      }
    }

    .footer {
      background-color: #163a71;
      span {
        display: inline-block;
        font-size: 12px;
        color: #99a8c1;
      }
    }
  }

  .px10 {
    padding: 0 10%;
  }

  .px20 {
    padding: 0 20%;
  }

  :deep(.ant-divider-horizontal) {
    margin: 30px 0;
    border-width: 1.5px;
    color: #cccccc;
  }
</style>