<template>
    <div class="projects">
        <div class="card" v-for="(proj, index) in projects" :key="index">
            <a :href="proj.url" target="_blank">
            <img :src="proj.image" alt="">
                <h2>{{ proj.title }}</h2>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data(){
        return {
            projects: [
                {
                    title: "React Form",
                    url: "https://jeanjunior18.github.io/react-form/",
                    image: "https://i.ibb.co/nsQBVfD/dynamic-form.png"
                },
                {
                    title: "GetNet Hackathon",
                    url: "http://localhost:3000/",
                    image: "https://i.ibb.co/tYw5Kr7/getnet.png"
                },
                {
                    title: "IS distribuidora",
                    url: "https://isdisthospitalar.com.br/",
                    image: "https://i.ibb.co/Xpk0J3X/id-dist.png"
                },
                {
                    title: "Kanban",
                    url: "https://jeanjunior18.github.io/trilogo-frontend-test/",
                    image: "https://i.ibb.co/6B7rwqs/kanban.png"
                },
                {
                    title: "Redux with Hooks",
                    url: "https://jeanjunior18.github.io/redux-sample/",
                    image: "https://i.ibb.co/m0KqGM7/redux-hooks.png"
                },
                {
                    title: "Theme Provider",
                    url: "https://jeanjunior18.github.io/theme-provider/index.html",
                    image: "https://i.ibb.co/YTxJ6fq/theme-provider.png"
                },
                {
                    title: "Triskelion",
                    url: "https://jeanjunior18.github.io/triskelion/",
                    image: "https://i.ibb.co/4t9bN3s/triskelion.png"
                },
            ]
        }
    }
}
</script>

<style scoped>
    .projects {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }

    .projects .card {
        /* flex: 0; */
        width: 200px;
    }

    .projects .card a {
        font-size: 12px;
        text-decoration: none;
        color: #fff;
    }
    .projects .card img {
        width: 100%;
    }
</style>
