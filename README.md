# Blog

### Frontend:
```
NodeJs - 16.17.1 LTS

Interfejs wizualny jest zbudowany z css freamworkiem: Tailwind css
https://tailwindcss.com/

Komponenty używane z TailwindUI
https://tailwindui.com/components


Używane biblioteki: 
- Vuex (To jest analog Redux z React Js)
- Router 
- moment
- @heroicons
- @headlessui/vue
- chenfengyuan/vue-countdown


Opis Projektu - Frontend opiszę w tym pliku

src:
    - api: (Folder zawiera pliki [post.js, comment.js], w którym działa z żądaniami do zaplecza, aby tworzyć, odbierać, usuwać)
    - components: (Zawiera komponenty, niektóre wielokrotnego użytku, inne tylko dla wygody, takie jak AppFooter)
    - router: (Zarządzanie stronami)
    - store: (Zawiera główny plik, który opisuje stany zarządzania oknem modalnym i jego mutacje)
            - modules: ()
                    -post.js (Zawiera actions do tworzenia, usuwania, pobierania i ich mutacje, states for editMode)
                    -comment.js (Zawiera actions do tworzenia, usuwania, pobierania i ich mutacje, states for editMode)
    -views: (Zawiera strony projektu)
    App.vue ()
    main.js ()
    ../tailwind.config.js (konfiguracja Tailwind css)
    
Używane Vuex dla wygodniejszej pracy z danymi
To było znajome, bo pracowałem ngRX (redux dla Angular)

w modułach @/store/modules, zawierają pliki [post.js, comment.js] w których występują stany z artykułami lub komentarzami,
 mutacje, zdarzenia dostępu () z następną mutacją tych danych do przyszłego wyświetlania,
  wywołujemy również mutacje do wyświetlania powiadomień
```



### Project setup

Backend (Django): 

```
pip install django
```

```
pip install django-cors-headers
```
```
pip install djangorestframework
```



Frontend (VueJs)
```
npm install
```

```
npm install yarn 
```

```
[npm install yarn] - bez tego się nie zacznie
Jest to konieczne, ponieważ zainstalowałem kilka pakietów z Yarn
```
Compiles and hot-reloads for development
```
npm run serve


App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.0.193:8080/

W CORS (w djngo) dodano tylko - Local: http://localhost:8080/

Nie będzie działać na lokalnym adresie sieć domowa
```





Compiles and minifies for production
```
npm run build
```

Lints and fixes files
```
npm run lint
```