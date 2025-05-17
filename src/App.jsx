function App() {

  return (
    <>
      <form>
        {/* nombre */}
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" />
        {/* apellido */}
        <label htmlFor="correo">Correo:</label>
        <input type="email" />
        {/* contraseña */}
        <label htmlFor="contraseña">Contraseña:</label>
        <input type="password" />
        {/* confirmarContraseña */}
        <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
        <input type="password" />
        {/* fechaNacido */}
        <label htmlFor="fechaNacido">Fecha Nacimiento:</label>
        <input type="date" />
        {/* pais */}
        <label htmlFor="pais">Pais:</label>
        <select >
          <option value="colombia">Colombia</option>
          <option value="mexico">Mexico</option>
          <option value="argentina">Argentina</option>
        </select>
        {/* fotoPerfil */}
        <label htmlFor="fotoPerfil">Foto Perfil:</label>
        <input type="file" />
        {/* terminosCondiciones */}
        <label htmlFor="terminosCondiciones">Aceptar terminos y condiciones:</label>
        <input type="checkbox" />
        <button type="button">Enviar</button>
      </form>
    </>
  )
}

export default App
