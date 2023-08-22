window.env = {
  REACT_APP_NAME: "telehuertos",
  REACT_APP_PROJECTS: [
    {
      id: 1,
      name: "caja-chica",
      description: "Descripción de caja-chica",
      db: "todo",
      collection: "Item",
    },
    {
      id: 2,
      name: "telehuertos",
      description: "Descripción de telehuertos",
      db: "Telehuertos",
      collection: "file",
    },
    {
      id: 3,
      name: "tele-ejemplo",
      description: "Descripción del tele-ejemplo",
      db: "db-ejemplo",
      collection: "collection-ejemplo",
    },
  ],
  //validacion si permite ver la lista de proyectos y si permite seleccionar un proyecto
  REACT_APP_PROJECT_LIST: true,
};
