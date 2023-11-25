  <template>
      <div id="logo1">
        <img src='./ImagenesPe/img3.jpg' alt="Logo1" />
      </div>
      <div class="texto-superpuesto">
          <p>{{ textoPestana1 }}</p>
        </div>
      <div class="h3">
        <p>Informamos sobre la sequía y la deforestación de hoy en dia, fenómenos medioambientales interconectados, representan amenazas significativas para la salud global de los ecosistemas. La sequía, caracterizada por la falta prolongada de precipitación, está en aumento debido al cambio climático, debilitando la resistencia de los bosques y contribuyendo a su deforestación. Esta última, impulsada por actividades humanas como la expansión agrícola y la tala ilegal, se ve exacerbada por incendios forestales, a menudo originados por la actividad humana irresponsable.
           La pérdida de bosques tiene consecuencias devastadoras, ya que actúan como sumideros de carbono esenciales para mitigar el cambio climático y proporcionan hábitats críticos para una amplia variedad de especies. La deforestación no solo libera grandes cantidades de carbono almacenado, contribuyendo al calentamiento global, sino que también amenaza la supervivencia de numerosas especies.
           Frente a esta crisis ambiental, es esencial implementar medidas efectivas de conservación, reforestación y gestión sostenible de los recursos forestales. La conciencia pública sobre la importancia de preservar los bosques y abordar las causas subyacentes de la sequía y la deforestación es crucial. La acción coordinada a nivel local, nacional e internacional se presenta como la clave para revertir la pérdida continua de estos valiosos recursos naturales y asegurar un futuro sostenible para nuestro planeta.
        </p>
      </div>
  </template> 
  
  <script>
  export default {
  name: 'Pestana1',
    data() {
      return {
      textoPestana1: "¿QUE HACEMOS?",
      };
    },
  };
  </script>
  
  <style>
  #contenido-pestaña1 {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; 
  }
  #logo1 img{
    width: 95%;
    max-height: 75vh; 
    margin-bottom: 20px;
  }
  #contenido-pestaña1 p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  color: black;
  }
  .texto-superpuesto {
  position: absolute;
  top: 60%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 65px;
  color: white;
  }
  .h3{
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
  }
  </style>