# Job-portal-Microservices
>A job portal named [careerconnect](https://www.careerconnect.cloud/) built with the MERN stack (MongoDB, Express, React, Node.js).


## Features
-  Employers can post jobs, review resumes, and can add skill test to find the best talents.
-  This project is designed and developed with scalability & maintainability in mind.
-  It is following a Microservice Architecture which is stateless with an asynchronous message queue 
   system that is setup using NATS streaming.
-  The whole app is split into 5 services namely Authentication, Profiles, Jobs, Skill-test, Admin.
-  The project is containerized using docker and orchestrated using Kubernetes.
-  Deployment is done using Digital Ocean-Kubernetes-cluster and a CD pipeline setup using GitHub 
   Actions.



## Architecture
It is following a Microservice Architecture which is stateless with an asynchronous message queue system that is setup using NATS streaming. 
The whole project divided into 5 services 

### Application Features and Microservices List:

- Auth service - Authenticating users (admin, candidate, recruiter) using JWT.
- Profiles service  - To manage profile details of both candidate and recruiters.
- Job service - Managing job listing, application, and other jobs related services.
- Skill test service - Recruiters can upload MCQ and skill test service is responsible for taking time based online test and   evaluate the test result and send to the job service
- Admin service - Admin can monitor and manage candidates and recruiters.


![Architecture](https://user-images.githubusercontent.com/109226401/235358333-35058635-746b-47e0-aadd-790cdcf3642a.png)

## App Connection
![App_Connection](https://user-images.githubusercontent.com/109226401/235358460-7405f2b5-41f5-4ad1-9dc5-dd9ca81b1f60.png)
## Database Design
![careerconnectNew_page-0001](https://user-images.githubusercontent.com/109226401/235361609-f2057e43-1411-4ff4-bd35-89b282ba3542.jpg)






## Technologies Used

|   Stack      | Technology Used| Hosting       |
|     :---:    |     :---:      |     :---:     |
| Frontend     | React with Redux     | 2 AWS EC2 Instances    |
| Backend      | Node js       | 3 AWS EC2 Instances      |
| Messaging/Queue     | Kafka       | 4 AWS EC2 Instances      |
| Database     | MySQL       | AWS RDS      |
|      | GraphDB       | Graphstory      |
|      | MongoDB       | 3 AWS Replicas      |
|      | S3 Bucket       | AWS S3 Bucket      |




- Desktop view

![Desktop](https://user-images.githubusercontent.com/89038416/230982745-b2a1c526-3cfa-4dd4-9564-22ca510407e5.png)

- Mobile view

<p align="center">
<img src="https://user-images.githubusercontent.com/89038416/230982963-a7dfa8a2-349e-4c45-9b7b-0f071836459d.png" width="300px" />
<img width="100px src="" />
<img src="https://user-images.githubusercontent.com/89038416/230983254-7da0acb1-e927-4f75-876d-313549e8ddca.png" width="300px" />
</p>

