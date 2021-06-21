import cdk = require("@aws-cdk/core");
import ec2 = require("@aws-cdk/aws-ec2");
import lambda = require("@aws-cdk/aws-lambda");
import apigw = require("@aws-cdk/aws-apigateway");

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The resources of your stack goes here

    // VPC
    const vpc = new ec2.Vpc(this, "Vpc", {
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: "Isolated",
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ],
    });

    // Lambda
    const handler = new lambda.Function(this, "Lambda", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: new lambda.AssetCode("resources"),
      handler: "index.hello_world",
      vpc: vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.ISOLATED,
      },
    });

    // Api Gateway
    const apigateway = new apigw.LambdaRestApi(this, "api", {
      handler: handler,
    });
  }
}
