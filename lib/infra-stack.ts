import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
//import * as lambda from 'aws-cdk/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'InfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    //S3 

    const balances3bucket = new s3.Bucket(this,"s3bukgetlogicalid" , {
      bucketName:'balances3bucket0123',
    } )
    
    //IAM
    const iambalances3role = new iam.Role(this,"MyRole" , {
      roleName:'bankinglambdaRole',
      description:'role for s3',
      assumedBy:new iam.ServicePrincipal('lambda.amazonaws.com')
  })
  iambalances3role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'));
}
}
