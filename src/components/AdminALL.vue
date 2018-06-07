<template>
  <div>
    <div v-for="example of examples" :key="example.id" @click="goToAdmin(example.id)">
      <span>{{example.id}}</span>--<span>{{example.title}}</span>--<span>{{example.image}}</span>
    </div>
  </div>
</template>

<script>
  import * as API from '@/newwork/api';
  export default {
    data() {
      return {
        examples: []
      }
    },
    mounted() {
      this.init()
    },
    computed: {},
    methods: {
      init() {
        const self = this;
        this.$http.get(API.exampleAPI.findAll)
          .then(res => {
            const data = res.data;
            if (data && data.success) {
              this.examples = data.ret;
            } else {
              this.$message({
                message: data.retDsc,
                type: 'error',
                duration: 1500,
              });
            }
          })
          .catch(e => {
            console.log('查询example错误', e)
          })
      },
      goToAdmin(id) {
        this.$router.push(`/admin/${id}`)
      },
    },
    components: {}
  }
</script>

<style>

</style>
