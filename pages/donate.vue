<template>
  <div class="donate-page">
    <h2>
      Pomôžte zvieratám v núdzi
    </h2>

    <div class="tabs">
      <button class="btn btn-tab" :class="{ active: selectedTab === 'repeatable'}" @click="selectedTab = 'repeatable'">
        <PawIconFilled />
        <span>Opakovaný</span>
      </button>
      <button class="btn btn-tab" :class="{ active: selectedTab === 'monthly'}" @click="selectedTab = 'monthly'">
        <RefreshIcon />
        <span>Mesačne</span>
      </button>
    </div>

    <div class="section section-bg mb-2">
      <div class="select-amount">
        <button class="btn btn-tab" @click="selectedAmount = 20" :class="{active: selectedAmount === 20}">20 €</button>
        <button class="btn btn-tab" @click="selectedAmount = 40" :class="{active: selectedAmount === 40}">40 €</button>
        <button class="btn btn-tab" @click="selectedAmount = 80" :class="{active: selectedAmount === 80}">80 €</button>
        <button class="btn btn-tab" @click="selectedAmount = 160" :class="{active: selectedAmount === 160}">160 €</button>
      </div>

      <button class="btn btn--action secondary">
        VLASTNÁ SUMA
      </button>

      <form>
        <div class="form__group">
          <label for="name">Meno</label>
          <input id="name" type="text" v-model="name" />
        </div>
        <div class="form__group">
          <label for="mail">E-mailová adresa</label>
          <input id="mail" type="text" v-model="mail" />
        </div>
        <div class="form__group">
          <label for="phone">Telefón</label>
          <input id="phone" type="text" v-model="phone" />
        </div>
        <div class="form__group">
          <label for="card">Platobná karta*</label>
          <input id="card" type="text" v-model="card" />
        </div>
        <div class="form__group">
          <label for="nameOnCard">Meno na karte*</label>
          <input id="nameOnCard" type="text" v-model="nameOnCard" />
        </div>
      </form>

      <button type="submit"
              class="btn btn--action">
        Odoslať príspevok platobnou kartou
      </button>
      <div class="section section-bg-darker">
        <h2 class="inverse">Bankový prevod</h2>
        <div class="bank-info">
          <img src="~/assets/img/qr-code.svg"  alt="qr"/>
          <div class="bank-detail inverse">
            <h4 class="inverse">IBAN SK</h4>
            <span>SK16 1100 0000 0026 2105 4967</span>
          </div>
        </div>
        <div class="bank-info inverse">
          <img src="~/assets/img/qr-code.svg"  alt="qr"/>
          <div class="bank-detail">
            <h4 class="inverse">Číslo účtu CZ</h4>
            <span>2802702687/2010</span>
          </div>
        </div>
      </div>
    </div>

    <h2>Chcete pomôcť ale nemôžete si tuláčika adoptovať?</h2>

    <div class="section section-bg--gradient mb-0">
      <div class="section-half">
        <h4>Staňte sa časťou nášho tímu dobrovoľníkov a vyvenčite tuláčika!</h4>
        <button type="submit" class="btn btn--sm btn--action">
          Verejné venčenie
        </button>
      </div>
    </div>

    <div class="double">
      <div class="section section-bg--some mb-0">
        <h4>Benefičný obchodík</h4>
        <button type="submit" class="btn btn--sm btn--action">
          Nakupte a pomáhejte
        </button>
      </div>
      <div class="section section-bg--accent mb-0">
        <h4 class="inverse">Pomozte nám</h4>
        <button type="submit" class="btn btn--sm btn--action inverse">
          Darovať 2%
        </button>
      </div>
    </div>

    <div class="section section-bg--accent mb-0">
      <div class="section-half">
        <h4 class="inverse">Staňte sa andělom strážným pre zvieratko</h4>
        <button type="submit" class="btn btn--sm btn--action inverse">
          Virtuálna adopcia
        </button>
      </div>
    </div>

    <div class="section section-bg--some">
      <div class="section-half">
        <h4>Nakŕmte hladné brušká nákupom na našom
          e-shope</h4>
        <button type="submit" class="btn btn--sm btn--action">
          pomôcť
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
const selectedTab = ref('repeatable')
const selectedAmount = ref<null | number>(null)
const name = ref('')
const mail = ref('')
const phone = ref('')
const card = ref('')
const nameOnCard = ref('')
</script>

<style lang="scss" scoped>
.select-amount {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  .btn {
    width: 100%;
  }
}

.donate-page {
  padding: 1rem 1rem 80px 1rem;
  .btn--sm {
    margin-top: 3rem;
  }
}

.bank-info {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
}

form {
  margin: 2rem 0;
}

.section-half {
  width: 50%;
}

.section-bg--some {
  background: #FDF4EC;
}

.section-bg--accent {
  background: linear-gradient(90deg,rgba(125, 56, 146, 1) 0%, rgba(173, 116, 190, 1) 100%);
}

.double {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.btn.inverse {
  background: #fff;
  color: $accent;
}
</style>