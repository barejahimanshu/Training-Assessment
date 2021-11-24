export class Sort{
    private sortOrder =1;
    private collator = new Intl.Collator(undefined,{
        numeric:true,
        sensitivity:"base"
    })
    constructor(){

    }

    public startSort(property, order, type = "", arrB?){
        if(order==="desc"){
            this.sortOrder = -1;
        }
        return (a,b) =>{
            if(type ==="date") {
                return this.sortData(new Date(a[property]), new Date(b[property]));
            }
            else if (type === "object") {
                const ele1 = arrB.find(ele => ele.id === a.id)
                const ele2 = arrB.find(ele => ele.id === b.id)
                const res =  arrB.indexOf(ele1) - arrB.indexOf(ele2);
                return res
            }
            else {
                return this.collator.compare(a[property],b[property]) * this.sortOrder
            }
        }
    }
    private sortData(a,b){
        if(a<b){
            return -1* this.sortOrder
        }else if(a>b) {
            return 1 *this.sortOrder
        }else{
            return 0* this.sortOrder
        }
    }
}
