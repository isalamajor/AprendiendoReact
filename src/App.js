import './App.css';
import Voluntario from './componentes/Voluntarios.js';

const voluntariosData = [
  {
    imagen: 'vol1',
    nombre: 'Javier Medellín',
    pais: 'España',
    puesto: 'Ingeniero de software',
    empresa: 'Spotify',
    descripcion: 'Trabajar en una ONG no es para todos, pero si eres alguien que busca hacer un impacto real a través de la tecnología, te lo recomiendo sin dudar. La satisfacción de saber que tu trabajo está directamente relacionado con el bienestar de otros es algo que no se puede comparar con nada que haya experimentado en el mundo corporativo.'
  },
  {
    imagen: 'vol2',
    nombre: 'Charlotte Xavier',
    pais: 'Estados Unidos',
    puesto: 'Gestora de finanzas',
    empresa: 'ENG',
    descripcion: 'Operar como gestor de finanzas en una ONG me ha enseñado que cada decisión cuenta. Con recursos limitados, mi trabajo es asegurar que cada dólar se maximice para llegar a las comunidades que más lo necesitan. A diferencia del sector privado, aquí las finanzas no son solo números: cada presupuesto aprobado, cada gasto controlado, tiene un impacto directo en proyectos que cambian vidas. Saber que mi labor contribuye a un bien mayor, es lo que me motiva cada día a buscar la eficiencia con un propósito más profundo.'
  },
  {
    imagen: 'vol3',
    nombre: 'Francisco Sánchez Vid',
    pais: 'España',
    puesto: 'Monitor director',
    empresa: 'VidiVencio',
    descripcion: 'Ser monitor de actividades me ha permitido ver de cerca el impacto que nuestras iniciativas tienen en las personas. Organizar talleres, dinámicas y eventos no es solo una cuestión de logística, sino de crear experiencias que ayuden a las comunidades a aprender, conectar y crecer.'
  }
];

function App() {
  return (
    <div className='App'>
      <div className="contenedor-principal"> 
        <h1>Conoce a nuestros voluntarios</h1>
        
        <div className='contenedor-voluntarios'>
          {voluntariosData.map((voluntario, index) => ( // Iterar por la lista de voluntarios
            <Voluntario
              key={index} // Indicar cual es la clave que marca cada elemento
              {...voluntario} // Descomprimir el contenido de ese elemento (sacar los atributos)
            />
          ))}
        </div>
      
      </div>
    </div>
  );
}

export default App;
