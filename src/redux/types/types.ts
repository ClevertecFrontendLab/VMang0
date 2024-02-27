export type UserType = {
    accessToken: string,
    isLoading: boolean,
    isAuthenticated: boolean,
    error: boolean,
    registrationData: RegistrationDataType
}
export type RegistrationDataType = {
    email: string,
    password: string
}
export type TokenType = {
    accessToken: string
}
export type RecoveryType = {
    isLoading: boolean,
    password: string
}
