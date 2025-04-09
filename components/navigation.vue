<template>
  <nav>
    <NavItem
        to="/"
        label="Domov"
        :iconDefault="HomeIcon"
        :iconActive="HomeIconFilled"
    />
    <NavItem
        to="/donate"
        label="Prispieť"
        :iconDefault="HeartIcon"
        :iconActive="HeartIconFilled"
    />
    <NavItem
        to="/wanderers"
        label="Tuláčikovia"
        :iconDefault="PawIcon"
        :iconActive="PawIconFilled"
    />
    <NavItem
        to="/menu"
        label="Menu"
        :iconDefault="MenuIcon"
        :iconActive="MenuIcon"
    />
  </nav>
</template>

<script setup lang="ts">
import HomeIcon from "~/components/icons/home-icon.vue";
import HeartIcon from "~/components/icons/heart-icon.vue";
import NavItem from "~/components/NavItem.vue";
import HeartIconFilled from "~/components/icons/heart-icon-filled.vue";
import HomeIconFilled from "~/components/icons/home-icon-filled.vue";
import PawIcon from "~/components/icons/paw-icon.vue";
import PawIconFilled from "~/components/icons/paw-icon-filled.vue";
import MenuIcon from "~/components/icons/MenuIcon.vue";

</script>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  position: fixed;
  inset: 0;
  top: unset;
  border-radius: 24px 24px 0 0;
  overflow: clip;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
  background: #fff;
}

.nav-link {
  background: none;
  flex-grow: 1;
  text-decoration: none;
}
</style>