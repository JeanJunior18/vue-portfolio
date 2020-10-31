<template>
    <div class="card">
        <section class="profile-pic">
            <img :src="user.avatar_url" :alt="user.name" :title="user.name">
        </section>

        <section class="user">
            <h2>{{ user.name }}</h2>
            <p>{{ user.position }}</p>
            <p>{{ user.age }} anos</p>
        </section>
        
        <section class="social-media">
            <a :href="user.instagram">
                <i class="fa fa-instagram fa-lg"></i>
            </a>
            <a :href="user.linkedin">
                <i class="fa fa-linkedin fa-lg"></i>
            </a>
            <a :href="user.github">
                <i class="fa fa-github fa-lg"></i>
            </a>
        </section>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    data() {
        return {
            user: {
                name: "Jean Charles Lima Gomes Junior",
                position: "Estudante de Sistemas de Informação",
                avatar_url: "https://avatars1.githubusercontent.com/u/54405723?s=460&u=dcb2bbfbeba708909296f86b565002a9f592c06d&v=4",
                age: 19,
                linkedin: "https://www.linkedin.com/in/jean-charles-junior/",
                github: "http://github.com/JeanJunior18",
                instagram: "https://www.instagram.com/jeanjunior.js/",
                projects: [
                    {}
                ]
            }
        }
    }
}
</script>

<style scoped>
    .card {
        width: 250px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        background: #202024;
        color: #eee;
        padding: 20px;
        border-radius: 10px;
    }

    .profile-pic img {
        width: 100%;
        border-radius: 50%;
    }
    .profile-pic {
        width: 130px;
    }

    .user :nth-child(n) {
        margin: 10px;
    }

    .social-media i{
        width: 40px;
        color: #fff
    }
</style>