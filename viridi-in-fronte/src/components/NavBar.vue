<script setup>
    const navitems = [{name: "Articles", link: "/"}, {name:"Ai Search", link: "/ai-search"}, {name: 'Hazard Search', link:'/hazard-search'}, {name: 'About Us', link: '/about'}]
</script>

<template>
    <ul class="navbar">
        <RouterLink v-for="(item, index) in navitems" :key="index" class="navitem" :to="item.link">
            {{ item.name }}
        </RouterLink>
    </ul>
</template>

<style lang="css">
    .navbar {
        height: 3rem;
        width: 100%;
        cursor: pointer;
        display: flex;
        list-style-type: none;
        padding: 15px 0px 0px 15px;
    }

    .navitem {
        color: white;
        padding: 0px 10px;
        font-size: 19px;
        font-weight: 100;
        text-decoration: none;
        position: relative;
        overflow: hidden;
    }

    .navitem::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        background-color: white;
        width: 0%;
        transition: width 0.3s ease;
    }   

    .navitem:hover::after {
        width: 100%;
        animation: pulse 1.5s ease-in-out 0.3s infinite;
    }  

    @keyframes pulse {
        0%, 100% {
        width: 100%;
        }
        50% {
        width: 60%;
        }
    }
</style>
