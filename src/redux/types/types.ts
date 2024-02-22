export type UserType = {
    accessToken: string,
    isLoading: boolean,
    isRemember: boolean,
    isAuthenticated: boolean,
    error: ErrorType
}
export type ErrorType = {
    statusCode: number,
    error: string,
    message: string
}
export type TokenType = {
    accessToken: string
}
