import axios from 'axios'

export default class RestClientObj {
  static instanceAxios = axios.create({
    baseURL: 'http://localhost:8800'
  })
  static setInterceptor = callback => {
    RestClientObj.instanceAxios.interceptors.response.use(
      function(response) {
        return response
      },
      function(error) {
        if (!error.response) {
          callback()
        }
        if (error.response.status === 403) {
          callback()
        } else {
          // if(!error.response.data.message.mensaje)
          //   throw Error(error.response.data.message.mensaje)
          // else
          if (error.response.data) {
            if (error.response.data.mensaje) throw Error(error.response.data.mensaje)

            throw Error(error.response.data.message)
          }
        }
      },
    )
  }

  static setTokenToAxio = token => {
    RestClientObj.instanceAxios.defaults.headers.common.Authorization = token
  }
  static cleartokenAxio = () => {
    delete RestClientObj.instanceAxios.defaults.headers.common.Authorization
    // RestClientObj.instanceAxios.defaults.headers.common.Authorization = undefined
  }


  static getCiudadNombre = filter => {
    return RestClientObj.instanceAxios
      .post('/establecimiento/getCiudadNombre', filter)
      .then(response => response.data)
  }


  static getContacto = () => {
    return RestClientObj.instanceAxios
      .get('/contacto')
      .then(response => response.data)
  }
  static getHome = () => {
    return RestClientObj.instanceAxios
      .get('/home')
      .then(response => response.data)
  }
  static getHomed = () => {
    return RestClientObj.instanceAxios
      .get('/homed')
      .then(response => response.data)
  }
  static getHomes = () => {
    return RestClientObj.instanceAxios
      .get('/homes')
      .then(response => response.data)
  }

  static getNoticia = (id_noticia) => {
    return RestClientObj.instanceAxios
      .get('/noticia/' + id_noticia)
      .then(response => response.data)
  }

  static getEquipo = () => {
    return RestClientObj.instanceAxios
      .get('/equipo')
      .then(response => response.data)
  }
  static getProyectof = (id) => {
    return RestClientObj.instanceAxios
      .get('/proyectof')
      .then(response => response.data)
  }
  static getProyectos = (id) => {
    return RestClientObj.instanceAxios
      .get('/proyectos')
      .then(response => response.data)
  }
  static getGalerias = (id) => {
    return RestClientObj.instanceAxios
      .get('/galerias')
      .then(response => response.data)
  }
  static getOtherpro = (id) => {
    return RestClientObj.instanceAxios
      .get('/otherpro')
      .then(response => response.data)
  }
  static getProyecto = (id_proyecto) => {
    return RestClientObj.instanceAxios
      .get('/proyecto/' + id_proyecto)
      .then(response => response.data)
  }
  static getEmail = (obj) => {
    console.log(obj)
    return RestClientObj.instanceAxios
      .post('/email',obj)
      .then(response => response.data)
  }

}
