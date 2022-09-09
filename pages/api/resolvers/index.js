import axios from "axios";

const API_KEY = 'Z7F20a5ct7eGI2tOg0M2XMwIZiqH2u49EnxfaQlQ'
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

export const resolvers = {
    Query: {
        getImage: async () => {
            try {
                const image = await axios.get(url)
                return {
                    copyright: image.data.copyright,
                    date: image.data.date,
                    explanation: image.data.explanation,
                    hdurl: image.data.hdurl,
                    title: image.data.title,
                    url: image.data.url,
                    media_type: image.data.media_type,
                    service_version: image.data.service_version
                }
            } catch (error) {
                throw error;
            }
        }
    }
};