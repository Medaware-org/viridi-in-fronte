# TangentialAuxiliaryApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getElementTypes**](#getelementtypes) | **GET** /tan/aux/types | Get a list of all the possible element types alongside their requirements and value constraints|
|[**getMetaEntryValueConstraints**](#getmetaentryvalueconstraints) | **GET** /tan/aux/constraints | Get a list of possible values for all metadata entries|

# **getElementTypes**
> Array<ElementTypeRequirement> getElementTypes()


### Example

```typescript
import {
    TangentialAuxiliaryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialAuxiliaryApi(configuration);

const { status, data } = await apiInstance.getElementTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ElementTypeRequirement>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Element types |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMetaEntryValueConstraints**
> Array<GetMetaEntryValueConstraints200ResponseInner> getMetaEntryValueConstraints()


### Example

```typescript
import {
    TangentialAuxiliaryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialAuxiliaryApi(configuration);

const { status, data } = await apiInstance.getMetaEntryValueConstraints();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetMetaEntryValueConstraints200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Value constraints |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

