# edge-shared-errorhandling-flow-example
Details how to use shared flows for establishing a common error handling routine for all proxies.

**Shared Flows**
1. Zip the "sharedflowbundle" folder
2. Upload as a Shared Flow (APIs-->Shared Flows)
3. Deploy to environment needed
4. Customize to add additional error codes, error handling, logging, etc

**Example Proxy**
1. Zip the "apiproxy"
2. Upload the proxy
3. Deploy to environment needed

**Test**
1. Import "errorhandlingexample-sharedflow-proxy-v1.postman_collection.json" into Postman
2. Run calls to see response

**Proxy Template With Shared Flow Reference**
1. This is the proxy template (referenced here: <https://github.com/davidmehi/edge-proxy-template>) that now uses the shared flow for common error handling.

*To use the Shared Flow in a proxy:*
1. Add the shared flow "SharedFlow_FaultRulesHanding" using the Shared Flow policy to the proxy.
2. Add the policy to the &lt;DefaultFaultRule&gt; in the default.xml of the proxy.  Since the <AlwaysEnforce> is set to true, this will always execute if there is a fault.  When a fault occurs, the shared flow will be called, which contains the common error handling logic.

```xml
    <FaultRules>
        <!-- could put additional fault rules here if needed -->
    </FaultRules>
    <DefaultFaultRule name="all">
        <AlwaysEnforce>true</AlwaysEnforce>
        <Step>
            <Name>FlowCalloutFaultRulesHandling</Name>
        </Step>
    </DefaultFaultRule>
```

Always try to keep the original fault of the policy that fails and not override it with another RaiseFault.  Using a second RaiseFault will override the original variables and throw off the analytics, security dashboard and the API Monitoring dashboard.  See this link for more information: <https://docs.apigee.com/api-platform/antipatterns/raise-fault-conditions>

There is no fault handling directly in the shared flow.  Any faults that occur will be raised and flow directed back to the proxy that referenced it.  More information on fault handling in shared flows: <https://docs.apigee.com/api-platform/fundamentals/shared-flows?hl=en#developing-a-shared-flow>

More information on fault handling: <https://docs.apigee.com/api-platform/fundamentals/fault-handling>


*Add New Error Handling Conditions*

Add new error handling conditions in the "SharedFlow_FaultRulesHandling" shared flow.  This can be done using the fault.name variable or the [prefix].[policy_name].failed variable.  See this link for more information: <https://docs.apigee.com/api-platform/fundamentals/what-you-need-know-about-policy-errors.html>


