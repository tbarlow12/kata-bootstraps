# Dependency Injection Kata

We will be working on dependency injection today.
Open `DependencyInjection.sln` to get started

## Challenge 1

It's 3 A.M.
You're sleeping soundly while Netflix asks you if you're still watching Friends.
Your phone starts buzzing.
The feature you pushed to your team's News & Weather Service is broken!
You immediately open App Insights and see this error message over and over:

```
InvalidOperationException: Unable to resolve service for type 'DependencyInjection.Models.IWeatherForecastService' while attempting to activate 'DependencyInjection.Controllers.WeatherForecastController'.
```

Your team is depending on you.
Find the bug and squash it into oblivion.

### Hints

Take a look at `WeatherForecastController.cs`, `WeatherForecastService.cs` and `Startup.cs`

## Challenge 2

It's the week after.
You fixed the bug, saved the company millions in potentially lost revenue and feeling great.
You get assigned another feature on the backlog - implementing a dynamically sourced news broadcast endpoint.
Your endpoint will pull news stories from top news APIs and deliver it to your customers.
You will start by pulling top stories from CNN and ESPN.
You're told that each request will have a header `Source`, which will contain either `cnn` or `espn`.
Your feature, should you choose to accept it, will dynamically instantiate the appropriate `INewsService` based on that header and add it to the dependency injection.
And remember... the source will change *for every request*, and you need to be *sure* you are instantiating the correct news provider each time.

### Hints

Take a look at `NewsController.cs`, `Services/News/*.cs` and `Startup.cs`
