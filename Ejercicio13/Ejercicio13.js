const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const mesessel=meses 
    .filter(mes=>mes.length>7)
    .map (mes=> mes.toUpperCase());
console.log(mesessel)
const nummeses= mesessel.length;
console.log(nummeses)