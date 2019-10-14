export interface IMaster {
    id: any;
    firstName: string;
    lastName: string;
    fullName?: string;
    birthPlace: string;
    birthDate: string;
    birthDateFormatted?: string;
    deathDate: string;
    deathDateFormatted?: string;
    bio: string;
    photo: string;
    isActive?: boolean;
}