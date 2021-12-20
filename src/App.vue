<!--
 * @Description: 这是一个描述
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-17 11:09:44
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-20 14:42:17
-->
<template>
  <div id="app">
    <hk-monaco-editor :oldCode="oldCode" :defaultCode="defaultCode" :completList="completList" ref="monaco" @change="changeContent"></hk-monaco-editor>
    <button @click="getData">获取数据</button>
  </div>
</template>

<script>
import hkMonacoEditor from './components/hk-monaco-editor'
export default {
  name: 'app',
  data () {
    return {
      completList:['table1','table2','table3','table4','table5'],
      oldCode:'select * from admin',
      defaultCode:'select * from user'
    }
  },
  components:{
    hkMonacoEditor
  },
  mounted(){
    
  },
  methods:{
    getData(){
      console.log(this.$refs.monaco.getValue());
      this.$refs.monaco.formatSql();
    },
    changeContent(val){
      console.log(val)
    }
  }
}
</script>

<style>
#app {
  
}
</style>
