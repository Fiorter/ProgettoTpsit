import PromptSync from "prompt-sync"
const prompt=PromptSync();
/**
*@fileoverview in questo file ci osno tutte le funzioni che verrano poi richiamate nel main
*@author Teresa Fiorentino
*/
/**
*@function  funzione creaoggetto 
*@description la crea un oggetto con specifiche proprietà 
*/
export const creaoggetto = () => {
    let presenza = false, lunghezza = false;
    let t = prompt("Inserire nome utente completo: ");
    let s = prompt("Inserire il nome del sito: ");
    let p = controlloPassword();
    let d = controlloData();
    /**
 * @typedef {Object} User
 * @property {string} nomeUtente - Il nome dell'utente.
 * @property {string} sito - Il nome dell'utente.
 * @property {string} password - L'età dell'utente.
 * @property {number} data - indirizzo ell'utente
 */

    const utenteCredenziali = {
        nomeUtente: t,
        sito: s,
        password: p,
        data: d,
    };

    return utenteCredenziali;
};

/**
*@function  funzione controlloPassword 
*@description una funzione che serve per controllare ancora l'utente inserisce una password non adatta
* @returns {string} La password 
*/
function controlloPassword() 
{
    let lunghezza = false, presenza = false;
    let pass;

    do {
        pass = prompt("Inserire la password: ");

        if (pass.length >= 10)
        { 
            lunghezza = true; 
        }
        else
        {
            console.log("La password è troppo corta");
        }

        if (pass.includes(".") || pass.includes("$") || pass.includes("&") || pass.includes("!"))
        {
            presenza = true;
        } 
        else 
        {
            console.log("Non hai inserito nemmeno un carattere speciale");
        }

    } while (lunghezza === false || presenza === false);

    return pass;
}
/**
*@function  funzione controlloData 
*@description funzione interna per il programma, serve in case l'utente inserisce una data sbagliata 
* @returns {string} La data corretta 
*/

function controlloData()
{
    const oggi = new Date()
    const giorno = oggi.getDate();
    const mese = oggi.getMonth() + 1;
    const anno = oggi.getFullYear();
    let data="";

    let giornoCorretto=false, meseCorretto=false, annoCorretto=false;
    do
    {
        console.log("Inserire la data di iscrizione");
        let mouth=prompt("inserire il mese:");
        let day=prompt("inserire il giorno:");
        let year=prompt("inserire l'anno:");

        if(mouth<=mese&&mouth>0)
        {
            meseCorretto=true;
        }
        else
        {
            console.log("Hai sbagliato a scrivere il mese");
            meseCorretto=false
        }

        if(mouth<mese)
        {
            if(day>0)
            {
                giornoCorretto=true;
            }
            else
            {
                console.log("Hai sbagliato a scrivere il giorno");
                giornoCorretto=false
            }
        }
        else
        {
            if(day<=giorno&&day>0&&day<=31)
            {
                giornoCorretto=true;
            }
            else
            {
                console.log("Hai sbagliato a scrivere il giorno");
                giornoCorretto=false
            }
        }

        if(year<=anno&&year>0)
        {
            annoCorretto=true;
        }
        else
        {
            console.log("Hai sbagliato a scrivere l'anno");
            annoCorretto=false
        }

        if(giornoCorretto === true&& meseCorretto === true&& annoCorretto === true)
        {
            data=day+"/"+mouth+"/"+year;
        }
    }while(giornoCorretto === false || meseCorretto === false || annoCorretto === false);
    
        return data
}

/**
*@function  funzione cancellaCredenziali 
*@description funzione interna per il programma, serve in case l'utente inserisce una data sbagliata  
* @param {arry[]} obj  un array con tutte le credenziali dei vari utenti
*/
export const cancellaCredenziali=(obj)=>
{
    const nomeDaCercare = prompt("Quale utente vuoi eliminare?");
    let persona = obj.find(p => p.nomeUtente === nomeDaCercare);
    
    if (persona)
    {
        const indice = obj.indexOf(persona); 
        obj.splice(indice, 1);
    } 
    else 
    {
        console.log("Hai sbagliato a scrivere il nome dell'utente che vuoi cercare");
    }
};

/**
*@function  funzione modificaProprieta 
*@description funzione che serve per modificare una proprietà  
* @param {arry[]} obj  un array con tutte le credenziali dei vari utenti
*/

export const modificaProprieta=(obj)=>
{
    let nomeDaCercare = prompt("Inserire il tuo nome utente: ");
    let proprietaCambiare = prompt("Quale proprieta vuoi modificare?");
    let nuovoValore = prompt("Inserire il nuovo valore per la proprietà " + proprietaCambiare + ": ");

    let persona = obj.find(p => p.nomeUtente === nomeDaCercare); 

    if (persona) { 
        switch (proprietaCambiare) {
            case "nomeUtente":
                persona.nomeUtente = nuovoValore;
                break;
            case "sito":
                persona.sito = nuovoValore;
                break;
            case "password":
                persona.password = nuovoValore;
                break;
            case "data":
                persona.data = nuovoValore;
                break;
            default:
                console.log("Proprietà non valida.");   
        }
    }
    else 
    {
        console.log("Utente non trovato.");
    }
}
   
/**
*@function  funzione stampa 
*@description funzione che serve per stampare tutto l'array 
* @param {arry[]} obj  un array con tutte le credenziali dei vari utenti
*/
export const stampa=(obj)=>
{
    console.log("VISUALIZZAZIONE DELLE CREDENZIALI");
    for(let i in obj)
    {
        console.log("Nome utente: "+obj[i].nomeUtente+"\nSito: "+obj[i].sito+"\nPaswword: "+obj[i].password+"\nData iscizione: "+obj[i].data+"\n");
    }

}

/**
*@function  funzione cercaCredenziali 
*@description funzione che serve per stampare solo un oggetto dell'array scelto dall'utente
* @param {arry[]} obj  un array con tutte le credenziali dei vari utenti
*/
export const cercaCredenziali=(obj)=>
{
    let nomeUtenteDACercacre=prompt("Scrivere il nome dell'utente che vuoi cercare: ");
    let persona = obj.find(p => p.nomeUtente === nomeUtenteDACercacre);
    if(persona)
    {
        console.log("Nome utente: "+persona.nomeUtente+"\nSito: "+persona.sito+"\nPaswword: "+persona.password+"\nData iscizione: "+persona.data);
    }
    else
    {
        console.log("Hai sbagliato a scrivere il nome dell'utente che vuoi cercare");
    }

}

/**
*@function  funzione passwordSicura 
*@description funzione in caso l'utente vuole una passsowrd sicura
* @param {arry[]} obj  un array con tutte le credenziali dei vari utenti
*/
export const passwordSicura=(obj)=>
{
    let nomeDaCercare = prompt("Inserire il tuo nome utente: ");
    let persona = obj.find(p => p.nomeUtente === nomeDaCercare); 

   if (persona) 
   { 
        const caratteri = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!&@#_-=?*.$/0123456789";
        const password = [];
        let passwordStringa="";
        for (let i = 0; i < 15; i++) 
        {
                const indiceRandom = Math.floor(Math.random() * caratteri.length);
                password[i] = caratteri[indiceRandom];
        }
        password.forEach(element => { console.log(element); });  
        let scelta = prompt("Sei sicuro di volere questa come nuova password?(si/no) ");
        if(scelta=="si")
        {
            passwordStringa=password.join("");
            persona.password=passwordStringa;
        }
        else
        {
            console.log("La password è quella che hai scritto tu");
        }

    }
    else 
    {
        console.log("Utente non trovato.");
    }
}