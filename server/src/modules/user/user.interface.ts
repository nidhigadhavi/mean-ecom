
export interface IUser {
    name: string
    email: string
    password?: string,
    isDeleted:boolean,
    createdAt: Date
    updatedAt: Date
}

export interface ListUserProps {
    limit?:number,
    page?:number,
    searchTerm?:string
}