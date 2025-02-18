export default async function getAPIData(){
try{
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=21`);
        const data = await response.json();

        const filteredData = [];

        for(let i = 0; i < data.length; i++){
            if (data[i].media_type !== 'video'){
                //console.log(data[i].media_type)
                filteredData.push(data[i]);
            }
        }

        return filteredData;
        
        //return data;
    }catch(e){
        console.log(`ERROR: ${e.message}`);
        return [];
    };
}