import { base, fullWidthNodeStyles, multiNodeBase } from "../components/atoms/initialElements/initial-elements";
import { NodeLabel } from "../components/atoms/initialElements/initial-elements.utils";

export const resumenDeCarreraInformatica = { name: "Licenciatura en Informatica", path: "/info", image: "https://i.imgur.com/oVepi2X.jpeg", duration: "5 años", tituloIntermedio: "Analista en Sistemas", yearOfTituloIntermedio: "3 años" }

export const descripcionDeCarreraInformatica = {
  shortDescription: "Se propone formar egresados con significativos fundamentos teóricos de informática y conocimiento actualizado de las tecnologías, lo que le permitirá seguir capacitándose permanentemente al ritmo de la evolución tecnológica.",
  longDescription: () => (<p className="py-2 ">
    Se propone formar egresados con significativos fundamentos teóricos de informática y conocimiento actualizado de las tecnologías, lo que le permitirá seguir capacitándose permanentemente al ritmo de la evolución tecnológica. Podrá planificar, dirigir, realizar y/o evaluar proyectos de diseño, verificación, puesta a punto, mantenimiento y actualización para redes de comunicaciones que vinculen sistemas de procesamiento de datos. Podrá realizar la especificación del co-diseño hardware-software y prueba funcional (real o simulada) de la arquitectura.
    <br />
    <br />
    El egresado de esta carrera estará capacitado para controlar las normas de calidad en el software o software integrado a otros componentes y efectuar las tareas de auditoría de los sistemas informáticos, realizar arbitrajes, peritajes, y tasaciones relacionadas con los sistemas informáticos.
    <br />
    <br />
    También podrá realizar tareas como docente universitario en informática en todos los niveles, de acuerdo a la jerarquía de título de grado máximo.
  </p>)
}

const materias = [
  {id: 1, title: "Algebra y Geometria", year: 1}, 
  {id: 2, title: "Analisis Matematico", year: 1}, 
  {id: 3, title: "Logica Simbolica", year: 1}, 
  {id: 4, title: "Programacion Logica", year: 1},
  {id: 5, title: "Sistemas de Informacion", year: 1},
  {id: 6, title: "Programacion Orientada a Objetos", year: 1},
  {id: 7, title: "Matematica Discreta", year: 1},
  {id: 8, title: "Arquitectura del Computador", year: 1},
  {id: 9, title: "Idioma Extranjero I", year: 1},
  {id: 10, title: "Idioma Extranjero II", year: 1},
  {id: 11, title: "Lenguajes Formales y Computabilidad", year: 2},
  {id: 12, title: "Algoritmos y Estructuras de Datos I", year: 2},
  {id: 13, title: "Idioma Extranjero III", year: 2},
  {id: 14, title: "Grupo y Liderazgo", year: 2},
  {id: 15, title: "Taller de Algoritmos y Estructuras de Datos I", year: 2},
  {id: 16, title: "Estadistica y Probabilidad", year: 2},
  {id: 17, title: "Base de Datos I", year: 2},
  {id: 18, title: "Algoritmos y Estructuras de Datos II", year: 2},
  {id: 19, title: "Taller de Algoritmos y Estructuras de Datos II", year: 2},
  {id: 20, title: "Administracion", year: 2},
  {id: 21, title: "Idioma Extranjero IV", year: 2},
  {id: 22, title: "Analisis y Diseno de Software", year: 3},
  {id: 23, title: "Idioma Extranjero V", year: 3},
  {id: 24, title: "Pruebas de Sistemas", year: 3},
  {id: 25, title: "Principios de Economia", year: 3},
  {id: 26, title: "Sistemas Operativos", year: 3},
  {id: 27, title: "Ingenieria de Software", year: 3},
  {id: 28, title: "Seminario de Practica", year: 3},
  {id: 29, title: "Idioma Extranjero VI", year: 3},
  {id: 30, title: "Algorimos Concurrentes y Paralelos", year: 3},
  {id: 31, title: "Comunicaciones", year: 3},
  {id: 32, title: "Desarrollo Emprendedor", year: 3},
  {id: 33, title: "Emprendimientos Universitarios", year: 4},
  {id: 34, title: "Desarrollo de Aplicaciones con Bases de Datos", year: 4},
  {id: 35, title: "Redes", year: 4},
  {id: 36, title: "Seguridad Informatica", year: 4},
  {id: 37, title: "Electiva I", year: 4},
  {id: 38, title: "Sistemas Operativos Avanzados", year: 4},
  {id: 39, title: "Bases de Datos II", year: 4},
  {id: 40, title: "Programacion Cliente-Servidor", year: 4},
  {id: 41, title: "Desarrollo Web", year: 4},
  {id: 42, title: "Auditoria de Sistemas", year: 4},
  {id: 43, title: "Electiva II", year: 4},
  {id: 44, title: "Modelos de Simulacion", year: 5},
  {id: 45, title: "Practica Profesional", year: 5},
  {id: 46, title: "Inteligencia Artificial", year: 5},
  {id: 47, title: "Calidad de Software", year: 5},
  {id: 48, title: "Seminario Final", year: 5},
  {id: 49, title: "Gestion de Proyectos de Infraestructura", year: 5},
  {id: 50, title: "Etica y Deontologia Profesional", year: 5},
  {id: 51, title: "Desarrollo Web", year: 5},
]

// TODO: 
// 1. Relaciones dinámicas entre nodos
// 2. Mejor disposición de las materias en el panel (posición de Y).

const nodes = []

const positions = [
  {year: 1, xpos: 0 },
  {year: 2, xpos: 300},
  {year: 3, xpos: 600},
  {year: 4, xpos: 900},
  {year: 5, xpos: 1200}
]

const list = materias.forEach(materia => {

  let year = materia?.year

  let xpos = positions.find(positions => positions.year == year).xpos

  if (nodes.length != undefined){
    var lastYValue = nodes[nodes.length - 1]?.year == year ? nodes[nodes.length - 1]?.position?.y : 0
  }

  let subtitle = `${year}° Año`

  let node = {
    id: materia.id,  
    ...base,
    data: {
      label: (
        <NodeLabel title={materia.title} subtitle={subtitle} />
      )
    },
    year: year,
    position: {x: xpos, y: lastYValue + 100}
  }

  nodes.push(node)
})


const materiasDeInformatica = nodes
  // {
  //   id: "1",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="Algebra y Geometría" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: -400, y: 75 },
  // },
  // {
  //   id: "2",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="ANÁLISIS MATEMÁTICO" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: -400, y: 150 },
  // },
  // {
  //   id: "3",
  //   ...multiNodeBase,
  //   data: {
  //     targets: [
  //       { id: "a", style: { top: 10 }, position: "left" },
  //       { id: "b", style: { top: 40 }, position: "left" },
  //     ],
  //     label: (
  //       <NodeLabel title="CÁLCULO AVANZADO" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: 0, y: 75 },
  // },
  // {
  //   id: "4",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="LÓGICA SIMBÓLICA" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: -400, y: 245 },
  // },
  // {
  //   id: "5",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="SISTEMAS DE INFORMACIÓN" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: -400, y: 320 },
  // },
  // {
  //   id: "6",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="PROGRAMACIÓN LÓGICA" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: -400, y: 415 },
  // },
  // {
  //   id: "7",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="IDIOMA EXTRANJERO I" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: -400, y: 510 },
  // },
  // {
  //   id: "8",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="PROGRAMACIÓN ORIENTADA A OBJETOS" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: 0, y: 406 },
  // },
  // {
  //   id: "9",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="MATEMÁTICA DISCRETA" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: 0, y: 310 },
  // },
  // {
  //   id: "10",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="ARQUITECTURA DEL COMPUTADOR" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: 0, y: 175 },
  // },
  // {
  //   id: "11",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="IDIOMA EXTRANJERO II" subtitle="1° Año" />
  //     ),
  //   },
  //   position: { x: 0, y: 510 },
  // },
  // {
  //   id: "12",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="LENGUAJES FORMALES Y COMPUTABILIDAD" subtitle="2° Año" />
  //     ),
  //   },
  //   position: { x: 275, y: 260 },
  // },
  // {
  //   id: "13",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="ALGORITMOS Y ESTRUCTURAS DE DATOS I" subtitle="2° Año" />
  //     ),
  //   },
  //   position: { x: 275, y: 160 },
  // },
  // {
  //   id: "14",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="IDIOMA EXTRANJERO III" subtitle="2° Año" />
  //     ),
  //   },
  //   position: { x: 275, y: 510 },
  // },
  // {
  //   id: "15",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="GRUPO Y LIDERAZGO" subtitle="2° Año" />
  //     ),
  //   },
  //   position: { x: 275, y: 75 },
  // },
  // {
  //   id: "16",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="TALLER DE ALGORITMOS Y ESTRUCTURAS DE DATOS I" subtitle="2° Año" />
  //     ),
  //   },
  //   position: { x: 275, y: 390 },
  // },
  // {
  //   id: "17",
  //   ...base,
  //   data: {
  //     label: (
  //       <NodeLabel title="ESTADÍSTICA Y PROBABILIDAD" subtitle="2° Año" />
  //     ),
  //   },
  //   position: { x: 275, y: 620 },
  // },


  // {
  //   id: "e1-3a",
  //   source: "1",
  //   target: "3",
  //   sourceHandle: "a",
  //   targetHandle: "a",
  //   type: "smart",
  // },
  // {
  //   id: "e2-3b",
  //   source: "2",
  //   target: "3",
  //   sourceHandle: "a",
  //   targetHandle: "b",
  //   type: "smart",
  // },
  // {
  //   id: "e6-8",
  //   source: "6",
  //   target: "8",
  //   type: "smoothstep",
  // },
  // {
  //   id: "e7-11",
  //   source: "7",
  //   target: "11",
  //   type: "smoothstep",
  // },
  // {
  //   id: "e8-16",
  //   source: "8",
  //   target: "16",
  //   type: "smoothstep",
  // },

export default materiasDeInformatica;
