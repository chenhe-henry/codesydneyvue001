<template>
  <div class="ourservice">
    <h1 class="ourservice-title">{{title}}</h1>
    <div class="ourservice-list">
      <div v-for="service in services" :key="`${service.title}`" role="service">
        <BaseCard>
          <img slot="img" :src="`${service.linkUrl}`" :alt="`${service.title}`" />
          <h2 slot="title">{{service.title}}</h2>
          <h4 slot="content" class="ourservice-content">{{service.content}}</h4>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurService",
  props: {
    msg: String,
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      services: [
        {
          title: "Pay-as-you-feel Development",
          linkUrl: "https://www.code.sydney/static/img/001-responsive.png",
          content:
            "We help individuals, startups and established organisations alike in building bespoke applications for their work or business. It can be as simple as brochure websites or as complex as business process workflow applications. We offer pay-you-feel model to help beginners gain real-world paid experience."
        },
        {
          title: "Address Validation",
          linkUrl: "https://www.code.sydney/static/img/002-checklist.png",
          content:
            "We use Mastersoft Group's Harmony software to help customers in Australia and New Zealand cleanse and deduplicate address data as part of their customer information data quality initiative in the organisation."
        },
        {
          title: "Free Consultation",
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
  grid-column: center-start / center-end;
  margin: 0 10vw;
}
.ourservice-title {
  display: inline-block;
  font-size: 3rem;
}
.ourservice-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.ourservice-content {
  text-align: justify;
}
.ourservice-content::first-letter {
  font-size: 2rem;
  color: rgba(245, 36, 12, 0.817);
}
</style>