export class Product  {
    public name: string;
    public desc: string;
    public uid: string;
    public price: number;
    public imageName: string;

    constructor(obj){
        this.name = obj && obj.name || null;
        this.desc = obj && obj.desc || null;
        this.uid = obj && obj.uid || null;
        this.price = obj && obj.price || null;
        this.imageName = obj && obj.imageName || null;
    }
}