function Ingresar() 
{
    var Usuario="Marlon";
    var Contraseña="examen";

    if(document.frmingreso.usuario.value==Usuario &&
    document.frmingreso.contraseña.value==Contraseña )

{ document.location="html/inicio.html"

}
 
else
{

    alert("ingrese usuario y contraeña correctamente"
    )
}
    
}