 
// This is one technique to set the target url of the request.  However, it is 
// recommended to use a TargetServer in conjuction with the target path instead.
// The target path variable (flow.request.targetPath) should be set by the individual resource.  If the 
// target path changes per environment, then it would be best to use a KVM to store
// the target paths per environment.  But if they do not change per environment, then
// hardcoding them (either through a Javascript or AssignMessage policy) works

//context.setVariable("target.url", context.getVariable("flow.request.targetUrl"));

