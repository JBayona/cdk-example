import cdk = require("@aws-cdk/core");
import ec2 = require("@aws-cdk/aws-ec2");

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
  }
}
