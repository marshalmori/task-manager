const Tarea = require("./tarea");
require("colors");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    if (tareas.length > 0) {
      tareas.forEach((tarea) => {
        this._listado[tarea.id] = tarea;
      });
    }
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    // SOLUÇÃO 1
    // console.log();
    // if (this.listadoArr.length > 0) {
    //   this.listadoArr.forEach((tarea, index) => {
    //     tarea.completadoEn === null
    //       ? console.log(
    //           `${String(index + 1).green}${".".green} ${tarea.desc} :: ${
    //             "Pediente".red
    //           } `
    //         )
    //       : console.log(
    //           `${String(index + 1).green}${".".green} ${tarea.desc} :: ${
    //             "Completado".green
    //           }`
    //         );
    //   });
    // } else {
    //   console.log(`${">>".red} VOCÊ NÃO POSSUI TAREFAS CRIADAS. ${"<<".red}`);
    // }

    // SOLUÇÃO 2
    console.log();

    if (this.listadoArr.length > 0) {
      this.listadoArr.forEach((tarea, index) => {
        const idx = `${index + 1}`.green;
        const { desc, completadoEn } = tarea;
        const estado = completadoEn ? "Completado".green : "Pendiente".red;
        console.log(`${idx} ${desc} :: ${estado}`);
      });
    } else {
      console.log(`${">>".red} VOCÊ NÃO POSSUI TAREFAS CRIADAS. ${"<<".red}`);
    }
  }
}

module.exports = Tareas;
