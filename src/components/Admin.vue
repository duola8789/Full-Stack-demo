<template>
  <div>
    <p>{{exampleInfo.id}}</p>
    <p>{{exampleInfo.title}}</p>
    <p>{{exampleInfo.image}}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import * as API from '@/newwork/api';
  import * as uiHelper from '@/helper/uiHelper';

  export default {
    data() {
      return {
        exampleInfo: {
          id: '',
          title: '',
          image: '',
        }
      }
    },
    mounted() {
      this.init();
    },
    beforeRouteUpdate(to, from, next) {
      this.init(to.params.id)
    },
    computed: {},
    methods: {
      init(id = this.$route.params.id) {
        const self = this;
        this.$http.get(`${API.exampleAPI.find}/${id}/`)
          .then(res => {
            const data = res.data;
            if (data && data.success) {
              this.exampleInfo = {
                ...data.ret
              }
            } else {
              uiHelper.showMessage(data.retDsc, 'error', 1500, self.goBack)
            }
          })
          .catch(e => {
            console.log('查询example错误', e)
          })
      },
      goBack() {
        this.$router.push('/admin/')
      },
      add() {
        const exampleInfo = {
          title: new Date().toLocaleDateString(),
          image: new Date().toLocaleTimeString()
        };
        this.$http.post(API.exampleAPI.add, exampleInfo)
          .then(res => {
            const data = res.data;
            if (data && data.success) {
              uiHelper.showMessage(data.retDsc, 'success', 1000);
            } else {
              uiHelper.showMessage(data.retDsc, 'error', 1500);
            }
          })
          .catch(e => {
            console.log('查询example错误', e)
          })
      }
    },
    components: {}
  }
</script>

<style>

</style>
