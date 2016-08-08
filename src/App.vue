<style lang="scss" scoped>
    #app {
        width: 680px;
        margin: 20px auto;
        font-family: Verdana, Sans-Serif; 

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
import Keyboard from './components/Keyboard'

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