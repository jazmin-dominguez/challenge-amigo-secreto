# 🎁 Amigo Secreto - Aplicación de Sorteo

Una aplicación web interactiva para organizar sorteos de "Amigo Secreto" de forma fácil y divertida. Permite agregar nombres de participantes y realizar sorteos aleatorios con una interfaz moderna y responsive.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo](#-demo)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades Detalladas](#-funcionalidades-detalladas)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Autor](#-autor)

## ✨ Características

- ✅ **Agregar participantes** - Interfaz intuitiva para agregar nombres
- ✅ **Validaciones inteligentes** - Previene nombres vacíos y duplicados
- ✅ **Sorteo aleatorio** - Algoritmo de selección completamente aleatorio
- ✅ **Interfaz responsive** - Funciona perfectamente en móviles y desktop
- ✅ **Eliminación de participantes** - Posibilidad de quitar nombres de la lista
- ✅ **Diseño moderno** - UI atractiva con Google Fonts y colores vibrantes
- ✅ **Accesibilidad** - Implementación de ARIA labels y navegación por teclado
- ✅ **Experiencia de usuario optimizada** - Auto-focus y atajos de teclado

## 🎯 Demo

### 🖥️ Vista Desktop
*[Aquí iría una captura de pantalla de la versión desktop]*

### 📱 Vista Mobile
*[Aquí iría una captura de pantalla de la versión móvil]*

### 🎬 Video Demostración
*[Aquí iría un GIF o video corto mostrando el funcionamiento]*

## 🚀 Instalación

### Prerequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias adicionales

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd amigo-secreto
   ```

3. **Abre el archivo index.html en tu navegador**
   - Doble clic en `index.html`
   - O arrastra el archivo al navegador
   - O usa un servidor local como Live Server en VSCode

¡Listo! La aplicación estará funcionando inmediatamente.

## 🎮 Uso

### Agregar Participantes
1. Escribe el nombre del participante en el campo de texto
2. Haz clic en el botón "Añadir" o presiona `Enter`
3. El nombre aparecerá en la lista de participantes

### Realizar Sorteo
1. Asegúrate de tener al menos un participante en la lista
2. Haz clic en el botón "Sortear amigo"
3. ¡El resultado aparecerá destacado en la pantalla!

### Gestionar Participantes
- **Eliminar**: Haz clic en cualquier nombre de la lista para eliminarlo
- **Ver total**: El contador muestra automáticamente cuántos participantes hay

### Atajos de Teclado
- `Enter` - Agregar participante
- `Escape` - Enfocar campo de texto (si se implementa)

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con variables CSS y Flexbox
- **JavaScript ES6+** - Lógica de aplicación vanilla
- **Google Fonts** - Tipografías Inter y Merriweather

### Librerías y Frameworks
- Sin dependencias externas
- Vanilla JavaScript puro
- CSS Grid y Flexbox para layout responsive

## 📁 Estructura del Proyecto

```
amigo-secreto/
│
├── index.html              # Página principal
├── style.css              # Estilos de la aplicación
├── app.js                 # Lógica de JavaScript
├── README.md              # Documentación del proyecto
│
├── assets/                # Recursos multimedia
│   ├── amigo-secreto.png  # Imagen principal
│   └── play_circle_outline.png  # Icono del botón sortear
│
```

## 🔧 Funcionalidades Detalladas

### Gestión de Participantes

#### Agregar Participante (`agregarAmigo()`)
- Valida que el campo no esté vacío
- Previene nombres duplicados
- Limpia automáticamente el campo después de agregar
- Auto-enfoca el campo para agregar el siguiente

#### Mostrar Lista (`mostrarAmigos()`)
- Actualiza dinámicamente la lista visual
- Asigna índices únicos para gestión
- Mantiene el orden de inserción

#### Eliminar Participante (`eliminarAmigo()`)
- Confirmación antes de eliminar
- Actualiza automáticamente la lista
- Limpia resultados previos

### Sistema de Sorteo

#### Sorteo Aleatorio (`sortearAmigo()`)
- Genera números aleatorios con `Math.random()`
- Valida que existan participantes antes del sorteo
- Recomendación para mínimo 2 participantes

#### Mostrar Resultado (`mostrarResultado()`)
- Presenta el resultado de forma destacada
- Incluye emojis para mejor experiencia visual
- Limpia resultados anteriores automáticamente

### Validaciones y UX

- **Campos vacíos**: Alerta informativa y re-enfoque
- **Duplicados**: Prevención con mensaje explicativo
- **Lista vacía**: Validación antes del sorteo
- **Navegación por teclado**: Soporte completo para `Enter`
- **Responsive**: Adaptación automática a diferentes dispositivos

## 📸 Capturas de Pantalla

### Estado Inicial
*Captura mostrando la interfaz limpia al cargar la aplicación*

### Agregando Participantes
*Captura del proceso de agregar nombres a la lista*

### Lista de Participantes
*Vista de la lista completa con múltiples nombres*

### Resultado del Sorteo
*Pantalla mostrando el resultado destacado del sorteo*

### Vista Móvil
*Capturas de la experiencia en dispositivos móviles*

## 🎨 Personalización

### Colores
Puedes modificar los colores principales en `:root` del archivo `style.css`:

```css
:root {
    --color-primary: #4B69FD;      /* Azul principal */
    --color-secondary: #FFF9EB;    /* Fondo claro */
    --color-button: #fe652b;       /* Botón sortear */
    --color-button-hover: #e55720;  /* Hover del botón */
}
```

### Tipografía
Las fuentes se pueden cambiar modificando las importaciones de Google Fonts en el `<head>` del HTML.

## 🧪 Testing

### Tests Manuales Realizados
- ✅ Agregar nombres válidos
- ✅ Validación de campos vacíos
- ✅ Prevención de duplicados
- ✅ Sorteo con diferentes cantidades de participantes
- ✅ Eliminación de participantes
- ✅ Responsividad en diferentes dispositivos
- ✅ Navegación por teclado
- ✅ Accesibilidad con lectores de pantalla

### Casos de Prueba
1. **Campo vacío**: Intentar agregar sin texto
2. **Nombre duplicado**: Agregar el mismo nombre dos veces
3. **Sorteo sin participantes**: Intentar sortear con lista vacía
4. **Sorteo normal**: Con 2+ participantes
5. **Eliminación**: Quitar participantes de la lista

## 🚀 Posibles Mejoras

- [ ] Historial de sorteos anteriores
- [ ] Exportar resultados a PDF/imagen
- [ ] Animaciones en el sorteo
- [ ] Sonidos de confirmación
- [ ] Modo oscuro
- [ ] Guardar listas en localStorage
- [ ] Compartir resultados en redes sociales
- [ ] Múltiples listas de participantes
- [ ] Configuración de reglas personalizadas

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Mantén el código JavaScript vanilla (sin frameworks)
- Sigue las convenciones de nomenclatura existentes
- Incluye documentación para nuevas funcionalidades
- Testea en múltiples navegadores antes de enviar PR

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Jazmin Dominguez Marcos**
- GitHub: https://github.com/jazmin-dominguez
- LinkedIn: linkedin.com/in/jazmin-dominguez-marcos-7b0488324
- Email: jazmindguezm23@gmail.com


---

⭐ **Si te gustó este proyecto, ¡dale una estrella en GitHub!**

*Desarrollado con ❤️ para hacer más divertidos los intercambios de regalos*
