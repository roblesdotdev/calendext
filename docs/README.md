<details>
<summary><h3>Calendar: Frontend developer challenge</h3></summary>

Hola Frontend Developer! Tu desafío consiste en crear un calendario de eventos
utilizando ReactJs y NextJs. A continuación, te proporcionaré los detalles del
desafío:

Deberás construir una aplicación de calendario de eventos que permita a los
usuarios ver y administrar sus eventos programados. La aplicación deberá mostrar
un calendario mensual con la capacidad de navegar entre meses. Los usuarios
podrán agregar nuevos eventos, editar eventos existentes y eliminar eventos.
Además, podrán ver los detalles de un evento específico al hacer clic en él.

## Requisitos

La aplicación debe estar desarrollada utilizando ReactJs y Next.js. Utiliza el
enrutamiento dinámico de Next.js para mostrar los detalles de un evento cuando
se hace clic en él. Implementa la funcionalidad de agregar, editar y eliminar
eventos. Asegúrate de manejar la navegación entre meses, permitiendo a los
usuarios ver eventos de meses anteriores o futuros.

## Recomendaciones

Aquí hay algunas recomendaciones adicionales para ayudarte a completar el
desafío con éxito:

- Utiliza componentes reutilizables para mantener el código limpio y modular.
- Organiza tu código de manera ordenada y estructurada. Separa las
  responsabilidades en diferentes archivos y carpetas según corresponda.
- Utiliza Redux o cualquier otra biblioteca de gestión de estado de tu elección
  para manejar el estado de la aplicación.
- Asegúrate de seguir las mejores prácticas de control de versiones en GitHub.
  Crea un repositorio público y realiza commits significativos. Utiliza ramas y
  Pull Requests para mantener un flujo de trabajo limpio y colaborativo.
- Proporciona una documentación clara y concisa del proyecto. Explica la
  estructura del código, cómo se relacionan los componentes y cualquier otra
  información relevante.

## Funcionalidades adicionales (opcional)

Si deseas mostrar tus habilidades y agregar funcionalidades adicionales a la
aplicación, aquí hay algunas ideas:

- Permitir a los usuarios establecer recordatorios para eventos.
- Implementar autenticación de usuarios para que cada usuario tenga su propio
  calendario.
- Aplica estilos y diseño responsivo para que la aplicación se vea bien en
  diferentes dispositivos y tamaños de pantalla.
- Agregar la opción de repetición periódica de eventos, como eventos semanales o
  mensuales.
- Añadir opciones de filtrado para mostrar solo ciertos tipos de eventos.
</details>

# MVP

- [x] Inicializar un proyecto con Next.js: Configurar un nuevo proyecto
      utilizando Next.js como framework de React.js para el desarrollo web.
- [x] Configurar reglas de formato para todo el proyecto:
  - [x] Engines: Especificar las versiones mínimas y recomendadas de Node.js y
        NPM para el proyecto.
  - [x] ESLint: Configurar las reglas de linting para mantener consistencia en
        el código y detectar posibles errores.
  - [x] Prettier: Establecer las reglas de formateo automático para garantizar
        un estilo de código uniforme.
  - [x] Git hooks: Configurar hooks de Git para validar el codigo
        automáticamente antes de cada commit.
- [ ] Establecer un sistema de diseño básico con Tailwind:
  - [ ] Definir la paleta de colores: Seleccionar una combinación de colores que
        se ajuste al estilo y la identidad visual del proyecto.
  - [ ] Seleccionar fuentes adecuadas: Elegir tipografías apropiadas para el
        proyecto y configurarlas en el sistema.
  - [ ] Crear componentes básicos como botones y tarjetas: Diseñar y desarrollar
        componentes reutilizables que sigan las directrices de diseño
        establecidas.
- [x] Definir y configurar un método para la persistencia de datos:
  - [x] Configurar Prisma como ORM: Establecer la conexión con la base de datos
        y configurar el ORM (Object-Relational Mapping) para interactuar con
        ella.
  - [x] Definir el esquema/modelo de datos: Diseñar la estructura de la base de
        datos y definir los modelos necesarios para el proyecto.
  - [x] Ingresar datos "dummy" para pruebas: Crear registros de prueba en la
        base de datos para verificar el funcionamiento de la persistencia de
        datos.
- [x] Agregar un sistema de autenticación:
  - [x] Autenticación con GitHub: Proporcionar la opción de autenticación
        utilizando las cuentas de GitHub.
  - [ ] Autenticación con Google: Permitir a los usuarios autenticarse
        utilizando sus cuentas de Google.
  - [x] Utilizar Next.js Middleware para proteger las rutas.
  
- [ ] Implementar operaciones CRUD básicas para los eventos de cada usuario:
  - [ ] Permitir a los usuarios crear eventos: Proporcionar un formulario o
        interfaz para que los usuarios creen nuevos eventos.
  - [ ] Permitir a los usuarios listar y buscar eventos por nombre: Mostrar una
        lista de eventos y permitir a los usuarios buscar eventos específicos
        por su nombre.
  - [ ] Permitir a los usuarios modificar eventos existentes: Permitir a los
        usuarios realizar cambios en los eventos existentes, como editar la
        información o la fecha.
  - [ ] Permitir a los usuarios explorar eventos por fecha: Proporcionar una
        opción para filtrar eventos por fecha, permitiendo a los usuarios ver
        eventos programados para una fecha específica o un rango de fechas.
  - [ ] Permitir a los usuarios ver el detalle de un evento: Implementar una
        página o modal que muestre la información completa de un evento,
        incluyendo detalles como la descripción, ubicación, horario, etc.
  - [ ] Permitir a los usuarios explorar eventos por categoría: Agregar una
        funcionalidad de búsqueda o filtrado por categoría, para que los
        usuarios puedan ver eventos específicos según su categoría.
  - [ ] Implementar la funcionalidad de eliminar eventos con opción de
        arrepentimiento: Dar a los usuarios la capacidad de eliminar eventos,
        pero proporcionar la opción de deshacer la acción en caso de
        arrepentimiento.
- [ ] Crear una página de inicio informativa: Diseñar y desarrollar una página
      de inicio que proporcione información relevante sobre el proyecto, sus
      características y su propósito.

## Extra

- [ ] Implementar un tema oscuro: Agregar la opción de cambiar entre un tema
      claro y un tema oscuro en la interfaz de usuario, permitiendo a los
      usuarios seleccionar su preferencia.
- [ ] Configurar notificaciones por correo electrónico: Integrar un servicio de
      envío de correos electrónicos para enviar notificaciones a los usuarios,
      como recordatorios de eventos, actualizaciones importantes, etc.
- [ ] Implementar la funcionalidad de compartir eventos: Agregar la opción de
      compartir un evento a través de enlaces o mediante la integración con
      redes sociales, lo que permitirá a los usuarios compartir eventos
      específicos con otras personas a través de diferentes canales.
