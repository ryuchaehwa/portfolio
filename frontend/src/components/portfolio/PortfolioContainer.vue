<template>
  <div
    style="
      background-color: lightpink;
      width: 760px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 150px;
    "
  >
    <!-- 1 -->
    <div style="display: flex" @click="changeRoute('/todo')">
      <div
        style="
          background-color: #404040;
          width: 200px;
          height: 50px;
          border-radius: 50px 0 0 50px;
          line-height: 50px;
          color: rgb(243, 156, 18);
          font-weight: bold;
          font-size: 20px;
          text-align: center;
        "
      >
        TODO(CRUD)
      </div>
      <div
        style="
          position: absolute;
          background-color: darkgrey;
          width: 550px;
          height: 1px;
          margin-left: 200px;
          margin-top: 25px;
        "
      >
        <span
          style="
            position: absolute;
            top: -20px;
            color: #404040;
            font-weight: bold;
            margin-left: 5px;
          "
          >기본 CRUD (DB 미연결)</span
        >
        <span></span>
      </div>
      <div
        style="
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #404040;
          margin-left: 740px;
          margin-top: 15px;
          position: absolute;
        "
      ></div>
    </div>

    <!-- 2 -->
    <div style="display: flex; margin-top: 100px">
      <div
        style="
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #404040;
          margin-top: 15px;
          position: absolute;
          z-index: 1;
        "
      ></div>
      <div
        style="
          position: absolute;
          background-color: darkgrey;
          width: 550px;
          height: 1px;
          margin-left: 10px;
          margin-top: 25px;
        "
      ></div>
      <div
        style="
          background-color: #404040;
          width: 200px;
          height: 50px;
          margin-left: 560px;
          border-radius: 0px 50px 50px 0px;
          line-height: 50px;
          color: rgb(243, 156, 18);
          font-weight: bold;
          font-size: 20px;
          text-align: center;
        "
      >
        TODO(CRUD)
      </div>
    </div>

    <!-- 3 -->
    <div style="display: flex; margin-top: 100px">
      <div
        style="
          background-color: #404040;
          width: 200px;
          height: 50px;
          border-radius: 50px 0 0 50px;
          line-height: 50px;
          color: rgb(243, 156, 18);
          font-weight: bold;
          font-size: 20px;
          text-align: center;
        "
      >
        TODO(CRUD)
      </div>
      <div
        style="
          position: absolute;
          background-color: darkgrey;
          width: 550px;
          height: 1px;
          margin-left: 200px;
          margin-top: 25px;
        "
      >
        <span
          style="
            position: absolute;
            top: -20px;
            color: #404040;
            font-weight: bold;
            margin-left: 5px;
          "
          >기본 CRUD (DB 미연결)</span
        >
        <span></span>
      </div>
      <div
        style="
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #404040;
          margin-left: 740px;
          margin-top: 15px;
          position: absolute;
        "
      ></div>
    </div>

    <!-- 4 -->
    <div style="display: flex; margin-top: 100px">
      <div
        style="
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #404040;
          margin-top: 15px;
          position: absolute;
          z-index: 1;
        "
      ></div>
      <div
        style="
          position: absolute;
          background-color: darkgrey;
          width: 550px;
          height: 1px;
          margin-left: 10px;
          margin-top: 25px;
        "
      ></div>
      <div
        style="
          background-color: #404040;
          width: 200px;
          height: 50px;
          margin-left: 560px;
          border-radius: 0px 50px 50px 0px;
          line-height: 50px;
          color: rgb(127, 127, 127);
          font-weight: bold;
          font-size: 20px;
          text-align: center;
        "
      >
        TODO(CRUD)
      </div>
    </div>

    <!-- 5 -->
    <div style="display: flex; margin-top: 100px">
      <div
        style="
          background-color: #404040;
          width: 200px;
          height: 50px;
          border-radius: 50px 0 0 50px;
          line-height: 50px;
          color: rgb(127, 127, 127);
          font-weight: bold;
          font-size: 20px;
          text-align: center;
        "
      >
        TODO(CRUD)
      </div>
      <div
        style="
          position: absolute;
          background-color: darkgrey;
          width: 550px;
          height: 1px;
          margin-left: 200px;
          margin-top: 25px;
        "
      >
        <span
          style="
            position: absolute;
            top: -20px;
            color: #404040;
            font-weight: bold;
            margin-left: 5px;
          "
          >공공 API</span
        >

        <!-- <span style="margin-left: 5px; color: #404040; line-height: 25px">
          test
        </span> -->
        <div style="display: flex">
          <!-- line-height: 25px; -->
          <div
            style="
              background-color: lightblue;
              width: 80px;
              text-align: center;
              border-radius: 40px;
              margin-top: 5px;
              color: #404040;
            "
          >
            #test
          </div>
        </div>
      </div>
      <div
        style="
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #404040;
          margin-left: 740px;
          margin-top: 15px;
          position: absolute;
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioContainer",
  methods: {
    changeRoute(path) {

      console.log('todo', path)
      this.$router.push('/portfolio/todo')
    }
  }
};
</script>
