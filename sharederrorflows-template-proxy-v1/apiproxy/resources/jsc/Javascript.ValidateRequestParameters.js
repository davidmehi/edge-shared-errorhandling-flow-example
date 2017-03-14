 
// An example on how to validate request parameters/payloads
// get the header and parameter variables - set with the extract policy

var requestVariable = context.getVariable("flow.request.variable");

if (requestVariable === undefined || requestVariable === null || requestVariable === "") {
	context.setVariable('flow.error.code', '400-04');
	context.setVariable('flow.error.message', 'requestVariable is invalid');
	context.setVariable('flow.error.info', 'https://docs.developer.com');
	context.setVariable('flow.error.status', '400');
	context.setVariable('flow.error.reason', 'Bad Request');
	throw new Error();
}

