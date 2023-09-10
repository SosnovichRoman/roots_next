import { createClient } from "@sanity/client";

//... 

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

export default client