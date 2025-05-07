# TangentialContentApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**alterElement**](#alterelement) | **PUT** /tan/element | Switch the element to a different type|
|[**createArticle**](#createarticle) | **POST** /tan/article | Create a new article|
|[**deleteArticle**](#deletearticle) | **DELETE** /tan/article | Delete an existing article|
|[**deleteElement**](#deleteelement) | **DELETE** /tan/element | Deletes an existing element|
|[**fetchArticle**](#fetcharticle) | **POST** /tan/fetch/{id} | Retrieve the rendered HTML without forcefully re-rendering|
|[**getArticleElements**](#getarticleelements) | **GET** /tan/elements/{id} | Get all elements making up a given article|
|[**getMetadata**](#getmetadata) | **GET** /tan/metadata/{elementId} | Get all metadata of a given element|
|[**insertElement**](#insertelement) | **POST** /tan/element | Insert a new element into the article|
|[**listArticles**](#listarticles) | **GET** /tan/articles/{selector} | Get a list of articles written by the specified selector|
|[**putMetadata**](#putmetadata) | **PUT** /tan/metadata/{elementId} | Put a metadata tag on a given sequential element|
|[**renderArticle**](#renderarticle) | **POST** /tan/render/{id} | Forcefully invoke the rendering pipeline and append to cache|
|[**updateArticle**](#updatearticle) | **PUT** /tan/article | Update various parameters of an existing article|

# **alterElement**
> alterElement(alterElementRequest)


### Example

```typescript
import {
    TangentialContentApi,
    Configuration,
    AlterElementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let alterElementRequest: AlterElementRequest; //

const { status, data } = await apiInstance.alterElement(
    alterElementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **alterElementRequest** | **AlterElementRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Switched element type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createArticle**
> ArticleResponse createArticle(articleCreationRequest)


### Example

```typescript
import {
    TangentialContentApi,
    Configuration,
    ArticleCreationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let articleCreationRequest: ArticleCreationRequest; //

const { status, data } = await apiInstance.createArticle(
    articleCreationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **articleCreationRequest** | **ArticleCreationRequest**|  | |


### Return type

**ArticleResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Article was created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteArticle**
> deleteArticle(deleteArticleRequest)


### Example

```typescript
import {
    TangentialContentApi,
    Configuration,
    DeleteArticleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let deleteArticleRequest: DeleteArticleRequest; //

const { status, data } = await apiInstance.deleteArticle(
    deleteArticleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteArticleRequest** | **DeleteArticleRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Article removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteElement**
> deleteElement(deleteElementRequest)


### Example

```typescript
import {
    TangentialContentApi,
    Configuration,
    DeleteElementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let deleteElementRequest: DeleteElementRequest; //

const { status, data } = await apiInstance.deleteElement(
    deleteElementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteElementRequest** | **DeleteElementRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Element deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchArticle**
> string fetchArticle()


### Example

```typescript
import {
    TangentialContentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let id: string; //ID of the Article (default to undefined)

const { status, data } = await apiInstance.fetchArticle(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the Article | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rendered HTML |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getArticleElements**
> Array<ElementResponse> getArticleElements()


### Example

```typescript
import {
    TangentialContentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let id: string; //ID of the Article to get the elements from (default to undefined)

const { status, data } = await apiInstance.getArticleElements(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the Article to get the elements from | defaults to undefined|


### Return type

**Array<ElementResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All sequential elements of the given article |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMetadata**
> Array<MetadataEntry> getMetadata()


### Example

```typescript
import {
    TangentialContentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let elementId: string; //ID of the host sequential element (default to undefined)

const { status, data } = await apiInstance.getMetadata(
    elementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **elementId** | [**string**] | ID of the host sequential element | defaults to undefined|


### Return type

**Array<MetadataEntry>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metadata entries of the given element |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **insertElement**
> ElementResponse insertElement(elementInsertRequest)


### Example

```typescript
import {
    TangentialContentApi,
    Configuration,
    ElementInsertRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let elementInsertRequest: ElementInsertRequest; //

const { status, data } = await apiInstance.insertElement(
    elementInsertRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **elementInsertRequest** | **ElementInsertRequest**|  | |


### Return type

**ElementResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Element DTO |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listArticles**
> Array<ArticleResponse> listArticles()


### Example

```typescript
import {
    TangentialContentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let selector: string; //Specifies the users whose articles should be listed; User ID for a specified user, \'current\' for the currently logged-in user, or \'all\' for no filtering (default to undefined)

const { status, data } = await apiInstance.listArticles(
    selector
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **selector** | [**string**] | Specifies the users whose articles should be listed; User ID for a specified user, \&#39;current\&#39; for the currently logged-in user, or \&#39;all\&#39; for no filtering | defaults to undefined|


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
|**200** | Articles returned |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putMetadata**
> MetadataEntry putMetadata(metadataCreateRequest)


### Example

```typescript
import {
    TangentialContentApi,
    Configuration,
    MetadataCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let elementId: string; //ID of the host sequential element (default to undefined)
let metadataCreateRequest: MetadataCreateRequest; //

const { status, data } = await apiInstance.putMetadata(
    elementId,
    metadataCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metadataCreateRequest** | **MetadataCreateRequest**|  | |
| **elementId** | [**string**] | ID of the host sequential element | defaults to undefined|


### Return type

**MetadataEntry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metadata element created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renderArticle**
> string renderArticle()


### Example

```typescript
import {
    TangentialContentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let id: string; //ID of the Article to render (default to undefined)

const { status, data } = await apiInstance.renderArticle(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the Article to render | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rendered HTML |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateArticle**
> updateArticle(updateArticleRequest)


### Example

```typescript
import {
    TangentialContentApi,
    Configuration,
    UpdateArticleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialContentApi(configuration);

let updateArticleRequest: UpdateArticleRequest; //

const { status, data } = await apiInstance.updateArticle(
    updateArticleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateArticleRequest** | **UpdateArticleRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Article updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

