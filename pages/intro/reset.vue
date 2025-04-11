<template>
  <button @click="goToPrev()" class="btn btn-back">
    <ArrowLeftIcon />
    <strong>Späť</strong>
  </button>
  <div class="blank">
    <img src="../../assets/img/separator-clouds.svg" alt="separator" class="mt-4"/>
  </div>
  <div class="reset-container">
    <h1>Resetovat heslo</h1>
    <form @submit.prevent="validateAndPushToHP">
      <div class="form__group">
        <label for="mail">E-mailová adresa</label>
        <input id="mail" type="text" v-model="mail" />
      </div>
      <p>Zadajte prosím váš email, aby sme vám poslali odkaz na resetovanie hesla</p>
      <button class="btn btn--action">
        Pokračovať
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Welcome to Miranda App',
  layout: "register"
})
const router = useRouter()
const auth = useAuth()
const name = ref('');
const mail = ref('');
const password = ref('');
const passwordRepeat = ref('');
const check = ref(false)

const goToPrev = () => {
  router.go(-1);
}

const validateAndPushToHP = () => {
  console.log(`Rekneme ze jmeno ${name.value} a heslo ${password.value} je spravne, jdeme na home page`);
  setTimeout(() => {
    auth.value.isLoggedIn = true
    useRouter().push('/')
  }, 1000)
}

</script>

<style lang="scss" scoped>
.blank {
  display: flex;
  align-items: flex-end;
}
.reset-container {
  background: #fff;
  padding: 2rem;
}

h1 {
  text-align: center;
}

strong {
  display: block;
}

label {
  color: $accent;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

img {
  width: 100%;
  transform: translateY(8px); // TODO fix
}

svg {
  width: 64px;
  height: 64px;
}

.newsletter {
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: .5rem;
  align-items: center;
}
.btn-back {
  margin: 0 0 1rem 1rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  align-self: flex-start;
  svg {
    height: 12px;
    width: auto;
  }
}
.btn--action {
  margin-top: 100px
}
</style>