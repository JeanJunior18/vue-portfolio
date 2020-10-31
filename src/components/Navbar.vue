<template>
  <nav class="menu">
    <div class="logo">
      <h1>{{ title }}</h1>
    </div>

    <ul class="menu-items">
        <a v-for="item in items" :key="item.item" href=item >
          <li >
            {{ item.item }}
          </li>
        </a>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    props: {
      title: String
    },
    data() {
      return {
        items: [
          {
            item: "Sobre",
            path: "/about",
          },
          {
            item: "Projetos",
            path: "/projects",
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .menu {
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu .menu-items {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .menu .menu-items a {
    text-decoration: none;
    color: #fff;
  }

  .menu .menu-items li {
    margin-left: 20px;
  }
</style>