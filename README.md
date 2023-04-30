# Job-portal-Microservices
A job portal made up with MERN stack

## Architecture
![Architecture](https://user-images.githubusercontent.com/109226401/235358333-35058635-746b-47e0-aadd-790cdcf3642a.png)
## App Connection
![App_Connection](https://user-images.githubusercontent.com/109226401/235358460-7405f2b5-41f5-4ad1-9dc5-dd9ca81b1f60.png)
## Database Design
![careerconnectNew_page-0001](https://user-images.githubusercontent.com/109226401/235361609-f2057e43-1411-4ff4-bd35-89b282ba3542.jpg)


1. Install Ingress Nginx for handling routes to Kubernetes pods 

    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml

    By running this command, you are installing the Ingress Nginx controller on your Kubernetes cluster to enable ingress routing.

2. crearte all kubernetees secrets for properly working this app

