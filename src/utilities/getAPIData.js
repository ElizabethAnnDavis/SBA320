export default async function getAPIData(){
try{
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=21`);
        const data = await response.json();
        return data;
    }catch(e){
        console.log(`ERROR: ${e.message}`);
    };
}