const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

  //PARTE 1

  //Creo una funzione per cercare i lavori
  function cercaLavori(jobs, title, location) {
  //Converto il titolo e la località in lettere minuscole
    title = title.toLowerCase();
    location = location.toLowerCase();
  //Creo un array contenente i risultati della ricerca
    const result = [];
  //Creo una variabile per il conteggio dei lavori trovati
    let count = 0;
  //Creo un ciclo per all'interno dell'array jobs
    for (const job of jobs) {
  //Converto il titolo e la località in lettere minuscole
      const jobTitle = job.title.toLowerCase();
      const jobLocation = job.location.toLowerCase();
  //Verifico se il titolo e la località includono lettere cercate
      if (jobTitle.includes(title) && jobLocation.includes(location)) {
  //Se corrispondono, le inserisco nell'array dei risultati
        result.push("Tipo di lavoro:", job.title,"Location:", job.location);
  //Incremento il conteggio dei lavori di 1
        count++;
      }
    }
  //Restituisco un oggetto contenente i risultati e il conteggio dei lavori
    return {
      result: result,
      count: count,
    };
  }
/* const searchResult = cercaLavori(jobs,"", ""); */

//PARTE 2

//Accedo agli elementi del DOM utilizzando .getElement

const searchButton = document.getElementById("searchButton");
const locationInput = document.getElementById("location");
const jobTitleInput = document.getElementById("jobTitle");
const resultsList = document.getElementById("results");
const resultCount = document.getElementById("resultCount");

function updateResultCount(count) {
//Aggiorno il testo contenuto in h3 in base al risultato del conteggio
resultCount.textContent = "Ci sono " + count + " lavori trovati";
}


searchButton.addEventListener("click", function() {
//Al click del button ottengo i valori dati nell'input
  const location = locationInput.value;
  const jobTitle = jobTitleInput.value;
//Effettuo una ricerca di lavori con i dati ottenuti dall'input   
  const searchResult = cercaLavori(jobs, jobTitle, location);
//Resetto la lista dei risultati  
  resultsList.innerHTML = ""; 
//Creo un ciclo for per iterare ciascun titolo all'interno dei risultati di ricerca
  for (const title of searchResult.result) {
//Creo nella pagina html un nuovo elemento lista per ogni titolo trovato    
    const listItem = document.createElement("li");
//Imposto il contenuto del nuovo elemento inserendo il titolo cercato
    listItem.textContent = title;
   if (searchResult.result.indexOf(title) % 2 === 0) {
    listItem.classList.add("list-item-even");
    }
    else
    listItem.classList.add("list-item-odd");
//Aggiungo il nuovo elemento all'interno della lista
    resultsList.appendChild(listItem);
  }
//Infine aggiorno il conteggio dei lavori trovati
  updateResultCount(searchResult.count);
});
//Stampo i risultati in console
/* console.log(cercaLavori(jobs, 'service', 'IT')); */
const resetButton = document.getElementById("resetButton");
//Creo una funzione per resettare la ricerca con un click
resetButton.addEventListener("click", function() {
//Reimposto gli input
  locationInput.value = "";
  jobTitleInput.value = "";

//Resetto la lista dei risultati
  resultsList.innerHTML = "";

//Resetto il conteggio dei lavori trovati
  updateResultCount(0);
});
//Creo una funzione per effettuare la ricerca quando si preme il tasto "enter"
locationInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchButton.click();
  }
});
jobTitleInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchButton.click();
  }
});