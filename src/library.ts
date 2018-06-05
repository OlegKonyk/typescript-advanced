import { Catalog } from "./catalog";
import { Employes } from "./employes";
import { Users } from "./users";

export interface LibraryOptions {
    name: string,
    address: string;
    operationHours: {
        open: Date,
        close: Date
    }
}

export class Library {
    operationHours: { open: Date; close: Date; };
    address: string;
    name: string;

    employes: Employes;
    catalog: Catalog;
    users: Users;

    constructor(options: LibraryOptions) {
        this.name = options.name;
        this.address = options.address;
        this.operationHours = options.operationHours;

        this.catalog = new Catalog();
        this.employes = new Employes();
        this.users = new Users();
    }

    isOpen(): boolean {
        let currentTime = new Date();
        return currentTime > this.operationHours.open && currentTime < this.operationHours.close;
    }

    /** @internal */
    mySecretMethod() {
        
    }


}