declare module 'react-point'

type Operator = '/' | '*' | '+' | '-' | '='

type OperationFunc = (prevValue: number, nextValue: number) => number

interface CalculatorDisplayProp {
    [x: string]: any; value: any
}

interface ICalculatorKeyProp {
    [x: string]: any; onPress: any; className: any
}
