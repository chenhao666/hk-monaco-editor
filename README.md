<!--
 * @Description: hk-monaco-editor
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-17 11:09:44
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-17 15:19:55
-->
# main.js全局安装
import hkMonacoEditor from 'hk-monaco-editor'  
Vue.use(hkMonacoEditor)

## Install
1.npm安装：npm install hk-monaco-editor --save  

2.yarn安装：yarn add hk-monaco-editor

3.引用 hk-monaco-editor.js

## Quick Start

<hk-monaco-editor :completList="completList" ref="monaco" @change="changeContent" readOnly></hk-monaco-editor>

* @description: 基于Monaco Editor 组件

 * @param {*} completList 自动补全数组 自定义提示内容 当为Object时params:{[keyWords]:{values:Array,key:sring}},keyWords为触发关键字

 * @param {*} readOnly 是否为只读 default:false

 * @param {*} closeMineMap 是否关闭右侧小地图 default:false

 * @param {*} mouseWheelZoom 是否开启缩放 default:false

 * @param {*} dragAndDrop 是否开启拖拽 default:false

 * @function: formatSql() sql编辑器的内容格式化（sql） this.$refs.formatSql()

 * @function: getValue() 获取当前编辑器的内容 this.$refs.getValue()

 * @function: setValue(Value:string) 设置当前编辑器的内容 this.$refs.setValue('SELECT * FROM USER')

 * @function: destroyEditor() 销毁当前编辑器 this.$refs.destroyEditor()

 * @function: change(val:string) 监听变化 @change="changeContent"

## main.js全局安装
import hkMonacoEditor from 'hk-monaco-editor' 

Vue.use(hkMonacoEditor)
