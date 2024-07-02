<template>
  <div class="container">
<div class="row">
 <img src= "https://thuthuzaposwayo.github.io/All-images/images/Me.jpeg" alt="logo" class="img-fluid w-75 shadow rounded-top" loading="lazy">
</div>
<div class="col">
    <div id="details">
        <h1 class="display-1">Thuthuza Poswayo</h1>
        <p v-if="title"> I am a 
            <span>{{title}}</span>
        </p>
<Spinner v-else />
    </div>
</div>
  </div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted, ref} from 'vue'
import  { useStore } from 'vuex'
const store =  useStore()
const jobTitle = computed(() => store.state.jobTitle)
const title = ref('Front-End Wed Developer')
const cnt = ref(-1)

function repeat() {
    try{
        if(cnt.value == jobTitle.value?.length) cnt.value = 0;
        title.value = jobTitle.value?.at(cnt.value)?.titel;
        setTimeout(repeat, 2000)
        cnt.value++
    } catch(e) {
        //
    }
}
onMounted(() => {
store.dispatch('fetchJobTitle')
repeat()
})



</script>

<style scoped>

</style>