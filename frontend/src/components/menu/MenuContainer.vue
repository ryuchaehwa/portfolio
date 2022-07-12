<template>
  <div>
    <div style="height: 200px; width: 100%; background-color: #404040">
      <div style="padding-top: 45px">
        <div
          style="font-size: 50px; font-weight: bold; color: rgb(243, 156, 18)"
        >
          CHAEHWA RYU
        </div>
        <div
          style="
            background-color: rgb(243, 156, 18);
            width: 350px;
            text-align: center;
            height: 25px;
            line-height: 25px;
          "
        >
          자바스크립트 풀스택 개발자
        </div>
      </div>
    </div>
    <div style="display: flex">
      <div style="height: 100px; width: 80%; background-color: #404040">
        <div
          style="
            display: flex;
            line-height: 100px;
            font-size: 30px;
            text-align: center;
            font-weight: bold;
            color: rgb(127, 127, 127);
          "
        >
          <div style="color: rgb(243, 156, 18)" @click="changeRoute('/')">
            ABOUT
          </div>
          <div
            style="margin: 0px 50px 0 50px"
            @click="changeRoute('/portfolio')"
          >
            PORTFOLIO
          </div>
          <div style="margin-right: 50px" @click="changeRoute('/contact')">
            CONTACT
          </div>
          <div @click="changeRoute('/git')">GIT</div>
        </div>
      </div>
      <!-- border-radius: 0 0px 50px 0px; -->
      <div
        style="
          height: 100px;
          width: 100px;
          background-color: rgb(243, 156, 18);
          border-radius: 50%;
          position: absolute;
          margin-left: calc(80% - 50px);
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuContainer",
  methods: {
    changeRoute(path) {
      if (path === "/git") {
        window.open("https://github.com/ryuchaehwa");
      } else {
        this.$router.push(path);
      }
    },
  },
};
</script>
