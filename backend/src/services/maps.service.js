const axios = require('axios');

const API_KEY = process.env.HEIGIT_API
const BASE_URL = 'https://api.openrouteservice.org/geocode/search';
const ROUTE_URL = 'https://api.openrouteservice.org/v2/directions/driving-car';
module.exports.getAddressCoordinate = async (address) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                text: address,
                size: 1 // Get only the top result
            }
        });

        const data = response.data;
        if (data.features && data.features.length > 0) {
            const { coordinates } = data.features[0].geometry;
            return { latitude: coordinates[1], longitude: coordinates[0] };
        } else {
            throw new Error('No results found for the given address');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        return null;
    }
};
module.exports.getDistanceAndTime = async (origin, destination) => {
    try {
        // OpenRouteService expects coordinates in [longitude, latitude] format
        const coordinates = [
            [origin.longitude, origin.latitude],
            [destination.longitude, destination.latitude]
        ];

        const response = await axios.post(ROUTE_URL, {
            coordinates: coordinates
        }, {
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.data.routes || response.data.routes.length === 0) {
            throw new Error("No route found");
        }

        const route = response.data.routes[0];

        return {
            distance: (route.summary.distance / 1000).toFixed(2) + " km", // Convert meters to kilometers
            duration: (route.summary.duration / 60).toFixed(2) + " minutes" // Convert seconds to minutes
        };
    } catch (error) {
        console.error("Error fetching route:", error.message);
        console.error("Error details:", error.response?.data || "No response data");
        return null;
    }
};
module.exports.getAutoCompleteSuggestions = async (input) => {
    try {
        // Check if input is provided
        if (!input || input.trim() === '') {
            console.log('Empty input provided');
            return [];
        }
        
        // Log the request URL for debugging
        console.log(`Requesting autocomplete for input: "${input}"`);
        
        // OpenRouteService uses a different endpoint for autocomplete
        // The correct endpoint is likely "https://api.openrouteservice.org/geocode/autocomplete"
        const response = await axios.get('https://api.openrouteservice.org/geocode/autocomplete', {
            params: {
                api_key: API_KEY,
                text: input,
                size: 5
            }
        });
        
        // Log the response structure to debug
        console.log('API Response structure:', JSON.stringify(response.data, null, 2).substring(0, 300) + '...');
        
        if (response.data.features && response.data.features.length > 0) {
            console.log(`Found ${response.data.features.length} suggestions`);
            return response.data.features.map(feature => ({
                name: feature.properties.name || '',
                label: feature.properties.label || feature.properties.name || '',
                id: feature.properties.id || '',
                coordinates: feature.geometry.coordinates
            }));
        } else {
            console.log('No suggestions found in API response');
            return [];
        }
    } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
        return [];
    }
};