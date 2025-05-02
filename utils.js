import PromptSync from "prompt-sync"
const prompt=PromptSync();

export const creaoggetto = () => {
    let presenza = false, lunghezza = false;
    let t = prompt("Inserire nome utente completo: ");
    let s = prompt("Inserire il nome del sito: ");
    let p = controlloPassword();
    let d = controlloData();
    
    const utenteCredenziali = {
        nomeUtente: t,
        sito: s,
        password: p,
        data: d,
    };

    return utenteCredenziali;
};

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
        let day=prompt("inserire il giorno:");
        let mouth=prompt("inserire il mese:");
        let year=prompt("inserire l'anno:");

        if(day<=giorno)
        {
            giornoCorretto=true;
        }
        else
        {
            console.log("Hai sbagliato a scrivere il giorno");
            giornoCorretto=false
        }

        if(mouth<=mese)
        {
            meseCorretto=true;
        }
        else
        {
            console.log("Hai sbagliato a scrivere il mese");
            meseCorretto=false
        }

        if(year<=anno)
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

export const cancellaCredenziali=(obj)=>
{
    const scelta=prompt("Quale utente vuoi eliminare?");
    let persona = obj.find(p => p.nomeUtente === scelta);
    if(persona)
    {
        const indice = obj.indexOf(oggettoDaEliminare);
        obj.splice(indice, 1);
    }
    else
    {
        console.log("Hai sbagliato a scrivere il nome dell'utente che vuoi cercare");
    }
    
}

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
   

export const stampa=(obj)=>
{
    console.log("VISUALIZZAZIONE DELLE CREDENZIALI");
    for(let i in obj)
    {
        console.log("Nome utente: "+obj[i].nomeUtente+"\nSito: "+obj[i].sito+"\nPaswword: "+obj[i].password+"\nData iscizione: "+obj[i].data+"\n");
    }

}

export const cercaCredenziali=(obj)=>
{
    let nomeUtenteDACercacre=prompt("Scrivere il nome dell'utente che vuoi cercare");
    let persona = obj.find(p => p.nomeUtente === nomeUtenteDACercacre);
    if(persona)
    {
        console.log("Nome utente: "+obj.nomeUtente+"\nSito: "+obj.sito+"\nPaswword: "+obj.passowrd+"\nData iscizione: "+obj.data);
    }
    else
    {
        console.log("Hai sbagliato a scrivere il nome dell'utente che vuoi cercare");
    }

}

export const passwordSicura=(obj)=>
{
    let nomeDaCercare = prompt("Inserire il tuo nome utente: ");
    let persona = obj.find(p => p.nomeUtente === nomeDaCercare); 

    if (persona) 
    { 
        const caratteri = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!&@#_-=?*.$/0123456789";
        const password = [];
        for (let i = 0; i < 15; i++) 
        {
                const indiceRandom = Math.floor(Math.random() * caratteri.length);
                password[i] = caratteri[indiceRandom];
        }
        password.forEach(element => { console.log(element); });  
        let scelta = prompt("Sei sicuro di volere questa come nuova password?(si/no) ");
        if(scelta=="si")
        {
            persona.password=password;
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