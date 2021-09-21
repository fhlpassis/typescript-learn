// Record

const object1: Record<string, string | number> = {
  name: 'Bruce',
  surname: 'Wayne',
  age: 30,
};
console.log(object1);

type ProtocolPerson = {
  name?: string;
  surname?: string;
  age?: number;
};

// Required
type RequiredPerson = Required<ProtocolPerson>;

// Partial
type PartialPerson = Partial<RequiredPerson>;

// Readonly
type ReadonlyPerson = Readonly<RequiredPerson>;

// Pick
type PickPerson = Pick<RequiredPerson, 'name' | 'surname'>;

const object2: RequiredPerson = {
  name: 'Bruce',
  surname: 'Wayne',
  age: 30,
};
console.log(object2);

// Extract and Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  surname: string;
};

/* type AccountApi = {
  id: string;
  name: string;
  age: number;
}; */

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '123456789abc',
  name: 'Bruce',
  age: 30,
  surname: 'Wayne',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
