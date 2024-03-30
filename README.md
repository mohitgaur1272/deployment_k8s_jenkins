# deployment_k8s_jenkins


## 1.) AWS IAM User Setup:

Before adding credentials to Jenkins, ensure you have an IAM user in AWS with the necessary permissions to interact with ECR. 
This user should have permissions to perform actions like
ecr:GetAuthorizationToken,
ecr:BatchCheckLayerAvailability, 
ecr:GetDownloadUrlForLayer, 
ecr:BatchGetImage, 
ecr:InitiateLayerUpload,
ecr:UploadLayerPart,
ecr:CompleteLayerUpload,
ecr:PutImage.


## 2.) Add AWS Credentials to Jenkins:

Go to your Jenkins dashboard.
Click on "Manage Jenkins" in the left-hand menu.
Select "Manage Credentials".
Click on "(global)" or the specific domain where you want to store the credential.
Click on "Add Credentials" from the left-hand side.
Choose "AWS Credentials" as the kind of credential.
Fill in the AWS Access Key ID and AWS Secret Access Key of your IAM user.
Optionally, you can provide an ID and description for the credential.
Click "OK" to save the credential.

## 3.) Modify Your Jenkinsfile:

Replace 'aws-access-key-id' and 'aws-secret-access-key' with the IDs you provided while adding the AWS credentials to Jenkins.
Ensure 'your-aws-region' is replaced with your actual AWS region.
Update 'your-ecr-repo-url' with the URL of your ECR repository.
Replace other placeholders like your-docker-image, your-namespace, your-service-name, your-deployment-name, and your-container-name with your actual values.
Once you've added the AWS credentials in Jenkins and updated your Jenkinsfile accordingly, your pipeline should be able to authenticate with AWS and push your Docker image to ECR successfully.






