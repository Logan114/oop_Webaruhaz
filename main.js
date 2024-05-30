import DataService from "./MODEL/DataService.js";
import Tablazat from "./VIEV/tablazat.js";
import { emberekLISTA } from "./adat.js";
const szerver = "http://localhost:3000/emberekLISTA"
const DS = new DataService();

DS.getAdat("http://localhost:3000/emberekLISTA",megjelenit)
function megjelenit(LISTA){ 
    console.log(LISTA)
    new Tablazat(LISTA,$(".tablazat"))
    
}
$(window).on("torol",(event)=>{
console.log(event.detail)
DS.deleteAdat(szerver,event.detail)
}
)