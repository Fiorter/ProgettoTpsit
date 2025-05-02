import * as f from "./utils.js"
import PromptSync from "prompt-sync"
const prompt=PromptSync()

let scelta;
let sceltaPass,n,utente;
let registroCredenziali=[];

do 
{
    console.log("\nMENU PER LA GESTIONE DELLE CREDENZIALI");
    console.log("1. Aggiungi credenziali");
    console.log("2. Cancella credenziali");
    console.log("3. Modifica credenziali");
    console.log("4. Cerca credenziali");
    console.log("5. Visualizza credenziali");
    console.log("6. Suggerimento per una password sicura");
    console.log("0. Esci");

    scelta = prompt("Scegli un'opzione: ");

    switch (scelta) {
        case "1":
            utente=f.creaoggetto();
            registroCredenziali.push(utente);
            console.log(registroCredenziali);
            break;

        case "2":
            f.cancellaCredenziali();
            break;

        case "3":
            f.modificaProprieta(registroCredenziali);
            break;
            
        case "4":
           f.cercaCredenziali(registroCredenziali);
            break;

        case "5":
            f.stampa(registroCredenziali);
            break;

        case "6":
            f.passwordSicura(registroCredenziali);          
            break;
            
        case "0":
            console.log("Sei uscito dal programma. Bye bye!!!");
            break;

        default:
            console.log("Scelta sbagliata");
            break;
    }
} 
while (scelta !== "0");
