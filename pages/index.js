import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return(<div>
          <div className='flex justify-center'>
              <h1 className='mt-12 text-4xl font-bold'>HISTORIAS DE USUARIO</h1>
          </div>
          <h1 className='ml-24 font-bold text-2xl'>Area Administrativa</h1>
          <div className='flex flex-wrap m-auto mt-2 ml-24 mr-24 h-auto rounded bg-opacity-60 shadow-2xl'>
            {/*POSTIT*/}
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Municipalidad</p><br />
              <p><span className='font-bold'>Puedo:</span> Actualizar datos</p><br />
              <p><span className='font-bold'>Para:</span> Mantener datos recientes activos</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> queremos tener todos los datos en orden</p><br />
              <p><span className='font-bold'>Cuando:</span> hagamos algun cambio en nuestra informacion como empresa</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitara el cambio de datos para actualizar</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Mostrarnos la informacion registrada para ver que es lo que necesitamos actualizar.
              <br />✅ Que nos notifique que los cambios se realizaron correctamente de una manera momentanea.<br />
              ✅Mostrarnos los datos modificados para ver si los ingresamos correctamente.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Municipalidad</p><br />
              <p><span className='font-bold'>Puedo:</span> seleccionar para Emitir Recibos</p><br />
              <p><span className='font-bold'>Para:</span> Para verificacion de rango de recibos activos</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesito saber si hay rango de recibos activos y con disponibilidad</p><br />
              <p><span className='font-bold'>Cuando:</span> necesite generar cantidades de recibos segun el pago</p><br />
              <p><span className='font-bold'>Entonces:</span></p> se activara la opcion o no dependiendo las necesidades<br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmarnos si tenemos la opcion activa o no.
              <br />✅ Si no la tenemos activa no habilitar el boton para ver la seccion de facturas<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Municipalidad</p><br />
              <p><span className='font-bold'>Puedo:</span> Permitir pagos parciales</p><br />
              <p><span className='font-bold'>Para:</span> Para que puedan pagar documentos parcialmente</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesito saber si puedo pagar parcialmente o solo pago completo</p><br />
              <p><span className='font-bold'>Cuando:</span> necesiten hacer el pago parcial de algo</p><br />
              <p><span className='font-bold'>Entonces:</span> tengo que verificar si esta activa o no esa bandera</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmarnos si tenemos la opcion activa o no.
              <br />✅ Si no la tenemos activa no habilitar el boton para ver la seccion de pagos parciales solo pago completo<br />
              ✅Sacarnos un reporte de los pagos parciales y pagos completos.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Nike</p><br />
              <p><span className='font-bold'>Puedo:</span> Permitir pagos desordenados</p><br />
              <p><span className='font-bold'>Para:</span> Saber si los pagos del cliente podran pagar en desorden o no</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos confirmar que los clientes puedan pagar ordenada o desordenadamente</p><br />
              <p><span className='font-bold'>Cuando:</span> necesiten hacer el pago de un mismo clientemrubro o referencia</p><br />
              <p><span className='font-bold'>Entonces:</span> si se desea ordenadamente no hay que activarlo y si se desea desordenadamente activarlo</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmarnos si tenemos la opcion activa o no.
              <br />✅ Si no la tenemos activa no habilitar el boton para ver la seccion de pagos en desorden<br />
              ✅Sacarnos un reporte de los pagos que hemos hecho.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Nike</p><br />
              <p><span className='font-bold'>Puedo:</span> Ver lista usuarios asociados</p><br />
              <p><span className='font-bold'>Para:</span> Poder tener clientes presentes y poder editarlos, etc</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos tener a la mano a los clientes y poder tener la info actualizada</p><br />
              <p><span className='font-bold'>Cuando:</span> necesitemos algun datos especifico de alguien afiliado</p><br />
              <p><span className='font-bold'>Entonces:</span> a la hora de tener la tabla tenemos facilidad de busqueda</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Mostrarnos datos completos de asociados.
              <br />✅ Tener botones de modificacion<br />
              ✅Actualizarlos constantemente en nuestros datos.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Nike</p><br />
              <p><span className='font-bold'>Puedo:</span> Permitir acciones a asociados</p><br />
              <p><span className='font-bold'>Para:</span> Que puedan tener roles (admin, admin de recibos, admin de afiliaciones)</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos tener orden en administracion de cada seccion</p><br />
              <p><span className='font-bold'>Cuando:</span> hagamos chequeo de asociados y saber quien tiene un rol especifico</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitara que se les agregue un rol a cada asociado</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Listar las acciones para poder darle un rol especifico al usuario.
              <br />✅La seccion de roles tiene que estar lo mas claro posible.<br />
              ✅Previo a esto lanzar notificacion de afiliado y que rol posee.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Nike</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una barra de busqueda</p><br />
              <p><span className='font-bold'>Para:</span> Buscar usuarios asociados e informacion necesaria.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos buscar la informacion necesaria de los asociados.</p><br />
              <p><span className='font-bold'>Cuando:</span> busquemos algo especifico o datos especificos de la persona</p><br />
              <p><span className='font-bold'>Entonces:</span> desplegarnos los datos buscados en la tabla</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Verificamos que la informacion brindada sea la correcta.
              <br />✅ Notificarnos que se encontro el dato solicitado.<br />
              ✅Mostrarnos toda la informacion de ese dato solicitado.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Mcdonalds</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un boton para agregar nuevos asociados</p><br />
              <p><span className='font-bold'>Para:</span> Incluir a asociados nuevos a la lista de usuarios</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos agregar nuevos asociados cuando llegue la solicitud</p><br />
              <p><span className='font-bold'>Cuando:</span> se llegue a solicitar una asociacion con la entidad.</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitara los datos y cuando se agregue lanzar la notificacion</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos si se anadio correctamente.
              <br />✅ Si no se agrego algun dato saltar una notificacion que se necesita ese dato.<br />
              ✅Mostrarnos los datos ingresados alfinal de la solicitud.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Mcdonalds</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un boton para editar asociados</p><br />
              <p><span className='font-bold'>Para:</span> Poder actualizar sus datos</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> quiero actualizar a mis asociados por medio de nuestra admin</p><br />
              <p><span className='font-bold'>Cuando:</span> soliciten el cambio de algun dato y ellos no puedan</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitara el dato a modificar utilizando los datos requeridos</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos si es la cuenta a modificar.
              <br />✅ El cambio de datos se tomara almenos en media hora dependiendo de la entidad y su servicio.<br />
              ✅Solicitar la informacion requerida antes de hacer los cambios para una validacion mas segura.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Color Vivo</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una seccion de Rango de Recibos</p><br />
              <p><span className='font-bold'>Para:</span> poder generarlos al momento de pago</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> neceitamos visualizar los datos de Rangos de recibos de asociados</p><br />
              <p><span className='font-bold'>Cuando:</span> estemos interesados en saber algun dato especifico de esa seccion</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitara la seccion y se mostraran todos los datos de todos los asociados</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos si es la cuenta a modificar.
              <br />✅ El cambio de datos se tomara almenos en media hora dependiendo de la entidad y su servicio.<br />
              ✅Solicitar la informacion requerida antes de hacer los cambios para una validacion mas segura.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Color Vivo</p><br />
              <p><span className='font-bold'>Puedo:</span> ver si tengo la bandera activada o no de Emision de Recibos con una notificacion</p><br />
              <p><span className='font-bold'>Para:</span> poder generar los recibos si la tengo activada.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos validar si emitimos recibos o no</p><br />
              <p><span className='font-bold'>Cuando:</span> cuando hagan la solicitud de generar un recibo</p><br />
              <p><span className='font-bold'>Entonces:</span> notificar si se hace el recibo o no dependiendo si esta activado</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Si no la tiene activada notificarle al usuario.
              <br />✅ Generar un bloqueo a la seccion de emision de recibos si no esta activa.<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Coca Cola</p><br />
              <p><span className='font-bold'>Puedo:</span> Tener un buscador de recibos</p><br />
              <p><span className='font-bold'>Para:</span> poder buscar la informacion con un recibo y obtener los datos de una forma mas agil.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> en algun momento tendremos que buscar algun recibo</p><br />
              <p><span className='font-bold'>Cuando:</span> no estemos claros con la informacion de algun afiliado</p><br />
              <p><span className='font-bold'>Entonces:</span> procederemos a solicitar la informacion de los datos de su recibo para buscarlo</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Solicitamos la informacion del recibo para buscarla.
              <br />✅ Si se encontro lanzar una notificacion de que todo se encontro correctamente.<br />
              ✅Si no se encontro notificarle al afiliado del inconveniente.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Coca Cola</p><br />
              <p><span className='font-bold'>Puedo:</span> Tener un boton de generacion de recibos</p><br />
              <p><span className='font-bold'>Para:</span> Crear Recibos necesarios.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitaremos generar recibos nuevos para clientes</p><br />
              <p><span className='font-bold'>Cuando:</span> se haga un nuevo pago de algun servicio.</p><br />
              <p><span className='font-bold'>Entonces:</span> Se generera depende el pago realizado y se le notificara al cliente</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos la creacion del recibo.
              <br />✅ Mandaremos una verificacion del recibo al cliente a ver si esta bien los datos.<br />
              ✅Al generarlo mandarle una notificacion de satisfactorio.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Puma</p><br />
              <p><span className='font-bold'>Puedo:</span> Tener un a tabla de afiliaciones</p><br />
              <p><span className='font-bold'>Para:</span> poder controlar el manejo de afiliaciones con la empresa y autorizar y rechazar nuevos afiliados</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitaremos controlar las afiliaciones de la gente.</p><br />
              <p><span className='font-bold'>Cuando:</span> cuando hayan nuevas afiliaciones o se retiren la afiliacion</p><br />
              <p><span className='font-bold'>Entonces:</span> mantener los datos actualizados y listados</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos que se desplieguen bien los afiliados y sus datos.
              <br />✅ Notificar si se agrego o retiro alguna afiliaion.<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Puma</p><br />
              <p><span className='font-bold'>Puedo:</span> Tener un buscador de afiliaciones</p><br />
              <p><span className='font-bold'>Para:</span> Buscar a los afiliados por su codigo de afiliacion y ver sus datos</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos buscar afiliados por cualquier tramite</p><br />
              <p><span className='font-bold'>Cuando:</span> algun afiliado tenga que hacer algo directamente con nosotros</p><br />
              <p><span className='font-bold'>Entonces:</span> Al encontrar los datos del afiliado notificarnos por medio de una notificacion emergente</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Al buscar la afiliacion notificar emergentemente que se encontro.
              <br />✅ Si no encontro la afiliacion notificarnoslo para solucionar. <br />
              ✅Si no se encontro notificarlo al afiliado para poder hacerlo manualmente.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Adidas</p><br />
              <p><span className='font-bold'>Puedo:</span> Tener una tabla de carga de saldos</p><br />
              <p><span className='font-bold'>Para:</span> poder controlar el manejo de pagos manuales y automaticos o poder solicitar nuevos archivos.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> para poder visualizar los saldos de los clientes</p><br />
              <p><span className='font-bold'>Cuando:</span> necesiten algun dato de pago o necesiten ver si se hizo la transaccion.</p><br />
              <p><span className='font-bold'>Entonces:</span> generar la tabla con todos los datos necesarios para brindar o conocer del cliente</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Solicitar la informacion de todos los saldos de todos los usuarios afiliados.
              <br />✅ Poder tener botones ahi de modificacion o de incremento de precios.<br />
              ✅Notificar al cliente si se modifico algun saldo o aplico un descuento.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Adidas</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un boton de anadir nuevo saldo</p><br />
              <p><span className='font-bold'>Para:</span> poder anadir o grabar los registros de los saldos de los clientes.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> aveces hay que agregar nuevos saldos pendientes a los clientes</p><br />
              <p><span className='font-bold'>Cuando:</span> hay alguna renovacion de servicio</p><br />
              <p><span className='font-bold'>Entonces:</span> se anade el monto nuevo y se le notifica al cliente</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos si se anadio correctamente el nuevo saldo.
              <br />✅ Se notifica por medio de correo electronico.<br />
              ✅Mostrarnos al finalizar el proceso la informacion del saldo.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Adidas</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un boton de descargar formato</p><br />
              <p><span className='font-bold'>Para:</span> poder descargar el archivo ya sea en CSV para poder tener los datos de otra manera y segura.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> siempre se va a querer tener guardado el formato en la computadora o el telefono.</p><br />
              <p><span className='font-bold'>Cuando:</span> los usuarios necesiten la informacion guardada.</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitara la informacion a descargar y al apachar boton esto se empezara a descargar</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos si se realizo la descarga.
              <br />✅ Notificamos que ya se hizo la descarga.<br />
              ✅Se solicita una verificacion si es la informacion correcta.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Adidas</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un boton de detalle de carga</p><br />
              <p><span className='font-bold'>Para:</span> poder ver la informacion referente al detalle de carga.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> ya que necesitamos ver los detalles de carga actualizados</p><br />
              <p><span className='font-bold'>Cuando:</span> necesitemos indormacion referente</p><br />
              <p><span className='font-bold'>Entonces:</span> solicitamos la informacion con ese boton</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos que entramos al detalle de carga.
              <br />✅ Soltamos toda la informacion requerida.<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Adidas</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una tabla donde se desplieguen los datos de carga</p><br />
              <p><span className='font-bold'>Para:</span> poder observar los datos como rubros, referencia, serie y monto a pagar</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos visualizar todos los datos de carga en el momento</p><br />
              <p><span className='font-bold'>Cuando:</span> se solicite en el boton de carga</p><br />
              <p><span className='font-bold'>Entonces:</span> imprimimos toda la informacion requerida en la tabla</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos que se mostraron los datos.
              <br />✅ El despliegue no puede tardar en aparecer.<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Microsoft</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una seccion de pagos recibidos</p><br />
              <p><span className='font-bold'>Para:</span> poder mantener el orden de pagos de los clientes.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> tenemos que visualizar los pagos que hemos recibido</p><br />
              <p><span className='font-bold'>Cuando:</span> un cliente haga un pago nosotros poder visualizarlo</p><br />
              <p><span className='font-bold'>Entonces:</span> notificarnos cuando se haya realizado un pago.</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅La seccion debera contener todos los datos de pagos.
              <br />✅ Solicitamos toda la informacion para tenerla lista y verificar datos.<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Microsoft</p><br />
              <p><span className='font-bold'>Puedo:</span> un buscador de pagos recibidos</p><br />
              <p><span className='font-bold'>Para:</span> poder buscar  pagos recibidos, rango de fechas, tarjeta de pago.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos buscar los pagos que nos han notificado que se realizaron</p><br />
              <p><span className='font-bold'>Cuando:</span> nos notifique la plataforma</p><br />
              <p><span className='font-bold'>Entonces:</span> buscamos el pago y verificamos que sea correcto</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos a busqueda que debe tener los datos del pago.
              <br />✅ La busqueda no puede durar nada de tiempo en buscar a menos que sea primera busqueda.<br />
              ✅Solicitamos los datos del pago para verificar los datos.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Microsoft</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un boton de descarga</p><br />
              <p><span className='font-bold'>Para:</span> poder generar el reporte  y poderse imprimir  en xls o csv</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> se necesitan los datos de los reportes en CSV</p><br />
              <p><span className='font-bold'>Cuando:</span> neceistemos cierta informacion de algun cliente relacionado</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicita la descarga del archivo y ya se empieza la descarga</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅El archivo contiene todo los datos requeridos sobre el reporte.
              <br />✅ El archivo no puede pesar tanto para que se inmediata.<br />
              ✅Podemos solicitar si la descarga fue correcta.</p><br />
            </div>
             {/*---------------------------------------------------------------------------------------------------------*/}
             <div className='bg-yellow-200 w-64 h-auto text-black mt-2 mb-2 p-2 rounded'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Microsoft</p><br />
              <p><span className='font-bold'>Puedo:</span> desplegar la tabla de pagos recibidos </p><br />
              <p><span className='font-bold'>Para:</span> poder ver los datos obtenidos en el buscador</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos llevar el manejo de pagos</p><br />
              <p><span className='font-bold'>Cuando:</span> cuando los clientes hagan un pago</p><br />
              <p><span className='font-bold'>Entonces:</span> se notifica que ya se recibio el pago por medio de esto</p><br />
            </div>
            <div className='bg-indigo-500 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Verificamos los pagos que se han realizado y los campos a contener.
              <br />✅ El pago no se debe tardar mas de 12 horas.<br />
              ✅Solicitar numero de pago para verificar.</p><br />
            </div>
          </div> 
             {/*---------------------------------------------------------------------------------------------------------*/}
          <h1 className='ml-24 font-bold text-2xl'>Area de Afiliado</h1>
          <div className='flex flex-wrap m-auto mt-2 ml-24 mr-24 h-auto rounded bg-opacity-60 shadow-2xl'>
               {/*---------------------------------------------------------------------------------------------------------*/}
             <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una seccion de editar perfil </p><br />
              <p><span className='font-bold'>Para:</span> poder modificar mis datos para que todo este actualizado</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> los usuarios queremos poder modificar el perfil si tenemos que actualizar datos</p><br />
              <p><span className='font-bold'>Cuando:</span> cuando algun dato este desactualizado y quiera el usuario actualizarlo</p><br />
              <p><span className='font-bold'>Entonces:</span> en esa seccion se solicitan los datos nuevos para poder actualiza</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos los datos a actualizar.
              <br />✅ Notificamos que se logro hacer la modificacion de los datos.<br />
              ✅Hacemos previsualizacion de los datos.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span> tener la seccion de afiliaciones </p><br />
              <p><span className='font-bold'>Para:</span> poder afiliarse, desafiliarse o modificar una afiliacion en la que estoy</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> podemos ver la seccion de afiliaciones a las entidades que estamos registradas</p><br />
              <p><span className='font-bold'>Cuando:</span> necesitemos un dato en especifico de las afiliaciones</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitan los datos en esa tabla</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos que esten todas las entidades a las cual estamos.
              <br />✅ Podemos validar informacion y buscar cada una.<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una seccion de notificaciones </p><br />
              <p><span className='font-bold'>Para:</span> poder saber si me autorizaron o denegaron afiliaciones o mensajes sobre la afiliacion</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> ahi nos validan si nos aceptaron la afiliacion o no</p><br />
              <p><span className='font-bold'>Cuando:</span> cuando solicitemos la afiliacion</p><br />
              <p><span className='font-bold'>Entonces:</span> nos llega la notificacion validando la informacion</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos que esten llegando correctamente las notificaciones.
              <br />✅ La respuesta no deberia tardar mas de 8 horas en hacerse.<br />
              </p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un buscador por numero de afiliacion </p><br />
              <p><span className='font-bold'>Para:</span> para poder buscar afiliaciones especificas y ver la informacion</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> aveces necesitamos buscar una afiliacion especifica</p><br />
              <p><span className='font-bold'>Cuando:</span> necesitamos validar datos para alguna transaccion</p><br />
              <p><span className='font-bold'>Entonces:</span> recurrimos a solicitar los datos en esta manera de busqueda</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Validamos los datos buscados en el buscador.
              <br />✅La busqueda no tarda mas de 10 segundos<br />
              ✅Se solicita la notificacion si se encontro o no se encontro la busqueda</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una seccion de pagos a entidades donde estoy afiliado </p><br />
              <p><span className='font-bold'>Para:</span> para poder cancelar el monto que se debe pagar</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos a hacer distintos pagos a las entidades</p><br />
              <p><span className='font-bold'>Cuando:</span> la entidad ponga la fecha de pago</p><br />
              <p><span className='font-bold'>Entonces:</span> a travez de la plataforma se logra realizar el pago</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos la entidad a pagar.
              <br />✅Validamos el precio a pagar.<br />
              ✅Solicitamos la informacion necesaria para realizar el pago.</p><br />
            </div>
            
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span>  ver los detalles de los saldos pendientes hacia esa entidad</p><br />
              <p><span className='font-bold'>Para:</span> poder observar la informacion, monton y fecha de vencimiento de pago</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos hacer pagos corrpsondientes en esta seccion podremos ver estos mismos</p><br />
              <p><span className='font-bold'>Cuando:</span> las entidades nos soliciten hacer el pago</p><br />
              <p><span className='font-bold'>Entonces:</span> se ingresa a la seccion de saldos y ya se hace el pago por el monto</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos los pagos pendientes.
              <br />✅ Solicitamos la transaccion.<br />
              ✅Para validar la informacion no debe de tardar mas de 10 segundos.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span>  tener la seccion de cobro por tarjeta</p><br />
              <p><span className='font-bold'>Para:</span> poder cancelar con mi tarjeta de credito</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> se verifica la informacion de la tarjeta</p><br />
              <p><span className='font-bold'>Cuando:</span> el pago se realizara via tarjeta de credito/debito</p><br />
              <p><span className='font-bold'>Entonces:</span> procedemos con el pago y el monto que es</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Verificamos que la cantidad y datos de la tarjeta sean los correcots.
              <br />✅ La transaccion se tiene que hacer instantaneamente.<br />
              ✅Se solicita la boleta de pago por correo electronico.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span>  obtener la notificacion via email</p><br />
              <p><span className='font-bold'>Para:</span> poder tener mi comprobante de pago via correo electronico</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> como la forma de pago es virtual se solicita comprobante</p><br />
              <p><span className='font-bold'>Cuando:</span> se solicita la forma de pago virtual</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicita la informacion y comprobante por correo</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos el pago via email.
              <br />✅ El correo es instantaneo.<br />
              ✅Verificamos si llega el correo con informacion correcta.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span>  tener una seccion de historial de pagos</p><br />
              <p><span className='font-bold'>Para:</span> poder consultar cualquier pago realizado</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos validar los pagos que hemos realizado en la plataforma</p><br />
              <p><span className='font-bold'>Cuando:</span> se realiza un pago en linea</p><br />
              <p><span className='font-bold'>Entonces:</span> se busca la informacion con el numero de comprobante</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos la informacion solicitada en el historial.
              <br />✅ Nos deberia de soltar la informacion correcta de las transacciones.<br />
              ✅Previamente validamos las transacciones por el numero de boleta.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span> tener un boton de generacion de reporte</p><br />
              <p><span className='font-bold'>Para:</span> poder descargar y podamos imprimir nuestro reporte obteniendolo via una archivo CVS o XLS..</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> quiero obtener mis reportes via CSV</p><br />
              <p><span className='font-bold'>Cuando:</span> en mi historial elija que reporte quiero descargar</p><br />
              <p><span className='font-bold'>Entonces:</span> se solicitara el reporte en especifico para poder obtener la informacion</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Confirmamos si es el reporte que tenemos que descargar.
              <br />✅ Validamos que se descargue correctamente.<br />
              ✅Se solicita verificar la validacion de la descarga si se hizo correctamente.</p><br />
            </div>
            {/*---------------------------------------------------------------------------------------------------------*/}
            <div className='bg-orange-400 w-64 h-auto text-black mt-2 mb-2 p-2'>
              <div className='flex justify-center'>
                <span className='text-2xl'>📌</span><br />
              </div>
              <p><span className='font-bold'>Como:</span> Abel Alvarez(Cliente)</p><br />
              <p><span className='font-bold'>Puedo:</span> tener una seccion de inicio de sesion y registro</p><br />
              <p><span className='font-bold'>Para:</span> poder crear mi cuenta y empezar con mis afiliaciones a distintas entidades.</p><br />
              <h1 className='font-bold text-lg text-blue-800 mb-2'>Criterios de Aceptación</h1>
              <p><span className='font-bold'>Dado que:</span> necesitamos registrarnos en la plataforma</p><br />
              <p><span className='font-bold'>Cuando:</span> necesitemos tener  nuestra cuenta para poder afiliarnos</p><br />
              <p><span className='font-bold'>Entonces:</span> solicitamos el registro de usuario en la plataforma</p><br />
            </div>
            <div className='bg-lime-300 w-64 h-auto text-black mt-2 mb-2 p-2 mr-2 '>
              <h1 className='font-bold text-xl'>Detalles:</h1>
              <p>✅Nos confirman los datos ingresados.
              <br />✅ Proceseguimos a hacer el login en la plataforma.<br />
              ✅Ya podemos asignarnos a las entidades que mas querramos.</p><br />
            </div>


          </div>
          

        </div>)
}
