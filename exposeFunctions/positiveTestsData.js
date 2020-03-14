module.exports = [
    {
        callMethod: 'syncFunctionPrimitiveDataNoArgs',
        args: [],
        expectedResult: 'return from syncFunctionPrimitiveDataNoArgs'
    },
    {
        callMethod: 'syncFunctionPrimitiveData',
        args: ['arg1', 123],
        expectedResult: 'args data "arg1 123" from syncFunctionPrimitiveData'
    },
    {
        callMethod: 'functionReturnsUndefined',
        args: [],
        expectedResult: null
    },
    {
        callMethod: 'syncFunctionComplexData',
        args: ['arg1', 123],
        expectedResult: { from: 'syncFunctionComplexData', args: ['arg1', 123] }
    },
    {
        callMethod: 'asyncFunctionPrimitiveData',
        args: ['arg1', 123],
        expectedResult: 'args data "arg1 123" from asyncFunctionPrimitiveData'
    },
    {
        callMethod: 'asyncFunctionComplexData',
        args: ['arg1', 123],
        expectedResult: { from: 'asyncFunctionComplexData', args: ['arg1', 123] }
    }
];
