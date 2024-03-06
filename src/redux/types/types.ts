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
export type FeedbacksType = {
    isLoading: boolean,
    isGetAllError: boolean,
    isAddError: boolean,
    isAddSuccess: boolean,
    feedbacks?: Array<FeedbackType> | null
}
export type FeedbackType = {
    id: string,
    rating: number,
    createdAt: string,
    fullName?: string,
    imageSrc?: string,
    message?: string
}
