<template>
  <div class="user-profile">
    <div class="user-profile__header">
      <h1 class="user">
        <AvatarIcon />
        Petr Novák
      </h1>
      <strong class="edit">Upraviť profil</strong>
    </div>

    <div class="user-menu">
      <ul>
        <li><HomeIcon /> Domov</li>
        <li><CopyIcon /> Zmena hesla</li>
        <li><RulesIcon/> Podmienky používania</li>
        <li><SomeIcon />Ochrana osobných údajov</li>
        <li><TrashIcon /> Vymazanie dát GDPR</li>
        <li><ExitIcon /> Odhlásenie</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Registrace Miranda Demo Menu',
  layout: 'menu',
})
</script>

<style lang="scss" scoped>
.user-profile__header {
  background: url("/_nuxt/assets/img/bg-paws.png") #F6F1F8;
  background-size: 300px auto;
  background-repeat: repeat;
  padding: 4rem 2rem;
  border-radius: 0 0  24px 24px;
  strong {
    color: $accent;
  }
}

.user {
  text-align: left;
  display: flex;
  align-items: center;
  svg {
    margin-right: .5rem;
  }
}

ul {
  padding: 0;
  margin: 2rem 0 0 0;
}

li {
  color: $accent;
  font-weight: 500;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 1rem;
  list-style-type: none;
  align-items: center;
  padding: 12px 2rem;
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