<template>
  <div class="awards">
    <Banner :content="banner.content" />
    <div class="awards__block">
      <figure v-for="award in awards" :key="award.id">
        <img class="awards__block-img" :src="award.imageUrl" :alt="`pic#`+ award.id" />
        <figcaption class="awards__block-description">{{award.description}}</figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/Banner/Banner";
export default {
  data() {
    return {
      banner: {
        content: `Awards and Events`
      },
      awards: [
        {
          id: "1",
          imageUrl: "https://www.code.sydney/static/img/pythonteam.jpg",
          description:
            "With Matthew Kean, Minister for Innovation and Better Regulation during the presentation of our 1st place award at Vibewire's Hack4FI (Financial Inclusion)."
        },
        {
          id: "2",
          imageUrl: "https://www.code.sydney/static/img/3rdh4h.jpg",
          description:
            "Code.Sydney's winning team at Vibewire's Hack4Homelessness. We bagged the 3rd spot."
        },
        {
          id: "3",
          imageUrl: "https://www.code.sydney/static/img/hack4dv.jpg",
          description:
            "Code.Sydney's contingent at Vibewire's Hack4DV (Domestic Violence)."
        },
        {
          id: "4",
          imageUrl: "https://www.code.sydney/static/img/team_zoned.jpg",
          description:
            "During Covid-19 lockdown around April 2020, Code.Sydney joined an online hackathon organised by StayHomeHack. As volunteer programmers, we thought we have an obligation to share our thoughts on what was happening at the time."
        },
        {
          id: "5",
          imageUrl: "https://www.code.sydney/static/img/fccteam.jpg",
          description:
            "With Quincy Larson, founder of Free Code Camp during his visit to Melbourne."
        },
        {
          id: "6",
          imageUrl: "https://www.code.sydney/static/img/xmas2018.png",
          description: "End of year mentors lunch 2018"
        },
        {
          id: "7",
          imageUrl: "https://www.code.sydney/static/img/actura.jpg",
          description: "Actura's OneWorld Robotics Competition"
        },
        {
          id: "8",
          imageUrl: "https://www.code.sydney/static/img/xmas2019.png",
          description: "End of year mentors lunch 2019"
        }
      ]
    };
  },
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
.awards {
  margin-top: 15vh;
  grid-column: full-start / full-end;
  &__block {
    display: grid;
    margin: 0 10vw;
    grid-template-columns: 1fr 1fr 1fr;
    &-img {
      width: 300px;
    }
    &-description {
      display: inline-block;
      width: 300px;
      text-align: justify;

      font-weight: bold;
    }
  }
}
</style>
