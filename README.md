# turbo-rails-tutorial

Hotwire tutorial from https://www.hotrails.dev/.

The application is containerized. Just run:

```
docker compose build
docker compose up
```

and everything should be working.

The application has system tests; that's what the `chrome-server` service is for.
You can check the tests running with:

```
docker compose up chrome-server -d 
# Log in localhost:7900 with password 'secret'
docker compose run web bin/rails test:system
```