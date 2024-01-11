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
/* ------------------------------------------------- */
/* -------------- inheritance الوراثة */
class StudentReports extends Grades {  
    total(termName){        // total method OVERRIDE on parent total method 
        console.log(termName);
        super.total();        // super call total in Parent class
    }
    status(){
        var score = this.arb + this.eng + this.mth;
        if(score >= 50){
            console.log("pass");
        }
        else {
            console.log("fail");
        }
    }
}
/* -------------------------------------------------------------- */
const st01 = new StudentReports(10, 10, 10);
st01.total("second term");
st01.status();

/* const student01 = new Grades(10, 20, 30);
student01.arb = 200;
student01.total(); */