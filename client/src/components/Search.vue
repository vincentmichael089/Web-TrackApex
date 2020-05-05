<template>
  <section class="search">
      <h1>Track Player Here</h1>
      <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">PlayStation</option>
                    <option value="xbl">XBOX</option>
                    <option value="Origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" id="gamertag" name="text" placeholder="Input Gamertag Here" v-model="gamertag">
            </div>
            <div class="form-group">
                <input type="submit" value="Submit" class="btn">
            </div>
      </form>
  </section>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return{
            platform : 'psn',
            gamertag : ''
        }
    },
    methods:{
        onSubmit(){
            if(!this.gamertag){
                this.$toasted.show("Please enter gamertag", {
                    duration : 3000
                })
            }else{
                this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
            }
        }
    },
    beforeCreate(){
        document.body.className="body-bg-image"
    }
}
</script>

<style scoped>

</style>