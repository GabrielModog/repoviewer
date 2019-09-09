Have fun with hooks and github api.

### Running the application ###
Open the folder on the terminal and write `npm start`.
And you need to have NodeJS installed on your machine before do that.

Explore by changing `{username}` on the request and you be able to see the repositories of the user.

```javascript
const response = await fetch('https://api.github.com/users/{username}/repos');
```

### Plans ###
I want keep it simple as possible - of course.

- save the fave information on json object.
- design an UI.
