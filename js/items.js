const carreras = [
    {
        id: 1,
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN CIENCIAS DE LA ADMINISTRACIÓN",
        image: "img/teamwork-3213924_1280.jpg",
        rating: 4,
        descripcion: "El Profesorado para el Nivel Secundario en Ciencias de la Administración es una carrera que se enfoca en la formación de profesores altamente capacitados para enseñar los principios de la administración y la gestión de negocios a estudiantes de nivel secundario. Los estudiantes de esta carrera adquieren un profundo entendimiento de conceptos relacionados con la gestión empresarial, economía, y técnicas administrativas. Además, desarrollan habilidades pedagógicas para comunicar de manera efectiva estos conceptos a sus futuros estudiantes. Este programa académico fomenta la formación de docentes capaces de inspirar a jóvenes a comprender y apreciar los aspectos cruciales del mundo empresarial y la administración, preparándolos para futuras carreras en el campo de los negocios o la educación.",

        salidasLaborales: ["Profesor en escuelas secundarias", "Asesor en el ámbito empresarial"],
        categoria: 'Profesorado',
        duracion: 4,
        planDeEstudio: "El plan de estudio incluye cursos de administración, economía, pedagogía, y prácticas en escuelas secundarias. Los estudiantes también deben completar una tesis de grado al final de la carrera."
    },
    {
        id: 2,
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN GEOGRAFÍA",
        image: "img/travel-2650303_1280.jpg",
        rating: 4,
        descripcion: "El Profesorado para el Nivel Secundario en Geografía es un programa de formación dirigido a futuros docentes de Geografía en el nivel secundario. Esta carrera se centra en el estudio de los aspectos geográficos del mundo, incluyendo la comprensión de patrones climáticos, distribución de población y procesos socioeconómicos. Los estudiantes de esta carrera se sumergen en la exploración de conceptos geográficos y desarrollan habilidades para enseñar de manera efectiva a los jóvenes. Los graduados de esta carrera pueden inspirar a las generaciones futuras a comprender la importancia de la geografía y su influencia en la toma de decisiones en el mundo real.",

        salidasLaborales: ["Profesor en escuelas secundarias", "Planificador urbano o regional"],
        categoria: 'Profesorado',
        duracion: 4,
        planDeEstudio: "El plan de estudio abarca temas de geografía física y humana, cartografía, y métodos de enseñanza. Los estudiantes realizan prácticas en escuelas secundarias y completan una tesis al final de la carrera."
    },
    {
        id: 3,
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO DE HISTORIA",
        image: "img/books-2606859_1280.jpg",
        rating: 4,
        descripcion: "El Profesorado para el Nivel Secundario de Historia es una carrera diseñada para la formación de docentes altamente cualificados en la enseñanza de la historia a estudiantes de nivel secundario. Los estudiantes de esta carrera exploran eventos históricos, investigan contextos culturales y adquieren conocimientos sobre diversas épocas. Además, desarrollan habilidades pedagógicas para transmitir la fascinación por la historia a sus alumnos. Los graduados de esta carrera desempeñan un papel fundamental en la preservación y difusión del conocimiento histórico, ya sea como educadores en escuelas secundarias o como investigadores en el campo de la historia.",

        salidasLaborales: ["Profesor en escuelas secundarias", "Investigador histórico"],
        categoria: 'Profesorado',
        duracion: 4,
        planDeEstudio: "El plan de estudio incluye cursos de historia universal, historia local, metodología de enseñanza, y pasantías en instituciones relacionadas con la historia. Los estudiantes deben completar una tesis al final de la carrera."
    },
    {
        id: 4,
        nombre: "PROFESORADO DE INGLÉS",
        image: "img/english-2724442_1280.jpg",
        rating: 5,
        descripcion: "El Profesorado de Inglés es una carrera destinada a la formación de profesores de inglés altamente competentes. Los estudiantes de esta carrera se sumergen en el estudio de la gramática, la pronunciación y la literatura en inglés. Además de dominar el idioma, desarrollan habilidades pedagógicas para enseñar inglés de manera efectiva a estudiantes de nivel secundario. Los graduados de esta carrera desempeñan un papel crucial en la difusión del idioma inglés y pueden ejercer como profesores en escuelas secundarias, institutos de idiomas, o incluso como traductores e intérpretes en el ámbito profesional.",

        salidasLaborales: ["Profesor de inglés", "Traductor o intérprete"],
        categoria: 'Profesorado',
        duracion: 4,
        planDeEstudio: "El plan de estudio abarca cursos de gramática, fonética, literatura en inglés y metodología de enseñanza. Los estudiantes realizan prácticas en escuelas secundarias y completan una tesis al final de la carrera."

    },
    {
        id: 5,
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN LENGUA Y LITERATURA",
        image: "img/glasses-1052010_1280.jpg",
        rating: 4,
        descripcion: "El Profesorado para el Nivel Secundario en Lengua y Literatura se enfoca en la formación de docentes especializados en la enseñanza de la lengua y la literatura en el nivel secundario. Los estudiantes adquieren un profundo conocimiento de la gramática, la composición escrita y la literatura. Además, desarrollan habilidades pedagógicas para inspirar a los jóvenes a comprender y apreciar la riqueza del lenguaje y la literatura. Los graduados pueden desempeñar roles como profesores de Lengua y Literatura en escuelas secundarias o incursionar en la edición y la crítica literaria.",

        salidasLaborales: ["Profesor de Lengua y Literatura", "Editor o crítico literario"],
        categoria: 'Profesorado',
        duracion: 4,
        planDeEstudio: "El plan de estudio incluye cursos de gramática, literatura, redacción, y pedagogía. Los estudiantes realizan prácticas en escuelas secundarias y completan una tesis al final de la carrera."

    },
    {
        id: 6,
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN MATEMÁTICA",
        image: "img/board-4855963_1280.jpg",
        rating: 5,
        descripcion: "El Profesorado para el Nivel Secundario en Matemática se centra en la formación de profesores altamente calificados en el campo de las matemáticas. Los estudiantes exploran conceptos matemáticos avanzados y técnicas de enseñanza. Además de dominar las matemáticas, desarrollan habilidades pedagógicas para enseñar de manera efectiva a los estudiantes de nivel secundario. Los graduados de esta carrera son esenciales para fomentar el entendimiento de las matemáticas y pueden desempeñar un papel crucial como profesores o analistas de datos en diversas industrias.",

        salidasLaborales: ["Profesor de Matemáticas", "Analista de datos o estadísticas"],
        categoria: 'Profesorado',
        duracion: 4,
        planDeEstudio: "El plan de estudio abarca cursos de matemáticas avanzadas, pedagogía, metodología de enseñanza, y pasantías en instituciones educativas. Los estudiantes deben completar una tesis al final de la carrera."
    },
    {
        id: 7,
        nombre: "TECNICATURA SUPERIOR EN DESARROLLO DE SOFTWARE",
        image: "img/code-820275_1280.jpg",
        rating: 3,
        descripcion: "La Tecnicatura Superior en Desarrollo de Software es un programa académico diseñado para formar profesionales altamente capacitados en el campo del desarrollo de software. Los estudiantes adquieren habilidades sólidas en programación, diseño de software y gestión de proyectos. Esta carrera prepara a los graduados para carreras en el desarrollo de aplicaciones, programación de software y análisis de sistemas. Además, los graduados son altamente solicitados en la industria de la tecnología para crear soluciones informáticas innovadoras.",

        salidasLaborales: ["Desarrollador de software", "Programador", "Analista de sistemas"],
        categoria: 'Tecnicatura',
        duracion: 3,
        planDeEstudio: "El plan de estudio incluye cursos de programación, diseño de software, gestión de proyectos y prácticas en empresas de desarrollo de software. Los estudiantes deben completar un proyecto de desarrollo al final de la carrera."
    },
    {
        id: 8,
        nombre: "TECNICATURA SUPERIOR EN BROMATOLOGÍA",
        image: "img/kitchen-4024032_1280.jpg",
        rating: 3,
        descripcion: "La Tecnicatura Superior en Bromatología es un programa académico especializado en la seguridad alimentaria y la regulación de productos alimenticios. Los estudiantes de esta carrera adquieren conocimientos sobre higiene alimentaria, control de calidad de alimentos y regulaciones gubernamentales relacionadas con los productos alimenticios. Los graduados de esta carrera pueden desempeñar un papel esencial en laboratorios de análisis de alimentos, empresas de control de calidad de alimentos y en la supervisión de procesos alimentarios para garantizar la seguridad y calidad de los productos alimenticios que llegan a los consumidores.",

        salidasLaborales: ["Analista de alimentos", "Control de calidad de alimentos", "Supervisión de procesos alimentarios"],
        categoria: 'Tecnicatura',
        duracion: 3,
        planDeEstudio: "El plan de estudio incluye cursos de microbiología, control de calidad, normativas alimentarias y prácticas en laboratorios de análisis de alimentos. Los estudiantes deben completar un proyecto final al final de la carrera."
    }
];
