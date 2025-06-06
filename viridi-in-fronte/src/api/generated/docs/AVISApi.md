# AVISApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAvisCss**](#retrieveaviscss) | **GET** /avis/css | Get the CSS string from AVIS|

# **retrieveAvisCss**
> string retrieveAvisCss()


### Example

```typescript
import {
    AVISApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AVISApi(configuration);

const { status, data } = await apiInstance.retrieveAvisCss();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/css


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CSS |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

