<template>
    <div class="container">
      <div class="banner">
        <img src="../assets/banner1.png" alt="">
      </div>
      <div class="tese">
          <div class="tese1">
              幼儿园音乐素养课程
          </div>
          <div class="tese2">
            小学音乐素养课程
          </div>
          <div class="tese3">
              儿童专业课程
          </div>
      </div>
      <div class="yunjiaoxue">
        <img src="../assets/yunjiaoxue.png" alt="">
      </div>
      <div class="mubiao">
          <img src="../assets/mubiao.png" alt="">
      </div>
    </div>
</template>


<style scoped>
.banner,.yunjiaoxue, .mubiao {
  width: 100%;
  min-width: 1000px;
  text-align: center;
}
.yunjiaoxue {
    padding: 30px 0 45px;
    background: #20d5c4;
}
.banner img, .yunjiaoxue img, .mubiao img {
  max-width: 100%;
}

.mubiao {
    margin-top: 45px;
}

.tese {
    width: 1000px;
    margin: 25px auto 70px;
    overflow: hidden;
}
.tese div {
    float: left;
    width: 300px;
    height: 90px;
    line-height: 90px;
    margin-right: 49px;
    color: #fff;
    text-align: center;
}
.tese .tese1 {
    background: #fc6d72;
}
.tese .tese2 {
    background: #fec207;
}
.tese .tese3 {
    margin-right: 0;
    background: #20d5c4;
}
</style>