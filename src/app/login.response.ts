export interface LoginResponse {
    msg: string;
    token: string;
    user: {id, name, email, password};
    
}