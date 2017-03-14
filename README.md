# edge-shared-errorhandling-flow-example
Details how to use shared flows for establishing a common error handling routine for all proxies.

**Shared Flow**
1. Zip the "sharedflowbundle" folder
2. Upload as a Shared Flow (APIs-->Shared Flows)
3. Deploy to environment needed

**Example Proxy**
1. Zip the "apiproxy"
2. Upload the proxy
3. Deploy to environment needed

**Test**
1. Import "errorhandlingexample-sharedflow-proxy-v1.postman_collection.json" into Postman
2. Run calls to see response

**Proxy Template With Shared Flow Reference**
1. This is the proxy template (referenced here: <https://github.com/davidmehi/edge-proxy-template>) that now uses the shared flow for common error handling.

*Customize the Shared Flow to include additional error codes and error handling capabilities.*

*To use the Shared Flow in a proxy:*
1. Add the shared flow "SharedFlow_FaultRulesHanding" using the Shared Flow policy to the proxy.
2. Add the policy to the <FaultRules> and the <DefaultFaultRule> in the default.xml of the proxy.  In both cases, the shared flow will be called, which contains the common error handling logic.

```xml
    <FaultRules>
        <FaultRule name="Shared Fault Rules">
            <Step>
                <Name>FlowCalloutFaultRulesHandling</Name>
            </Step>
        </FaultRule>
        <!-- could put additional fault rules here if needed -->
    </FaultRules>
    <DefaultFaultRule name="all">
        <AlwaysEnforce>true</AlwaysEnforce>
        <Step>
            <Name>FlowCalloutFaultRulesHandling</Name>
        </Step>
    </DefaultFaultRule>
```



