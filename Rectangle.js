let Rectangle = {
    widthOrLength:function(width,length){
        if(width<length){
            console.log("width = " + width);
            console.log("length = " + length);
        }else{
            console.log("width = " + length);
            console.log("length = " + width);
           }
        },
    perimeter:function(width,length){
     return "perimeter = "+(width+length)*2;
    },
    area:function(width,length){
        return "area = " + width*length;
     }
}
console.log(Rectangle.widthOrLength(2,4));
console.log(Rectangle.perimeter(4,2));
console.log(Rectangle.area(4,2));
