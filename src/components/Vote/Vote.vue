<template>
  <div>
    <button
      class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab"
    >
      {{ tab }}
    </button>

    <div class="rank-topThree">
      <div></div>
      <div class="rank-topThree-indivual">
        <div>🥇</div>
        <div class="rank-topThree-indivual__text">{{ firstPlace }}</div>
      </div>
      <div class="rank-topThree-indivual">
        <div>🥈</div>
        <div class="rank-topThree-indivual__text">{{ secondPlace }}</div>
      </div>
      <div class="rank-topThree-indivual">
        <div>🥉</div>
        <div class="rank-topThree-indivual__text">{{ thirdPlace }}</div>
      </div>
      <div></div>
    </div>

    <div v-show="selectedTab === `Grid`">
      <div class="Vote-block-grid">
        <div
          v-for="team in teamMembers"
          :key="team.id"
          class="Vote-block-grid-member"
          role="vote"
        >
          <figure class="project__block-grid">
            <router-link
              :to="{
                name: 'project',
                params: {
                  projectName: `${team.memberName}`,
                  description: `${team.description}`,
                  id: `${team.id}`,
                },
              }"
            >
              <img
                :src="team.imageUrl"
                class="project__block-grid__avatar"
                :alt="team.memberName"
                @mouseover="shouldDisplay(team.id)"
                @mouseleave="returnDisplay(team.id)"
              />
            </router-link>
            <figcaption class="project__block-grid__avatar-caption">
              <h2>{{ team.memberName }}</h2>
            </figcaption>
          </figure>
          <details>
            <summary>{{ team.memberName }}</summary>
            <h5 class="member-description">{{ team.description }}</h5>
          </details>
          <h1>
            <BaseIcon name="users"> {{ team.vote }}/{{ totalVotes }}</BaseIcon>
          </h1>
          <button class="Vote-block-grid-button" @click="addToVote(team.id)">
            Like ❤️
          </button>
          <button
            class="Vote-block-grid-button"
            @click="removeFromVote(team.id)"
            :disabled="negative(team.id)"
          >
            Dislike 💔
          </button>
        </div>
      </div>
    </div>
    <div v-show="selectedTab === `List`">
      <div class="Vote-block-list">
        <div
          v-for="team in teamMembers"
          :key="team.id"
          class="Vote-block-list-member"
          role="vote"
        >
          <figure class="project__block-list">
            <router-link
              :to="{
                name: 'project',
                params: {
                  projectName: `${team.memberName}`,
                  description: `${team.description}`,
                  id: `${team.id}`,
                },
              }"
            >
              <img
                :src="team.imageUrl"
                class="project__block-list__avatar"
                :alt="team.memberName"
                @mouseover="shouldDisplay(team.id)"
                @mouseleave="returnDisplay(team.id)"
              />
            </router-link>
            <figcaption class="project__block-list__avatar-caption">
              <h2>{{ team.memberName }}</h2>
            </figcaption>
          </figure>

          <div class="member-description">
            <h5>{{ team.description }}</h5>
          </div>

          <div>
            <h1>
              <BaseIcon name="users">
                {{ team.vote }}/{{ totalVotes }}
              </BaseIcon>
            </h1>

            <button class="Vote-block-list-button" @click="addToVote(team.id)">
              Like ❤️
            </button>
            <button
              class="Vote-block-list-button"
              @click="removeFromVote(team.id)"
              :disabled="negative(team.id)"
            >
              Dislike 💔
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vote",
  props: { totalVotes: Number },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          imageUrl: `https://robohash.org/1?set=set2`,
          memberName: "Engramar Bollas",
          memberTitle: "Director",
          vote: 0,
          description:
            "Engramar's raison d'etre is to serve. A believer of servant leadership. He is passionate in providing service excellence to customers and ensuring people, culture, processes and technology support the same initiative. Engramar has worked in the IT industry for over 24 years. Having worked in Asia, the Middle East and Australia, Engramar has deep expertise in all aspects of software development lifecycle including business requirements analysis, systems design and development, product testing, release management, end-user training, pre-sales and post-implementation support. Engramar is working for GBG (Mastersoft Group) as their Head of Customer Support and Testing team. Engramar is also the current Director of Code.Sydney, an organisation which helps beginner programmers and novice data analysts showcase their newfound skills. Engramar has obtained a degree in Mathematics major in Computer Science from the Pontifical and Royal University of Santo Tomas in Manila.",
        },
        {
          id: 2,
          imageUrl: `https://robohash.org/2?set=set2`,
          memberName: "Tony Johnson",
          memberTitle: "Software Engineer/Systems Administrator",
          vote: 0,
          description:
            "Despite having a Degree in Prehistory and Archaeology, Tony has survived 30 years in various IT careers; from hardware sales and service, support desk, linux systems administration, management, consultancy, and software development. He began coding commercially 8 years ago in Java for Structural Geology project, and moved on to full-stack web development. He has completed the Free Code Camp front-end and back-end curriculum for JavaScript, React/Redux, Node/Express, MongoDB and GraphQL. Tony is an active participant in Free Code Camp Sydney meetups. Currently, he is contracted as Project Manager for McLowd Financial Services Marketplace, a cloud-based software company.",
        },
        {
          id: 3,
          imageUrl: `https://robohash.org/3?set=set2`,
          memberName: "Promie Yutasane",
          memberTitle: "Software Engineer",
          vote: 0,
          description:
            "Promie is currently working as a Software Engineer at Hireup, a tech company with an online platform that connects people with disability with support workers. He has a very strong focus on full stack development and currently using NodeJS, MongoDB, GraphQL/Apollo, React and Vue. He is a part-time student at UNSW studying Masters of IT specialising in Artificial Intelligence and E-Commerce Systems. Promie spends his spare time mentoring new programmers at Code.Sydney. As one of the pioneer mentors, Promie has introduced standardised processes around GitHub code submission among developers. He is also the chief envangelist of Vue JS in Code.Sydney.",
        },
        {
          id: 4,
          imageUrl: `https://robohash.org/4?set=set2`,
          memberName: "Gagan Shrestha",
          memberTitle: "Software Engineer",
          vote: 0,
          description:
            "Gagan is a Software Testing Professional with over 12 years of experience in the testing domain. Gagan's key areas of expertise includes understanding complex business requirements and formulating robust test strategies, developingtest plan, test cases and automated test solutions, test case execution, defect management, and product support. His interest for Python started with test automation converting test scripts from Perl into Python. With discovery of the strength of Python to achieve significant efficiency and effectiveness, his passion has increased and he is in continuous pursuit of mastering the language. He is very excited to be part of Code.Sydney and support all who is in journey of learning Python.",
        },
        {
          id: 5,
          imageUrl: `https://robohash.org/5?set=set2`,
          memberName: "Bin Liu",
          memberTitle: "Software Engineer",
          vote: 0,
          description:
            "Bin has ten years working experience as a Software Developer and Business Intelligence consultant. His development career started with Java. Recently he is using some script languages like Python, Perl and JavaScript and actively participating as the lead developer of Census+ project. Bin has good sense in coding and is good at learning new technologies. He is interested in Python because it can be applied to many technological areas, such as web application development, data science and so on. He would like to make progress with others who are also interested in Python-related technologies.",
        },
        {
          id: 6,
          imageUrl: `https://robohash.org/6?set=set2`,
          memberName: "Jaydn Chou",
          memberTitle: "Software Engineer",
          vote: 0,
          description:
            'A medical scientist turned self-taught developer turned software engineer. Currently working at Arbor Networks using ReactJS, GraphQL/Apollo, Elasticsearch and Node to deliver products that present customers with a globally-scoped view of the internet threat landscape. Jaydn is passionate about minimal design. Her design approach is heavily influenced by Don Draper - "Make it simple, yet significant". An advocate of lifelong learning, design thinking and remote working. Also a JavaScript workshop facilitator and mentor at MusesJS (formerly NodeGirls). Excited to help newcomers embark on their coding journey as well as helping each other progress through FreeCodeCamp\'s full-stack curriculum.',
        },
        {
          id: 7,
          imageUrl: `https://robohash.org/7?set=set2`,
          memberName: "Kevin Foong",
          memberTitle: "Software Engineer",
          vote: 0,
          description:
            "Kevin has over 20 years of working experience in a variety of IT related areas including software development, web design and information management. The latter in the area of library and information science. He is currently working as a System Administrator for NSW Health where he mainly utilises SQL for report generation. He recently started learning Python, at first because he wanted to get into data science, but then found Flask along the way. He now considers himself a Python and Flask enthusiast and is interested in sharing his knowledge and learning from others.",
        },
        {
          id: 8,
          imageUrl: `https://robohash.org/8?set=set2`,
          memberName: "June Kongyang",
          memberTitle: "Software Engineer",
          vote: 0,
          description:
            "June Kongyang is currently a design and development engineer. She has broad experience in design, development and testing of network security systems. June started coding using C and C++ for robotic control automation such as sensors and micro-controllers. June graduated with a masters degree in Electrical Engineering. She joined Code.Sydney due to her interest in both Python and JavaScript programming languages. She found both languages pretty handy on increasing work productivity. She is keen to share her knowledge to anyone who wants to learn coding.",
        },
        {
          id: 9,
          imageUrl: `https://robohash.org/9?set=set2`,
          memberName: "Surya Setiyaputra",
          memberTitle: "Software Engineer",
          vote: 0,
          description:
            "Surya is a full-stack software developer with more than three-year professional experience with a previous life as a research scientist in Biophysics. He is a self-described ‘generalist’ with practical experience in setting up small businesses, personal finance, design, community building and tech startup in both Australia and Indonesia. Since mid-2019, Surya has been an active contributor to Free Code Camp Sydney meetups. As a self-taught developer, he is particularly interested in helping new coders who are interested in landing their entry role as a Junior Developer after going through the FreeCodeCamp full-stack curriculum. His current favourite web development stacks are Kotlin/Spring Boot, Ruby on Rails, Node, ReactJS and VueJS. In the near future, he aims to learn more SQL and functional programming. When he is not coding, Surya likes to read books about economics, anthropology, history and politics.",
        },
      ],
      tabs: ["Grid", "List"],
      selectedTab: "Grid",
    };
  },
  methods: {
    addToVote(id) {
      this.$emit("add-to-vote");
      this.teamMembers[id - 1].vote += 1;
    },
    removeFromVote(id) {
      this.$emit("remove-from-vote");
      this.teamMembers[id - 1].vote -= 1;
    },
    negative(id) {
      if (this.teamMembers[id - 1].vote <= 0) {
        return true;
      } else {
        return false;
      }
    },
    shouldDisplay(id) {
      this.teamMembers[id - 1].imageUrl = `https://robohash.org/${Math.floor(
        Math.random() * 10
      )}?set=set2`;
    },
    returnDisplay(id) {
      this.teamMembers[id - 1].imageUrl = `https://robohash.org/${id}?set=set2`;
    },
  },
  computed: {
    firstPlace: function() {
      let voteRank = [];
      let firstPlace;
      this.teamMembers.forEach((el) => {
        voteRank.push(el.vote);
      });
      let voteBank = [...voteRank].sort((a, b) => b - a);
      if (this.totalVotes > 0) {
        firstPlace = this.teamMembers[voteRank.indexOf(voteBank[0])].memberName;
      }
      return firstPlace;
    },
    secondPlace: function() {
      let voteRank = [];
      let secondPlace;
      this.teamMembers.forEach((el) => {
        voteRank.push(el.vote);
      });
      let voteBank = [...voteRank].sort((a, b) => b - a);
      if (this.totalVotes > 0) {
        secondPlace = this.teamMembers[voteRank.indexOf(voteBank[1])]
          .memberName;
      }
      return secondPlace;
    },
    thirdPlace: function() {
      let voteRank = [];
      let thirdPlace;
      this.teamMembers.forEach((el) => {
        voteRank.push(el.vote);
      });
      let voteBank = [...voteRank].sort((a, b) => b - a);
      if (this.totalVotes > 0) {
        thirdPlace = this.teamMembers[voteRank.indexOf(voteBank[2])].memberName;
      }
      return thirdPlace;
    },
  },
};
</script>

<style lang="scss" scoped>
.project__block {
  &-grid {
    position: relative;
    &__avatar {
      height: 200px;
      transition: all 1.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &-list {
    position: relative;
    &__avatar {
      height: 100px;
      transition: all 1.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.Vote-block {
  &-grid {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 10vw;
    &-member {
      margin: 20px;
    }
    &-button {
      cursor: pointer;
      padding: 5px;
      margin: 0 5px;
      font-weight: bold;
      border-radius: 5px;
      background-color: rgba(12, 233, 181, 0.961);
    }
  }
  &-list {
    grid-column: center-start / center-end;
    display: inline-block;
    margin: 0 10vw;

    &-member {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      border: 1px solid black;
      border-radius: 5px;
      margin: 20px;
      padding: 20px;
    }
    &-button {
      cursor: pointer;
      padding: 5px;
      margin: 0 5px;
      font-weight: bold;
      border-radius: 5px;
      background-color: rgba(12, 233, 181, 0.961);
    }
  }
}

.rank-topThree {
  font-size: 5rem;
  display: grid;
  grid-template-columns: 5vw 1fr 1fr 1fr 5vw;
  &-indivual {
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__text {
      font-size: 2.5rem;
    }
  }
}

.member-description {
  text-align: justify;
  &::first-letter {
    font-size: 2rem;
    color: rgba(245, 36, 12, 0.817);
  }
}
.activeTab {
  background-color: rgba(12, 233, 181, 0.961);
}
.tab {
  margin: 5px;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
