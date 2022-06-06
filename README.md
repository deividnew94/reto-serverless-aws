# reto-serverless-aws



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/reto-serverless-aws/reto-serverless-aws.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Serverless](https://gitlab.com/reto-serverless-aws/reto-serverless-aws/-/settings/integrations)
- [ ] [AWS Lambda](https://gitlab.com/reto-serverless-aws/reto-serverless-aws/-/settings/integrations)
- [ ] [Mysql](https://gitlab.com/reto-serverless-aws/reto-serverless-aws/-/settings/integrations)
- [ ] [Nodejs14.x](https://gitlab.com/reto-serverless-aws/reto-serverless-aws/-/settings/integrations)
- [ ] [Express.js](https://gitlab.com/reto-serverless-aws/reto-serverless-aws/-/settings/integrations)


## Test and Deploy

- Para testear de manera local con serverless

> serverless offline start

- Para tester de manera local con express

> node local.js

- Para deploy de cambios

> serverless deploy

***

## Name
Integracion Serverless - AWS Lambda con MySQL

## Description
La integracion entre serverless, AWS Lambda, Express, Nodejs y MySQL, tiene un impacto tecnologico,
sobre todo en que estas tecnologias se puedan integrar, facilita el proceso de deploy del código,
acelera que se pueda ver reflejado los cambios en el lambda y cualquiera pueda utilizar esos recursos.

## Installation

- npm init
> npm init -y
- express
> npm i express
- aws-serverless-express
> npm i aws-serverless-express
- mysql2
> npm i --save mysql2
- dotenv
> npm i dotenv

- serverless
> npm i -g serverless
- serverless-offline
> serverless plugin install -n serverless-offline
- serverless version
> serverless ?version
- integration serverless - aws
> serverless config credentials -o  --provider aws --key ${aws_key} --secret ${aws_secret_key}
- Test serverless endpoints
> serverless offline start
- upload changes
> serverless deploy


## Roadmap
Implementar integracion continua o CI / CD para mejorar la actualización del codigo en el repositorio de Git y en el Lambda

## License
MIT

