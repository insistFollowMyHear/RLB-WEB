<template>
  <div class="offical-website h-screen">
    <!-- 导航栏 -->
    <div class="nav relative h-16 px-8 text-lg text-center bg-primary text-white">
      <div class="logo absolute top-0 left-0 w-40 h-full flex justify-center items-center">
        <img
        class="h-2/3 ml-10 object-cover"
        src="@/assets/images/logo-name.png" alt="">
      </div>
      <a class="nav-item" :class="{'active': currentId === 0}" @click="jumpTo(0)" href="#home">首页</a>
      <a class="nav-item" :class="{'active': currentId === 1}" @click="jumpTo(1)" href="#order">订单融资方案</a>
      <a class="nav-item" :class="{'active': currentId === 2}" @click="jumpTo(2)" href="#product">产品介绍</a>
      <a class="nav-item" :class="{'active': currentId === 3}" @click="jumpTo(3)" href="#company">公司概况</a>
      <a class="nav-item" :class="{'active': currentId === 4}" @click="jumpTo(4)" href="#contact">联系我们</a>
    </div>

    <!-- 首页 -->
    <div id="home" class="relative">
      <img class="w-full" src="https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/home-banner.png" alt="">
      <div class="absolute top-1/2 -translate-y-1/2 flex flex-col items-end text-white" style="right: 15%;">
        <img
        class="h-32 object-cover 2xl:h-36 3xl:h-40"
        src="@/assets/images/logo-name.png" alt="">
        <span class="text-sm xl:text-base 2xl:text-lg 3xl:text-xl">中小企业订单融资专业服务商</span>
        <a-button class="mt-4 h-12 w-36 text-sm xl:mt-8 xl:h-14 xl:w-48 xl:text-lg" shape="round" type="primary" @click="toRLBProject">点击进入融链宝 ></a-button>
      </div>
    </div>
    
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
              @click="handleClickOrder(index)"
              class="order-features flex justify-center items-center py-8 2xl:py-10"
              :class="{'orderActive': currentOrderIdx === index}">
              <div class="o-icon w-14 h-14 mr-4 xl:w-16 xl:h-16">
                <img class="w-5 object-cover" :src="item.icon" alt="">
              </div>
              <span class="inline-block w-1/2 text-sm text-left xl:text-base">{{ item.title }}</span>
            </div>
          </div>

          <h6 class="mt-10">产品优势</h6>
          <div class="grid grid-cols-3 gap-4 2xl:gap-12 px10">
            <div class="order-goods-1 pt-12 px-10 xl:pt-16">
              <div class="w-14 h-14 flex justify-center items-center">
                <img class="w-9 object-cover" src="@/assets/images/order-icon-10.png" alt="">
              </div>
              <h3 class="my-8 text-base font-bold xl:my-12 xl:text-xl">订单融资解决供应商在到货后的资金周转需求</h3>
              <span class="text-sm xl:text-base">订单融资产品的特点是银行根据与供应商的商流，无需核心企业确权的情况下，给供应商授信，核心企业无需兜底责任，并且供应商前置获取资金。 解决了供应商到货后到核心企业结算前时间周期的资金周转问题</span>
            </div>
            <div class="order-goods-2 pt-12 px-10 xl:pt-16">
              <div class="w-14 h-14 flex justify-center items-center">
                <img class="w-9 object-cover" src="@/assets/images/order-icon-11.png" alt="">
              </div>
              <h3 class="my-8 text-base font-bold xl:my-12 xl:text-xl">以供应商为直接授信主体定价具有优势</h3>
              <span class="text-sm xl:text-base">相较于反向保理占核心企业的授信 ， 面临核心企业众多合作授信银行的价格竞争 ， 订单融资在议价权上有一定的定价优势</span>
            </div>
            <div class="order-goods-3 pt-12 px-10 xl:pt-16">
              <div class="w-14 h-14 flex justify-center items-center">
                <img class="w-9 object-cover" src="@/assets/images/order-icon-12.png" alt="">
              </div>
              <h3 class="my-8 text-base font-bold xl:my-12 xl:text-xl">供应商均为核心企业的优质合作伙伴 ，建立长期合作关系</h3>
              <span class="text-sm xl:text-base">订单融资开展供应商为经筛选的核心企业长期供货合作伙伴 ， 能够为银行建立与供应商、 核心企业长期稳定的合作关系</span>
            </div>
          </div>
        </div>

        <!-- 产品介绍 -->
        <div id="product" class="pt-20 text-center relative">
          <h1>产品介绍</h1>
          <p class="mb-8">Product Introduction</p>
          <div class="product-index relative">
            <div class="flex justify-start items-center absolute top-1/2 left-40 -translate-y-1/2">
              <div class="w-16 h-16 mr-4 rounded-3xl xl:w-24 xl:h-24">
                <img class="w-full object-cover" src="@/assets/images/rlb.png" alt="">
              </div>
              <div class="flex flex-col items-start text-white">
                <h2 class="text-2xl font-bold xl:text-3xl">融链宝</h2>
                <span class="text-base xl:text-xl">界面友好&nbsp;&nbsp;&nbsp;&nbsp;操作便捷全&nbsp;&nbsp;&nbsp;&nbsp;程线上化&nbsp;&nbsp;&nbsp;&nbsp;无纸化</span>
              </div>
            </div>
            <div class="absolute -bottom-14 right-20 w-88 xl:w-128">
              <img class="object-cover" src="https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/product-img-1.png" alt="">
            </div>
          </div>
          <div class="px10 mt-20">
            <p class="text-left text-6xl font-bold xl:text-7xl" style="color: #F2F2F2;">HOME</p>
          </div>
          <div class="mt-8 grid grid-cols-4 gap-4 2xl:gap-6 px10">
            <div
              v-for="(item, index) in ProductIntroductions" :key="index"
              @click="handleClickProduct(index)"
              class="order-features flex flex-col justify-center items-center py-6"
              :class="{'orderActive': productIdx === index}">
              <div class="o-icon w-12 h-12 mb-3">
                <img class="w-5 object-cover" :src="item.icon" alt="">
              </div>
              <span class="text-center text-sm xl:text-base">{{ item.title }}</span>
            </div>
          </div>
          <div class="absolute bottom-72 right-0 w-88 xl:bottom-80 xl:w-112">
            <img class="object-cover" src="https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/product-img-2.png" alt="">
          </div>
          <div class="px10 mt-28 xl:mt-32">
            <p class="text-left text-5xl font-bold xl:text-7xl" style="color: #F2F2F2;">PROJECT</p>
            <div class="grid gap-6 grid-cols-3 mt-12 w-112 xl:w-152">
              <div
                class="flex items-center"
                v-for="(item, index) in ProjectList" :key="index">
                <div class="w-3 h-3 mr-4 bg-primary" />
                <span class="text-base xl:text-xl" style="color: #555555;">{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-10 left-24 w-88 xl:left-32 xl:w-112">
            <img class="object-cover" src="https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/product-img-3.png" alt="">
          </div>
          <div class="flex flex-col items-end px10 mt-40 xl:mt-60">
            <p class="text-left text-5xl font-bold xl:text-7xl" style="color: #F2F2F2;">ORDER FORM</p>
            <div class="grid gap-6 grid-cols-3 mt-12 w-112 xl:w-128">
              <div
                class="flex items-center"
                v-for="(item, index) in OrderFormList" :key="index">
                <div class="w-3 h-3 mr-4 bg-primary" />
                <span class="text-base xl:text-xl" style="color: #555555;">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 公司概况 -->
        <div id="company" class="pt-20 text-center">
          <h1>公司概况</h1>
          <p class="mb-8">Company Overview</p>
          <div class="company-overview flex flex-col justify-center items-center text-white bg-blue-500">
            <div class="text-6xl">
              <img
              class="h-24 object-cover"
              src="@/assets/images/logo-name.png" alt="">
            </div>
            <span class="mb-4 text-sm">科技构建供应链新生态</span>
            <span class="text-lg">上海链刻优科技有限公司 ，  由行业内具有资深金融背景的高级管理人员发起，拥有多年在电商SaaS，AI智能</span>
            <span class="text-lg">技术、供应链金融科技SaaS等领域的丰富经验。</span>
            <div class="mt-20 flex items-center">
              <img
              class="h-12 mr-4 object-cover"
              src="@/assets/images/rlb.png" alt="">
              <span class="text-2xl font-bold">融链宝</span>
            </div>
            <span class="mt-8 text-lg">融链宝致力于通过科技和创新来重新定义和改造供应链金融 ，成为全球领先的供应链金融科技解决方案提供商。</span>
            <span class="text-lg">聚焦于ABCD（人工智能、 区块链、 云计算、 大数据） 等先进技术在供应链生态的应用 ， </span>
            <span class="text-lg">以线上化、 场景化、数据化的方式提供创新供应链金融科技解决方案。</span>
            <span class="text-lg">融链宝的云原生解决方案，可优化供应链金融的支付周期、实现供应链金融全流程的数字化 ， </span>
            <span class="text-lg">提升整个供应链金融生态系统的透明度和连通性。</span>
          </div>
        </div>

        <!-- 联系我们 -->
        <div id="contact" class="py-20 text-center">
          <h1>联系我们</h1>
          <p class="mb-8">Contact US</p>
          <div class="flex justify-center items-center mt-12">
            <div class="w-24 h-24 rounded-3xl flex justify-center items-end" style="background: #e7f5fe;">
              <img class="object-cover h-20" src="@/assets/images/contact-logo.png" alt="">
            </div>
            <div class="flex flex-col items-start ml-6">
              <div class="flex justify-center items-center">
                <div class="w-5 mr-2">
                  <img class="w-full object-cover"src="@/assets/images/contact-phone.jpg" alt="">
                </div>
                <span class="text-lg text-gray-500">400-1234-5678</span>
              </div>
              <div class="flex justify-center items-center mt-6">
                <div class="w-5 mr-2">
                  <img class="w-full object-cover"src="@/assets/images/contact-email.jpg" alt="">
                </div>
                <span class="text-lg text-gray-500">xux@linkyou.vip</span>
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
import OrderIcon1 from '@/assets/images/order-icon-1.png'
import OrderIcon2 from '@/assets/images/order-icon-2.png'
import OrderIcon3 from '@/assets/images/order-icon-3.png'
import OrderIcon4 from '@/assets/images/order-icon-4.png'
import OrderIcon5 from '@/assets/images/order-icon-5.png'
import OrderIcon6 from '@/assets/images/order-icon-6.png'
import OrderIcon7 from '@/assets/images/order-icon-7.png'
import OrderIcon8 from '@/assets/images/order-icon-8.png'
import OrderIcon9 from '@/assets/images/order-icon-9.png'

import ProductIcon1 from '@/assets/images/product-icon-1.jpg'
import ProductIcon2 from '@/assets/images/product-icon-2.png'
import ProductIcon3 from '@/assets/images/product-icon-3.png'
import ProductIcon4 from '@/assets/images/product-icon-4.png'
import ProductIcon5 from '@/assets/images/product-icon-5.png'
import ProductIcon6 from '@/assets/images/product-icon-6.png'
import ProductIcon7 from '@/assets/images/product-icon-7.png'
import ProductIcon8 from '@/assets/images/product-icon-8.png'

const OrderFeatures = [
  { icon: OrderIcon1, title: '根据订单进行放款' },
  { icon: OrderIcon2, title: '核心企业无需托底' },
  { icon: OrderIcon3, title: '不占用企业信用额' },
  { icon: OrderIcon4, title: '按实际发生天数计息' },
  { icon: OrderIcon5, title: '无任何其他隐性收费' },
  { icon: OrderIcon6, title: '资金来自银行更加稳定' },
  { icon: OrderIcon7, title: '根据真实合同即可放款' },
  { icon: OrderIcon8, title: '比传统的融资效率高' },
  { icon: OrderIcon9, title: '整体的融资成本在6-8%之间' }
]

const ProductIntroductions = [
  { icon: ProductIcon1, title: '订单管理' },
  { icon: ProductIcon2, title: '供应商管理' },
  { icon: ProductIcon3, title: '收款统计' },
  { icon: ProductIcon4, title: '项目管理' },
  { icon: ProductIcon5, title: '核心企业' },
  { icon: ProductIcon6, title: '银行管理' },
  { icon: ProductIcon7, title: '权限管理' },
  { icon: ProductIcon8, title: '系统管理' }
]

const ProjectList = [
  '项目列表', '项目状态', '新建项目', '操作日志', '项目详情', '相关材料'
]

const OrderFormList = [
  '订单信息', '核心企业签收', '订单附件材料', '物流信息', '银行审批', '新建订单', '到货信息', '回款账户'
]

const currentId = ref(0)
const currentOrderIdx = ref(0)
const productIdx = ref(0)

const jumpTo = (index) => {
  currentId.value = index
  const id = ['home', 'order', 'product', 'company', 'contact'][index]
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
}

const toRLBProject = () => {
  window.open('https://www.ronglianbao.cn/')
}

const handleClickOrder = (index) => {
  currentOrderIdx.value = index
}

const handleClickProduct = (index) => {
  productIdx.value = index
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
      cursor: pointer;
    }
    .orderActive {
      background-color: #8eb4f2;
      color: #ffffff;
    }

    .order-goods-1 {
      background-image: url('https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/order-bg-1.jpg');
    }
    .order-goods-2 {
      background-image: url('https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/order-bg-2.jpg');
    }
    .order-goods-3 {
      background-image: url('https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/order-bg-3.jpg');
    }
    .order-goods-1, .order-goods-2, .order-goods-3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 420px;
      // padding: 40px 50px 0;
      color: #ffffff;
      @media (min-width: 1920px) {
        height: 520px;
      }
      @media (min-width: 1280px) {
        height: 480px;
      }
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }


    .product-index {
      height: 400px;
      background-image: url('https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/product-bg-1.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .company-overview {
      height: 680px;
      background-image: url('https://rlb-prod.oss-cn-hangzhou.aliyuncs.com/prod/static/officialWebsite/img/company-bg-1.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
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