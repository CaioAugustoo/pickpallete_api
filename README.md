# Pickpallete API

Continuação do [antigo projeto](https://github.com/CaioAugustoo/pickpallet_api), feito em PHP.

-------    
## Tecnologias/ferramentas e bibliotecas utilizadas
- Node
- Express
- TypeScript
- MySQL
- Sentry
- New Relic
- Joi
- express-rate-limit
- dotenv
- cors
- Prometheus
- Grafana

...

[Confira todas](https://github.com/CaioAugustoo/pickpallete_api/blob/master/package.json#L14)

---

## Documentação


#### Observação:

Não é necessário o uso de Auth Tokens para essa API. Caso você opte por tentar utilizar esta em produção, você deve clonar esse repositório e realizar o deploy por conta própria.

Por questões de seguranças, a API oficial que está em produção atualmente utiliza do HTTP Header "api-key" em todas as requisições. Esta opção é desabilitada caso **NODE_ENV** contenha o valor de "development" no arquivo **.env** (desabilitará caso esteja em um ambiente de desenvolvimento).  

No mais, você pode conferir a documentação de cada endpoint abaixo.

----

#### Retorna todas as paletas. Por padrão, são exibidas apenas [20 paletas por cada página](https://github.com/CaioAugustoo/pickpallete_api/blob/master/src/utils/pagination/index.ts#L1).

```
  GET /palletes?page=5
```

| Parâmetro   | Tipo       | Descrição                           | Valor padrão
| :---------- | :--------- | :---------------------------------- | :---------
| `page`      | `number`   | **Opcional**. Página para consulta  | 1

Caso não seja passado tal parâmetro, então é usado do número **1** como padrão.

Exemplo de retorno: 
```javascript
{
	"ok": true,
	"error": null,
	"message": null,
	"data": [
	{
	  "id": "a903be72-081b-4bae-baab-99af851023dc",
	  "created_at": "2022-10-07T23:27:47.263Z",
	  "color1": "#2192FF",
	  "color2": "#38E54D",
	  "color3": "#9CFF2E",
	  "color4": "#FDFF00"
	},
	{
	  "id": "aa65f940-0eac-4c03-ae5e-83b90367ba5c",
	  "created_at": "2022-10-07T23:27:47.136Z",
	  "color1": "#2192FF",
	  "color2": "#38E54D",
	  "color3": "#9CFF2E",
	  "color4": "#FDFF00"
	},
	{
	  "id": "d857ebdb-f038-4bb6-83ca-a1dc5965987f",
	  "created_at": "2022-10-07T23:27:46.906Z",
	  "color1": "#2192FF",
	  "color2": "#38E54D",
	  "color3": "#9CFF2E",
	  "color4": "#FDFF00"
	},
	{
	  "id": "e8f40ece-96f3-4d4f-a04f-a2e2cd560872",
	  "created_at": "2022-10-07T23:27:46.765Z",
	  "color1": "#2192FF",
	  "color2": "#38E54D",
	  "color3": "#9CFF2E",
	  "color4": "#FDFF00"
	}
    ]
}
```

-----------

#### Retorna uma paleta específica.


```
  GET /pallete/c0852b30-ce5f-40d3-be04-0b5c63c661f4
```

| Parâmetro   | Tipo       | Descrição                                   | Valor padrão
| :---------- | :--------- | :------------------------------------------ |:-- 
| `id`      | `string` | **Obrigatório**. ID da paleta a ser buscada | -

Exemplo de retorno:
```javascript
{
	"ok": true,
	"error": null,
	"message": null,
	"data": {
		"id": "a903be72-081b-4bae-baab-99af851023dc",
		"created_at": "2022-10-07T23:27:47.263Z",
		"color1": "#2192FF",
		"color2": "#38E54D",
		"color3": "#9CFF2E",
		"color4": "#FDFF00"
	}
}
```

-----------

#### Cria uma paleta.

```
    POST /pallete
```

Por se tratar de uma requisição de método **POST** é necessário o envio do body como JSON com as quatro cores da paleta.

| Propriedade   | Tipo       | Descrição                                   | Valor padrão
| :---------- | :--------- | :------------------------------------------ |:-- 
| `color1`      | `string` | **Obrigatório**. Cor 1 da paleta | -
| `color2`      | `string` | **Obrigatório**. Cor 2 da paleta | -
| `color3`      | `string` | **Obrigatório**. Cor 3 da paleta | -
| `color4`      | `string` | **Obrigatório**. Cor 4 da paleta | -

#### Observação: cada campo é validado seguindo um formato de cor hexadecimal. Caso não seja informado no formato de hexadecimal um erro será exibido. [Confira o método de validação](https://github.com/CaioAugustoo/pickpallete_api/blob/master/src/validations/schemas/palletes.ts).

Exemplo de JSON **CORRETO**:

```javascript
{
   "color1":"#2192FF",
   "color2":"#38E54D",
   "color3":"#9CFF2E",
   "color4":"#FDFF00"
}
```

Exemplo de JSON **INCORRETO**:

```javascript
{
   "color1":"white", // <= Não é uma cor hexadecimal
   "color2":"#38E54D",
   "color3":"#9CFF2E",
   "color4":"#FDFF00"
}
```

Exemplo de requisição caso o JSON esteja **INCORRETO**:

```javascript
{
   "ok": false,
   "error": true,
   "message": "\"color1\" with value \"white\" fails to match the required pattern: /^#(?:[0-9a-fA-F]{3}){1,2}$/",
   "data": null
}
```

Exemplo de requisição bem sucedida (caso não possua nenhum erro):

```javascript
{
    "ok": true,
    "error": null,
    "message": null,
    "data": {
	"id": "98372b22-4b2e-4b18-b907-37f4b2fa24f2",
	"created_at": "2022-10-07T23:55:13.564Z",
	"color1": "#FFFFFF",
	"color2": "#38E54D",
	"color3": "#9CFF2E",
	"color4": "#FDFF00"
    }
}
```

----

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```
PORT
API_KEY
NODE_ENV

DATABASE_URL
DB_USER
DB_PASS
DB_NAME
SENTRY_DSN_TKOEN
SENTRY_TRACE_RATE
CORS_ORIGIN
NEW_RELIC_APP_NAME
NEW_RELIC_LICENSE_KEY
```

[Confira um arquivo de exemplo](https://github.com/CaioAugustoo/pickpallete_api/blob/master/.env.example)

----

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/CaioAugustoo/pickpallete_api
```

Entre no diretório do projeto

```bash
  cd pickpallete_api
```

Instale as dependências

```bash
  yarn install
```

Inicie os containers

```bash
docker-compose up -d
```

Inicie o servidor

```bash
  yarn dev
```

Ao subir os containers, serão utilizadas quatro portas:
- 9090: Prometheus
- 3306: Banco de dados MySQL
- 3000: Grafana

----

## Roadmap

- Adicionar testes automatizados, unitários, etc.
- Traduzir erros
- Uso de cache

-----

## Contribuições

Caso você possua uma sugestão ou algo a melhorar, por favor não hesite em enviar uma pull request ou abrir uma issue.

Contribuições são bem-vindas!

-----

## Autores

- [@caioaugustoo](https://github.com/CaioAugustoo)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

