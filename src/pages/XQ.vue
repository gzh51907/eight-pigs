<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      coll: "",
      tage: ""
    };
  },
  created() {
    let { id, coll, tage } = this.$route.params;
    this.id = id;
    this.coll = coll;
    this.tage = tage;
    this.getdata(id, coll, tage);
  },
  methods: {
    async getdata(id, coll, tage) {
      let { data } = await this.$axios.get("http://localhost:1907/goods/xq/", {
        params: {
          id: this.id,
          coll: this.coll,
          tage: this.tage
        }
      });
      window.console.log(data.data);
    }
  }
};
</script>