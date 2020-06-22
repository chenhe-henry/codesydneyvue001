<template>
  <div class="ourservice">
    <div v-for="service in services" :key="`${service.title}`" class="ourservice-item">
      <img :src="`${service.linkUrl}`" :alt="`${service.title}`" />
      <h1>{{service.title}}</h1>
      <h3>{{service.content}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurService",
  props: {
    msg: String
  },
  data() {
    return {
      services: [
        {
          title: "Meetup",
          linkUrl: "https://www.code.sydney/static/img/001-responsive.png",
          content:
            "We help individuals, startups and established organisations alike in building bespoke applications for their work or business. It can be as simple as brochure websites or as complex as business process workflow applications. We offer pay-you-feel model to help beginners gain real-world paid experience."
        },
        {
          title: "Slack",
          linkUrl: "https://www.code.sydney/static/img/002-checklist.png",
          content:
            "We use Mastersoft Group's Harmony software to help customers in Australia and New Zealand cleanse and deduplicate address data as part of their customer information data quality initiative in the organisation."
        },
        {
          title: "LinkedIn",
          linkUrl: "https://www.code.sydney/static/img/003-man.png",
          content: "Have a chat with us to discuss how we can help."
        }
      ]
    };
  }
};
</script>

<style scoped>
.ourservice {
  background-color: white;
  color: black;
  padding: 10px;
  display: flex;
}
.ourservice-item {
  flex-grow: 1;
  width: 33vw;
  padding: 20px;
}
</style>