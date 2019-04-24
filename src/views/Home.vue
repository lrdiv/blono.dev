<template>
  <div class='home container'>
    <div class='columns'>
      <div class='column is-one-third'>
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
        <p>We meet at The Coffeehouse &amp; Deli in Uptown Normal on the first Tuesday of every month. To stay updated, join our group on <a href="https://meetup.com/blonodevs" target="_blank">Meetup.com</a></p>
        <hr class='title-split'>
        <h3>
          Join us on
          <SlackLogo />
        </h3>
        <SlackRequest />
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

  hr.title-split {
    margin-bottom: 0;
  }

  svg {
    position: relative;
    width: auto;
  }

  .meetup-logo-component {
    display: inline-block;

    svg {
      height: 50px;
      left: 10px;
      top: 15px;
    }
  }

  .slack-logo-component {
    display: inline-block;

    svg {
      height: 75px;
      left: -10px;
      top: 24px;
    }
  }
</style>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

import MeetupLogo from '../components/MeetupLogo.vue';
import SlackLogo from '../components/SlackLogo.vue';
import SlackRequest from '../components/SlackRequest.vue';

@Component({
  name: 'Home',
  components: {
    MeetupLogo,
    SlackLogo,
    SlackRequest
  }
})
export default class Home extends Vue {}
</script>
