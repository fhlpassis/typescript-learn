export class Company {
  public readonly name: string; //public not necessary
  private readonly employers: Employer[] = [];
  protected readonly cod: string;

  constructor(name: string, cod: string) {
    this.name = name;
    this.cod = cod;
  }

  // public method
  addEmployer(employer: Employer): void {
    this.employers.push(employer);
  }

  showEmployers(): void {
    for (const employer of this.employers) {
      console.log(employer);
    }
  }
}

export class Employer {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const company1 = new Company('Justice League', '11.111.111/0001-11');
const employer1 = new Employer('Bruce', 'Wayne');
const employer2 = new Employer('Clark', 'Kent');
const employer3 = new Employer('Diana', 'Prince');

company1.addEmployer(employer1);
company1.addEmployer(employer2);
company1.addEmployer(employer3);
console.log(company1);
company1.showEmployers();
