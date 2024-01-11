class Grades {
    constructor(arabic, english, math){
        this.arb = arabic;
        this.eng = english;
        this.mth = math;
    }
    total(){
        console.log(this.arb + this.eng + this.mth);
    }
}

module.exports = {
    Grades
}