import React, {Fragment, useState} from 'react';
import Header from './Header';
import Footer from './Componets/Footer';
//import producto from '.componenetes/producto';
import Producto from './Components/Producto';

function App() {
 //class App extends Component {
  //  render(){

  //Crear listado de productos
  const [productos] = useState([
    {id:1, nombre: 'Camisa REactJS', precio:50},
    {id:2, nombre: 'Camisa vUEjs', precio:50},
    {id:3, nombre: 'Camisa NODEJS', precio:50},
    {id:4, nombre: 'Camisa ANGULAR', precio:50},
  ]);
    //obtener la fecha
    const FECHA = new Date().getFullYear();
  return (
    <Fragment>
     <Header  titulo ='Tienda Virtual'/>
     <h1>Lista de productos</h1>
     {productos.map(producto => (
       <Producto
        producto={producto}
       />
     ))}
     <Footer fecha={FECHA} />
    </Fragment>
  );
}
 //}

export default App;
