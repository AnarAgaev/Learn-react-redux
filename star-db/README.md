1. React ничего не знает о работе с сервером - это задача других библиотек

2. Сетевой код нужно изолировать от кода компонентов

3. Если необходимо, нужно трансформировать данные до того, как их полчит компонент, то есть код трансформации данных
   нужно поместить в компонет которые обрабатывает сетевой код
   
4. Нужно обязательно обрабатывать состояния "загрузки" и "ошибки"

5. !Обязательно нужно разделять ответственность компонентов на логику и рендеринг