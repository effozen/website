pipeline {
    agent {
        docker {
            image 'node:latest' // 최신 Node.js가 포함된 Docker 이미지 사용
            args '-u root:root' // 루트 사용자로 실행
        }
    }

    environment {
        DOCKER_IMAGE = 'website'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/effozen/website.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}:${env.DOCKER_TAG}")
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // 기존 컨테이너를 중지하고 제거
                    sh 'docker rm -f react-app || true'
                    // 새 컨테이너를 실행
                    sh 'docker run -d -p 80:80 --name react-app -v $WORKSPACE/build:/usr/share/nginx/html nginx'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
