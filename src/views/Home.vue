<template>
  <div class='home container'>
    <div class='columns'>
      <div class='column'>
        <h1>Blo<br>No<br>Devs</h1>
        <h2>The Bloomington-Normal <br>Software Development Community</h2>
      </div>
      <div class='column'>
        <h3>
          Come to a
          <a href="https://meetup.com/blonodevs" target="_blank">
            <MeetupLogo />
          </a>
        </h3>
        <h3>Join us on Slack</h3>
        <SlackRequest></SlackRequest>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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

  .meetup-logo-component {
    display: inline-block;

    svg {
      height: 50px;
      margin-bottom: -15px;
      padding-left: 10px;
      width: auto;
    }
  }
</style>

<script lang='ts'>
import Vue from 'vue';
import MeetupLogo from '../components/MeetupLogo.vue';
import SlackRequest from '../components/SlackRequest.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    SlackRequest,
    MeetupLogo
  }
});
</script>
