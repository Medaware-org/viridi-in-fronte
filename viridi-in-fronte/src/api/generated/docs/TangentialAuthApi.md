# TangentialAuthApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tangentialLogin**](#tangentiallogin) | **POST** /tan/login | Log-in to the Tangential system|
|[**tangentialLogout**](#tangentiallogout) | **POST** /tan/logout | Invalidate the current maintainer\&#39;s session|
|[**tangentialWhoAmI**](#tangentialwhoami) | **GET** /tan/whoami | Return the current maintainer\&#39;s basic info|
|[**updateProfileDetails**](#updateprofiledetails) | **PUT** /tan/profile | Update profile details in the system|

# **tangentialLogin**
> TangentialSessionResponse tangentialLogin(tangentialLoginRequest)


### Example

```typescript
import {
    TangentialAuthApi,
    Configuration,
    TangentialLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialAuthApi(configuration);

let tangentialLoginRequest: TangentialLoginRequest; //

const { status, data } = await apiInstance.tangentialLogin(
    tangentialLoginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tangentialLoginRequest** | **TangentialLoginRequest**|  | |


### Return type

**TangentialSessionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Log-in successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tangentialLogout**
> tangentialLogout()


### Example

```typescript
import {
    TangentialAuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialAuthApi(configuration);

const { status, data } = await apiInstance.tangentialLogout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logged out |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tangentialWhoAmI**
> BasicMaintainerResponse tangentialWhoAmI()


### Example

```typescript
import {
    TangentialAuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialAuthApi(configuration);

const { status, data } = await apiInstance.tangentialWhoAmI();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BasicMaintainerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Basic maintainer details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProfileDetails**
> updateProfileDetails(accountUpdateRequest)


### Example

```typescript
import {
    TangentialAuthApi,
    Configuration,
    AccountUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TangentialAuthApi(configuration);

let accountUpdateRequest: AccountUpdateRequest; //

const { status, data } = await apiInstance.updateProfileDetails(
    accountUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUpdateRequest** | **AccountUpdateRequest**|  | |


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
|**200** | Account info was updates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

