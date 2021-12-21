<!--
 * @Description: Monaco Editor组件
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-17 11:22:38
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-21 09:53:10
-->
<template>
 <div class="editor">
    <div id="monaco"></div>
 </div>
</template>

<script>
import { format } from 'sql-formatter';
import Editor from '../utils/MEditor'
/**
 * @description: 基于Monaco Editor 组件
 * @param {Array|Object} completList 自动补全数组 自定义提示内容 当为Object时params:{[keyWords]:{values:Array,key:sring}},keyWords为触发关键字
 * @param {Boolean} readOnly 是否为只读 default:false
 * @param {Boolean} closeMineMap 是否关闭右侧小地图 default:false
 * @param {Boolean} mouseWheelZoom 是否开启缩放 default:false
 * @param {Boolean} dragAndDrop 是否开启拖拽 default:false
 * @param {String} defaultCode 默认展示代码 default:''
 * @param {String} oldCode 默认旧代码展示 default:'' ---如果存在则会创建diff编辑器
 * @param {String} language 代码语言类型 default:'sql' 
 * 
 * @function: updateOptions() 修改编辑器配置
 * @function: updateOriginalOptions() 修改旧代码编辑器配置--适用于diff编辑器
 * @function: updateModifiedOptions() 修改新代码编辑器配置--适用于diff编辑器
 * @function: setOriginalValue() 修改旧代码编辑器配置的值--适用于diff编辑器
 * @function: formatSql() 编辑器的内容格式化（sql）
 * @function: getValue() 获取当前编辑器的内容
 * @function: setValue(Value:string) 设置当前编辑器的内容
 * @function: destroyEditor() 销毁当前编辑器
 * @function: change() 监听变化
 * @return {*}
 * @function: 这是一个方法函数
 * @author: Chen
 */
export default {
  name: 'hk-monaco-editor',
  props:{
    completList:{
      type:Array | Object,
      default:()=>null
    },
    readOnly:{
      type:Boolean,
      default:false
    },
    closeMineMap:{
      type:Boolean,
      default:false
    },
    mouseWheelZoom:{
      type:Boolean,
      default:false
    },
    dragAndDrop:{
      type:Boolean,
      default:false
    },
    defaultCode:{
      type:String,
      default:''
    },
    oldCode:{
      type:String,
      default:''
    },
    language:{
      type:String,
      default:'sql'
    }
  },
  data () {
    return {
      editor:{}
    }
  },
  created() {
   
  },
  mounted(){
    const { completList,readOnly,closeMineMap,mouseWheelZoom,dragAndDrop,oldCode,defaultCode,language }=this;
    const editor=new Editor();
    !!!oldCode ? 
    editor.createEditor('monaco',defaultCode,language)
    :editor.createDiffEditor('monaco',oldCode,defaultCode,language);
    editor.openCompletTip(completList);
    editor.updateOptions({
      readOnly,
      minimap:{
        enabled:!closeMineMap
      },
      mouseWheelZoom,
      dragAndDrop
    })
    this.editor=editor;
    this.change();
  },
  methods:{
    updateOptions(options){
      this.editor.updateOptions(options);
    },
    updateOriginalOptions(options){
      this.editor.updateOriginalOptions(options);
    },
    updateModifiedOptions(options){
      this.editor.updateModifiedOptions(options);
    },
    formatSql(){
      let value=this.editor.getValue();
      if(!this.oldCode){
        this.setValue(format(value))
      }else{
        this.setOriginalValue(format(value[0]));
        this.setValue(format(value[1]))
      }
    },
    getValue(){
      return this.editor.getValue();
    },
    setValue(val){
      this.editor.setValue(String(val));
    },
    setOriginalValue(val){
      this.editor.setOriginalValue(String(val));
    },
    destroyEditor(){
      this.editor.destroyEditor();
    },
    change() {
      this.editor.listenEditor(val=>{
        this.$emit('change',val)
      })
    }
  }
}
</script>

<style scoped>
 #monaco{
    width: 100%;
    height: 200px;
 }
</style>
