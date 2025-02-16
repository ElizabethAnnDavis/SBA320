export default async function getAPIData(){
    //apiData = [];

    try{
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`);
        const data = await response.json();
        console.log(data[0].explanation);
        //setData(data);
        //apiData = [...data];
        return data;
    }catch(e){
        console.log(`ERROR: ${e.message}`);
    };
}