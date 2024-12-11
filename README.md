## Initial considerations

Some flows were a bit unclear to me, as I noticed the user profile page on the linked Figma file but not how the other pages would relate to that. In a common occasion, I would have asked how the user experience would be (such as how to navigate from view to view) but as I was already a bit late I imagined this would take up even more time. Having that in mind, I took initiative to develop a solution I thought it would be suitable.

Finally, because of the time estipulated I couldn't finish all requirements listed on the assessment, so you might find some missing details that were asked specially related to launches.

## Known issues

- When clicking `Sign out`, the page gets correctly redirected but the dropdown doesn't close. This is a Flowbite behaviour that I didn't spend too much time fixing, as the plugin is more of a helper for this assessment
- The `Starlink` list is separated by tabs, but they do not work properly when navigating from other views. After refreshing, it works as intended. I believe it is due to dynamic processing of the items related to each tab that do not get rendered in time, so the Tailwind/Flowbit handling doesn't initialise correctly

## Potential improvements

Due to lack of time, I couldn't write unit tests for the components nor the state management. Ideally, we would also have a HTTP interceptor handling exceptions for all requests, instead of manually doing it for each one. With an interceptor, it would also be possible to add a global loading to increase user experience.

## Project stack

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.
- Styling is done using Tailwind and Flowbite for components behaviour
- State management is based on NgRx

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
