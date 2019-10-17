export interface IMaster {
    id: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    birthPlace: string;
    birthDate: Date;
    birthDateFormatted: string;
    deathDate: Date;
    deathDateFormatted: string;
    bio: string;
    photo: string;
    isActive: boolean;
}

export interface IMasterFormValues extends Partial<IMaster> {
    time?: Date;
}

export class MasterFormValues implements IMasterFormValues {
    id?: string = undefined;
    firstName: string = '';
    lastName: string = '';
    birthPlace: string = '';
    birthDate?: Date = undefined;
    deathDate?: Date = undefined;
    bio: string = '';
    photo: string = '';
    isActive: boolean = false;

    constructor(init?: IMasterFormValues) {
        // if (init && init.birthDate) {
        //     init.time = init.birthDate;
        // }  
        Object.assign(this, init);
    }
}