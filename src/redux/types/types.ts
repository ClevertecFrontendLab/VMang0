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
    feedbacks?: Array<FeedbackType> | null,
    isGetAllError: boolean,
    isAddError: boolean,
    isAddSuccess: boolean
}
export type FeedbackType = {
    id: string,
    fullName?: string,
    imageSrc?: string,
    message?: string,
    rating: number,
    createdAt: string
}
