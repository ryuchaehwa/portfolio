<template>
  <div>
    <div style="width: 300px;">
      test
      <!-- {{ titleName }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioTitleFrame",
  props: {
    titleName: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
