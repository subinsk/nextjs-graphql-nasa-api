import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type  Image {
        copyright: String
        date: String
        explanation: String
        hdurl: String
        title: String
        url: String
        media_type: String
        service_version: String
    }

    type  Query {
        getImage: Image
    }`