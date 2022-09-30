require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    //Establecer las tareas
  }

  await pausa();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descrição:");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
      case "3":
        break;
    }

    // guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
