import React, { useState } from "react";
//include images into your bundle

const Home = ()=> {
const [inputUser , setInputUser]= useState()
const [inputContraseña , setInputContraseña]= useState()
const [namePerfil , setNamePerfil]=useState("Login user")
const [fotoPerfil , setFotoPerfil] = useState("https://green.excertia.com/wp-content/uploads/2020/04/perfil-empty.png")

const usuarios =[
  {
  Nombre: "Maria Isabel",
  Apellidos:"Valero Laguna",
  email:"mery@hotmail.es",
  userName:"meryvl",
  contraseña:"meryvl",
  urlfoto: " https://concepto.de/wp-content/uploads/2018/10/bosque2-e1539893598295.jpg"
  },
  {
      Nombre: "user",
      Apellidos:"",
      email:"Antonio@hotmail.es",
      userName:"user",
      contraseña:"user",
      urlfoto: " https://concepto.de/wp-content/uploads/2018/10/bosque2-e1539893598295.jpg"
  }, 
  ]


  
const login =(e)=>{
  e.preventDefault()
  
    usuarios.forEach((user)=> {
      if(inputUser == user.userName && inputContraseña == user.contraseña){
        setNamePerfil(user.userName)
        setFotoPerfil(user.urlfoto)
        setInputUser("")
        setInputContraseña("")
      } 
    });
   

  }


	return (
		<div>
<nav className=" Encabezado navbar d-flex justify-content-start navbar-dark bg-dark mx-5  ">
<img className="iconoWeb" src="https://img.icons8.com/ios-filled/50/000000/gopro.png"/>
<h2 className="text-white px-2">My Web</h2>
</nav>

<div className="bodyPage mx-5">
  <div>
    <img className="fotoPerfil m-2" src={fotoPerfil} />
    <h3>{namePerfil}</h3>
    </div>

	  <form>
  <div className="mb-3">
	<h2 className="">Login Sesion {inputUser}</h2>
    <label className="form-label">User Name</label>
    <input type="text" className="form-control" value={inputUser} onChange={(e)=>setInputUser(e.target.value)}  />
    
  </div>
  <div className=" mb-3">
    <label for="exampleInputPassword1" className="form-label" >Contraseña</label>
    <input type="password" className="form-control" id="Password1"value={inputContraseña} onChange={(e)=>setInputContraseña(e.target.value)} />
  </div>
      <a href="#">I don't have a user</a>
    <div className=" d-flex justify-content-center">
      <button type="submit" className="btn btn-primary px-3 " onClick={login} >Enviar</button>
    </div>
  </form>
</div>

  </div>

	);
  }

export default Home;
