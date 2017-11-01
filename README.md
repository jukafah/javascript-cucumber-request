# javascript-cucumber-request

**Resources**
- [Cucumberjs](https://github.com/cucumber/cucumber-js)
- [Request](https://github.com/request/request)

## macOS

#### Homebrew
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
$ brew doctor
Your system is ready to brew
```

### Node
```
$ brew install node
```

```
$ node --version
v6.3.1
```

### Git
```
$ brew install git
```

```
$ git --version
git version 2.9.2
```

## Windows

### Scoop

**Requirements**
- [PowerShell 3](https://www.microsoft.com/en-us/download/details.aspx?id=34595) must be enabled for user account

```
set-executionpolicy unrestricted -s cu
```

Install
```
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

### Node
```
scoop install nodejs-lts
```

### Git
```
scoop install git
```

## Execution

Clone project, execute commands;

#### Install dependencies
````
$ npm install
````

#### start server and test
````
$ npm test
````
