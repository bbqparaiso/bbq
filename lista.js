// Lista proporcionada
let lista = [
    "Lucas✅⚪️",
    "Mirko✅🔴",
    "Darío +1 ✅ ✅🔴🔴💵💵",
    "Gelu✅🔴💵",
    "Antonio ✅🔴💵",
    "Natalia✅🔴💵",
    "Paloma✅",
    "Xiluba ❔",
    "Loza ✅🔴💵",
    "Lalo ✅",
    "Pablo Ruiz❔",
    "Víctor y Ana ✅✅ 🔴🔴💵💵",
    "Jani+1 ✅✅🔴🔴💵💵",
    "Taju ✅+Andrea ✅ 🔴",
    "Johnny Moon✅🔴",
    "Julia✅🔴💵",
    "Valeria Ros✅🔴💵",
    "Ceci ✅🔴💵",
    "Golo ✅🔴💵",
    "Irimia✅🔴",
    "Peña ✅🔴 💵",
    "Andrés T✅",
    "Cepeda✅❔",
    "Sazza ✅❔",
    "Nil ❔",
    "Luisfro✅",
    "Alba Rico ✅",
    "polo +1✅✅🔴🔴💵💵",
    "J-Cruz✅🔴💵",
    "Ricky Merino ✅🔴💵",
    "Dani Luque ✅🔴💵",
    "Alberto ✅🔴💵",
    "Zack✅❔",
    "alberto Torres +1 ✅✅",
    "Laura Solla✅",
    "Angy ✅⚪️",
    "Andrea Lara✅🔴💵"
];

// Lista para almacenar los contactos
let contactos = [];

for (let item of lista) {
    // Crear un nuevo objeto de contacto
    let contacto = {
        "id": item.split(' ')[0].toLowerCase().replace("+", ""),
        "name": item.split(' ')[0],
        "surName": "",
        "confirmed": item.includes("🔴") || item.includes("⚪️"),
        "paid": item.includes("💵"),
        "food": !item.includes("⚪️")
    };
    // Añadir el contacto a la lista de contactos
    contactos.push(contacto);
}

// Convertir la lista de contactos a JSON
let contactos_json = JSON.stringify(contactos, null, 4);

console.log(contactos_json);