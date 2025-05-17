import { useForm } from "react-hook-form"

function App() {

  const { register, handleSubmit, formState={errors} } = useForm();
  const error = formState.errors;

  return (
    <>
      <form onSubmit={handleSubmit(data => {
        console.log(data);
      })}>
        {/* nombre */}
        <label htmlFor="nombre">Nombre:</label>
        <div>
          <input type="text" 
          {...register("nombre", {
            required: true
          })}
          />
          { 
            error.nombre && <span>campo requrido</span>
          }
        </div>
        {/* apellido */}
        <label htmlFor="correo">Correo:</label>
        <input type="email" 
          {...register("email")}
        />
        {/* contraseña */}
        <label htmlFor="contraseña">Contraseña:</label>
        <input type="password" 
          {...register("contraseña")}
        />
        {/* confirmarContraseña */}
        <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
        <input type="password" 
          {...register("confirmarContraseña")}
        />
        {/* fechaNacido */}
        <label htmlFor="fechaNacido">Fecha Nacimiento:</label>
        <input type="date" 
          {...register("fechaNacido")}
        />
        {/* pais */}
        <label htmlFor="pais">Pais:</label>
        <select 
          {...register("pais")}
        >
          <option value="colombia">Colombia</option>
          <option value="mexico">Mexico</option>
          <option value="argentina">Argentina</option>
        </select>
        {/* fotoPerfil */}
        <label htmlFor="fotoPerfil">Foto Perfil:</label>
        <input type="file" 
          {...register("fotoPerfil")}
        />
        {/* terminosCondiciones */}
        <label htmlFor="terminosCondiciones">Aceptar terminos y condiciones:</label>
        <input type="checkbox" 
          {...register("terminosCondiciones")}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
