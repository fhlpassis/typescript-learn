export class Company {
  public readonly name: string; //public not necessary
  protected readonly employers: Employer[] = [];
  private readonly cod: string;

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

export class JusticeLeague extends Company {
  constructor() {
    super('Justice League', '0001');
  }

  popEmployer(): Employer | null {
    const employer = this.employers.pop();
    if (employer) return employer;
    return null;
  }
}

export class Employer {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const company1 = new JusticeLeague();
const employer1 = new Employer('Bruce', 'Wayne');
const employer2 = new Employer('Clark', 'Kent');
const employer3 = new Employer('Diana', 'Prince');

company1.addEmployer(employer1);
company1.addEmployer(employer2);
company1.addEmployer(employer3);

const removedEmployer = company1.popEmployer();

console.log(removedEmployer);

// company1.employers.pop();

console.log(company1);
