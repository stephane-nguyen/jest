//added a npm cmd to execute the js test runner in the package.json: npm run test 
//"test": "jest --watchAll --verbose"

//  add types to the project to give us intellisense for all the matchers built into jest
// to do so, run npm i @types/jest and create jsconfig.json

// add --coverage to     "test": "jest --watchAll --verbose"
// 100% code coverage != good test suite, good thing to show


//test a stack without arrays 
class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek(){
        return this.items[this.top];
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value;
    }

    remove(){
        this.top-=1;
        this.items[this.top] =  null;
    }
}
//describe defines a test suite 
describe('Stack', () => {
    //global var 
    let stack;
    //create a new stack at each test 
    beforeEach(() => {
        stack = new Stack();
    });

    //individual test, test() = it()
    test('is created empty', () => {
        // const stack = new Stack();

        //to be is a matcher that will test the actual value to the correct value 
        //check reference equality between two objects
        //failed for stack.items => toEqual : checks for value equality
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    //test placeholder
    it.todo('test to do');

    it('can push to the top', () =>{
        stack.push('y');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('y');
    });

    it('can pop off', () => {
        stack.remove();
        expect(stack.top).toBe(-2);
        expect(stack.peek).toBe(null);
    });
})