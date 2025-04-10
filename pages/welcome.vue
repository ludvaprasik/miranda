<template>
  <div class="greetings">
    <MirandaLogo />
    <h1>Vitajte v Demo Day Aplikaci</h1>
  </div>


  <img src="~/assets/img/separator-clouds.svg" />

  <div class="registration-container">
    <h1>Prihlásenie</h1>

    <div class="form__group">
      <label for="name">E-mailová adresa</label>
      <input id="name" type="text" v-model="name" />
    </div>
    <div class="form__group">
      <label for="pass">Heslo</label>
      <input id="pass" :type="passwordShown" v-model="password" />
    </div>

    {{ inputIsValid }}
    <button class="btn" @click="showPassword = !showPassword">
      Show pass
    </button>
    <p>Nezapamätali ste si heslo?</p>
    <button type="submit"
            class="btn btn--action"
            :disabled="!inputIsValid"
            @click="validateAndPushToHP">
      Prihlásiť sa
    </button>

    <p class="reset-password">Ešte u nás nemáte účet?</p>
    <button class="btn btn--action secondary">
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
  text-align: center;
  margin-top: 4rem;
}

h1 {
  text-align: center;
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