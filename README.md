#

# install

`npm install commonjs-set --save`

# npm

`https://www.npmjs.com/package/commonjs-set`

# github

# usage

**main.js**

```
import common from 'commonjs-set';
Vue.prototype.$common = common  // 注册为全局变量
```

**xxxx.vue 文件**

- 判断手机号格式 true 表示正确的手机号，false 表示错误的手机号

`this.$common.isTelFunc('手机号码')`

- file 转 base64

`this.$common.fileToBase64(file对象)`

- 时间戳转年月日时分秒 file 转 base64

vue 中使用方法如下

```
<template slot="timeTransform" slot-scope="text, record">
    <span>{{ record.changeTime | formatDate }}</span>
</template>
```

```
 filters: {
    formatDate(time) {
      let date = new Date(time);
      console.log(new Date(time));
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
```
