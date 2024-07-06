import { CardProps } from "../index";
import { frontDevelop, backDevelop, projects, design} from "../../assets";

export const cardsData: CardProps[] = [
    {
        imageUrl: frontDevelop,
        title: "Desarrollo Web",
        text: "Creación de sitios web modernos y funcionales",
    },
    {
        imageUrl: backDevelop,
        title: "Desarrollo Backend",
        text: "Programación del servidor y base de datos",
    },
    {
        imageUrl:projects,
        title: "Gestión de Proyectos",
        text: "Planificación y ejecución eficiente de proyectos",
    },
    {
        imageUrl: design,
        title: "Diseño UX/UI",
        text: "Diseño centrado en la experiencia del usuario",
    }
];
