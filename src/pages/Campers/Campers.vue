<template>
  <div class="campers">
    <Banner :content="banner.comingSoon" />
    <div v-for="todo in todos" :key="todo.id" role="todos" class="todos">
      <div class="todo">
        <a :href="todo.url" target="_blank" class="todo__link">
          <h1>{{todo.title}}</h1>
          <h1>{{todo.date}}</h1>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/Banner/Banner";
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "JS for WP Conf",
          date: "July 8-10th",
          url: "https://javascriptforwp.com/conference/"
        }
      ],
      banner: {
        content: `Sydney Volunteer
      <br />Programmers`,
        comingSoon: ` 🏗 Good to go Page is Coming Soon`
      }
    };
  },
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
.campers {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
.todos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.todo {
  border: 1px solid black;
  border-radius: 5px;
  margin: 20px;
  &:hover {
    background-color: rgba(12, 233, 181, 0.961);
  }
  &__link {
    text-decoration: none;
    color: black;
  }
}
</style>
