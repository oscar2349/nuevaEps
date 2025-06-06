variable "region" {}
variable "key_name" {}
variable "bucket_name" {}
variable "instance_type" {}
variable "ami_id" {}

provider "aws" {
  region = var.region
}

resource "aws_security_group" "ec2_sg" {
  name        = "microservices_sg"
  description = "Allow ports for app"

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 65535
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "microservices_ec2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install docker -y
              service docker start
              usermod -a -G docker ec2-user
              curl -sL https://rpm.nodesource.com/setup_18.x | bash -
              yum install -y nodejs
              curl -L "https://github.com/docker/compose/releases/download/v2.23.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
              chmod +x /usr/local/bin/docker-compose
              mkdir -p /home/ec2-user/app
              # Aquí puedes añadir el comando para copiar tu app (opcional)
              cd /home/ec2-user/app
              docker-compose up -d --build
            EOF

  vpc_security_group_ids = [aws_security_group.ec2_sg.id]

  tags = {
    Name = "microservices-app"
  }
}

resource "aws_s3_bucket" "app_bucket" {
  bucket        = var.bucket_name
  force_destroy = true
}
