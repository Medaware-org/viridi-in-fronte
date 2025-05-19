# PublicApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllArticles**](#getallarticles) | **GET** /articles | Get all articles|
|[**queryArticles**](#queryarticles) | **GET** /query | Search the article base|
|[**requestGHS**](#requestghs) | **POST** /ghs | Perform GHS recognition on the uploaded file|
|[**requestOCR**](#requestocr) | **POST** /ocr | Perform OCR on the uploaded file|

# **getAllArticles**
> Array<ArticleResponse> getAllArticles()


### Example

```typescript
import {
    PublicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PublicApi(configuration);

const { status, data } = await apiInstance.getAllArticles();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ArticleResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryArticles**
> Array<ArticleResponse> queryArticles()


### Example

```typescript
import {
    PublicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PublicApi(configuration);

let query: string; //Query String (default to undefined)

const { status, data } = await apiInstance.queryArticles(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Query String | defaults to undefined|


### Return type

**Array<ArticleResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestGHS**
> RequestGHS200Response requestGHS()


### Example

```typescript
import {
    PublicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PublicApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.requestGHS(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**RequestGHS200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestOCR**
> RequestOCR200Response requestOCR()


### Example

```typescript
import {
    PublicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PublicApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.requestOCR(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**RequestOCR200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

