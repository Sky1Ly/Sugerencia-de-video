//Módulo IIFE
let agregaVideo = (() => {
    return {
        cambioURL: (id, url) => {
            let urlVideo = document.getElementById(id)
            urlVideo.setAttribute("src", url)
        },

        inicioVideo: (id, url, tiempo) => {
            let idAttr = document.getElementById(id)
            idAttr.setAttribute("src", `${url}&amp;start=${tiempo}`)
        }
    }
})()

//Creación de clase Multimedia con su URL
class Multimedia {
    constructor(url) {
        this._url = url
    }

    get url() {
        return this._url
    }

    set url(newURL) {
        this._url = newURL
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

//Creación de clase Reproductor, hija de Multimedia
class Reproductor extends Multimedia {
    constructor(id, url) {
        super(url)
        this.id = id
    }

    playMultimedia() {
        agregaVideo.cambioURL(this.id, this.url)
    }

    setInicio(time) {
        agregaVideo.inicioVideo(this.id, this.url,  time)
    }
}

//Se envian los datos para los videos
let musica = new Reproductor("musica", "https://www.youtube.com/embed/npby0JnBk0o?si=SRPlB4nDB5KqHkzL")
let pelicula = new Reproductor("peliculas", "https://www.youtube.com/embed/5PSNL1qE6VY")
let serie = new Reproductor("series", "https://www.youtube.com/embed/GExflKHU3VE?si=SlTK1H9k9ppHrpqv")

//Se inicializa el video
musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

//Ejecuta el video de la serie desde el seg 10
serie.setInicio(10)

