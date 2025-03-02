import React, { useState, useEffect } from "react";

export default function WeatherCard() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("Paris");
    const [inputCity, setInputCity] = useState("");

    const API_KEY = "30da992917e7403693429fe37d34fd28";

    useEffect(() => {
        if (!city) return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`)
            .then((response) => response.json())
            .then((data) => setWeather(data))
            .catch((error) => console.error("Erreur lors de la récupération des données météo :", error));
    }, [city]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputCity.trim() !== "") {
            setCity(inputCity);
            setInputCity(""); // Réinitialise le champ de recherche
        }
    };

    // Fonction pour obtenir l'image selon la température
    const getWeatherImage = (temp) => {
        if (temp >= 25) return "/sunny.png";  // ☀️ Chaud
        if (temp >= 15) return "/cloudy.jpg"; // 🌤️ Doux
        if (temp >= 5) return "/rainy.png";   // 🌧️ Pluvieux
        return "/snowy.png";                  // ❄️ Froid
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Barre de recherche */}
            <form onSubmit={handleSearch} className="mb-4 flex space-x-2">
                <input
                    type="text"
                    placeholder="Entrez une ville..."
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Rechercher
                </button>
            </form>

            {/* Carte météo */}
            <div className="w-96 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 p-6 text-center">
                {weather ? (
                    weather.cod && weather.cod !== 200 ? (
                        <p className="text-red-500">Erreur : {weather.message}</p>
                    ) : (
                        <>
                            {/* Image météo */}
                            {weather?.main?.temp !== undefined && (
                                <img
                                    src={getWeatherImage(weather.main.temp)}
                                    alt="Météo"
                                    className="w-full h-48 object-contain rounded-lg mb-4"  // Remplacer object-cover par object-contain
                                />
                            )}
                            <h2 className="font-bold text-2xl mb-2">{weather.name}</h2>
                            <p className="text-gray-700 text-lg">{weather?.weather?.[0]?.description || "Données indisponibles"}</p>
                            <p className="text-gray-900 text-4xl font-bold">{weather?.main?.temp ? `${weather.main.temp}°C` : "N/A"}</p>
                        </>
                    )
                ) : (
                    <p>Chargement...</p>
                )}
            </div>
        </div>
    );
}
