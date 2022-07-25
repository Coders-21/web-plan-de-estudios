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

const materiasDeInformatica = [
  {
    id: "1",
    ...base,
    data: {
      label: (
        <NodeLabel title="Algebra y Geometría" subtitle="1° Año" />
      ),
    },
    position: { x: -400, y: 75 },
  },
  {
    id: "2",
    ...base,
    data: {
      label: (
        <NodeLabel title="ANÁLISIS MATEMÁTICO" subtitle="1° Año" />
      ),
    },
    position: { x: -400, y: 150 },
  },
  {
    id: "3",
    ...multiNodeBase,
    data: {
      targets: [
        { id: "a", style: { top: 10 }, position: "left" },
        { id: "b", style: { top: 40 }, position: "left" },
      ],
      label: (
        <NodeLabel title="CÁLCULO AVANZADO" subtitle="1° Año" />
      ),
    },
    position: { x: 0, y: 75 },
  },
  {
    id: "4",
    ...base,
    data: {
      label: (
        <NodeLabel title="LÓGICA SIMBÓLICA" subtitle="1° Año" />
      ),
    },
    position: { x: -400, y: 245 },
  },
  {
    id: "5",
    ...base,
    data: {
      label: (
        <NodeLabel title="SISTEMAS DE INFORMACIÓN" subtitle="1° Año" />
      ),
    },
    position: { x: -400, y: 320 },
  },
  {
    id: "6",
    ...base,
    data: {
      label: (
        <NodeLabel title="PROGRAMACIÓN LÓGICA" subtitle="1° Año" />
      ),
    },
    position: { x: -400, y: 415 },
  },
  {
    id: "7",
    ...base,
    data: {
      label: (
        <NodeLabel title="IDIOMA EXTRANJERO I" subtitle="1° Año" />
      ),
    },
    position: { x: -400, y: 510 },
  },
  {
    id: "8",
    ...base,
    data: {
      label: (
        <NodeLabel title="PROGRAMACIÓN ORIENTADA A OBJETOS" subtitle="1° Año" />
      ),
    },
    position: { x: 0, y: 406 },
  },
  {
    id: "9",
    ...base,
    data: {
      label: (
        <NodeLabel title="MATEMÁTICA DISCRETA" subtitle="1° Año" />
      ),
    },
    position: { x: 0, y: 310 },
  },
  {
    id: "10",
    ...base,
    data: {
      label: (
        <NodeLabel title="ARQUITECTURA DEL COMPUTADOR" subtitle="1° Año" />
      ),
    },
    position: { x: 0, y: 175 },
  },
  {
    id: "11",
    ...base,
    data: {
      label: (
        <NodeLabel title="IDIOMA EXTRANJERO II" subtitle="1° Año" />
      ),
    },
    position: { x: 0, y: 510 },
  },
  {
    id: "12",
    ...base,
    data: {
      label: (
        <NodeLabel title="LENGUAJES FORMALES Y COMPUTABILIDAD" subtitle="2° Año" />
      ),
    },
    position: { x: 275, y: 260 },
  },
  {
    id: "13",
    ...base,
    data: {
      label: (
        <NodeLabel title="ALGORITMOS Y ESTRUCTURAS DE DATOS I" subtitle="2° Año" />
      ),
    },
    position: { x: 275, y: 160 },
  },
  {
    id: "14",
    ...base,
    data: {
      label: (
        <NodeLabel title="IDIOMA EXTRANJERO III" subtitle="2° Año" />
      ),
    },
    position: { x: 275, y: 510 },
  },
  {
    id: "15",
    ...base,
    data: {
      label: (
        <NodeLabel title="GRUPO Y LIDERAZGO" subtitle="2° Año" />
      ),
    },
    position: { x: 275, y: 75 },
  },
  {
    id: "16",
    ...base,
    data: {
      label: (
        <NodeLabel title="TALLER DE ALGORITMOS Y ESTRUCTURAS DE DATOS I" subtitle="2° Año" />
      ),
    },
    position: { x: 275, y: 390 },
  },
  {
    id: "17",
    ...base,
    data: {
      label: (
        <NodeLabel title="ESTADÍSTICA Y PROBABILIDAD" subtitle="2° Año" />
      ),
    },
    position: { x: 275, y: 620 },
  },


  {
    id: "e1-3a",
    source: "1",
    target: "3",
    sourceHandle: "a",
    targetHandle: "a",
    type: "smart",
  },
  {
    id: "e2-3b",
    source: "2",
    target: "3",
    sourceHandle: "a",
    targetHandle: "b",
    type: "smart",
  },
  {
    id: "e6-8",
    source: "6",
    target: "8",
    type: "smoothstep",
  },
  {
    id: "e7-11",
    source: "7",
    target: "11",
    type: "smoothstep",
  },
  {
    id: "e8-16",
    source: "8",
    target: "16",
    type: "smoothstep",
  },
];

export default materiasDeInformatica;
