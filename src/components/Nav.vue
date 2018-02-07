<template>
  <header>
      <div class="header-cont">
        <nav>
            <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/#/news">新闻资讯</a></li>
                <li><a href="/#/contact">联系我们</a></li>
            </ul>
        </nav>
        <div class="logo"><img src="../assets/logo.png" alt="logo"></div>
      </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding: 12px 0;
  box-shadow: 0 0 6px 2px #20d5c4;
  position: relative;
  z-index: 10;
}
header::before,
header::after {
  content: "";
  display: block;
  clear: both;
}
.header-cont {
  width: 1000px;
  margin: 0 auto;
}
.logo {
  height: 50px;
}
.logo img {
  max-height: 100%;
}
nav {
  float: right;
}
nav ul {
  list-style: none;
}
nav li {
    margin-right: 30px;
  float: left;
  line-height: 50px;
}
nav a {
  text-decoration: none;
  font-size: 16px;
  color: #333;
}
</style>
