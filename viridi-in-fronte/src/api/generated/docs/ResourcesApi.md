# ResourcesApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getResource**](#getresource) | **GET** /rsrc/{id} | Get a stored resource|

# **getResource**
> File getResource()


### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let id: string; //Resource ID (default to undefined)

const { status, data } = await apiInstance.getResource(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Resource ID | defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resource data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

