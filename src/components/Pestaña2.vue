<template>
  <div class="noticia-container">
    <div class="imagenes-container">
      <img src="./imagenesPe2/uno.jpg" alt="Imagen 1" style="margin-right: 20px;">
    </div>
    <div>
      <h3 class="titulo-noticia">"Apocalipsis Natural: Devastador Incendio Forestal Desencadena una Catástrofe Medioambiental sin Precedentes, Arrasando Implacablemente con la Biodiversidad, Consumiendo en su Furia Desatada Más de un Millón de Hectáreas de Valiosos Ecosistemas y Hábitats Naturales"</h3>
    </div>
  </div>
  <div class="noticia-container">
    <div class="imagenes-container">
      <img src="./imagenesPe2/img5.jpg" alt="Imagen 1" style="margin-right: 20px;">
    </div>
    <div>
      <h3 class="titulo-noticia">"Incendios forestales y protestas contra actividades extractivas para defender territorios indígenas y áreas naturales protegidas han sido algunas de las historias ambientales que estan marcaron este 2023"</h3>
    </div>
  </div>
  <div class="noticia-container">
    <div class="imagenes-container">
      <img src="./imagenesPe2/img6.jpg" alt="Imagen 1" style="margin-right: 20px;">
    </div>
    <div>
      <h3 class="titulo-noticia">"Los bomberos voluntarios luchan para acabar con los incendios en el oriente boliviano. Estos expertos no tienen muchas herramientas para combatir el fuego."</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pestaña2',
  data() {
      return {
      textoPestana1: "¿QUE HACEMOS?",
      };
    },
};
</script>

<style scoped>
.imagenes-container {
  display: flex;
  flex-direction: column;
  width: 160%;
}

.imagenes-container img {
  max-width: 200%;
  margin-bottom: 1px; 
  border-radius: 15px;
}

.noticia-container {
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.titulo-noticia {
  color: black; /* Color de texto negro */
  font-size: 23px;
}
</style>


