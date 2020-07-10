const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).help()
.argv;

const getInfo = async( direccion )=>{
  try {
    const coord = await lugar.getLugarLatLog(dir);
    const temp  = await clima.getClima(coord.lat , coord.lng);
    return `La temperatura de ${coord.direccion} es de: ${temp}`;
  } catch (error) {
    console.log(`No  se puede mostrar la temperatura de ${direccion}`);
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
  
  
