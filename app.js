document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Aquí se almacenan los valores del formulario
        const name = document.getElementById("nombre").value;
        const surname = document.getElementById("apellido").value;
        const dateBirth = document.getElementById("fechaNacimiento").value;

        // Creamos un objeto JSON con los datos del formulario
        const data = {
            name,
            surname,
            dateBirth
        };

        // Aquí se realiza la solicitud POST al endpoint solicitado.
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            alert("Registro exitoso. ID del usuario: " + data.id);
            registroForm.reset(); // Esto limpia el formulario después de enviarlo.
        })
        .catch(error => {
            console.error("Error al enviar el formulario:", error);
            alert("Error al enviar el formulario");
        });
    });
});
