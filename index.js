/*
 * @Description: 入口文件
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-17 11:21:55
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-17 15:11:24
 */
import hkMonacoEditor from './src/components/hk-monaco-editor'
import _Vue from 'vue'

hkMonacoEditor.install = Vue => {
    if (!Vue) {
        window.Vue = Vue = _Vue
    }
    Vue.component(hkMonacoEditor.name, hkMonacoEditor)
}
export default hkMonacoEditor