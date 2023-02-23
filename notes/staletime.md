## On the react query dev tools:
`Fresh`: This state is when we have the almost same data on both sides (since when we received data, possible that someone is updated at the same time) and there is no need to refetch it.

`Fetching`: When we initially fetch the data successfully or not.

`Stale`: Out of date data which we will need to re-fetch from the backend.

`Inactive`: This state is used to improve the speed/UX of our applications. It is previous to the deleted state.

The last state is the deleted state. After the data is inactive for a while (you can configure the time) it deletes from the cache.


After understanding the state of the queries we can explain the stale time and cache time. StaleTime is the duration of the transition from a fresh to a stale state. If we are in the fresh state we will get the data from the cache only, but if we are in the stale state we may do a background fetch. cache Time is the duration until inactive queries will be removed from the cache.


Default value of `staleTime`: 0 seconds (can reduce the number of network requests )
Default value of `cacheTime`: 5 minutes
