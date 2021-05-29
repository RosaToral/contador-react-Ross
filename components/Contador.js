//Crear una función que regrese una etiqueta de html
//Las funcionalidades extras van dentro de la función creada
//(funciones dentro de funciones)

const Contador = () => {
  const [contador, setContador] = React.useState(0);

  /*
    useState regresa un arreglo con dos objetos:
    el primero objeto es un valor que nosotros le demos a una variable
    el segundo objeto es una función que va a usaarse para modificar la variable
    Ambos se pueden guardar en una variable y acceder por posiciones (arreglo = [0, function() {...}])
    o el arreglo se puede desestructurar para utilizar cada cosa como una variable a parte.
  */

  const sumar = () => setContador(contador + 1);

  const restar = () => setContador(contador - 1);

  return (
    <div>
      <h1>Contador: <span className={contador < 0 ? "menor" : "mayor"}>{contador}</span></h1>
      <hr />
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
}
