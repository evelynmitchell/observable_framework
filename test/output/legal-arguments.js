define({id: 0, inputs: [], outputs: ["foo"], body: () => {
function foo() { return arguments.length; }
return {foo};
}});
