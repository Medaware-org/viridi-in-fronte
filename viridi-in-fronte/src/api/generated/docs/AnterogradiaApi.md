# AnterogradiaApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**compileAnterogradia**](#compileanterogradia) | **POST** /antg/compile | Compile Anterogradia sources|

# **compileAnterogradia**
> string compileAnterogradia(body)


### Example

```typescript
import {
    AnterogradiaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnterogradiaApi(configuration);

let body: string; //

const { status, data } = await apiInstance.compileAnterogradia(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Compilation successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

