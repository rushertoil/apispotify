function searchCountry() {
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');

    const apiUrl = `https://restcountries.com/v3.1/name/${searchInput.value}`;

    // Effectuez la requête à l'API REST Countries
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Affichez les résultats
        if (data.length > 0) {
            const country = data[0]; // On suppose que le premier résultat est le plus pertinent
            resultDiv.innerHTML = `
                <h2>Résultats:</h2>
                <p>Nom: ${country.name.common}</p>
                <p>Capitale: ${country.capital}</p>
                <p>Région: ${country.region}</p>
                <p>Population: ${country.population}</p>
                <img src="${country.flags.png}" alt="Drapeau">
            `;
        } else {
            resultDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête à l\'API REST Countries:', error);
        resultDiv.innerHTML = '<p>Erreur lors de la recherche. Veuillez réessayer plus tard.</p>';
    });
}