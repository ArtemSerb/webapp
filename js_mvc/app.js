import './init.js'
import { TodoController } from "./Controller/TodoController.js";
import { C_PATH_TO_MODE } from "./init.js";

// Роутер, определяет режим работы контроллера по урлу страницы
const controller = new TodoController(C_PATH_TO_MODE[
  new URL(location.href).pathname.split('/').findLast(() => true)
])

// Торжественный запуск приложения
controller.start()
