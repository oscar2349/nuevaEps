#!/bin/bash
yum update -y
yum install -y docker git
service docker start
usermod -a -G docker ec2-user
chkconfig docker on
git clone https://github.com/tu-usuario/tu-repo.git /home/ec2-user/app
cd /home/ec2-user/app
docker-compose up -d
