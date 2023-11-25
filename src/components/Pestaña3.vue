<template>
  <div class="compo">
  <label for="nombres">Nombres: </label>
  <input id="nombres" v-model="nombres">
  </div>
  <div class="compo">
  <label for="apellidos">Apellidos: </label>
  <input id="apellidos" v-model="apellidos">
  </div>
  <div class="compo">
  <label for="correo">Correo Electronico: </label>
  <input id="correo" v-model="correo">
  </div>
  <div class="compo">
  <label>Sexo: </label>
  <input type="radio" id="hombre" value="Hombre" v-model="Sexo"> <label for="hombre">Hombre</label>
  <input type="radio" id="mujer" value="Mujer" v-model="Sexo"> <label for="mujer">Mujer</label>
  </div>
  <div class="compo">
  <label for="comentario">Comentarios: </label>
  <div>
  <textarea id="comentario" v-model="Comentario"></textarea>
  </div>
  </div>
  <div>
  <h3 v-if="nombres" class="styleCompo">Nombres: {{ nombres }}</h3>
  <h3 v-if="apellidos" class="styleCompo">Apellidos: {{ apellidos }}</h3>
  <h3 v-if="correo" class="styleCompo">Correo Electronico: {{ correo }}</h3>
  <h3 v-if="Sexo" class="styleCompo">Sexo: {{ Sexo }}</h3>
  <h3 v-if="Comentario" class="styleCompo">Comentarios: {{ Comentario }}</h3>
  </div>
  <div><button @click="showDonateModal" class="boton">Enviar</button></div>
  </template>
  <script>
  export default {
  data() {
  return {
    nombres: " ",
    apellidos: " ",
    correo: " ",
    Sexo:" ",
    Comentario: " "
  };
  },
  methods:{
    showDonateModal() {
      alert('¡Envio Exitoso Gracias por Apoyar, Registro Exitoso!');
    },
  },
  };
  </script>
  <style scoped>
  .styleCompo{
  padding-top: 0px;
  text-align: center;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  margin:1px;
  align-items: center;
  font-size: 18px;
  }
  .compo{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  text-align: center;
  }
  .compo1{
  text-align: center;
  }
  .boton{
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
  
  </style>