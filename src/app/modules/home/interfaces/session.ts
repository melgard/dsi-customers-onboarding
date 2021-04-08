import { UserSession } from "./user-session";

export interface Session {
    token: string;
    user: UserSession
}
