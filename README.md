# 1. To generate a new Angular project with a custom prefix like abc

``` bash
    ng new aic-angular-app --prefix=aic
```

* Sets SCSS as the default stylesheet format (you can use css, sass, or less).

* --routing=true → Automatically generates a AppRoutingModule for navigation.

* --strict=true → Enables strict TypeScript checks for better code quality.

* --standalone=false → Keeps the traditional NgModule structure (set true if you prefer standalone components).

* --skip-tests=true → Skip generating test files if you don’t need them.

* --skip-install=true → Create the project but don’t run npm install yet.

* --inline-style=true → Put styles directly inside component files.

* --inline-template=true → Put templates directly inside component files.

## 2.  To open

``` bash
    ng serve --o --watch
```
