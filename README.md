## 🤔 Why Amazon ECR?

Amazon ECR is used to store Docker images securely.

Why ECR?

- Native integration with Amazon ECS
- Private and secure image registry
- Easy image versioning using tags
- No need to manage a separate Docker registry

Workflow:

Docker Build → ECR → ECS

---

## 🤔 Why Amazon ECS Fargate?

ECS Fargate allows running containers without managing servers.

Benefits:

- No EC2 management
- No OS patching
- No Docker installation on servers
- AWS manages the infrastructure

Focus on application, not servers.

---

## 🤔 Why ECS Instead of Kubernetes?

For a single application deployment, Kubernetes would be overkill.

Reasons for choosing ECS:

- Faster setup
- Easier management
- Lower operational overhead
- Native AWS integration
- Ideal for small to medium workloads

Kubernetes is powerful but requires managing:

- Cluster
- Nodes
- Networking
- Ingress
- Additional configurations

For this project, ECS was the simpler and more practical choice.

---

## 🐛 Challenges Faced

### ECR Repository Issue
- Repository name mismatch
- Fixed by creating the correct ECR repository

### Task Definition Issue
- Task definition file was missing
- Exported and added JSON file to repository

### Container Name Mismatch
- GitHub Actions container name didn't match ECS task definition
- Updated container name in workflow

### ECS Service Issue
- Deployment failed because service didn't exist
- Created ECS service and redeployed

### SNS Notification Setup
- Configured SNS Topic and Email Subscription
- Added deployment success notification after ECS deployment
