<template>
  <div class="ourTeam">
    <BaseBanner>💪 We are growing</BaseBanner>
    <div class="ourTeam__block">
      <div v-for="team in teamMembers" :key="team.id" class="Vote-block-member">
        <img :src="team.imageUrl" class="avatar" :alt="team.memberName" :title="team.memberName" />
        <h2>{{ team.memberName }}</h2>
        <h4>{{ team.memberTitle }}</h4>
        <div>
          <img :src="team.imageUrl" :alt="team.memberName" :title="team.memberName" height="20px" />
          <img :src="team.imageUrl" :alt="team.memberName" :title="team.memberName" height="20px" />
          <img :src="team.imageUrl" :alt="team.memberName" :title="team.memberName" height="20px" />
          <img :src="team.imageUrl" :alt="team.memberName" :title="team.memberName" height="20px" />
        </div>
        <details>
          <summary>More about me</summary>
          <h5 class="member-description">{{ team.description }}</h5>
        </details>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          imageUrl: "https://www.code.sydney/static/img/engramar.jpg",
          memberName: "Engramar Bollas",
          memberTitle: "Director",
          description:
            "Engramar's raison d'etre is to serve. A believer of servant leadership. He is passionate in providing service excellence to customers and ensuring people, culture, processes and technology support the same initiative. Engramar has worked in the IT industry for over 24 years. Having worked in Asia, the Middle East and Australia, Engramar has deep expertise in all aspects of software development lifecycle including business requirements analysis, systems design and development, product testing, release management, end-user training, pre-sales and post-implementation support. Engramar is working for GBG (Mastersoft Group) as their Head of Customer Support and Testing team. Engramar is also the current Director of Code.Sydney, an organisation which helps beginner programmers and novice data analysts showcase their newfound skills. Engramar has obtained a degree in Mathematics major in Computer Science from the Pontifical and Royal University of Santo Tomas in Manila."
        },
        {
          id: 2,
          imageUrl: "https://www.code.sydney/static/img/tony.png",
          memberName: "Tony Johnson",
          memberTitle: "Software Engineer/Systems Administrator",
          description:
            "Despite having a Degree in Prehistory and Archaeology, Tony has survived 30 years in various IT careers; from hardware sales and service, support desk, linux systems administration, management, consultancy, and software development. He began coding commercially 8 years ago in Java for Structural Geology project, and moved on to full-stack web development. He has completed the Free Code Camp front-end and back-end curriculum for JavaScript, React/Redux, Node/Express, MongoDB and GraphQL. Tony is an active participant in Free Code Camp Sydney meetups. Currently, he is contracted as Project Manager for McLowd Financial Services Marketplace, a cloud-based software company."
        },
        {
          id: 3,
          imageUrl: "https://www.code.sydney/static/img/promie_new.png",
          memberName: "Promie Yutasane",
          memberTitle: "Software Engineer",
          description:
            "Promie is currently working as a Software Engineer at Hireup, a tech company with an online platform that connects people with disability with support workers. He has a very strong focus on full stack development and currently using NodeJS, MongoDB, GraphQL/Apollo, React and Vue. He is a part-time student at UNSW studying Masters of IT specialising in Artificial Intelligence and E-Commerce Systems. Promie spends his spare time mentoring new programmers at Code.Sydney. As one of the pioneer mentors, Promie has introduced standardised processes around GitHub code submission among developers. He is also the chief envangelist of Vue JS in Code.Sydney."
        },
        {
          id: 4,
          imageUrl: "https://www.code.sydney/static/img/gagan.png",
          memberName: "Gagan Shrestha",
          memberTitle: "Software Engineer",
          description:
            "Gagan is a Software Testing Professional with over 12 years of experience in the testing domain. Gagan's key areas of expertise includes understanding complex business requirements and formulating robust test strategies, developingtest plan, test cases and automated test solutions, test case execution, defect management, and product support. His interest for Python started with test automation converting test scripts from Perl into Python. With discovery of the strength of Python to achieve significant efficiency and effectiveness, his passion has increased and he is in continuous pursuit of mastering the language. He is very excited to be part of Code.Sydney and support all who is in journey of learning Python."
        },
        {
          id: 5,
          imageUrl: "https://www.code.sydney/static/img/bin.png",
          memberName: "Bin Liu",
          memberTitle: "Software Engineer",
          description:
            "Bin has ten years working experience as a Software Developer and Business Intelligence consultant. His development career started with Java. Recently he is using some script languages like Python, Perl and JavaScript and actively participating as the lead developer of Census+ project. Bin has good sense in coding and is good at learning new technologies. He is interested in Python because it can be applied to many technological areas, such as web application development, data science and so on. He would like to make progress with others who are also interested in Python-related technologies."
        },
        {
          id: 6,
          imageUrl: "https://www.code.sydney/static/img/jaydn.png",
          memberName: "Jaydn Chou",
          memberTitle: "Software Engineer",
          description:
            'A medical scientist turned self-taught developer turned software engineer. Currently working at Arbor Networks using ReactJS, GraphQL/Apollo, Elasticsearch and Node to deliver products that present customers with a globally-scoped view of the internet threat landscape. Jaydn is passionate about minimal design. Her design approach is heavily influenced by Don Draper - "Make it simple, yet significant". An advocate of lifelong learning, design thinking and remote working. Also a JavaScript workshop facilitator and mentor at MusesJS (formerly NodeGirls). Excited to help newcomers embark on their coding journey as well as helping each other progress through FreeCodeCamp\'s full-stack curriculum.'
        },
        {
          id: 7,
          imageUrl: "https://www.code.sydney/static/img/kevin.png",
          memberName: "Kevin Foong",
          memberTitle: "Software Engineer",
          description:
            "Kevin has over 20 years of working experience in a variety of IT related areas including software development, web design and information management. The latter in the area of library and information science. He is currently working as a System Administrator for NSW Health where he mainly utilises SQL for report generation. He recently started learning Python, at first because he wanted to get into data science, but then found Flask along the way. He now considers himself a Python and Flask enthusiast and is interested in sharing his knowledge and learning from others."
        },
        {
          id: 8,
          imageUrl: "https://www.code.sydney/static/img/june.png",
          memberName: "June Kongyang",
          memberTitle: "Software Engineer",
          description:
            "June Kongyang is currently a design and development engineer. She has broad experience in design, development and testing of network security systems. June started coding using C and C++ for robotic control automation such as sensors and micro-controllers. June graduated with a masters degree in Electrical Engineering. She joined Code.Sydney due to her interest in both Python and JavaScript programming languages. She found both languages pretty handy on increasing work productivity. She is keen to share her knowledge to anyone who wants to learn coding."
        },
        {
          id: 9,
          imageUrl: "https://www.code.sydney/static/img/surya.png",
          memberName: "Surya Setiyaputra",
          memberTitle: "Software Engineer",
          description:
            "Surya is a full-stack software developer with more than three-year professional experience with a previous life as a research scientist in Biophysics. He is a self-described ‘generalist’ with practical experience in setting up small businesses, personal finance, design, community building and tech startup in both Australia and Indonesia. Since mid-2019, Surya has been an active contributor to Free Code Camp Sydney meetups. As a self-taught developer, he is particularly interested in helping new coders who are interested in landing their entry role as a Junior Developer after going through the FreeCodeCamp full-stack curriculum. His current favourite web development stacks are Kotlin/Spring Boot, Ruby on Rails, Node, ReactJS and VueJS. In the near future, he aims to learn more SQL and functional programming. When he is not coding, Surya likes to read books about economics, anthropology, history and politics."
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.avatar {
  height: 200px;
  clip-path: circle();
}
.Vote-block {
  &-member {
    margin: 20px;
  }
}
.ourTeam {
  margin-top: 15vh;
  grid-column: full-start / full-end;

  &__block {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 10vw;
  }
}
.member-description {
  text-align: justify;
  &::first-letter {
    font-size: 2rem;
    color: rgba(245, 36, 12, 0.817);
  }
}
//change style or summary-details-marker
summary::-webkit-details-marker {
  display: none;
}
summary:before {
  // background: red;
  border-radius: 5px;
  content: "+";
  // color: #fff;
  // float: left;
  font-size: 1.5em;
  font-weight: bold;
  // margin: -5px 10px 0 0;
  padding: 10px;
  text-align: center;
  width: 20px;
}
details[open] summary:before {
  content: "-";
}
</style>
