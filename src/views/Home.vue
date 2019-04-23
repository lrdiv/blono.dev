<template>
  <div class='home container'>
    <div class='columns'>
      <div class='column'>
        <h1>Blo<br>No<br>Devs</h1>
        <h2>The Bloomington-Normal<br> Software Development Community</h2>
      </div>
      <div class='column'>
        <h3>Come to a <a href="https://meetup.com/blonodevs" target="_blank"><MeetupLogo /></a></h3>
        <h3>Join us on Slack</h3>
        <SlackRequest />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    font-family: 'Poppins', Helvetia, Arial, sans-serif;
    margin-top: 48px;
  }

  h1 {
    font-size: 128px;
    line-height: 0.9;
    text-transform: uppercase;
  }

  h3 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  svg {
    height: 50px;
    margin-bottom: -15px;
    padding-left: 10px;
    width: auto;
  }
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import MeetupLogo from '../components/MeetupLogo.vue';
import SlackRequest from '../components/SlackRequest.vue';

@Component({
  components: {
    SlackRequest,
    MeetupLogo
  }
})
export default class Home extends Vue {}
</script>
