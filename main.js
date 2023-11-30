 // Calculadora de newtones de fuerza mejorada con detalles 

// Objeto para almacenar las conversiones y constantes necesarias
const conversiones = {
    velocidadKmPorHoraAMetrosPorSegundo: 1 / 3.6,
    newtonPorKilogramo: 9.8, // Aceleración debida a la gravedad en la Tierra
  };
  
  // Función para convertir velocidad 
  function convertirVelocidadKmPorHoraAMetrosPorSegundo(velocidadKmPorHora) {
    return velocidadKmPorHora * conversiones.velocidadKmPorHoraAMetrosPorSegundo;
  }
  
  // función para calcular la fuerza 
  function calcularFuerza(velocidad, masa) {
    return velocidad * masa * conversiones.newtonPorKilogramo;
  }
  
  // función principal que utiliza las funciones anteriores
  function calcularFuerzaDeNewton() {
    const expresion = prompt("Ingrese la multiplicación colocando primero la velocidad en km por hora y luego la masa en kg (por ejemplo, 120 * 50):");
  
    if (expresion) {
      try {
        const [velocidad, masa] = expresion.split('*').map(item => parseFloat(item.trim()));
  
        if (!isNaN(velocidad) && !isNaN(masa)) {
          const velocidadEnMetrosPorSegundo = convertirVelocidadKmPorHoraAMetrosPorSegundo(velocidad);
          const fuerza = calcularFuerza(velocidadEnMetrosPorSegundo, masa);
          alert(`La cantidad de Newtons de fuerza es: ${fuerza.toFixed(2)}`);
        } else {
          alert("Por favor, ingrese una expresión válida.");
        }
      } catch (error) {
        alert("No se puede calcular la fuerza. Asegúrese de ingresar una expresión válida.");
      }
    }
  }
  
  function guardarResultadoEnLocalStorage(fuerza) {
    // Convierte el resultado a JSON y guárdalo en localStorage
    localStorage.setItem('fuerzaCalculada', JSON.stringify(fuerza));
  }
  
  function obtenerResultadoDesdeLocalStorage() {
    // Obtiene el resultado desde localStorage y lo convierte de nuevo a objeto
    const fuerzaGuardada = localStorage.getItem('fuerzaCalculada');
    return fuerzaGuardada ? JSON.parse(fuerzaGuardada) : null;
  }
  
  calcularFuerzaDeNewton();
  
  