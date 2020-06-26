<template>
  <div class="footer">
    <h3>info@code.sydney</h3>
    <a
      v-for="media in medias"
      :key="`${media.title}`"
      :href="`${media.linkUrl}`"
      class="footer-link"
      target="_blank"
    >{{media.title}}</a>
    <h3>Code.Sydney Pty Ltd &copy; ABN 37 625 436 151</h3>
    <h3>Privacy Policy</h3>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  },
  data() {
    return {
      medias: [
        {
          title: "Meetup",
          linkUrl: "https://www.meetup.com/Sydney-Volunteer-Programmers/",
          icon: ""
        },
        {
          title: "Slack",
          linkUrl: "https://app.slack.com/client/T9438ULJ3",
          icon: ""
        },
        {
          title: "LinkedIn",
          linkUrl: "https://www.linkedin.com/company/code.sydney/",
          icon: ""
        },
        {
          title: "Instagram",
          linkUrl: "https://www.instagram.com/code.sydney/",
          icon: ""
        },
        {
          title: "Facebook",
          linkUrl: "https://www.facebook.com/codesyd/",
          icon: ""
        },
        {
          title: "Github",
          linkUrl: "https://github.com/codesydney",
          icon: ""
        },
        {
          title: "Youtube",
          linkUrl: "https://www.youtube.com/channel/UCnOp_l8-EX3c-q2Tlj-2Iyw",
          icon: ""
        },
        {
          title: "Freecodecamp",
          linkUrl: "http://freecodecampsydney.org/",
          icon: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: rgb(8, 90, 125);
  color: white;
  padding: 10px;
  text-align: right;
  padding-right: 10vw;
}
.footer-link {
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: color 1s ease, font-size 1s ease;
}
.footer-link:hover {
  color: tomato;
  font-size: 2rem;
}
</style>
