<template>
  <div class="greetings">
    <MirandaLogo />
    <h1>Vitajte v Demo Day Aplikaci</h1>
  </div>


  <img src="../../assets/img/separator-clouds.svg" />

  <div class="registration-container">
    <h1>Prihlásenie</h1>

    <form @submit.prevent="validateAndPushToHP">
      <div class="form__group">
        <label for="name">E-mailová adresa</label>
        <input id="name" type="text" v-model="name" />
      </div>
      <div class="form__group">
        <label for="pass">Heslo</label>
        <InputPassword id="pass" v-model="password" />
      </div>

      <strong class="fg--accent mb-1" @click="$router.push('/reset')">Nezapamätali ste si heslo?</strong>
      <button type="submit"
              class="btn btn--action"
              :disabled="!inputIsValid"
              @click="validateAndPushToHP">
        Prihlásiť sa
      </button>
    </form>

    <strong class="fg--accent mb-1 reset-password">Ešte u nás nemáte účet?</strong>
    <button class="btn btn--action secondary" @click="$router.push('/register')">
      Registrovať sa
    </button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Welcome to Miranda App',
  layout: "welcome"
})

const auth = useAuth()
const name = ref('');
const password = ref('');
const showPassword = ref(false)
const check = ref(false)
const inputIsValid = computed(() => {
  return name.value.length > 3 && password.value.length > 3;
});
const passwordShown = computed(() => {
  if (showPassword.value) {
    return 'text'
  } else {
    return 'password'
  }
});

const validateAndPushToHP = () => {
  console.log(`Rekneme ze jmeno ${name.value} a heslo ${password.value} je spravne, jdeme na home page`);
  setTimeout(() => {
    auth.value.isLoggedIn = true
    useRouter().push('/')
  }, 1000)
}

</script>

<style lang="scss" scoped>
.greetings {
  text-align: center;
  padding: 3rem;
}

.registration-container {
  background: #fff;
  padding: 2rem;
}

.reset-password {
  margin-top: 4rem;
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
</style>