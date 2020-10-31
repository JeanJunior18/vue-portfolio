<template>
    <Navbar title="Dev Portfolio" />
    <div class="components">
      <UserCard />
      <Projects />
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Projects from './components/Projects'

export default {
  name: 'App',
  components: {
    Navbar,
    UserCard,
    Projects,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #fff;

  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.components {
  display: flex;
}

body {

  background: #121214;
}

* {
  margin: 0;
  padding: 0;
}
</style>
