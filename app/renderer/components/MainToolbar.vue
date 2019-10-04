<template>
    <div>
        <md-toolbar>
                <h3 class="md-title" style="flex: 1; -webkit-app-region: drag; height: 100%">Club Werket</h3>
                 <CloseIcon id="CloseIcon" @click="close"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    :class="{ active: hover }"
                    >
                </CloseIcon>
        </md-toolbar>
    </div>
</template>

<script>

import CloseIcon from 'vue-material-design-icons/Close.vue';

const remote = require('electron').remote

export default {
    data(){
        return {
                w: remote.getCurrentWindow(),
                hover: false,
            }
        },
    components: {
        CloseIcon,
    },
    methods: {
            close: function(event) {
                this.w.close()
            }
        },
    }
</script>
<style scoped>

.active {
  background: #e4e7ed;
  -webkit-app-region: no-drag;
}

</style>