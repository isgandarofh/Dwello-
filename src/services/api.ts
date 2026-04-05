export async function getServicesContent() {
    try{
        const response = await fetch("/data/services.json");
        return await response.json();
    }catch(err){
        console.log(err + "err");
    }
}