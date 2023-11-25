<template>
  <div id="app">
    <div id="header">
      <div id="logo">
        <img src="./Imagenes/images.png" alt="Logo" />
      </div>
      <router-link to="/Pestaña1">
        <h3 class="tab">¿Qué Hacemos?</h3>
      </router-link>
      <router-link to="/Pestaña2">
        <h3 class="tab">Ultimas Noticias</h3>
      </router-link>
      <button @click="showSupportModal" class="button">Apóyanos dando un CLICK</button>
      <div class="dropdown">
        <button @click="toggleLanguageDropdown" class="button">
          {{ selectedLanguage }}
          <span>&#9660;</span> 
        </button>
        <div v-if="languageDropdownOpen" class="dropdown-content">
          <button @click="changeLanguage('es')">Español</button>
          <button @click="changeLanguage('en')">Inglés</button>
        </div>
      </div>
      <router-link to="/Pestaña3">
        <button @click="showDonateModal" class="button button1">Registrate y Apoyanos</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      languageDropdownOpen: false,
      selectedLanguage: 'Idioma',
    };
  },
  methods: {
    toggleLanguageDropdown() {
      this.languageDropdownOpen = !this.languageDropdownOpen;
    },
    changeLanguage(language) {
      this.languageDropdownOpen = false;
      this.selectedLanguage = language;
    },
    showSupportModal() {
      alert('¡Gracias por tu apoyo!');
    },
  },
};
</script>

<style>
body {
  background-image: url('./Imagenes/img2.png'); 
  background-size: cover;
}
#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  color: black;
}

#header {
  background-color: azure;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo img {
  max-height: 125px;
  margin-right: 65px;
  max-width: 400px;
}

.tab {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  color: rgb(9, 212, 87);
}

a {
  text-decoration: none !important;
}

.button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  background-color: #63ee51; 
  color: white;
  border: none;
  padding:20px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  margin-right: 1px;
}

.button:hover {
  background-color: #63ee51;
}

.button1 {
  margin-right: 100px;
  background-color: #63ee51; 
  padding: 35px;
  border-radius: 15px;
}

.dropdown button {
  background-color: #63ee51;
  color: white;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.dropdown span {
  margin-left: 5px; 
}

.dropdown-content {
  position: absolute;
  background-color: #63ee51;  
  z-index: 1;
  border-radius: 5px;
  margin-top: 5px; 
  width: 17%;
}

.dropdown-content button {
  width: 100%;
  text-align: left;
  padding: 10px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.dropdown-content button:hover {
  background-color: #52854c;
}

.dropdown-content button:last-child {
  border-bottom: none;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
