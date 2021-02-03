# React Repository Listing App

I used create react app to get started with this test.
You can view my commit history here: https://github.com/ManeeshChiba/repository-list

I added `node-sass` since I find the style nesting useful. I also chose to use `css-modules` to avoid class name pollution.
### Breaks
Taking a break for dinner 20h00
Returned from break 21h00

### Tests
 I ran into rate limiting issues with the Github API. I caused a run away loop by mistakingly mutating state inside a useEffect which cost me some time and I was only able to add one test to the card component.