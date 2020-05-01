class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calcArea(){
        return this.width * this.height
    }
}

const square = new Rectangle(10, 20);

let b = square.calcArea();
// document.write('<br>' + b);

let c = ['cd', 'youtube', 'vimeo'],
    blog = ['word', 'livej', 'blogger'],
    intern = [...c, ...blog, 'faceb'];


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

log(...c);
