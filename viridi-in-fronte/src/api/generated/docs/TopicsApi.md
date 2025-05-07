# TopicsApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewTopic**](#createnewtopic) | **POST** /topic | Add a new topic|
|[**deleteTopic**](#deletetopic) | **DELETE** /topic | Delete an existing topic|
|[**getAllTopics**](#getalltopics) | **GET** /topic | Get the list of all available topics|
|[**updateTopic**](#updatetopic) | **PUT** /topic | Update an existing topic|

# **createNewTopic**
> createNewTopic(topicCreationRequest)


### Example

```typescript
import {
    TopicsApi,
    Configuration,
    TopicCreationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TopicsApi(configuration);

let topicCreationRequest: TopicCreationRequest; //

const { status, data } = await apiInstance.createNewTopic(
    topicCreationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **topicCreationRequest** | **TopicCreationRequest**|  | |


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
|**200** | The element was successfully created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTopic**
> deleteTopic(deleteTopicRequest)


### Example

```typescript
import {
    TopicsApi,
    Configuration,
    DeleteTopicRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TopicsApi(configuration);

let deleteTopicRequest: DeleteTopicRequest; //

const { status, data } = await apiInstance.deleteTopic(
    deleteTopicRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteTopicRequest** | **DeleteTopicRequest**|  | |


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
|**200** | The element was successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllTopics**
> Array<TopicResponse> getAllTopics()


### Example

```typescript
import {
    TopicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TopicsApi(configuration);

const { status, data } = await apiInstance.getAllTopics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TopicResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of all element types |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTopic**
> updateTopic(updateTopicRequest)


### Example

```typescript
import {
    TopicsApi,
    Configuration,
    UpdateTopicRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TopicsApi(configuration);

let updateTopicRequest: UpdateTopicRequest; //

const { status, data } = await apiInstance.updateTopic(
    updateTopicRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTopicRequest** | **UpdateTopicRequest**|  | |


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
|**200** | Element successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

