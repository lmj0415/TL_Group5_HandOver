![Logo of the project](https://raw.githubusercontent.com/LasseJantsch/TL_Group5_HandOver/main/client/public/logo_93x96.png)

# Hand Over
> TechLabs project

‘Hand Over’ is a fictive social project to enrich our society – a mobile optimized Website specifically designed to raise awareness and to inform about how the concept of ‘Hand Over’ works and how one can participate.


## Getting started

1. Environment variable

    Create a __.env__ file in the __/server__ directory with the following content:

    ```
    MONGODB=
    PORT=
    ```

    You can get the values for _MONGODB_ and _PORT_ from the team members discreetly.

2. npm install

    ```shell
    $ npm install
    $ cd server
    $ npm install
    $ cd ..
    $ cd client
    $ npm install
    ```


## Start project

Due to  additional package.json in the root directiory you can simply run

```shell
$ npm run dev
```

and frontend and backend will be started simultaneously.

The Website should open in your browser automatically. Else, you can simply got to _http://localhost:3000_.


## Project structure

The frontend consists of two parts. The mobile first-orientated SPA with all public data and the desktop-orientated CMS you can find under _http://localhost:3000/cms_.
For viewing the SPA we recomend using IPhone 6/7/8 iOS 11 beceause our focus on the prototype wasn't to get the website full responsive.


## Contributors

- Nadine Chabrié

    Techi
    WebDev: Frontend \
    [LinkedIn Profile](https://de.linkedin.com/in/nadine-chabri%C3%A9-8758b9146)

- Lasse Jantsch

    Techi
    WebDev: Back- & Frontend \
    [LinkedIn Profile](https://www.linkedin.com/in/lasse-jantsch)

- Marian P. Gajda

    Mentor
    Web-/App-Developer, Teacher \
    [LinkedIn Profile](https://www.linkedin.com/in/marian-piotr-gajda-b0925b21b/)

## Licensing

The code in this project is licensed under MIT license.