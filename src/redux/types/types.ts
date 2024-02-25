export type UserType = {
    accessToken: string,
    isLoading: boolean,
    isAuthenticated: boolean,
    error: boolean,
    registrationData: RegistrationData
}
export type RegistrationData = {
    email: string,
    password: string
}
export type TokenType = {
    accessToken: string
}
