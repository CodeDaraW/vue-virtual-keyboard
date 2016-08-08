# Vue Virtual Keyboard | [中文文档](/README.md)
A virtual keyboard component for `Vue.js`。  

[![Build Status](https://travis-ci.org/CodeDaraW/vue-virtual-keyboard.svg?branch=master)](https://travis-ci.org/CodeDaraW/vue-virtual-keyboard) [![codecov](https://codecov.io/gh/CodeDaraW/vue-virtual-keyboard/branch/master/graph/badge.svg)](https://codecov.io/gh/CodeDaraW/vue-virtual-keyboard)


## Demo
[Online Demo](http://vue-virtual-keyboard.daraw.cn/)

![](https://ooo.0o0.ooo/2016/08/08/57a8975f2d6b0.png
)


## Installation

```bash
npm install https://github.com/CodeDaraW/vue-virtual-keyboard.git
```

## Usage

### ES6
```Vue
<style>
    #app {
        width: 680px;
        margin: 20px auto;
        font-family: Verdana, Sans-Serif;


    }
    h1 {
        color: #42b983;
        font-weight: bold;

    }

    textarea {
        display: block;
        width: 100%;
        min-height: 100px;
        padding: 0;
        margin: 20px 0;
        font-size: 16px;
    }
</style>
<template>
    <div id="app">
        <h1>Just Enter Text:</h3>
        <textarea type="text" v-model="keyboardText"></textarea>
        <keyboard :keyboard-text.sync="keyboardText"></keyboard>
    </div>
</template>

<script>
import Keyboard from 'vue-virtual-keyboard/src/components/Keyboard'

export default {
    data() {
        return {
            keyboardText: ""
        }
    },

    components: {
        Keyboard
    }
}
</script>
```

### CommonJS

```JavsScript
var Keyboard = require('vue-virtual-keyboard/src/components/Keyboard');
```

## Build Setup

``` bash
 # install dependencies
 npm install

 # serve with hot reload at localhost:8080
 npm run dev

 # build for production with minification
 npm run build

 # run unit tests
 npm run unit

 # run e2e tests
 npm run e2e

 # run all tests
 npm test
 ```

## License
[The MIT License](http://opensource.org/licenses/MIT)
