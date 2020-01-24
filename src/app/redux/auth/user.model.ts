export class User {
    public name: string;
    public email: string;
    public uid: string;
    public phone: string;

    constructor(obj){
        this.name = obj && obj.name || null;
        this.email = obj && obj.email || null;
        this.phone = obj && obj.phone || null;
        this.uid = obj && obj.uid || null;
    }
}