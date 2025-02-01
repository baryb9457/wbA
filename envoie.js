
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("ciVlArsUZWl4TLPnxSzHV"); // Remplace par ton User ID

    document.querySelector("#contact-orm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Vérifie si l'élément "subject" existe bien dans le formulaire
        let subjectField = document.querySelector("#subject");
        let subjectValue = subjectField ? subjectField.value : "Pas d'objet";

        let templateParams = {
            from_name: document.querySelector("#name").value,
            from_email: document.querySelector("#email").value,
            message: document.querySelector("#message").value,
            objet: subjectValue
        };

        try {
            emailjs.send("service_u688p9k", "template_w8h2sqc", templateParams);
            console.log("✅ Message envoyé avec succès :", response);
        } catch (error) {
            console.error("❌ Erreur lors de l'envoi :", error);
        }

        // Réinitialise le formulaire après envoi
        document.querySelector("#cntact-form").reset();
    });
});
