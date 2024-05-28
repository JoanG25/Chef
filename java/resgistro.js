function gmail(){
    let nom = document.getElementById("nom").value
    let ape = document.getElementById("ape").value
    let fecha = document.getElementById("fecha").value

    let nomn = nom.substring(0, 1)
    let nomn2 = nom[nom.length - 1]
    let apened = ape.substring(3, 6)
    let fecha1 = fecha.substring(2, 4)
    let fecha3 = fecha.substring(5, 7)
    let fecha2 = fecha.substring(8, 10)
    let correo = nomn + nomn2 + ape + fecha1 + fecha2 + fecha3 + "@gmail.com"
    let correof = correo.replace(/\s/g, '')
    document.getElementById("respuesta").innerHTML=correof.toLowerCase()
}

function refresh() {
    location.reload();
}