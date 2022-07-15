export interface ClientOptions {
    account: {
        username: string,
        password: string;
    },
    version: string | "1.17.0",
    housing: {
        owner: string,
        houseName: string;
    }
}