<template>
  <div class="menu-full">
    <h2>Demo Day Aplikace</h2>
    <ul>
      <li>
        <FaqIcon />
        <strong>Nové videá</strong>
        <ChevronIcon />
      </li>
      <li>
        <DogIcon />
        <strong>Tuláčikovia na adopciu</strong>
        <ChevronIcon />
      </li>
      <li>
        <HeartIcon />
        <strong>Chcem adoptovať maznáčika</strong>
        <ChevronIcon />
      </li>
      <li>
        <DogAdoptedIcon />
        <strong>Našli domov</strong>
        <ChevronIcon />
      </li>
      <li>
        <ContactIcon />
        <strong>Kontaktný formulár</strong>
        <ChevronIcon />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Miranda Demo Menu',
  layout: 'menu',
})
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin: 0;
  padding: 16px 0;
}
.menu-full {
  padding: 0 1rem;
  //display: grid;
  //grid-template-rows: min-content 1fr auto;
  //min-height: 100%;
  //min-height: 100%;
}
ul {
  padding: 0;
  margin: 0;
  border-top: 2px solid #C1AEEA
}

li {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 1rem;
  list-style-type: none;
  align-items: center;
  font-weight: 350;
  padding: 16px 12px;
  border-bottom: 1px solid #EFEBFA;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background: rgba(0,0,0,.02);
  }
}
</style>