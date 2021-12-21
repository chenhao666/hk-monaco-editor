<!--
 * @Description: 这是一个描述
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-17 11:09:44
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-21 11:05:16
-->
<template>
  <div id="app">
    <hk-monaco-editor :oldCode="oldCode" :defaultCode="defaultCode" :completList="completList" ref="monaco"></hk-monaco-editor>
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
      oldCode:'',
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
    },
    // changeContent(val){
    //   console.log(val)
    // }
  }
}
</script>

<style>
#app {
  
}
</style>
