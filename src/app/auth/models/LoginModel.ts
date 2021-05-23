export interface LoginCredentialsModel {
    email: string,
    password: string
}

export  const PWD_PATTERN:string = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$";