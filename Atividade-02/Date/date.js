const daysOfWeek = [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
    ];
const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];
function DataFull() {
    const date = new Date();
    const dWeek = date.getDay();
    const dMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const fullDate = `${daysOfWeek[dWeek]}, ${dMonth} de ${months[month]} de ${year}`;
    document.write(fullDate);
    }