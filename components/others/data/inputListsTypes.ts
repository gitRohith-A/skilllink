// Define the StringObject type directly in the same file where you need it
export type StringObject = {
    [key: string]: string | undefined;
};

// Export other types and objects
export interface KeyLabelMap {
    [key: string]: string | undefined;
}

export interface KeyLabelMapInput {
    [key: string]: string | undefined;
}

export const keyLabelMap: KeyLabelMap = {
    email: 'Email',
    name: 'Full Name',
    date: 'Joining Date',
    location: 'Address',
    categories: 'Categorie',
    occupation: 'Occupation',
};

export const keyLabelMapInput: KeyLabelMapInput = {
    email: 'Email',
    name: 'Full Name',
    location: 'Address',
    categories: 'Categorie',
    occupation: 'Occupation',
};
