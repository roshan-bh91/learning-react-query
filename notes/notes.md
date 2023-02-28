## On the react query dev tools:

`Fresh`: This state is when we have the almost same data on both sides (since when we received data, possible that someone is updated at the same time) and there is no need to refetch it.

`Fetching`: When we initially fetch the data successfully or not.

`Stale`: Out of date data which we will need to re-fetch from the backend.

`Inactive`: This state is used to improve the speed/UX of our applications. It is previous to the deleted state.

The last state is the deleted state. After the data is inactive for a while (you can configure the time) it deletes from the cache.

After understanding the state of the queries we can explain the stale time and cache time. StaleTime is the duration of the transition from a fresh to a stale state. If we are in the fresh state we will get the data from the cache only, but if we are in the stale state we may do a background fetch. cache Time is the duration until inactive queries will be removed from the cache.

Default value of `staleTime`: 0 seconds (can reduce the number of network requests )
Default value of `cacheTime`: 5 minutes

Some more parameters that can be introduced in the third object like argument of useQuery:

1. `refetchOnMount`: default value is `true`. Other values you can set it are : `false` or `always`. As the name suggests whenever the component is mounted into view, this property decides to send a refetch request for data in the background.
2. `refetchOnWindowFocus`: default value is `true`. Other values you can set it are : `false` or `always`. Now when the tab gets out of focus and comes back again in focus a network request is put again.

## Polling of data:

Polling refers to the process of fetching data at regular component
Examples: Component displaying Realtime stocks data that changes quite frequently.

So to enable this feature, two properties can be used in the third object argument of `useQuery`:
-> refetchInterval: for doing refetch requests based on the value we pass within this property. If the tab gets out of focus,
refetching gets paused
-> refetchIntervalInBackground: to continue sending refetch requests after certain intervals even when the tab goes out of focus background

## Executing query on events:

So in certain situations for a component, we do not want the useQuery to run as soon as the component is mounted into view or gets into focus.
So it has 3 steps:

- first set the config `enabled` to false. This informs useQuery that we are not running the useQuery on mount
- Now take another destructured property called as `refetch` on left side of useQuery that will help us in executing the useQuery on certain event


## Side effects after the API query gets done:
- React query allows you to attach onSuccess and onError parameters in the third argument. Once the query gets done based on whether it gets executed successfully or results in an error, then these callbacks will be executed.

- These callbacks also take the results within themselves that are returned after the end of the query

## Data transformation:
Data returned from the API response can be transformed into a specific part using the `select` config that can be passed into the third object like argument of useQuery. this select option takes the overall api response and returns the modified part. there is the need of mentioning the response on the spot of definition and writing the function

## Custom query hook:
For rewriting the logic of custom 