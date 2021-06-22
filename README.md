# CDK (Cloud Development Kit) Example
Workshop to build a HTTP App with CDK

# Why Infrastructure as code is Awesome
- **Scalability** -  Write it once and then reuse it many times. Deploy globally and replicate horizontally, etc.
- **Change Management** - Gives more complete visibility of configuration changes. Ability to rollback to a previous states.
- **Automation** - Gives us the ability to automate setup and configuration tasks in a reproducible way.
- **Security & Best Practices** - Gives us the ability to define a secure architecture following best practices once and
re-use multiple times.
- **Abstraction** - With advancements like CDK  we have the ability to abstract common infrastructure patterns in an easily
reproducible fashion. Allowing application developers to focus more directly on meeting their customer needs and less
on infrastructure details.

# What is CDK?
The AWS CDK is a new software development framework from AWS with the sole purpose of making it fun and easy to define cloud infrastructure in your favorite programming language and deploy it using AWS CloudFormation.

## Advantages of using CDK:
- Higher level abstraction
- Easy to share
- All the benefits of CloudFormation
- Available in a variety of languages - JavaScript, TypeScript, Python. Java and C# are coming soon

## Definitions
1. **App** - A collection of related stacks.
2. **Stack** - The set of AWS resources that are created and managed as a single unit when AWS CloudFormation instantiates a template
3. **Construct** - Everything defined in the CDK is a Construct. It can be thought of as a re-usable "Cloud Component"
representing anything from a single AWS resource to architectures of arbitrary complexity.


Your users will be able to make an HTTP request that will hit an API Gateway and than call your little Lambda. Your lambda will read the path from the URL and will return that to the user. At the end of this course you'll be able to make HTTP request to your service by opening the browser and typing the URL of the API Gateway. 


## What is a VPC?
VPC stands for Virtual Cloud Private Cloud. The easiest way to describe a VPC is as your own private data center within the AWS infrastructure. You get to decide the network addresses that you will use throughout your infrastructure. Since this is your network, you can decide to slice it up any way you prefer.
Look at the terminal with the watch command and notice the errors. You need to install the ec2 library:
npm install @aws-cdk/aws-ec2

## What is an API Gateway
Now that we have a Lambda inside our Private Subnets we need to allow HTTP traffic to it. API Gateway is an AWS Service that allows you to do that. An HTTP request from a user arrives to the API Gateway and goes to your Lambda.



