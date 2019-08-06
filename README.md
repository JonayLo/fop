# Getting Started

## Backend

For the backend, we are going to work with `serverless framework`. If you don't have it installed, follow [this guide](https://serverless.com/framework/docs/providers/aws/guide/installation/) to install it and configure it    


First of all we need to install the plugin **serverless-webpack**:

``npm install --save serverless-webpack``

then we just have to deploy the stack with the serverless framework

````sls deploy -v````

and that's all!

If you want to remove it do

```sls remove```

## Frontend

Install all the dependencies with **npm**

``npm install``

Install Ionic

``npm install -g ionic``

Install Cordova

``npm install -g cordova``

*Note: we need the global installation for ionic and cordova

Run the application in a browser

``ionic cordova run browser``