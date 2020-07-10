const axios = require('axios');

// const encodeUrl = encodeURI(argv.direccion);
// console.log(encodeUrl);

const getLugarLatLog = async (dir)=>{

    const params = {
        auth: 'APIKEY',
        locate: dir,
        json: '1'
    }
    
    let instance = await axios.get('https://geocode.xyz', {params})

    if(instance.data.matches === null){
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data    =  instance.data;
    const direccion =  data.standard.city;
    const lat =  data.latt;
    const lng =  data.longt;
    return {
        direccion,
        lat,
        lng
    };
    // console.log();
    //   .then(response => {
    //     console.log(response.data);

    //   }).catch(error => {
    //     console.log(error);
    //   });
}

module.exports={
    getLugarLatLog
}
