class Job {
    constructor(name, industry, requiresDegree, field) {
        this.name = name
        this.industry = industry
        this.requiresDegree = requiresDegree
        this.field = field
    }

    getName() {
        return 'The job is a ' + this.name;
    }

    getFieldAndIndustry() {
        return 'The ' + this.name + ' job is in the ' + this.field + ' field and ' + this.industry + ' industry.';
    }
}

class JobCompensation extends Job {
    constructor(name, industry, requiresDegree, field, salary, benefits) {
        super(name, industry, requiresDegree, field);
        this.salary = salary;
        this.benefits = benefits;
    }
    getSalary() {
        return 'The ' + this.name + ' job earns ' + this.salary + ' a year.';
    }
    getBenefits() {
        if (this.benefits == 'Yes' || this.benefits == 'yes')
            return 'The ' + this.name + ' job has benefits.'
        else 
            return 'The ' + this.name + ' job does not have benefits.'

    }
}



let job1 = new Job ('Software Engineer', 'Technology', 'Yes', 'Software Development');
let job2 = new Job ('Truck Driver', 'Distribution', 'No', 'Logistics');
let job3 = new Job ('Teacher', 'Education', 'Yes', 'Child Development');


console.log(job1.getName());
console.log(job1.getFieldAndIndustry());

console.log(job2.getName());
console.log(job2.getFieldAndIndustry());

console.log(job3.getName());
console.log(job3.getFieldAndIndustry());

let job4 = new JobCompensation ('Sanitation Engineer', 'Sanitation Department', 'No', 'Waste Managment', '$100,000', 'Yes');

console.log(job4.getSalary());
console.log(job4.getBenefits());